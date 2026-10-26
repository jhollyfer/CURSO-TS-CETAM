// CORRECAO AUTOMATICA DA PROVA 1 - FICHA DO FUNCIONARIO
// Para rodar: tsx ~/CURSO-TS-CETAM/prova-1.spec.ts
// Para corrigir outro arquivo: tsx ~/CURSO-TS-CETAM/prova-1.spec.ts caminho/do/arquivo.ts
//
// Como funciona: o spec roda o prova-1.ts do aluno, pega o valor final de cada
// variavel pedida na prova e confere tambem o codigo-fonte (let/const, tipos,
// crase, aspas simples...). Cada questao vale 1 ponto, dividido entre as checagens.

import { spawnSync } from "node:child_process"
import * as fs from "node:fs"
import * as os from "node:os"
import * as path from "node:path"

const pastaDoSpec = path.dirname(path.resolve(process.argv[1]))
const arquivoAluno = path.resolve(process.argv[2] ?? path.join(pastaDoSpec, "prova-1.ts"))

if (!fs.existsSync(arquivoAluno)) {
  console.log(`Arquivo nao encontrado: ${arquivoAluno}`)
  process.exit(1)
}

// todas as variaveis que a prova manda criar
const NOMES = [
  "nomeFuncionario", "faltas", "META_VENDAS", "vendas1", "vendas2", "vendasTexto",
  "totalDias",
  "nome", "nomeMaiusculo", "tamanhoNome",
  "partes", "iniciais",
  "temMendes", "posicaoMendes", "nomeTrocado",
  "vendas3", "media", "mediaArredondada", "maiorVenda",
  "bateuMeta", "numeroCracha", "cracha",
  "diasTrabalhados", "restoDivisao", "diferencaVendas",
  "linha", "fichaLinha1", "fichaLinha2", "mensagemFinal",
]

// RODANDO O CODIGO DO ALUNO
// antes do codigo do aluno entra uma linha que, quando o programa termina (mesmo com erro),
// salva num arquivo o valor de cada variavel. Variavel que nao existe fica de fora.
const codigoAluno = fs.readFileSync(arquivoAluno, "utf8")
const pastaTemp = fs.mkdtempSync(path.join(os.tmpdir(), "prova-1-"))
const arquivoValores = path.join(pastaTemp, "valores.json")
const arquivoRodar = path.join(pastaTemp, "prova-1.ts")

const coleta = NOMES.map((n) => `try { __v[${JSON.stringify(n)}] = ${n} } catch {}`).join("; ")
const ganchoDeSaida =
  `process.on("exit", () => { const __v: any = {}; ${coleta}; ` +
  `require("node:fs").writeFileSync(${JSON.stringify(arquivoValores)}, JSON.stringify(__v)) });`

// o gancho entra na mesma linha 1 do aluno, assim o numero das linhas nos erros bate com o arquivo dele
fs.writeFileSync(arquivoRodar, ganchoDeSaida + codigoAluno)

const execucao = spawnSync(process.execPath, [...process.execArgv, arquivoRodar], {
  encoding: "utf8",
  timeout: 10000,
})
const saida = execucao.stdout ?? ""
const erro = (execucao.stderr ?? "").split(arquivoRodar).join(arquivoAluno).trim()

let v: Record<string, any> = {}
if (fs.existsSync(arquivoValores)) {
  v = JSON.parse(fs.readFileSync(arquivoValores, "utf8"))
}
fs.rmSync(pastaTemp, { recursive: true, force: true })

// AJUDANTES PARA OLHAR O CODIGO-FONTE
// "semComentarios" tira as linhas de comentario, pra nao contar codigo que esta comentado
const semComentarios = codigoAluno
  .split("\n")
  .map((l) => l.replace(/\/\/.*$/, ""))
  .join("\n")

const escapar = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

const criadaCom = (tipo: "let" | "const", nome: string) =>
  new RegExp(`\\b${tipo}\\s+${escapar(nome)}\\b`).test(semComentarios)

const vezesCriada = (nome: string) =>
  (semComentarios.match(new RegExp(`\\b(let|const|var)\\s+${escapar(nome)}\\b`, "g")) ?? []).length

const comTipo = (nome: string, tipo: string) =>
  new RegExp(`\\bconst\\s+${escapar(nome)}\\s*:\\s*${tipo}\\s*=`).test(semComentarios)

const valorDaLinha = (nome: string) => {
  const achado = semComentarios.match(new RegExp(`\\b(?:let|const)\\s+${escapar(nome)}[^=]*=\\s*([^\\n]*)`))
  return achado ? achado[1].trim() : ""
}

const mostrou = (texto: string) => saida.includes(texto)

const igual = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b)

// AS QUESTOES
type Checagem = [descricao: string, passou: boolean]
type Questao = { titulo: string; checagens: Checagem[] }

const questoes: Questao[] = [
  {
    titulo: "Criando as variaveis",
    checagens: [
      ["let nomeFuncionario = \"  carlos mendes  \"", criadaCom("let", "nomeFuncionario") && v.nomeFuncionario === "  carlos mendes  "],
      ["let faltas criada", criadaCom("let", "faltas")],
      ["const META_VENDAS: number = 7000", comTipo("META_VENDAS", "number") && v.META_VENDAS === 7000],
      ["const vendas1: number = 6750", comTipo("vendas1", "number") && v.vendas1 === 6750],
      ["const vendas2: number = 8400", comTipo("vendas2", "number") && v.vendas2 === 8400],
      ["const vendasTexto: string = \"9500\"", comTipo("vendasTexto", "string") && v.vendasTexto === "9500"],
    ],
  },
  {
    titulo: "O TypeScript descobre sozinho",
    checagens: [
      ["const totalDias = 22, sem escrever o tipo", /\bconst\s+totalDias\s*=/.test(semComentarios) && v.totalDias === 22],
      ["comentario do lado de totalDias dizendo o tipo (number)", /const\s+totalDias\s*=.*\/\/.*number/i.test(codigoAluno)],
      ["comentario explicando o erro de META_VENDAS = 8000", /\/\/.*\b(const|constante)/i.test(codigoAluno.replace(/\/\/\s*(PROVA|QUESTAO|Para rodar|Escreva)[^\n]*/g, ""))],
      ["META_VENDAS = 8000 nao ficou como codigo de verdade", comTipo("META_VENDAS", "number") && !/\bMETA_VENDAS\s*=\s*\d/.test(semComentarios.replace(/\bconst\s+META_VENDAS[^\n]*/g, ""))],
    ],
  },
  {
    titulo: "Mudando um valor",
    checagens: [
      ["faltas foi criada uma vez so (sem let de novo)", vezesCriada("faltas") === 1],
      ["faltas mudou somando 3", /\bfaltas\s*(\+=\s*3\b|=\s*faltas\s*\+\s*3\b|=\s*3\s*\+\s*faltas\b)/.test(semComentarios)],
      ["faltas terminou valendo 5", v.faltas === 5],
    ],
  },
  {
    titulo: "Arrumando o nome",
    checagens: [
      ["const nome = \"carlos mendes\"", criadaCom("const", "nome") && v.nome === "carlos mendes"],
      ["const nomeMaiusculo = \"CARLOS MENDES\"", criadaCom("const", "nomeMaiusculo") && v.nomeMaiusculo === "CARLOS MENDES"],
      ["const tamanhoNome = 13", criadaCom("const", "tamanhoNome") && v.tamanhoNome === 13],
      ["mostrou o nome em maiusculas", mostrou("CARLOS MENDES")],
    ],
  },
  {
    titulo: "Iniciais",
    checagens: [
      ["const partes = [\"carlos\", \"mendes\"]", criadaCom("const", "partes") && igual(v.partes, ["carlos", "mendes"])],
      ["const iniciais = \"CM\"", criadaCom("const", "iniciais") && v.iniciais === "CM"],
      ["mostrou iniciais", mostrou("CM")],
    ],
  },
  {
    titulo: "Procurando no nome",
    checagens: [
      ["const temMendes = true", criadaCom("const", "temMendes") && v.temMendes === true],
      ["const posicaoMendes = 7", criadaCom("const", "posicaoMendes") && v.posicaoMendes === 7],
      ["const nomeTrocado = \"caio mendes\"", criadaCom("const", "nomeTrocado") && v.nomeTrocado === "caio mendes"],
      ["mostrou nomeTrocado e nome no mesmo console.log", mostrou("caio mendes carlos mendes")],
    ],
  },
  {
    titulo: "Calculando a media de vendas",
    checagens: [
      ["const vendas3 = 9500 (numero, nao texto)", criadaCom("const", "vendas3") && v.vendas3 === 9500],
      ["const media = 8216.66...", criadaCom("const", "media") && typeof v.media === "number" && Math.abs(v.media - 24650 / 3) < 0.001],
      ["const mediaArredondada = 8217", criadaCom("const", "mediaArredondada") && v.mediaArredondada === 8217],
      ["const maiorVenda = 9500", criadaCom("const", "maiorVenda") && v.maiorVenda === 9500],
      ["mostrou mediaArredondada e maiorVenda", mostrou("8217") && mostrou("9500")],
    ],
  },
  {
    titulo: "Meta e cracha",
    checagens: [
      ["const bateuMeta = true", criadaCom("const", "bateuMeta") && v.bateuMeta === true],
      ["bateuMeta sai de uma comparacao (nao escreveu true direto)", /(>=|<=|>|<)/.test(valorDaLinha("bateuMeta")) && !/^(true|false)$/.test(valorDaLinha("bateuMeta"))],
      ["const numeroCracha: inteiro de 0 a 999", criadaCom("const", "numeroCracha") && Number.isInteger(v.numeroCracha) && v.numeroCracha >= 0 && v.numeroCracha <= 999],
      ["numeroCracha usa o sorteio do Math", /Math\.random\s*\(/.test(semComentarios)],
      ["const cracha com 4 digitos", criadaCom("const", "cracha") && typeof v.cracha === "string" && v.cracha === String(v.numeroCracha).padStart(4, "0")],
    ],
  },
  {
    titulo: "Fazendo contas",
    checagens: [
      ["totalDias e faltas nao foram criadas de novo", vezesCriada("totalDias") === 1 && vezesCriada("faltas") === 1],
      ["const diasTrabalhados = 17", criadaCom("const", "diasTrabalhados") && v.diasTrabalhados === 17],
      ["const restoDivisao = 4", criadaCom("const", "restoDivisao") && v.restoDivisao === 4],
      ["const diferencaVendas = 1650", criadaCom("const", "diferencaVendas") && v.diferencaVendas === 1650],
      ["mostrou as tres contas", mostrou("17") && mostrou("4") && mostrou("1650")],
    ],
  },
  {
    titulo: "Mostrando a ficha",
    checagens: [
      ["const linha com 30 sinais de =", criadaCom("const", "linha") && v.linha === "=".repeat(30)],
      ["linha usa repeat", /\.repeat\s*\(/.test(valorDaLinha("linha"))],
      ["fichaLinha1 e fichaLinha2 feitas com crase", valorDaLinha("fichaLinha1").startsWith("`") && valorDaLinha("fichaLinha2").startsWith("`")],
      ["fichaLinha1 certa", criadaCom("const", "fichaLinha1") && v.fichaLinha1 === `Funcionario: CARLOS MENDES (CM) | Cracha: ${v.cracha}`],
      ["fichaLinha2 certa", criadaCom("const", "fichaLinha2") && v.fichaLinha2 === "Media de vendas: 8216.67 | Bateu a meta: true"],
      ["ficha sai das variaveis (nada digitado direto)", /\$\{\s*nomeMaiusculo\s*\}/.test(valorDaLinha("fichaLinha1")) && /\$\{\s*cracha\s*\}/.test(valorDaLinha("fichaLinha1")) && /\$\{[^}]*media[^}]*\}/.test(valorDaLinha("fichaLinha2")) && /\$\{\s*bateuMeta\s*\}/.test(valorDaLinha("fichaLinha2"))],
      ["const mensagemFinal com aspas simples", criadaCom("const", "mensagemFinal") && valorDaLinha("mensagemFinal").startsWith("'") && typeof v.mensagemFinal === "string"],
      ["mostrou linha, as duas linhas da ficha e mensagemFinal", typeof v.fichaLinha1 === "string" && mostrou(v.linha ?? "\u0000") && mostrou(v.fichaLinha1) && mostrou(v.fichaLinha2 ?? "\u0000") && mostrou(v.mensagemFinal ?? "\u0000")],
    ],
  },
]

// RESULTADO
console.log("=".repeat(60))
console.log(`CORRECAO: ${arquivoAluno}`)
console.log("=".repeat(60))

if (execucao.error || execucao.status !== 0) {
  console.log("\n⚠️  O programa do aluno terminou com erro. As variaveis criadas depois do erro ficam sem valor.")
  if (erro) console.log(erro.split("\n").slice(0, 6).join("\n"))
}

let total = 0
questoes.forEach((q, i) => {
  const certas = q.checagens.filter(([, passou]) => passou).length
  const pontos = certas / q.checagens.length
  total += pontos
  console.log(`\nQUESTAO ${i + 1} - ${q.titulo}: ${pontos.toFixed(2)} pt`)
  for (const [descricao, passou] of q.checagens) {
    console.log(`  ${passou ? "✅" : "❌"} ${descricao}`)
  }
})

console.log("\n" + "=".repeat(60))
console.log(`NOTA FINAL: ${total.toFixed(2)} / 10`)
console.log("=".repeat(60))

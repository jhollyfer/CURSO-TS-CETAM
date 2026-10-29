// CORRECAO AUTOMATICA DOS DESAFIOS - BYTE BURGER
// Para rodar: tsx ~/CURSO-TS-CETAM/desafios.spec.ts 1        (corrige o desafio-1.ts)
// Para corrigir outro arquivo: tsx ~/CURSO-TS-CETAM/desafios.spec.ts 1 caminho/do/arquivo.ts
//
// Como funciona: o spec roda o desafio da dupla, pega o valor final de cada
// variavel pedida e confere tambem o codigo-fonte (let/const, tipos, crase,
// operadores, if...). Cada tarefa vale 2 pontos, divididos entre as checagens.

import { spawnSync } from "node:child_process"
import * as fs from "node:fs"
import * as os from "node:os"
import * as path from "node:path"

const numero = process.argv[2]
if (!["1", "2", "3", "4"].includes(numero ?? "")) {
  console.log("Diga qual desafio corrigir. Exemplo: tsx ~/CURSO-TS-CETAM/desafios.spec.ts 1")
  process.exit(1)
}

const pastaDoSpec = path.dirname(path.resolve(process.argv[1]))
const arquivoAluno = path.resolve(process.argv[3] ?? path.join(pastaDoSpec, `desafio-${numero}.ts`))

if (!fs.existsSync(arquivoAluno)) {
  console.log(`Arquivo nao encontrado: ${arquivoAluno}`)
  process.exit(1)
}

// todas as variaveis que cada desafio manda criar (e os dados que ja vem prontos)
const NOMES: Record<string, string[]> = {
  "1": [
    "nomeCliente", "telefone", "LOJA", "ANO_ABERTURA", "clienteNovo",
    "anosDeLoja",
    "nome", "nomeMaiusculo", "partes", "tamanhoNome",
    "primeiroNome", "iniciais", "telefoneFormatado",
    "codigoCliente", "linha", "cartao1", "cartao2",
  ],
  "2": [
    "PRECO_BURGER", "PRECO_BATATA", "precoRefriTexto", "qtdBurger", "qtdBatata", "qtdRefri",
    "precoRefri", "totalBurger", "totalBatata", "totalRefri", "subtotal",
    "itemMaisCaro", "itemMaisBarato", "taxa", "total", "totalTexto",
    "pessoas", "porPessoa", "porPessoaArredondado", "gorjeta", "gorjetaTexto",
    "pagamento", "troco", "trocoTexto", "notasDe5", "numeroPedido", "senha", "resumo",
  ],
  "3": [
    "totalPedido", "qtdBurger", "qtdItens", "diaDaSemana", "cupom", "pagouComPix", "idadeCliente",
    "pontos", "visitas", "estoqueBurger",
    "ehVip", "pedidoGrande", "cupomValido", "ehMenor", "diaPromocao",
    "ganhaBatata", "ganhaDesconto", "participaSorteio", "naoEhVip",
    "painel1", "painel2",
  ],
  "4": [
    "nomeCliente", "subtotal", "ehVip", "cupom", "pagouComPix", "distanciaKm", "horaPedido", "aniversario",
    "desconto", "taxaEntrega", "brindes", "total", "comprovante",
  ],
}

// o que a correcao "digita" quando o programa chama input, em ordem
const ENTRADAS: Record<string, string[]> = {
  "1": ["  maria eduarda lima  ", "92991234567"],
  "2": ["2", "1", "3"],
  "3": [],
  "4": [],
}

// RODANDO O CODIGO DO ALUNO
// antes do codigo do aluno entra uma linha que, quando o programa termina (mesmo com erro),
// salva num arquivo o valor de cada variavel. Variavel que nao existe fica de fora.
const codigoAluno = fs.readFileSync(arquivoAluno, "utf8")
const pastaTemp = fs.mkdtempSync(path.join(os.tmpdir(), `desafio-${numero}-`))
const arquivoValores = path.join(pastaTemp, "valores.json")
const arquivoRodar = path.join(pastaTemp, `desafio-${numero}.ts`)

const coleta = NOMES[numero].map((n) => `try { __v[${JSON.stringify(n)}] = ${n} } catch {}`).join("; ")
const ganchoDeSaida =
  `const __entradas: string[] = ${JSON.stringify(ENTRADAS[numero])}; ` +
  `process.on("exit", () => { const __v: any = {}; ${coleta}; ` +
  `require("node:fs").writeFileSync(${JSON.stringify(arquivoValores)}, JSON.stringify(__v)) });`

// o import do input vira um input de mentira, que responde com as ENTRADAS e mostra a pergunta
// com a resposta, como se alguem tivesse digitado (na mesma linha, pra nao mudar a numeracao)
const inputFalso =
  `const input = (pergunta: string = ""): string => { const r = __entradas.shift() ?? ""; console.log(pergunta + r); return r };`
const codigoParaRodar = codigoAluno.replace(/^[ \t]*import\s*\{\s*input\s*\}\s*from\s*['"][^'"]*input(\.ts)?['"]\s*;?/m, inputFalso)

// o gancho entra na mesma linha 1 do aluno, assim o numero das linhas nos erros bate com o arquivo dele
fs.writeFileSync(arquivoRodar, ganchoDeSaida + codigoParaRodar)

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
// "semComentarios" tira os comentarios, pra nao contar codigo que esta comentado
const semComentarios = codigoAluno
  .split("\n")
  .map((l) => l.replace(/\/\/.*$/, ""))
  .join("\n")

// comentarios escritos pela dupla (os do modelo do arquivo ficam de fora)
const comentariosDaDupla = codigoAluno
  .split("\n")
  .map((l) => (l.match(/\/\/(.*)$/) ?? ["", ""])[1].trim())
  .filter((c) => c && !/^(DESAFIO|Para |Escreva|TAREFA|DADOS DO SISTEMA)/.test(c))

const escapar = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

const criadaCom = (tipo: "let" | "const", nome: string) =>
  new RegExp(`\\b${tipo}\\s+${escapar(nome)}\\b`).test(semComentarios)

const vezesCriada = (nome: string) =>
  (semComentarios.match(new RegExp(`\\b(let|const|var)\\s+${escapar(nome)}\\b`, "g")) ?? []).length

const comTipo = (nome: string, tipo: string) =>
  new RegExp(`\\bconst\\s+${escapar(nome)}\\s*:\\s*${tipo}\\s*=`).test(semComentarios)

const semTipo = (nome: string) => new RegExp(`\\bconst\\s+${escapar(nome)}\\s*=`).test(semComentarios)

// o que vem depois do "=" na linha em que a variavel foi criada
const valorDaLinha = (nome: string) => {
  const achado = semComentarios.match(new RegExp(`\\b(?:let|const)\\s+${escapar(nome)}\\b\\s*(?::[^=]*)?=\\s*([^\\n]*)`))
  return achado ? achado[1].trim() : ""
}

// a variavel foi criada com crase e usa cada uma das variaveis dentro de ${...}
const templateCom = (nome: string, ...usadas: string[]) =>
  valorDaLinha(nome).startsWith("`") &&
  usadas.every((u) => new RegExp(`\\$\\{[^}]*\\b${escapar(u)}\\b[^}]*\\}`).test(valorDaLinha(nome)))

const usa = (regra: RegExp) => regra.test(semComentarios)

const linhasDeCodigo = semComentarios.split("\n").filter((l) => l.trim() !== "")

// existe um "if (...)" cuja condicao fala de todas essas variaveis
const temIf = (...nomes: string[]) =>
  linhasDeCodigo.some((l) => /\bif\s*\(/.test(l) && nomes.every((n) => new RegExp(`\\b${escapar(n)}\\b`).test(l)))

// a linha i esta dentro de um if: o if esta na mesma linha, na linha logo acima (if sem chaves)
// ou abriu um bloco { } que ainda nao fechou
const dentroDeIf = (i: number) => {
  const ehIf = (l: string) => /\bif\s*\(/.test(l)
  if (ehIf(linhasDeCodigo[i]) || (i > 0 && /\bif\s*\(.*\)\s*$/.test(linhasDeCodigo[i - 1]))) return true
  let profundidade = 0
  for (let j = i - 1; j >= 0; j--) {
    const l = linhasDeCodigo[j]
    profundidade += (l.match(/\}/g) ?? []).length - (l.match(/\{/g) ?? []).length
    if (profundidade < 0) return ehIf(l)
  }
  return false
}

// toda linha que muda a variavel (fora a que cria com let) esta dentro de um if
const sempreDentroDeIf = (regra: RegExp) => {
  const posicoes = linhasDeCodigo
    .map((l, i) => (regra.test(l) && !/\b(let|const)\s/.test(l) ? i : -1))
    .filter((i) => i >= 0)
  return posicoes.length > 0 && posicoes.every(dentroDeIf)
}

const linhasDaSaida = saida.split("\n").map((l) => l.trim())
const mostrou = (texto: string) => saida.includes(texto)
const mostrouLinha = (texto: string) => linhasDaSaida.includes(texto)
const mostrouEmOrdem = (...textos: string[]) => {
  const i = linhasDaSaida.indexOf(textos[0])
  return i >= 0 && textos.every((t, j) => linhasDaSaida[i + j] === t)
}

const perto = (a: unknown, b: number) => typeof a === "number" && Math.abs(a - b) < 1e-9
const igual = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b)

// OS DESAFIOS
type Checagem = [descricao: string, passou: boolean]
type Tarefa = { titulo: string; checagens: Checagem[] }

const desafios: Record<string, { titulo: string; tarefas: Tarefa[] }> = {
  "1": {
    titulo: "Cadastro do cliente",
    tarefas: [
      {
        titulo: "Criando o cadastro",
        checagens: [
          ["let nomeCliente lida com input", criadaCom("let", "nomeCliente") && /\binput\s*\(/.test(valorDaLinha("nomeCliente")) && v.nomeCliente === "  maria eduarda lima  "],
          ["let telefone lida com input", criadaCom("let", "telefone") && /\binput\s*\(/.test(valorDaLinha("telefone"))],
          ["const LOJA: string = \"Byte Burger\"", comTipo("LOJA", "string") && v.LOJA === "Byte Burger"],
          ["const ANO_ABERTURA: number = 2019", comTipo("ANO_ABERTURA", "number") && v.ANO_ABERTURA === 2019],
          ["const clienteNovo = true, sem escrever o tipo", semTipo("clienteNovo") && v.clienteNovo === true],
          ["comentario dizendo que clienteNovo e boolean", /const\s+clienteNovo\b.*\/\/.*boolean/i.test(codigoAluno)],
        ],
      },
      {
        titulo: "Corrigindo o cadastro",
        checagens: [
          ["telefone trocado para \"92988887777\" sem criar de novo", vezesCriada("telefone") === 1 && v.telefone === "92988887777"],
          ["mostrou telefone", mostrou("92988887777")],
          ["comentario explicando por que LOJA nao muda", comentariosDaDupla.some((c) => /const|constante|LOJA/i.test(c))],
          ["const anosDeLoja = 7, saindo de uma conta com ANO_ABERTURA", criadaCom("const", "anosDeLoja") && v.anosDeLoja === 7 && /ANO_ABERTURA/.test(valorDaLinha("anosDeLoja"))],
          ["mostrou anosDeLoja", mostrou("7")],
        ],
      },
      {
        titulo: "Arrumando o nome",
        checagens: [
          ["const nome = \"maria eduarda lima\"", criadaCom("const", "nome") && v.nome === "maria eduarda lima"],
          ["const nomeMaiusculo = \"MARIA EDUARDA LIMA\"", criadaCom("const", "nomeMaiusculo") && v.nomeMaiusculo === "MARIA EDUARDA LIMA"],
          ["const partes = [\"maria\", \"eduarda\", \"lima\"]", criadaCom("const", "partes") && igual(v.partes, ["maria", "eduarda", "lima"])],
          ["const tamanhoNome = 18", criadaCom("const", "tamanhoNome") && v.tamanhoNome === 18],
          ["mostrou nomeMaiusculo e tamanhoNome", mostrou("MARIA EDUARDA LIMA") && mostrou("18")],
        ],
      },
      {
        titulo: "Primeiro nome, iniciais e telefone",
        checagens: [
          ["const primeiroNome = \"Maria\", saindo de partes", criadaCom("const", "primeiroNome") && v.primeiroNome === "Maria" && /partes/.test(valorDaLinha("primeiroNome"))],
          ["const iniciais = \"MEL\", saindo de partes", criadaCom("const", "iniciais") && v.iniciais === "MEL" && /partes/.test(valorDaLinha("iniciais"))],
          ["const telefoneFormatado = \"(92) 98888-7777\"", criadaCom("const", "telefoneFormatado") && v.telefoneFormatado === "(92) 98888-7777"],
          ["telefoneFormatado com crase, recortando o telefone", templateCom("telefoneFormatado", "telefone") && /\.(slice|substring)\s*\(/.test(valorDaLinha("telefoneFormatado"))],
          ["mostrou as tres", mostrou("Maria") && mostrou("MEL") && mostrou("(92) 98888-7777")],
        ],
      },
      {
        titulo: "Cartao de boas-vindas",
        checagens: [
          ["const codigoCliente = \"2019-018\", com padStart", criadaCom("const", "codigoCliente") && v.codigoCliente === "2019-018" && /padStart/.test(valorDaLinha("codigoCliente"))],
          ["const linha com 40 asteriscos usando repeat", criadaCom("const", "linha") && v.linha === "*".repeat(40) && /\.repeat\s*\(/.test(valorDaLinha("linha"))],
          ["cartao1 certo e feito com as variaveis", v.cartao1 === "Bem-vinda a Byte Burger, Maria! (MEL)" && templateCom("cartao1", "LOJA", "primeiroNome", "iniciais")],
          ["cartao2 certo e feito com as variaveis", v.cartao2 === "Codigo: 2019-018 | Tel: (92) 98888-7777" && templateCom("cartao2", "codigoCliente", "telefoneFormatado")],
          ["mostrou linha, cartao1, cartao2, linha", mostrouEmOrdem("*".repeat(40), "Bem-vinda a Byte Burger, Maria! (MEL)", "Codigo: 2019-018 | Tel: (92) 98888-7777", "*".repeat(40))],
        ],
      },
    ],
  },
  "2": {
    titulo: "Montando o pedido",
    tarefas: [
      {
        titulo: "O cardapio",
        checagens: [
          ["const PRECO_BURGER: number = 24.9", comTipo("PRECO_BURGER", "number") && v.PRECO_BURGER === 24.9],
          ["const PRECO_BATATA: number = 12.5", comTipo("PRECO_BATATA", "number") && v.PRECO_BATATA === 12.5],
          ["const precoRefriTexto: string = \"7.5\"", comTipo("precoRefriTexto", "string") && v.precoRefriTexto === "7.5"],
          ["qtdBurger, qtdBatata e qtdRefri sem escrever o tipo", semTipo("qtdBurger") && semTipo("qtdBatata") && semTipo("qtdRefri")],
          ["quantidades lidas com input e convertidas em numero", ["qtdBurger", "qtdBatata", "qtdRefri"].every((q) => /\binput\s*\(/.test(valorDaLinha(q)) && /\b(Number|parseInt|parseFloat)\s*\(/.test(valorDaLinha(q))) && v.qtdBurger === 2 && v.qtdBatata === 1 && v.qtdRefri === 3],
        ],
      },
      {
        titulo: "Somando o pedido",
        checagens: [
          ["const precoRefri = 7.5 (numero, convertido do texto)", criadaCom("const", "precoRefri") && v.precoRefri === 7.5 && /precoRefriTexto/.test(valorDaLinha("precoRefri"))],
          ["totalBurger = 49.8", criadaCom("const", "totalBurger") && perto(v.totalBurger, 49.8)],
          ["totalBatata = 12.5", criadaCom("const", "totalBatata") && perto(v.totalBatata, 12.5)],
          ["totalRefri = 22.5", criadaCom("const", "totalRefri") && perto(v.totalRefri, 22.5)],
          ["subtotal = 84.8, somando os tres totais", criadaCom("const", "subtotal") && perto(v.subtotal, 84.8) && /totalBurger/.test(valorDaLinha("subtotal"))],
          ["mostrou subtotal", mostrou("84.8")],
        ],
      },
      {
        titulo: "Taxa de servico",
        checagens: [
          ["itemMaisCaro = 49.8 com Math.max", criadaCom("const", "itemMaisCaro") && perto(v.itemMaisCaro, 49.8) && /Math\.max/.test(valorDaLinha("itemMaisCaro"))],
          ["itemMaisBarato = 12.5 com Math.min", criadaCom("const", "itemMaisBarato") && perto(v.itemMaisBarato, 12.5) && /Math\.min/.test(valorDaLinha("itemMaisBarato"))],
          ["taxa = 10% do subtotal", criadaCom("const", "taxa") && perto(v.taxa, 8.48) && /subtotal/.test(valorDaLinha("taxa"))],
          ["total = subtotal + taxa", criadaCom("const", "total") && perto(v.total, 93.28) && /subtotal/.test(valorDaLinha("total")) && /taxa/.test(valorDaLinha("total"))],
          ["totalTexto = \"93.28\" com toFixed", criadaCom("const", "totalTexto") && v.totalTexto === "93.28" && /toFixed/.test(valorDaLinha("totalTexto"))],
          ["mostrou itemMaisCaro, itemMaisBarato e totalTexto", mostrou("49.8") && mostrou("12.5") && mostrou("93.28")],
        ],
      },
      {
        titulo: "Dividindo a conta",
        checagens: [
          ["const pessoas = 3", criadaCom("const", "pessoas") && v.pessoas === 3],
          ["porPessoa = total / pessoas", criadaCom("const", "porPessoa") && perto(v.porPessoa, 93.28 / 3)],
          ["porPessoaArredondado = 32 com Math.ceil", criadaCom("const", "porPessoaArredondado") && v.porPessoaArredondado === 32 && /Math\.ceil/.test(valorDaLinha("porPessoaArredondado"))],
          ["gorjeta saindo de uma conta", criadaCom("const", "gorjeta") && perto(v.gorjeta, 32 * 3 - 93.28) && /total/.test(valorDaLinha("gorjeta"))],
          ["gorjetaTexto = \"2.72\"", criadaCom("const", "gorjetaTexto") && v.gorjetaTexto === "2.72"],
          ["mostrou porPessoaArredondado e gorjetaTexto", mostrou("32") && mostrou("2.72")],
        ],
      },
      {
        titulo: "Troco e senha",
        checagens: [
          ["pagamento = 100 e troco = pagamento - total", v.pagamento === 100 && perto(v.troco, 100 - 93.28) && /pagamento/.test(valorDaLinha("troco"))],
          ["trocoTexto = \"6.72\"", criadaCom("const", "trocoTexto") && v.trocoTexto === "6.72"],
          ["notasDe5 = 1 (so a parte inteira)", criadaCom("const", "notasDe5") && v.notasDe5 === 1 && /troco/.test(valorDaLinha("notasDe5"))],
          ["numeroPedido inteiro de 0 a 99 com Math.random", Number.isInteger(v.numeroPedido) && v.numeroPedido >= 0 && v.numeroPedido <= 99 && /Math\.random\s*\(/.test(valorDaLinha("numeroPedido"))],
          ["senha com 3 digitos", typeof v.senha === "string" && v.senha === String(v.numeroPedido).padStart(3, "0")],
          ["resumo certo, feito com as variaveis e mostrado", v.resumo === `Pedido ${v.senha} | Total: R$ 93.28 | Troco: R$ 6.72 | Notas de 5: 1` && templateCom("resumo", "senha", "notasDe5") && mostrouLinha(v.resumo)],
        ],
      },
    ],
  },
  "3": {
    titulo: "Programa de pontos",
    tarefas: [
      {
        titulo: "Somando os pontos",
        checagens: [
          ["let pontos = 120 e mais nenhuma variavel pontos", criadaCom("let", "pontos") && vezesCriada("pontos") === 1 && /^120\b/.test(valorDaLinha("pontos"))],
          ["usou += com o totalPedido arredondado para baixo", usa(/\bpontos\s*\+=\s*Math\.floor\s*\(\s*totalPedido\s*\)/)],
          ["usou *= 2", usa(/\bpontos\s*\*=\s*2\b/)],
          ["usou -= 150", usa(/\bpontos\s*-=\s*150\b/)],
          ["pontos termina em 276", v.pontos === 276],
          ["mostrou 213, 426 e 276", mostrou("213") && mostrou("426") && mostrou("276")],
        ],
      },
      {
        titulo: "Contadores",
        checagens: [
          ["let visitas e let estoqueBurger", criadaCom("let", "visitas") && criadaCom("let", "estoqueBurger")],
          ["visitas++", usa(/\bvisitas\s*\+\+/) && v.visitas === 10],
          ["estoqueBurger -= qtdBurger", usa(/\bestoqueBurger\s*-=\s*qtdBurger\b/)],
          ["estoqueBurger--", usa(/\bestoqueBurger\s*--/) && v.estoqueBurger === 47],
          ["mostrou visitas e estoqueBurger", mostrou("10") && mostrou("47")],
        ],
      },
      {
        titulo: "Fazendo perguntas",
        checagens: [
          ["ehVip = pontos >= 250", criadaCom("const", "ehVip") && v.ehVip === true && /pontos\s*>=\s*250/.test(valorDaLinha("ehVip"))],
          ["pedidoGrande = qtdItens > 5", criadaCom("const", "pedidoGrande") && v.pedidoGrande === true && /qtdItens\s*>\s*5/.test(valorDaLinha("pedidoGrande"))],
          ["cupomValido com ===", criadaCom("const", "cupomValido") && v.cupomValido === true && /===/.test(valorDaLinha("cupomValido"))],
          ["ehMenor = idadeCliente < 18", criadaCom("const", "ehMenor") && v.ehMenor === true && /idadeCliente\s*<\s*18/.test(valorDaLinha("ehMenor"))],
          ["diaPromocao com === (da false)", criadaCom("const", "diaPromocao") && v.diaPromocao === false && /===/.test(valorDaLinha("diaPromocao"))],
          ["comentario explicando == e ===", comentariosDaDupla.some((c) => c.includes("==="))],
        ],
      },
      {
        titulo: "As regras da loja",
        checagens: [
          ["ganhaBatata = ehVip && pedidoGrande", v.ganhaBatata === true && /ehVip\s*&&\s*pedidoGrande|pedidoGrande\s*&&\s*ehVip/.test(valorDaLinha("ganhaBatata"))],
          ["ganhaDesconto = cupomValido || diaPromocao", v.ganhaDesconto === true && /cupomValido\s*\|\|\s*diaPromocao|diaPromocao\s*\|\|\s*cupomValido/.test(valorDaLinha("ganhaDesconto"))],
          ["participaSorteio = pagouComPix && !ehMenor", v.participaSorteio === false && /&&/.test(valorDaLinha("participaSorteio")) && /!\s*ehMenor/.test(valorDaLinha("participaSorteio"))],
          ["naoEhVip = !ehVip", v.naoEhVip === false && /^!\s*ehVip\b/.test(valorDaLinha("naoEhVip"))],
        ],
      },
      {
        titulo: "Painel do cliente",
        checagens: [
          ["painel1 certo", v.painel1 === "Pontos: 276 | Visitas: 10 | Estoque: 47"],
          ["painel1 feito com as variaveis", templateCom("painel1", "pontos", "visitas", "estoqueBurger")],
          ["painel2 certo", v.painel2 === "VIP: true | Batata gratis: true | Desconto: true | Sorteio: false"],
          ["painel2 feito com as variaveis", templateCom("painel2", "ehVip", "ganhaBatata", "ganhaDesconto", "participaSorteio")],
          ["mostrou os dois paineis", mostrouLinha(v.painel1 ?? "\u0000") && mostrouLinha(v.painel2 ?? "\u0000")],
        ],
      },
    ],
  },
  "4": {
    titulo: "Fechando a conta",
    tarefas: [
      {
        titulo: "Comecando a conta",
        checagens: [
          ["let desconto = 0", criadaCom("let", "desconto") && /^0\b/.test(valorDaLinha("desconto"))],
          ["let taxaEntrega = 8", criadaCom("let", "taxaEntrega") && /^8\b/.test(valorDaLinha("taxaEntrega"))],
          ["let brindes = 0", criadaCom("let", "brindes") && /^0\b/.test(valorDaLinha("brindes"))],
          ["if com ehVip mostrando \"Cliente VIP no pedido!\"", temIf("ehVip") && mostrou("Cliente VIP no pedido!")],
        ],
      },
      {
        titulo: "Descontos",
        checagens: [
          ["if com cupom", temIf("cupom")],
          ["if com ehVip e subtotal usando &&", linhasDeCodigo.some((l) => /\bif\s*\(/.test(l) && /ehVip/.test(l) && /subtotal/.test(l) && /&&/.test(l))],
          ["if com pagouComPix", temIf("pagouComPix")],
          ["desconto so muda dentro de if", sempreDentroDeIf(/\bdesconto\s*(\+=|-=|=(?!=))/) && vezesCriada("desconto") === 1 && !usa(/\bdesconto\s*=\s*1\d\b/)],
          ["desconto termina em 17", v.desconto === 17],
          ["mostrou desconto", mostrou("17")],
        ],
      },
      {
        titulo: "Taxa de entrega",
        checagens: [
          ["if com distanciaKm", temIf("distanciaKm")],
          ["if com subtotal e aniversario usando ||", linhasDeCodigo.some((l) => /\bif\s*\(/.test(l) && /subtotal/.test(l) && /aniversario/.test(l) && /\|\|/.test(l))],
          ["taxaEntrega so muda dentro de if", sempreDentroDeIf(/\btaxaEntrega\s*(\+=|-=|=(?!=))/) && vezesCriada("taxaEntrega") === 1],
          ["taxaEntrega termina em 12", v.taxaEntrega === 12],
          ["mostrou taxaEntrega", mostrou("12")],
        ],
      },
      {
        titulo: "Total e brindes",
        checagens: [
          ["const total = subtotal - desconto + taxaEntrega", criadaCom("const", "total") && perto(v.total, 79.8) && /subtotal/.test(valorDaLinha("total")) && /desconto/.test(valorDaLinha("total")) && /taxaEntrega/.test(valorDaLinha("total"))],
          ["if com total e if com aniversario", temIf("total") && linhasDeCodigo.filter((l) => /\bif\s*\(/.test(l) && /aniversario/.test(l)).length >= 2],
          ["brindes so muda dentro de if", sempreDentroDeIf(/\bbrindes\s*(\+\+|\+=|=(?!=))/) && vezesCriada("brindes") === 1],
          ["brindes termina em 2", v.brindes === 2],
          ["mostrou total e brindes", mostrou("79.8") && mostrou("2")],
        ],
      },
      {
        titulo: "Avisos e comprovante",
        checagens: [
          ["if com horaPedido mostrando o aviso da cozinha", temIf("horaPedido") && mostrou("Atencao: a cozinha fecha as 23h")],
          ["if com !pagouComPix no codigo", linhasDeCodigo.some((l) => /\bif\s*\(\s*!\s*pagouComPix\b/.test(l))],
          ["\"Pagamento na entrega\" NAO apareceu", saida !== "" && !mostrou("Pagamento na entrega")],
          ["comprovante certo", v.comprovante === "Cliente: Maria | Desconto: R$ 17.00 | Entrega: R$ 12.00 | Total: R$ 79.80 | Brindes: 2"],
          ["comprovante feito com as variaveis e toFixed", templateCom("comprovante", "nomeCliente", "desconto", "taxaEntrega", "total", "brindes") && /toFixed/.test(valorDaLinha("comprovante"))],
          ["mostrou o comprovante", mostrouLinha(v.comprovante ?? "\u0000")],
        ],
      },
    ],
  },
}

// RESULTADO
const desafio = desafios[numero]
console.log("=".repeat(60))
console.log(`DESAFIO ${numero} - ${desafio.titulo}`)
console.log(`CORRECAO: ${arquivoAluno}`)
console.log("=".repeat(60))

if (execucao.error || execucao.status !== 0) {
  console.log("\n⚠️  O programa terminou com erro. As variaveis criadas depois do erro ficam sem valor.")
  if (erro) console.log(erro.split("\n").slice(0, 6).join("\n"))
}

let total = 0
desafio.tarefas.forEach((t, i) => {
  const certas = t.checagens.filter(([, passou]) => passou).length
  const pontos = (certas / t.checagens.length) * 2
  total += pontos
  console.log(`\nTAREFA ${i + 1} - ${t.titulo}: ${pontos.toFixed(2)} / 2 pts`)
  for (const [descricao, passou] of t.checagens) {
    console.log(`  ${passou ? "✅" : "❌"} ${descricao}`)
  }
})

console.log("\n" + "=".repeat(60))
console.log(`NOTA DO DESAFIO ${numero}: ${total.toFixed(2)} / 10`)
console.log("=".repeat(60))

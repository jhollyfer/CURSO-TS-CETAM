// GERA O index.html A PARTIR DO desafios.md
// Para rodar: pnpm index
// Para so conferir se o index.html esta em dia (sai com erro se nao estiver): pnpm index --conferir
//
// O index.html precisa abrir com duplo clique (file://), e ai o navegador nao deixa buscar o
// desafios.md com fetch. Por isso o texto vai copiado dentro do HTML, e quem copia e este script:
// edite o desafios.md ou o modelo e rode de novo, nunca o index.html na mao.

import * as fs from "node:fs"
import * as path from "node:path"

const raiz = path.resolve(import.meta.dirname, "..")
const modelo = fs.readFileSync(path.join(raiz, "scripts/index.template.html"), "utf8")
const enunciado = fs.readFileSync(path.join(raiz, "desafios.md"), "utf8")
const destino = path.join(raiz, "index.html")

// funcao no replace: o enunciado tem "$" (template string), que o replace com texto trataria como codigo
const gerado = modelo.replace("__DESAFIOS_MD__", () => enunciado)

if (process.argv.includes("--conferir")) {
  const atual = fs.readFileSync(destino, "utf8")
  if (atual !== gerado) {
    console.log("index.html desatualizado. Rode: pnpm index")
    process.exit(1)
  }
  console.log("index.html em dia com o desafios.md")
  process.exit(0)
}

fs.writeFileSync(destino, gerado)
console.log("index.html gerado a partir do desafios.md")

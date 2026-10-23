# Gabarito da prova 1 (prática: boletim da aluna)

```ts
// 1
let nomeAluno = "  maria oliveira  "
let faltas = 2
const NOTA_MINIMA: number = 7
const nota1: number = 6.75
const nota2: number = 8.4
const notaTexto: string = "9.5"
const totalAulas = 40 // inferido: number
// NOTA_MINIMA = 8  -> erro: const nao pode ser reatribuida

// 2
faltas = faltas + 3

// 3
const nome = nomeAluno.trim()
const nomeMaiusculo = nome.toUpperCase()
const partes = nome.split(" ")
const iniciais = nome.charAt(0).toUpperCase() + partes[1].charAt(0).toUpperCase()
console.log(nomeMaiusculo, nome.length, iniciais)
console.log(nome.includes("oliveira"), nome.startsWith("ma"), nome.endsWith("x"))
console.log(nome.indexOf("oliveira"), nome.slice(0, 5))
console.log(nome.replace("maria", "ana"), nome.toLowerCase())

// 4
const nota3 = parseFloat(notaTexto)
const media = (nota1 + nota2 + nota3) / 3
console.log(media.toFixed(2), Math.round(media), Math.floor(media), Math.ceil(media))
console.log(Math.max(nota1, nota2, nota3), Math.min(nota1, nota2, nota3))
console.log(Number.isInteger(media), Number.isNaN(Number("abc")), parseInt("8.9"))

// 5
const aprovado = media >= NOTA_MINIMA
const matricula = Math.floor(Math.random() * 1000)
const codigo = matricula.toString().padStart(4, "0")

// 6
console.log(totalAulas - faltas, faltas * 2, totalAulas / faltas, totalAulas % 6)
console.log(2 ** 3, Math.pow(2, 3), Math.sqrt(49), Math.abs(nota1 - nota2).toFixed(2))

// 7
console.log("=".repeat(30))
console.log(`Aluno: ${nomeMaiusculo} (${iniciais}) | Matricula: ${codigo}`)
console.log(`Media: ${media.toFixed(1)} | Aprovado: ${aprovado}`)
console.log('Fim do boletim')
```

**Saída esperada** (a matrícula muda toda vez que roda):

```
MARIA OLIVEIRA 14 MO
true true false
6 maria
ana oliveira maria oliveira
8.22 8 8 9
9.5 6.75
false true 8
35 10 8 4
8 8 7 1.65
==============================
Aluno: MARIA OLIVEIRA (MO) | Matricula: 0833
Media: 8.2 | Aprovado: true
Fim do boletim
```

**Onde o pessoal costuma errar:**
- No item 6, `faltas` tem que valer **5**. Se aparecer 38 em vez de 35, o aluno esqueceu de atualizar as faltas no item 2.
- Sem o `toFixed`, `Math.abs(nota1 - nota2)` mostra `1.6500000000000004`. Isso não conta como erro, mas dá pra dar um ponto extra pra quem perceber e arrumar.
- O `padStart` só funciona em texto. Quem usar direto no número toma erro, porque precisa do `.toString()` antes.

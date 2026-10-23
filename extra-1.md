# Prova: leitura de código (10 pontos)

Nessa questão você **não** vai escrever código. Você vai ler o programa abaixo, como se fosse o computador, e responder o que acontece.

Dica: vai linha por linha e anota num rascunho o valor de cada variável. Lembra que algumas variáveis mudam de valor no meio do caminho.

```ts
let aluno = "  ana souza  "
let faltas = 3
const NOTA_MAXIMA: number = 10
const nota1 = 7.25
const nota2: number = 8.5
// NOTA_MAXIMA = 11

aluno = aluno.trim()
faltas = faltas + 1
const media = (nota1 + nota2) / 2
const aprovado = media >= 7

console.log(aluno.toUpperCase(), aluno.length)                                  // L1
console.log(aluno.charAt(4), aluno.indexOf("souza"), aluno.indexOf("x"))        // L2
console.log(aluno.slice(0, 3), aluno.split(" "))                                // L3
console.log(aluno.replace("a", "e"), aluno)                                     // L4
console.log(aluno.includes("z"), aluno.startsWith("An"), aluno.endsWith("za"))  // L5
console.log(faltas.toString().padStart(3, "0"), "-".repeat(4))                  // L6
console.log(`Aluno: ${aluno} | media: ${media.toFixed(1)} | aprovado: ${aprovado}`) // L7
console.log(Math.round(media), Math.floor(media), Math.ceil(media))             // L8
console.log(Math.max(nota1, nota2, NOTA_MAXIMA), Math.min(nota1, nota2), Math.abs(nota1 - nota2)) // L9
console.log(Math.pow(faltas, 2), Math.sqrt(81), 2 ** 5)                         // L10
console.log(Number("5") + faltas, parseInt("9.99"), parseFloat("9.99"))         // L11
console.log(Number.isInteger(media), Number.isNaN(Number("abc")))               // L12
console.log(17 + 4, 17 - 4, 17 * 4, 17 / 4, 17 % 4)                             // L13
const dado = Math.floor(Math.random() * 6) + 1
```

Agora responda:

**a)** Qual a diferença entre `let` e `const`? Por que dá pra fazer `aluno = aluno.trim()`? E o que acontece se alguém apagar as `//` da linha `// NOTA_MAXIMA = 11`?

**b)** Qual o tipo (`string`, `number` ou `boolean`) de `aluno`, `faltas`, `NOTA_MAXIMA`, `nota1`, `nota2` e `aprovado`? Diga também se o TypeScript **descobriu sozinho** (inferido) ou se **a gente escreveu** o tipo com `: tipo` (explícito).

**c)** Quais são as três formas de escrever um texto (string)? Qual delas aparece na L7? O que ela faz que as outras não fazem?

**d)** Escreva o que aparece no terminal em cada linha, da L1 até a L13. Capricha nos detalhes: aspas, colchetes, maiúsculas e números quebrados contam.

**e)** Depois do `replace` da L4, a variável `aluno` mudou? Por quê?

**f)** A última linha simula um dado. Que números podem sair? Explica o que cada pedaço faz: `Math.random()`, `* 6`, `Math.floor` e `+ 1`.

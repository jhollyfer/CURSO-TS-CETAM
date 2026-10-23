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

---

## Gabarito (só para o professor)

**a)** O `let` deixa trocar o valor depois, e o `const` não deixa. Como `aluno` foi criada com `let`, ela aceita valor novo. Se tirar o comentário de `NOTA_MAXIMA = 11`, dá **erro**, porque não se troca o valor de uma `const`.

**b)**

| Variável | Tipo | Como |
|---|---|---|
| `aluno` | string | inferido |
| `faltas` | number | inferido |
| `NOTA_MAXIMA` | number | explícito |
| `nota1` | number | inferido |
| `nota2` | number | explícito |
| `aprovado` | boolean | inferido (resultado de uma comparação) |

**c)** Aspas duplas `" "`, aspas simples `' '` e crase `` ` ` ``. A L7 usa a crase (template string), que é a única que deixa colocar variáveis dentro do texto com `${...}`.

**d)**

```
L1:  ANA SOUZA 9
L2:  s 4 -1
L3:  ana [ 'ana', 'souza' ]
L4:  ena souza ana souza
L5:  true false true
L6:  004 ----
L7:  Aluno: ana souza | media: 7.9 | aprovado: true
L8:  8 7 8
L9:  10 7.25 1.25
L10: 16 9 32
L11: 9 9 9.99
L12: false true
L13: 21 13 68 4.25 1
```

Onde o pessoal costuma errar:
- **L2:** a contagem começa no 0, então a posição 4 é o "s". E o `indexOf` devolve -1 quando não acha.
- **L4:** o `replace` só troca a **primeira** letra "a" que encontra.
- **L5:** "An" é diferente de "an", porque maiúscula e minúscula contam.
- **L6:** nessa hora `faltas` já vale 4, e não 3.
- **L7:** a média é 7.875, e o `toFixed(1)` arredonda pra 7.9.
- **L11:** `Number("5")` vira o número 5, e 5 + 4 dá 9. O `parseInt` joga fora o que vem depois do ponto.

**e)** Não mudou. O `replace` cria um texto novo e deixa o original como estava. Por isso o segundo valor da L4 ainda é "ana souza".

**f)** Pode sair de 1 a 6. O `Math.random()` sorteia um número de 0 até quase 1 (o 1 nunca sai). Vezes 6, ele fica entre 0 e 5,99… O `Math.floor` arredonda pra baixo, o que dá de 0 a 5. O `+ 1` empurra tudo pra 1 a 6.

**Sugestão de pontuação:** a) 1,0 · b) 1,5 · c) 1,0 · d) 4,5 (0,35 por linha) · e) 1,0 · f) 1,0

# Prova prática: boletim da aluna (10 pontos)

Você vai criar um programa que monta o boletim da aluna Maria. Crie um arquivo chamado `prova.ts` e vá fazendo os itens na ordem. Quando terminar, rode com `tsx prova.ts` e confira o que aparece no terminal.

Dica: faz um item, roda, vê se deu certo, e só então passa pro próximo. Não deixa pra testar tudo no final.

### 1. Criando as variáveis (1,5 pt)

- Com `let`, crie:
  - `nomeAluno`, valendo `"  maria oliveira  "` (com os espaços mesmo, eles são de propósito)
  - `faltas`, valendo `2`
- Com `const`, crie as variáveis abaixo **escrevendo o tipo** (exemplo: `const idade: number = 12`):
  - `NOTA_MINIMA`, number, valendo 7
  - `nota1`, number, valendo 6.75
  - `nota2`, number, valendo 8.4
  - `notaTexto`, string, valendo `"9.5"`
- Crie uma `const` **sem escrever o tipo** e, num comentário do lado, diga qual tipo o TypeScript descobriu sozinho.
- Num comentário, explique por que `NOTA_MINIMA = 8` daria erro.

### 2. Mudando um valor (0,5 pt)

- A Maria faltou mais 3 aulas. Atualize `faltas` (lembrando que o `let` só aparece quando a variável é criada).

### 3. Arrumando o nome (2,5 pt)

- Tire os espaços do começo e do fim do nome.
- Mostre o nome todo em MAIÚSCULAS e todo em minúsculas.
- Mostre quantas letras o nome tem.
- Monte as **iniciais** "MO". Dica: `split(" ")` separa o nome em partes, e `charAt(0)` pega a primeira letra de cada parte.
- Mostre se o nome tem "oliveira", se começa com "ma" e se termina com "x".
- Mostre em que posição começa "oliveira" e quais são as 5 primeiras letras do nome.
- Troque "maria" por "ana" e mostre, logo do lado, que o nome original **continua igual**.

### 4. Calculando a média (2,0 pt)

- A terceira nota está guardada como texto (`notaTexto`). Transforme ela em número e chame de `nota3`.
- Calcule a média das 3 notas.
- Mostre a média de quatro jeitos:
  - com 2 casas depois da vírgula
  - arredondada normal
  - arredondada pra baixo
  - arredondada pra cima
- Mostre a maior e a menor nota.
- Mostre se a média é um número inteiro, se `Number("abc")` dá NaN e quanto dá `parseInt("8.9")`.

### 5. Aprovação e matrícula (1,5 pt)

- Crie `aprovado`, que tem que ser `true` se a média for maior ou igual a `NOTA_MINIMA`.
- Sorteie um número de matrícula de 0 a 999 usando `Math.random`.
- Deixe a matrícula sempre com 4 dígitos, colocando zeros na frente. Exemplo: 42 vira `0042`.

### 6. Fazendo contas (1,0 pt)

- Crie `totalAulas = 40` e mostre:
  - quantas aulas a Maria assistiu
  - o dobro das faltas
  - o total de aulas dividido pelas faltas
  - o resto de 40 dividido por 6
  - 2 elevado a 3, de dois jeitos: com `**` e com `Math.pow`
  - a raiz quadrada de 49
  - a diferença entre `nota1` e `nota2`, sem sinal de negativo

### 7. Mostrando o boletim (1,0 pt)

- Faça uma linha com 30 sinais de `=` usando `repeat`.
- Usando **crase** (template string), mostre o boletim neste formato (a matrícula vai ser diferente na sua tela):
  ```
  Aluno: MARIA OLIVEIRA (MO) | Matricula: 0833
  Media: 8.2 | Aprovado: true
  ```
- Termine com uma mensagem escrita entre **aspas simples**.

---

## Gabarito (só para o professor)

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

# Guia de estudos de TypeScript

Aqui está tudo o que a gente viu até agora no `index.ts`. Deixa o código aberto do lado e vai rodando o arquivo pra ver o que aparece no terminal.

## Sumário

1. [Como executar](#1-como-executar)
2. [Variáveis (`let`)](#2-variáveis-let)
3. [Constantes (`const`)](#3-constantes-const)
4. [Tipos de dados](#4-tipos-de-dados)
5. [Strings (textos)](#5-strings-textos)
6. [Números](#6-números)
7. [Operadores aritméticos](#7-operadores-aritméticos)
8. [Exercícios](#8-exercícios)
9. [Resumo (cola)](#9-resumo-cola)
10. [Links úteis](#10-links-úteis)

---

## 1. Como executar

```bash
tsx ~/CURSO-TS-CETAM/index.ts
```

O `console.log(...)` mostra valores no terminal. Se você passar vários valores separados por vírgula, eles saem na mesma linha, com um espaço entre eles.

```ts
console.log("Lucas", 12) // Lucas 12
```

---

## 2. Variáveis (`let`)

Pensa numa variável como uma caixinha com um nome escrito. Dentro dela vai um valor. Com `let`, dá pra trocar esse valor depois.

```ts
let nome = "Lucas"
let idade = 12
console.log(nome, idade) // Lucas 12

// reatribuição: usa só o nome, SEM "let" de novo
nome = "Lucas Silva"
idade = 13
console.log(nome, idade) // Lucas Silva 13
```

> **Atenção:** escrever `let nome = ...` duas vezes dá erro. O `let` só aparece quando você cria a variável.

---

## 3. Constantes (`const`)

Com `const` não tem volta: o valor que você colocou fica ali pra sempre.

```ts
const PI = 3.1415
PI = 10 // ❌ ERRO: não dá para reatribuir uma const
```

Quando usar cada um:

| Use      | Quando                                   |
| -------- | ---------------------------------------- |
| `const`  | O valor não vai mudar (na dúvida, comece por ele) |
| `let`    | O valor vai mudar ao longo do programa   |

---

## 4. Tipos de dados

Por enquanto, vimos três tipos:

| Tipo      | O que guarda          | Exemplo                 |
| --------- | --------------------- | ----------------------- |
| `number`  | Números (inteiros e decimais) | `2026`, `67.5`  |
| `string`  | Textos                | `"Uma frase aqui"`      |
| `boolean` | Verdadeiro ou falso   | `true`, `false`         |

> Diferente de outras linguagens, aqui não tem um tipo pra inteiro e outro pra decimal. É tudo `number`.

### Inferência de tipo (o TS descobre sozinho)

```ts
const ano = 2026               // number
const peso = 67.5              // number
const frase = "Uma frase aqui" // string
const maior = idade >= 18      // boolean (resultado de uma comparação)
```

### Anotação de tipo (nós dizemos o tipo)

Coloque `: tipo` depois do nome:

```ts
const codigo: number = 12122
const altura: number = 1.75
const aprovado: boolean = false
const palavra: string = "Uma palavra aqui"
```

Se o valor não bater com o tipo, o TypeScript reclama:

```ts
const idade2: number = "doze" // ❌ ERRO: string não é number
```

---

## 5. Strings (textos)

### Três formas de escrever texto

```ts
let texto = "Texto com aspas duplas"
texto = 'Texto com aspas simples'
texto = `Texto com template string ${ano}` // crase
```

A crase (template string) deixa você colocar variáveis no meio do texto com `${...}`:

```ts
const nome = "Lucas"
const idade = 13
console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
// Meu nome é Lucas e tenho 13 anos
```

### Métodos de string

Exemplo usando `const limpo = "Lucas Silva"`:

| Método / propriedade         | O que faz                                   | Resultado              |
| ---------------------------- | ------------------------------------------- | ---------------------- |
| `" Lucas Silva ".trim()`     | Tira os espaços do começo e do fim          | `"Lucas Silva"`        |
| `limpo.toUpperCase()`        | Tudo maiúsculo                              | `"LUCAS SILVA"`        |
| `limpo.toLowerCase()`        | Tudo minúsculo                              | `"lucas silva"`        |
| `limpo.includes("u")`        | Diz se o trecho existe (true/false)         | `true`                 |
| `limpo.length`               | Quantidade de caracteres (sem parênteses!)  | `11`                   |
| `limpo.charAt(0)`            | Caractere numa posição (começa em **0**)    | `"L"`                  |
| `limpo.indexOf("Silva")`     | Posição onde o trecho começa (-1 se não achar) | `6`                 |
| `limpo.slice(0, 5)`          | Recorta do índice 0 até o 5 (o 5 não entra) | `"Lucas"`              |
| `limpo.replace("Lucas", "Pedro")` | Troca a 1ª ocorrência                  | `"Pedro Silva"`        |
| `limpo.split(" ")`           | Quebra o texto em um vetor                  | `["Lucas", "Silva"]`   |
| `limpo.startsWith("Lu")`     | Começa com o trecho?                        | `true`                 |
| `limpo.endsWith("va")`       | Termina com o trecho?                       | `true`                 |
| `"ha".repeat(3)`             | Repete o texto                              | `"hahaha"`             |
| `"7".padStart(3, "0")`       | Completa à esquerda até ter 3 caracteres    | `"007"`                |

> Esses métodos não mexem na string original. Eles devolvem uma string nova, e a original continua igual.

Posições (índices) de cada letra em `"Lucas Silva"`:

```
L  u  c  a  s     S  i  l  v  a
0  1  2  3  4  5  6  7  8  9  10
```

---

## 6. Números

### Métodos de number

```ts
const decimal = 12.3456
decimal.toFixed(2)  // "12.35"  (fixa casas decimais e devolve STRING)
decimal.toString()  // "12.3456" (converte para texto)
```

### Objeto `Math`

| Código              | O que faz                     | Resultado |
| ------------------- | ----------------------------- | --------- |
| `Math.round(12.3456)` | Arredonda normal            | `12`      |
| `Math.floor(12.3456)` | Arredonda para **baixo**    | `12`      |
| `Math.ceil(12.3456)`  | Arredonda para **cima**     | `13`      |
| `Math.max(1, 5, 3)`   | Maior valor                 | `5`       |
| `Math.min(1, 5, 3)`   | Menor valor                 | `1`       |
| `Math.pow(2, 3)`      | Potência (2³)               | `8`       |
| `Math.sqrt(16)`       | Raiz quadrada               | `4`       |
| `Math.abs(-10)`       | Valor absoluto (sem sinal)  | `10`      |
| `Math.random()`       | Número aleatório entre 0 e 1 (o 1 não entra) | ex: `0.734...` |

Pra sortear um inteiro de 0 a 9:

```ts
const aleatorio = Math.floor(Math.random() * 10)
```

### Convertendo texto em número

| Código                  | O que faz                        | Resultado |
| ----------------------- | -------------------------------- | --------- |
| `Number("42") + 1`      | Converte texto em número         | `43`      |
| `parseInt("42.9")`      | Texto → inteiro (corta decimais) | `42`      |
| `parseFloat("42.9")`    | Texto → decimal                  | `42.9`    |
| `Number.isInteger(10)`  | É inteiro?                       | `true`    |
| `Number.isNaN(NaN)`     | É NaN ("não é um número")?       | `true`    |

> **Pegadinha:** `"42" + 1` dá `"421"`, porque o `+` junta os textos. Converta antes: `Number("42") + 1` dá `43`.

---

## 7. Operadores aritméticos

Com `x = 10` e `y = 3`:

| Operador | Nome                       | Exemplo  | Resultado   |
| -------- | -------------------------- | -------- | ----------- |
| `+`      | Soma                       | `x + y`  | `13`        |
| `-`      | Subtração                  | `x - y`  | `7`         |
| `*`      | Multiplicação              | `x * y`  | `30`        |
| `/`      | Divisão                    | `x / y`  | `3.3333...` |
| `%`      | Resto da divisão (módulo)  | `x % y`  | `1`         |
| `**`     | Potência                   | `x ** y` | `1000`      |

> O `%` é ótimo pra saber se um número é par. Se `numero % 2` der `0`, ele é par.

---

## 8. Exercícios

Tenta resolver no `index.ts` antes de abrir a resposta. Vale errar.

**1.** Crie uma variável `cidade` com `"Manaus"` e depois troque para `"Parintins"`. Mostre os dois valores.

<details><summary>Resposta</summary>

```ts
let cidade = "Manaus"
console.log(cidade)
cidade = "Parintins"
console.log(cidade)
```
</details>

**2.** Usando template string, mostre: `Eu sou o Lucas e nasci em 2013`.

<details><summary>Resposta</summary>

```ts
const nome = "Lucas"
const nascimento = 2013
console.log(`Eu sou o ${nome} e nasci em ${nascimento}`)
```
</details>

**3.** Dado `const email = "  ALUNO@CETAM.COM  "`, deixe o texto limpo e em minúsculo.

<details><summary>Resposta</summary>

```ts
const email = "  ALUNO@CETAM.COM  "
console.log(email.trim().toLowerCase()) // "aluno@cetam.com"
```
</details>

**4.** Mostre o preço `19.9` com duas casas decimais.

<details><summary>Resposta</summary>

```ts
const preco = 19.9
console.log(preco.toFixed(2)) // "19.90"
```
</details>

**5.** Descubra se `17` é par ou ímpar usando `%`.

<details><summary>Resposta</summary>

```ts
console.log(17 % 2) // 1 → sobra resto, então é ímpar
```
</details>

**6.** Gere um número aleatório de 1 a 6 (um dado).

<details><summary>Resposta</summary>

```ts
const dado = Math.floor(Math.random() * 6) + 1
console.log(dado)
```
</details>

---

## 9. Resumo (cola)

```ts
let a = 1               // variável (pode mudar)
const B = 2             // constante (não muda)
const n: number = 10    // anotação de tipo
const s: string = "oi"
const v: boolean = true

`Olá ${s}`              // template string
s.trim() s.toUpperCase() s.toLowerCase() s.includes("x") s.length
s.slice(0, 2) s.split(" ") s.replace("a", "b")

n.toFixed(2)
Math.round() Math.floor() Math.ceil() Math.random()
Number("5") parseInt("5.9") parseFloat("5.9")

+  -  *  /  %  **
```

---

## 10. Links úteis

**TypeScript**
- [Documentação oficial do TypeScript](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook: Tipos do dia a dia](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [TypeScript Playground](https://www.typescriptlang.org/play): roda código direto no navegador, sem instalar nada
- [tsx no GitHub](https://github.com/privatenumber/tsx): a ferramenta que usamos pra rodar os arquivos `.ts`

**MDN (referência em português)**
- [Guia de JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide)
- [`let`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let) e [`const`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const)
- [String: todos os métodos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Template strings](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals)
- [Number](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [Math](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [Operadores e expressões](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators)

**Para praticar**
- [JavaScript.info (tutorial completo)](https://javascript.info/)
- [Exercism: trilha de TypeScript](https://exercism.org/tracks/typescript)

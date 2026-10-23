# Guia de estudos de TypeScript

Aqui está tudo o que a gente viu até agora no `index.ts`, mais algumas coisas que você vai precisar na prova (comparações e vetores). Deixa o `index.ts` aberto do lado e vai rodando pra ver o que aparece no terminal.

## Sumário

1. [Rodando o código](#1-rodando-o-código)
2. [Variáveis (`let`)](#2-variáveis-let)
3. [Constantes (`const`)](#3-constantes-const)
4. [Tipos de dados](#4-tipos-de-dados)
5. [Operadores](#5-operadores)
6. [Strings (textos)](#6-strings-textos)
7. [Vetores (o básico)](#7-vetores-o-básico)
8. [Números](#8-números)
9. [Pegadinhas em que todo mundo cai](#9-pegadinhas-em-que-todo-mundo-cai)
10. [Exercícios](#10-exercícios)
11. [Cola](#11-cola)
12. [Links úteis](#12-links-úteis)

---

## 1. Rodando o código

No terminal:

```bash
tsx ~/CURSO-TS-CETAM/index.ts
```

Se o `tsx` não existir ainda, faz o setup do [README](README.md) primeiro.

### `console.log`

Mostra valores no terminal. Com vários valores separados por vírgula, eles saem na mesma linha, com um espaço entre eles.

```ts
console.log("Lucas", 12) // Lucas 12
```

### Comentários

Tudo que vem depois de `//` é comentário: o computador ignora. Serve pra você anotar coisas no código.

```ts
// essa linha inteira é comentário
console.log("oi") // daqui pra frente também é comentário
```

Comentário também é útil pra "desligar" uma linha sem apagar ela.

---

## 2. Variáveis (`let`)

Pensa numa variável como uma caixinha com um nome escrito. Dentro dela vai um valor. Com `let`, dá pra trocar esse valor depois.

```ts
let nome = "Lucas"
let idade = 12
console.log(nome, idade) // Lucas 12

// trocando o valor: usa só o nome, SEM "let" de novo
nome = "Lucas Silva"
idade = idade + 1
console.log(nome, idade) // Lucas Silva 13
```

Repara no `idade = idade + 1`: o computador primeiro calcula o lado direito (12 + 1) e depois guarda o resultado na caixinha.

> **Atenção:** escrever `let nome = ...` duas vezes dá erro. O `let` só aparece quando você cria a variável.

---

## 3. Constantes (`const`)

Com `const` não tem volta: o valor que você colocou fica ali até o fim do programa.

```ts
const PI = 3.1415
PI = 10 // ❌ ERRO: não dá pra trocar o valor de uma const
```

Quando usar cada um:

| Use     | Quando                                              |
| ------- | --------------------------------------------------- |
| `const` | O valor não vai mudar (na dúvida, comece por ele)   |
| `let`   | O valor vai mudar ao longo do programa              |

Nome de constante em MAIÚSCULAS com `_` (tipo `NOTA_MINIMA`) é só um costume pra valores fixos de configuração. Pro TypeScript, é uma `const` como qualquer outra.

---

## 4. Tipos de dados

Por enquanto, vimos três tipos:

| Tipo      | O que guarda                  | Exemplo              |
| --------- | ----------------------------- | -------------------- |
| `number`  | Números (inteiros e decimais) | `2026`, `67.5`       |
| `string`  | Textos                        | `"Uma frase aqui"`   |
| `boolean` | Verdadeiro ou falso           | `true`, `false`      |

> Diferente de outras linguagens, aqui não tem um tipo pra inteiro e outro pra decimal. É tudo `number`.

### Inferência: o TypeScript descobre sozinho

Se você não escreve o tipo, o TS olha pro valor e descobre:

```ts
const ano = 2026               // number
const peso = 67.5              // number
const frase = "Uma frase aqui" // string
const maior = ano > 2000       // boolean (resultado de uma comparação)
```

### Anotação: a gente diz o tipo

Coloca `: tipo` depois do nome:

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

Cuidado: `"9.5"` (com aspas) é `string`, não `number`. As aspas é que mandam.

---

## 5. Operadores

### Aritméticos (contas)

Com `x = 10` e `y = 3`:

| Operador | Nome                      | Exemplo  | Resultado   |
| -------- | ------------------------- | -------- | ----------- |
| `+`      | Soma                      | `x + y`  | `13`        |
| `-`      | Subtração                 | `x - y`  | `7`         |
| `*`      | Multiplicação             | `x * y`  | `30`        |
| `/`      | Divisão                   | `x / y`  | `3.3333...` |
| `%`      | Resto da divisão (módulo) | `x % y`  | `1`         |
| `**`     | Potência                  | `x ** y` | `1000`      |

A ordem é a mesma da matemática: `*` e `/` vêm antes de `+` e `-`. Se quiser outra ordem, usa parênteses:

```ts
console.log(2 + 4 / 2)   // 4  (primeiro 4 / 2, depois soma)
console.log((2 + 4) / 2) // 3  (primeiro a soma)
```

> O `%` é ótimo pra saber se um número é par. Se `numero % 2` der `0`, ele é par.

### De comparação

Comparam dois valores e sempre devolvem `true` ou `false` (um `boolean`). Com `x = 10`:

| Operador | Pergunta          | Exemplo    | Resultado |
| -------- | ----------------- | ---------- | --------- |
| `>`      | Maior que?        | `x > 5`    | `true`    |
| `<`      | Menor que?        | `x < 5`    | `false`   |
| `>=`     | Maior ou igual?   | `x >= 10`  | `true`    |
| `<=`     | Menor ou igual?   | `x <= 9`   | `false`   |
| `===`    | Igual?            | `x === 10` | `true`    |
| `!==`    | Diferente?        | `x !== 10` | `false`   |

Dá pra guardar o resultado numa variável:

```ts
const idade = 15
const podeVotar = idade >= 16
console.log(podeVotar) // false
```

### `+` com texto

Com texto, o `+` não soma: ele junta.

```ts
console.log("Lu" + "cas")      // Lucas
console.log("Nota: " + 8)      // Nota: 8
```

---

## 6. Strings (textos)

### Três formas de escrever texto

```ts
const ano = 2026
let texto = "Texto com aspas duplas"
texto = 'Texto com aspas simples'
texto = `Texto com template string ${ano}` // crase
```

Aspas duplas e simples funcionam igual. A crase (template string) tem um poder a mais: deixa você colocar variáveis no meio do texto com `${...}`.

```ts
const nome = "Lucas"
const idade = 13
console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
// Meu nome é Lucas e tenho 13 anos
```

Dentro do `${...}` pode ir qualquer conta ou método, não só o nome da variável: `${idade + 1}`, `${nome.toUpperCase()}`.

### Posições (índices)

Cada caractere de um texto tem uma posição, e **a contagem começa em 0**. O espaço também conta:

```
L  u  c  a  s     S  i  l  v  a
0  1  2  3  4  5  6  7  8  9  10
```

### Métodos de string

Exemplos usando `const limpo = "Lucas Silva"`:

| Método / propriedade              | O que faz                                      | Resultado            |
| --------------------------------- | ---------------------------------------------- | -------------------- |
| `" Lucas Silva ".trim()`          | Tira os espaços do começo e do fim             | `"Lucas Silva"`      |
| `limpo.toUpperCase()`             | Tudo maiúsculo                                 | `"LUCAS SILVA"`      |
| `limpo.toLowerCase()`             | Tudo minúsculo                                 | `"lucas silva"`      |
| `limpo.length`                    | Quantidade de caracteres (sem parênteses!)     | `11`                 |
| `limpo.charAt(0)`                 | Caractere numa posição                         | `"L"`                |
| `limpo.indexOf("Silva")`          | Posição onde o trecho começa (-1 se não achar) | `6`                  |
| `limpo.slice(0, 5)`               | Recorta da posição 0 até a 5 (a 5 não entra)   | `"Lucas"`            |
| `limpo.includes("u")`             | O trecho existe no texto?                      | `true`               |
| `limpo.startsWith("Lu")`          | Começa com o trecho?                           | `true`               |
| `limpo.endsWith("va")`            | Termina com o trecho?                          | `true`               |
| `limpo.replace("Lucas", "Pedro")` | Troca a 1ª vez que o trecho aparece            | `"Pedro Silva"`      |
| `limpo.split(" ")`                | Quebra o texto num vetor                       | `["Lucas", "Silva"]` |
| `"ha".repeat(3)`                  | Repete o texto                                 | `"hahaha"`           |
| `"7".padStart(3, "0")`            | Completa à esquerda até ter 3 caracteres       | `"007"`              |

Dá pra encadear métodos, um depois do outro. Eles rodam da esquerda pra direita:

```ts
const email = "  ALUNO@CETAM.COM  "
console.log(email.trim().toLowerCase()) // aluno@cetam.com
```

> **Importante:** esses métodos não mexem na string original. Eles devolvem uma string nova, e a original continua igual. Se quiser guardar o resultado, coloca numa variável: `const maiusculo = limpo.toUpperCase()`.

---

## 7. Vetores (o básico)

Vetor (ou array) é uma lista de valores dentro de colchetes, separados por vírgula. Você já viu um: é o que o `split` devolve.

```ts
const frutas = ["uva", "pera", "caju"]
```

Pra pegar um item, escreve o nome do vetor e a posição entre colchetes. Igual nos textos, **a contagem começa em 0**:

```ts
console.log(frutas[0]) // uva
console.log(frutas[1]) // pera
console.log(frutas[2]) // caju
```

Cada item é um valor normal. Se o item for texto, dá pra usar os métodos de string nele:

```ts
const partes = "Lucas Silva".split(" ") // ["Lucas", "Silva"]
console.log(partes[1])                  // Silva
console.log(partes[1].toUpperCase())    // SILVA
```

---

## 8. Números

### Métodos de number

```ts
const decimal = 12.3456
console.log(decimal.toFixed(2))  // 12.35   (fixa as casas decimais e devolve STRING)
console.log(decimal.toString())  // 12.3456 (vira texto)
```

### Objeto `Math`

| Código                | O que faz                                    | Resultado      |
| --------------------- | -------------------------------------------- | -------------- |
| `Math.round(12.3456)` | Arredonda pro inteiro mais próximo           | `12`           |
| `Math.floor(12.3456)` | Arredonda sempre pra **baixo**               | `12`           |
| `Math.ceil(12.3456)`  | Arredonda sempre pra **cima**                | `13`           |
| `Math.max(1, 5, 3)`   | Maior valor                                  | `5`            |
| `Math.min(1, 5, 3)`   | Menor valor                                  | `1`            |
| `Math.pow(2, 3)`      | Potência (2³), o mesmo que `2 ** 3`          | `8`            |
| `Math.sqrt(16)`       | Raiz quadrada                                | `4`            |
| `Math.abs(-10)`       | Valor absoluto (tira o sinal de negativo)    | `10`           |
| `Math.random()`       | Número aleatório entre 0 e 1 (o 1 não entra) | ex: `0.734...` |

### Sorteando um número inteiro

O `Math.random()` dá um número quebrado entre 0 e 1. Pra virar inteiro, multiplica e arredonda pra baixo:

```ts
const deZeroANove = Math.floor(Math.random() * 10)  // 0, 1, 2 ... 9
const dado = Math.floor(Math.random() * 6) + 1      // 1, 2, 3 ... 6
```

O número que você multiplica é a quantidade de resultados possíveis. O `+ 1` empurra tudo uma casa pra frente.

### Convertendo texto em número

| Código                 | O que faz                          | Resultado |
| ---------------------- | ---------------------------------- | --------- |
| `Number("42")`         | Texto → número                     | `42`      |
| `parseInt("42.9")`     | Texto → inteiro (corta o decimal)  | `42`      |
| `parseFloat("42.9")`   | Texto → decimal                    | `42.9`    |
| `Number("abc")`        | Texto que não é número             | `NaN`     |
| `Number.isInteger(10)` | É inteiro?                         | `true`    |
| `Number.isNaN(NaN)`    | É `NaN`?                           | `true`    |

`NaN` quer dizer "Not a Number" (não é um número). É o que aparece quando a conversão não dá certo.

---

## 9. Pegadinhas em que todo mundo cai

### Texto + número junta em vez de somar

```ts
console.log("42" + 1)         // 421 (juntou os textos)
console.log(Number("42") + 1) // 43
```

### Método de string em número dá erro

`padStart`, `repeat`, `toUpperCase` e companhia só existem em string. Se o valor for `number`, converte antes com `toString()`:

```ts
const numero = 7
numero.padStart(3, "0")            // ❌ ERRO
numero.toString().padStart(3, "0") // "007"
```

### `toFixed` devolve texto

`(8.5).toFixed(1)` dá `"8.5"`, que é `string`. Se precisar fazer conta depois, usa o número original.

### Conta com decimal sai "quebrada"

```ts
console.log(0.1 + 0.2) // 0.30000000000000004
```

Não é erro seu: o computador guarda decimais de um jeito que às vezes sobra um restinho. Pra mostrar bonito, usa `toFixed`.

### `length` não tem parênteses

`nome.length` é certo. `nome.length()` dá erro.

### Esquecer os parênteses na média

```ts
console.log(6 + 8 + 10 / 3)   // 17.33... (dividiu só o 10)
console.log((6 + 8 + 10) / 3) // 8
```

---

## 10. Exercícios

Tenta resolver no `index.ts` antes de abrir a resposta. Vale errar.

**1.** Crie a `let` `cidade` com `"Manaus"` e depois troque para `"Parintins"`. Mostre os dois valores.

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

**3.** Dada `const email = "  ALUNO@CETAM.COM  "`, crie a `const` `emailLimpo` com o texto sem espaços e em minúsculo. Mostre `emailLimpo`.

<details><summary>Resposta</summary>

```ts
const email = "  ALUNO@CETAM.COM  "
const emailLimpo = email.trim().toLowerCase()
console.log(emailLimpo) // aluno@cetam.com
```
</details>

**4.** Mostre o preço `19.9` com duas casas decimais.

<details><summary>Resposta</summary>

```ts
const preco = 19.9
console.log(preco.toFixed(2)) // 19.90
```
</details>

**5.** Descubra se `17` é par ou ímpar usando `%`.

<details><summary>Resposta</summary>

```ts
console.log(17 % 2) // 1 → sobra resto, então é ímpar
```
</details>

**6.** Crie a `const` `maiorDeIdade` que guarda se `idade` (valendo `17`) é maior ou igual a `18`. Mostre `maiorDeIdade`.

<details><summary>Resposta</summary>

```ts
const idade = 17
const maiorDeIdade = idade >= 18
console.log(maiorDeIdade) // false
```
</details>

**7.** Dada `const completo = "joao pedro"`, crie a `const` `segundoNome` com só a segunda palavra, usando `split`. Mostre `segundoNome`.

<details><summary>Resposta</summary>

```ts
const completo = "joao pedro"
const partes = completo.split(" ")
const segundoNome = partes[1]
console.log(segundoNome) // pedro
```
</details>

**8.** Gere um número aleatório de 1 a 6 (um dado).

<details><summary>Resposta</summary>

```ts
const dado = Math.floor(Math.random() * 6) + 1
console.log(dado)
```
</details>

---

## 11. Cola

```ts
// criar
let a = 1                  // variável: pode mudar (a = 2)
const B = 2                // constante: não muda
const n: number = 10       // com anotação de tipo
const s: string = "oi"
const v: boolean = true

// operadores
// contas:      +  -  *  /  %  **
// comparação:  >  <  >=  <=  ===  !==

// texto
`Olá ${s}`                 // template string
s.length                   // tamanho (sem parênteses)
s.trim()  s.toUpperCase()  s.toLowerCase()
s.charAt(0)  s.indexOf("o")  s.slice(0, 2)
s.includes("o")  s.startsWith("o")  s.endsWith("i")
s.replace("o", "a")  s.split(" ")  s.repeat(3)  s.padStart(4, "0")

// vetor
const lista = ["a", "b"]
lista[0]                   // "a" (começa em 0)

// número
n.toFixed(2)  n.toString()
Math.round(n)  Math.floor(n)  Math.ceil(n)
Math.max(1, 2)  Math.min(1, 2)  Math.pow(2, 3)  Math.sqrt(9)  Math.abs(-1)
Math.floor(Math.random() * 10)    // inteiro de 0 a 9

// converter
Number("5")  parseInt("5.9")  parseFloat("5.9")
Number.isInteger(5)  Number.isNaN(Number("x"))
```

---

## 12. Links úteis

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
- [Array (vetores)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Number](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [Math](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [Operadores e expressões](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators)

**Pra praticar**
- [JavaScript.info (tutorial completo)](https://javascript.info/)
- [Exercism: trilha de TypeScript](https://exercism.org/tracks/typescript)

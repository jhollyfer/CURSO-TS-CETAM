# Exercícios

São 5 questões por assunto. Escolha uma (ou mais) de cada e resolva em um arquivo `.ts`.

Todas usam o `input` para ler o que a pessoa digita:

```ts
import { input } from '#core/input.ts'

const nome = input("Digite seu nome: ")
```

O `input` sempre devolve **texto**. Quando precisar de número, converta com `Number(...)`:

```ts
const idade = Number(input("Digite sua idade: "))
```

Para rodar:

```bash
tsx ~/CURSO-TS-CETAM/seu-arquivo.ts
```

---

## 1. Variáveis (`let`)
1. Peça sua cidade, mostre, depois peça outra cidade e troque o valor da mesma variável. Mostre de novo.
2. Peça o nome e a idade. Mostre os dois em um único `console.log`, depois peça de novo e mostre os novos valores.
3. Crie `let saldo = 100`. Peça um valor, atribua esse valor ao `saldo` e mostre antes e depois.
4. Crie `let contador = 0` e peça três palavras. A cada palavra lida, troque o `contador` (1, 2, 3) e mostre.
5. Peça dois textos em `a` e `b`. Depois faça `a = b` e mostre as duas variáveis.

## 2. Constantes (`const`)
1. Peça o ano de nascimento e guarde em uma `const`. Mostre.
2. Crie `const GRAVIDADE = 9.8` e mostre. Tente reatribuir, leia o erro e comente a linha.
3. Crie `const nome` lido do teclado e `let sobrenome` também. Troque só o `sobrenome` e mostre os dois.
4. Crie `const TAXA = 0.1`, peça o preço e mostre `preco * TAXA`.
5. Escreva em comentário a diferença entre `let` e `const` e dê um exemplo de cada, lendo o valor com `input`.

## 3. Tipos de dados (inferência)
1. Crie quatro `const` sem anotação (número inteiro, decimal, texto e boolean) e escreva em comentário o tipo de cada uma.
2. Peça um número com `Number(input(...))` e guarde em `const maior` o resultado de `numero > 10`. Qual é o tipo?
3. Peça a temperatura em `Number(input(...))` e escreva em comentário por que não existe separação entre inteiro e decimal.
4. Peça a turma e crie `const aprovado = turma === "3A"`. Mostre os dois e comente os tipos.
5. Peça dois textos com `input` e mostre a soma deles (`+`). Depois converta os dois com `Number` e mostre a soma de novo. Compare.

## 4. Tipos de dados (explícito)
1. Peça a matrícula e o nome e guarde em `const matricula: number` e `const aluno: string`.
2. Crie `const ativo: boolean = true` e mostre.
3. Peça a média (`number`) e guarde também uma `const situacao: string = "Aprovado"`.
4. Reescreva as quatro constantes do assunto 3 com o tipo escrito na frente.
5. Crie `let nota: number` lida do teclado e atribua outro número. Depois escreva em comentário por que `nota = "nove"` dá erro.

## 5. Strings (aspas, crase e template string)
1. Escreva o mesmo texto com aspas duplas, aspas simples e crase. Mostre os três.
2. Peça nome e idade e mostre: `Meu nome é X e tenho Y anos` com template string.
3. Peça dois números e mostre `a + b = soma` usando `${...}`.
4. Peça o produto e o preço e mostre: `A caneta custa R$ 3.5` com template string.
5. Peça o ano atual e mostre: `Estamos em 2026` com template string.

## 6. Strings (`trim`, `toUpperCase`, `toLowerCase`, `includes`)
1. Peça um nome e mostre sem os espaços do começo e do fim.
2. Peça uma frase e mostre limpa e em MAIÚSCULAS.
3. Peça uma frase e mostre limpa e em minúsculas.
4. Peça um e-mail, limpe e deixe em minúsculas.
5. Peça uma frase e uma palavra. Mostre se a frase inclui a palavra.

## 7. Strings (mais métodos)
1. Peça o nome completo e mostre a quantidade de caracteres (`length`) e o primeiro (`charAt`).
2. Peça um nome e um trecho. Mostre a posição do trecho com `indexOf` (e `-1` se não existir).
3. Peça o nome completo e mostre os 5 primeiros caracteres com `slice`. Depois troque um trecho com `replace`.
4. Peça uma frase, quebre em palavras com `split(" ")` e mostre. Depois mostre `startsWith` e `endsWith` com trechos digitados.
5. Peça um número e use `padStart` para mostrar com 3 dígitos (`7` vira `007`). Peça uma sílaba e repita 3 vezes com `repeat`.

## 8. Números (`Math`, `toFixed` e conversões)
1. Peça um decimal e mostre `toFixed(2)`, `Math.round`, `Math.floor` e `Math.ceil`.
2. Peça três números e mostre o maior (`Math.max`), o menor (`Math.min`) e o valor absoluto do primeiro (`Math.abs`).
3. Peça uma base e um expoente e mostre `Math.pow`. Peça outro número e mostre `Math.sqrt`.
4. Peça um número como texto, converta com `Number` e some 5. Depois converta o mesmo texto com `parseInt` e com `parseFloat`.
5. Gere um inteiro aleatório de 0 a 9 e peça um palpite. Mostre os dois. Depois mostre `Number.isInteger` e `Number.isNaN` do que foi digitado.

## 9. Operadores aritméticos
1. Peça dois números e mostre soma, subtração, multiplicação e divisão.
2. Peça dois números e mostre o resto (`%`) e a potência (`**`).
3. Peça base e altura e mostre a área do retângulo.
4. Peça o preço de um item e a quantidade e mostre o total com `toFixed(2)`.
5. Peça um número e mostre o resto da divisão por 5. Escreva em comentário o que o resto indica.

## 10. Operadores de atribuição
1. Peça um número em `let v` e aplique `+= 5` e `-= 3`, mostrando após cada operação.
2. Peça um número em `let v` e aplique `*= 3` e `/= 2`, mostrando o valor.
3. Peça um número em `let v` e aplique `**= 2` e `%= 7`, mostrando o valor.
4. Crie `let c = 0`, use `c++` três vezes e `c--` uma vez e mostre o valor final.
5. Peça um total inicial e aplique `-= 20`, `*= 2` e `+= 15`, mostrando cada resultado.

## 11. Operadores relacionais
1. Peça dois números e mostre `a > b`, `a < b`, `a >= b` e `a <= b`.
2. Peça um número e mostre `numero == "5"` e `numero === "5"`. Explique a diferença em comentário.
3. Mostre `5 != "5"` e `5 !== "5"` e explique a diferença em comentário.
4. Peça a idade e guarde em `const podeVotar` o resultado de `idade >= 16`. Mostre.
5. Peça dois números e mostre `a === b` e `a !== b`. Escreva por que é melhor usar `===` e `!==`.

## 12. Operadores lógicos
1. Mostre `true && false`, `true || false` e `!true`.
2. Peça dois números `x` e `y` e mostre `x > 5 && y < 5`.
3. Peça um número e mostre `numero < 5 || numero > 100` e `!(numero === 10)`.
4. Peça idade e se tem carteira (`"s"` ou `"n"`). Guarde em `podeDirigir` o resultado de `idade >= 18 && temCarteira`.
5. Mostre `!!false` e `!!true` e explique em comentário por que os dois `!` se cancelam.

## 13. Condicional simples (`if` / `else`)
1. Peça a idade e mostre `Maior de idade` se for 18 ou mais (só `if`).
2. Peça a nota e mostre `Aprovado` ou `Reprovado` (aprovado com 6 ou mais).
3. Peça um número e mostre `Par` ou `Ímpar` usando `%`.
4. Crie `let podeDirigir = false`, inverta com `!` e mostre `Pode dirigir` se ficar `true`, usando `if` sem chaves.
5. Peça o saldo e o valor da compra. Mostre `Compra aprovada` ou `Saldo insuficiente`.

## 14. Condicional composta (`else if` e lógicos)
1. Peça a nota e mostre `Excelente` (9 ou mais), `Aprovado` (7 ou mais), `Recuperação` (5 ou mais) ou `Reprovado`.
2. Peça um número e mostre `Positivo`, `Negativo` ou `Zero`.
3. Peça a idade e mostre `Tem desconto` se `idade < 12 || idade > 65`.
4. Peça idade e se tem carteira. Mostre `Pode dirigir` se `idade >= 18 && temCarteira`.
5. Peça se tem carteira (`"s"` ou `"n"`) e mostre `Sem carteira` usando `!`.

## 15. Condicional aninhada
1. Peça se está logado e se é admin (`"s"` ou `"n"`). Mostre `Painel de administrador`, `Painel de usuario` ou `Faca login`.
2. Peça idade e se tem carteira. Se for maior de idade: `Pode dirigir` ou `Pode tirar carteira`. Senão: `Menor de idade`.
3. Peça nota e faltas. Se a nota for 7 ou mais, `Aprovado` caso as faltas sejam 15 ou menos, senão `Reprovado por falta`. Nota menor: `Reprovado por nota`.
4. Peça um número. Se for positivo, mostre `Par` ou `Ímpar`. Senão, `Número não positivo`.
5. Peça estoque e preço. Com estoque, mostre `Vender` se o preço for menor que 50, senão `Preço alto`. Sem estoque, `Esgotado`.

## 16. Escolha (`switch`)
1. Peça um número de 1 a 7 e mostre o dia da semana (1 é Domingo). Use `default` para valores inválidos.
2. Peça o número do mês (1 a 3) e mostre `Janeiro`, `Fevereiro` ou `Março`. `default`: `Outro mês`.
3. Peça uma opção de 1 a 3 e mostre `Iniciar`, `Pausar` ou `Sair`. `default`: `Opção inválida`.
4. Peça uma nota de 1 a 3 e mostre `Ruim`, `Regular` ou `Bom`. `default`: `Inválida`.
5. Tire um `break` de um dos `case` e veja o que acontece. Escreva em comentário o resultado.

## 17. `while`
1. Peça um número `n` e mostre de 1 até `n`.
2. Peça um número `n` e mostre a contagem regressiva de `n` até 1.
3. Peça um limite e mostre os pares de 2 até o limite.
4. Peça um número `n` e mostre a soma de 1 até `n`.
5. Peça um número e mostre a tabuada dele de 1 a 10.

## 18. `do while`
1. Peça `n` e mostre de 1 até `n` com `do while`.
2. Com `numero = 10` e condição `numero < 5`, mostre que o bloco roda uma vez. Peça outro valor inicial e teste de novo.
3. Peça `n` e mostre a contagem regressiva de `n` até 1.
4. Peça `n` e mostre a soma de 1 até `n`.
5. Peça um número e mostre a tabuada dele com `do while`.

## 19. `for`
1. Peça `n` e mostre de 0 até `n - 1`.
2. Peça um limite e mostre os múltiplos de 5 de 1 até o limite.
3. Peça `n` e mostre a contagem regressiva de `n` até 1.
4. Peça `n` e mostre a soma de 1 até `n`.
5. Peça um número e mostre a tabuada dele de 1 a 10 com template string.

## 20. Funções
1. Crie `dividir(a: number, b: number): number`. Peça dois números e mostre o resultado.
2. Crie `maior(a: number, b: number): number` com `if`. Peça dois números e mostre o maior.
3. Crie `ehPar(n: number): boolean`. Peça um número e mostre o resultado.
4. Crie `apresentar(nome: string, idade: number): void` que mostra `Nome tem X anos`. Chame com valores lidos do teclado.
5. Crie `media(a: number, b: number, c: number): number`. Peça três notas e mostre a média.

## 21. Arrow function
1. Crie `const triplo = (n: number) => n * 3`. Peça um número e mostre o resultado.
2. Crie `const somar = (a: number, b: number): number => a + b`. Peça dois números e mostre a soma.
3. Crie uma arrow com chaves e `return` que calcula a área do retângulo. Peça base e altura.
4. Crie `const ehMaior = (idade: number): boolean => idade >= 18`. Peça a idade e mostre o resultado.
5. Crie `const saudar = (nome: string): void => { ... }` com template string. Peça o nome e chame a função.

## 22. Vetores (criação, acesso, `push`, `pop`, `shift`, `unshift`)
1. Crie `const cores: string[] = ["azul", "verde", "rosa"]`. Mostre o vetor e a posição que a pessoa digitar.
2. Mostre `length` e o último item usando `length - 1`.
3. Peça uma cor e coloque no fim com `push`. Peça outra e coloque no início com `unshift`. Mostre.
4. Remova o último com `pop` e o primeiro com `shift`. Mostre o vetor.
5. Crie `const notas: number[] = []`, peça 3 notas com `input`, adicione com `push` e mostre `notas[1]` e `notas.length`.

## 23. Vetores (`includes`, `indexOf`, `join`, `slice`, `reverse`)
1. Crie `["maçã", "uva", "pera"]`, peça uma fruta e mostre se ela existe (`includes`).
2. Peça uma fruta e mostre o índice (`indexOf`). Se não existir, aparece `-1`.
3. Junte os itens em uma string com `join`, usando como separador o que a pessoa digitar.
4. Copie só os dois primeiros itens com `slice(0, 2)` e mostre que o original não mudou.
5. Use `reverse` e mostre o vetor invertido. Escreva em comentário que ele altera o original.

## 24. Vetores (`map`, `filter`, `find`, `reduce`, `forEach`)
1. Peça 5 números com `input` e guarde em um vetor. Use `map` para obter os quadrados.
2. Com o mesmo vetor, use `filter` para ficar só com os ímpares.
3. Peça um valor e use `find` para achar o primeiro número maior que ele.
4. Use `reduce` para somar todos os itens, começando em `0`.
5. Use `forEach` para mostrar `Item: X` de cada número.

## 25. Vetores (outros métodos de alta ordem)
1. Peça 5 números. Use `findIndex` para achar o primeiro maior que 2 e `findLast` para o último menor que 5.
2. Use `some` para saber se algum é maior que 4 e `every` para saber se todos são positivos.
3. Ordene com `sort()` sem função e depois com `(a, b) => a - b`. Escreva a diferença em comentário.
4. Ordene em ordem decrescente com `(a, b) => b - a`.
5. Use `flatMap` para gerar `[n, n * 10]`. Depois use `flat`, `concat`, spread `...` e `at(-1)` para juntar e acessar o último.

## 26. Vetores (`splice`, `Array.from` e encadeamento)
1. Faça uma cópia com `[...numeros]`, peça a posição e use `splice(posicao, 2)` para remover dois itens.
2. Faça uma cópia, peça um número e insira na posição 1 com `splice(1, 0, numero)`.
3. Peça `n` e gere `n` múltiplos de 3 com `Array.from({ length: n }, (_, i) => i * 3)`.
4. Encadeie `filter`, `map` e `reduce` para somar os cubos dos números ímpares de um vetor lido do teclado.
5. Encadeie `map` e `filter` para dobrar os números e manter só os maiores que um valor digitado.

## 27. Vetor de objetos
Use este vetor:

```ts
const produtos = [
    { nome: "caneta", preco: 3, estoque: 10 },
    { nome: "caderno", preco: 15, estoque: 0 },
    { nome: "mochila", preco: 120, estoque: 4 },
]
```

1. Use `map` para mostrar só os nomes.
2. Peça um estoque mínimo e use `filter` para mostrar os produtos que atingem esse valor.
3. Peça o nome de um produto e use `find` para mostrar o objeto (ou `undefined`).
4. Use `reduce` para calcular o valor total em estoque (`preco * estoque`).
5. Use `some` (algum esgotado?), `every` (todos com preço maior que 0?) e `[...produtos].sort` para ordenar por preço.

## 28. `for of`
1. Crie `["a", "b", "c"]`, peça uma letra e percorra com `for of` mostrando cada item.
2. Peça 3 números, guarde em um vetor e percorra com `for of` mostrando o dobro de cada um.
3. Peça 3 números e some todos em `total` com `for of`.
4. Peça uma letra e percorra um vetor de textos mostrando só os que incluem essa letra.
5. Percorra o vetor `produtos` do assunto 27 e mostre `nome - R$ preco`.

## 29. `for` com índice
1. Percorra um vetor de 3 textos digitados mostrando índice e valor.
2. Percorra um vetor de números e mostre `Posição i: valor` com template string.
3. Peça 5 números e mostre só os que estão em posições pares (`i % 2 === 0`).
4. Percorra o vetor do fim ao começo (`i--`), mostrando cada item.
5. Percorra `produtos` mostrando `1 - caneta`, `2 - caderno`... usando `i + 1`.

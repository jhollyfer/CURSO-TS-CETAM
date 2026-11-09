# Exercícios

São 2 questões por assunto. Resolva as duas, em um arquivo `.ts`, sem olhar o `index.ts`.

As questões usam o `input` para ler o que a pessoa digita:

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
1. Peça o nome e a idade e mostre os dois em um único `console.log`. Peça de novo, troque os valores das mesmas variáveis (sem repetir o `let`) e mostre os novos.
2. Peça dois textos em `a` e `b` e troque o conteúdo entre as duas variáveis sem perder nenhum valor. Mostre antes e depois.

## 2. Constantes (`const`)
1. Crie `const TAXA = 0.1`, peça o preço e mostre o preço somado à taxa. Depois tente reatribuir `TAXA`, leia o erro e comente a linha.
2. Crie `const nome` e `let sobrenome`, os dois lidos do teclado. Troque só o `sobrenome` e mostre os dois. Escreva em comentário quando você escolhe `let` e quando escolhe `const`.

## 3. Tipos de dados (inferência)
1. Crie quatro `const` sem anotação (inteiro, decimal, texto e boolean) e escreva em comentário o tipo de cada uma. Confira passando o mouse sobre o nome no editor.
2. Peça dois números com `input` e mostre a soma sem converter e depois convertendo com `Number`. Escreva em comentário o tipo que o `input` devolve e por que os resultados diferem.

## 4. Tipos de dados (explícito)
1. Peça a matrícula e o nome e guarde em `const matricula: number` e `const aluno: string`. Crie também `const ativo: boolean = true` e mostre os três.
2. Crie `let nota: number` lida do teclado e atribua outro número depois. Escreva em comentário por que `nota = "nove"` dá erro.

## 5. Strings (aspas, crase e template string)
1. Escreva o mesmo texto com aspas duplas, aspas simples e crase. Mostre os três.
2. Peça o nome e a idade e mostre `Meu nome é X e daqui a 5 anos terei Y anos`, com a conta feita dentro do `${...}`.

## 6. Strings (`trim`, `toUpperCase`, `toLowerCase`, `includes`)
1. Peça um e-mail e mostre ele sem espaços nas pontas e em minúsculas, encadeando os métodos.
2. Peça uma frase e uma palavra. Mostre se a frase inclui a palavra sem diferenciar maiúsculas de minúsculas.

## 7. Strings (mais métodos)
1. Peça o nome completo e mostre a quantidade de caracteres e o primeiro nome (use `indexOf` para achar o espaço e `slice` para recortar).
2. Peça um número, some 1 e mostre o resultado com 3 dígitos (`7` vira `008`). Lembre que `padStart` só existe em string.

## 8. Números (`Math`, `toFixed` e conversões)
1. Peça um preço decimal e mostre com duas casas (`toFixed`), arredondado para cima (`Math.ceil`) e para baixo (`Math.floor`).
2. Gere um inteiro aleatório de 1 a 6 e mostre. Peça um palpite, converta com `Number` e mostre também `Number.isNaN` do que foi digitado. Teste digitando uma letra.

## 9. Operadores aritméticos
1. Peça base e altura e mostre a área e o perímetro do retângulo.
2. Peça três notas e mostre a média com uma casa decimal. Cuidado com a ordem das operações.

## 10. Operadores de atribuição
1. Peça um total inicial e aplique `-= 20`, `*= 2` e `+= 15`, mostrando o valor depois de cada passo.
2. Crie `let c = 0`, use `c++` três vezes e `c--` uma vez, depois `c **= 3` e `c %= 5`. Escreva em comentário o valor esperado antes de rodar e compare.

## 11. Operadores relacionais
1. Peça um número com `Number(input(...))` e mostre `numero == "5"` e `numero === "5"`. Explique a diferença em comentário.
2. Peça dois números `a` e `b` e mostre o resultado de `>`, `<`, `>=`, `<=`, `===` e `!==`, uma comparação por linha, com um rótulo na frente.

## 12. Operadores lógicos
1. Peça a idade e se tem carteira (`"s"` ou `"n"`). Guarde em `podeDirigir` o resultado de `idade >= 18 && temCarteira` e mostre.
2. Peça um número e mostre, sem usar `if`, se ele está fora do intervalo de 5 a 100 (`||`) e se é diferente de 10 (com `!`). Escreva em comentário por que `!!false` continua `false`.

## 13. Condicional simples (`if` / `else`)
1. Peça um número e mostre `Par` ou `Ímpar` usando `%`.
2. Peça o saldo e o valor da compra. Mostre `Compra aprovada` ou `Saldo insuficiente`.

## 14. Condicional composta (`else if` e lógicos)
1. Peça a nota e mostre `Excelente` (9 ou mais), `Aprovado` (7 ou mais), `Recuperação` (5 ou mais) ou `Reprovado`.
2. Peça a idade e mostre `Criança` (menos de 12), `Adolescente` (de 12 a 17), `Adulto` (de 18 a 65) ou `Idoso` (acima de 65). Teste os limites: 11, 12, 17, 18, 65 e 66.

## 15. Condicional aninhada
1. Peça se está logado e se é admin (`"s"` ou `"n"`). Mostre `Painel de administrador`, `Painel de usuário` ou `Faça login`.
2. Peça nota e faltas. Com nota 7 ou mais, mostre `Aprovado` se as faltas forem 15 ou menos, senão `Reprovado por falta`. Com nota menor, mostre `Reprovado por nota`.

## 16. Escolha (`switch`)
1. Peça um número de 1 a 7 e mostre o dia da semana (1 é Domingo). Use `default` para valores inválidos.
2. Peça uma opção de 1 a 3 e mostre `Iniciar`, `Pausar` ou `Sair`. Depois tire um `break` de um dos `case` e escreva em comentário o que acontece.

## 17. `while`
1. Peça um número `n` e mostre a soma de 1 até `n`.
2. Peça um número e mostre a tabuada dele de 1 a 10.

## 18. `do while`
1. Peça um número positivo e repita a pergunta enquanto a pessoa digitar zero ou negativo. Mostre o número aceito.
2. Com `numero = 10` e condição `numero < 5`, mostre que o bloco roda uma vez. Escreva em comentário a diferença para o `while`.

## 19. `for`
1. Peça um limite e mostre os múltiplos de 5 de 1 até o limite.
2. Peça um número e mostre a tabuada dele de 1 a 10 no formato `3 x 4 = 12`, com template string.

## 20. Funções
1. Crie `maior(a: number, b: number): number` com `if`. Peça dois números e mostre o maior.
2. Crie `apresentar(nome: string, idade: number): void` que mostra `Nome tem X anos`. Chame com valores lidos do teclado e explique em comentário por que ela é `void`.

## 21. Arrow function
1. Crie `const somar = (a: number, b: number): number => a + b`. Peça dois números e mostre a soma.
2. Crie uma arrow com chaves e `return` que calcula a área do retângulo. Peça base e altura e mostre o resultado.

## 22. Vetores (criação, acesso, `push`, `pop`, `shift`, `unshift`)
1. Crie `const cores: string[] = ["azul", "verde", "rosa"]`. Mostre o vetor, a posição que a pessoa digitar e o último item usando `length - 1`.
2. Peça duas cores, coloque uma no fim (`push`) e outra no início (`unshift`). Depois remova a última (`pop`) e a primeira (`shift`). Mostre o vetor a cada passo.

## 23. Vetores (`includes`, `indexOf`, `join`, `slice`, `reverse`)
1. Crie `["maçã", "uva", "pera"]`, peça uma fruta e mostre se ela existe (`includes`) e em que índice está (`indexOf`, que dá `-1` se não existir).
2. Copie os dois primeiros itens com `slice(0, 2)` e mostre que o original não mudou. Depois use `reverse` e escreva em comentário que ele altera o original.

## 24. Vetores (`map`, `filter`, `find`, `reduce`, `forEach`)
1. Peça 5 números e guarde em um vetor. Use `map` para obter os quadrados e `filter` para ficar só com os ímpares.
2. Com o mesmo vetor, use `reduce` para somar os itens, `find` para achar o primeiro maior que um valor digitado e `forEach` para mostrar `Item: X` de cada número.

## 25. Vetores (outros métodos de alta ordem)
1. Com 5 números lidos, use `some` para saber se algum é maior que 4, `every` para saber se todos são positivos e `findIndex` para achar o primeiro maior que 2.
2. Ordene `[3, 1, 10, 2]` com `sort()` sem função e depois com `(a, b) => a - b`. Escreva em comentário por que os resultados são diferentes.

## 26. Vetores (`splice`, `Array.from` e encadeamento)
1. Faça uma cópia com `[...numeros]`. Peça a posição e use `splice(posicao, 2)` para remover dois itens. Depois insira um número na posição 1 com `splice(1, 0, numero)`.
2. Encadeie `filter`, `map` e `reduce` para somar os cubos dos números ímpares de um vetor lido do teclado.

## 27. Vetor de objetos
Use este vetor:

```ts
const produtos = [
    { nome: "caneta", preco: 3, estoque: 10 },
    { nome: "caderno", preco: 15, estoque: 0 },
    { nome: "mochila", preco: 120, estoque: 4 },
]
```

1. Peça um estoque mínimo e mostre só os nomes dos produtos que atingem esse valor (`filter` e `map`).
2. Calcule o valor total em estoque (`preco * estoque`) com `reduce`. Peça o nome de um produto e mostre o objeto com `find` (ou `undefined` se não existir).

## 28. `for of`
1. Peça 3 números, guarde em um vetor e percorra com `for of` mostrando o dobro de cada um e, no fim, a soma de todos.
2. Percorra o vetor `produtos` do assunto 27 e mostre `nome - R$ preco`, só dos produtos com estoque.

## 29. `for` com índice
1. Peça 5 números e mostre só os que estão em posições pares (`i % 2 === 0`), no formato `Posição i: valor`.
2. Percorra `produtos` mostrando `1 - caneta`, `2 - caderno`... com `i + 1`. Depois percorra do fim ao começo (`i--`).

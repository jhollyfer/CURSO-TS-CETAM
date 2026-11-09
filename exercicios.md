# Exercícios

São 2 questões por assunto, todas no cenário da **Byte Burger**. Resolva as duas em um arquivo `.ts`, sem olhar o `index.ts`, e confira a saída com o exemplo de cada questão.

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

Onde a questão pedir um comentário, escreva no próprio arquivo com `//`.

---

## 1. Variáveis (`let`)
1. Peça `nomeCliente` e `telefone` e mostre os dois numa linha. A cliente corrigiu os dados: peça de novo, reatribua as mesmas variáveis (sem repetir o `let`) e mostre outra vez.
   Exemplo: `Maria 92991234567`, depois `Maria Eduarda 92988887777`.
2. Peça dois textos em `a` e `b` e troque o conteúdo das duas variáveis sem perder nenhum valor (você vai precisar de uma terceira variável). Mostre antes e depois.
   Exemplo: `burger batata` vira `batata burger`.

## 2. Constantes (`const`)
1. Crie `const LOJA = "Byte Burger"` e peça `nomeCliente`. Mostre os dois. Depois tente `LOJA = "Outra"`, leia o erro do editor, comente a linha e explique em comentário por que ela não funciona.
   Exemplo: `Byte Burger Maria`.
2. Crie `const TAXA = 0.1`, peça o preço com `input` e mostre os dois numa linha. Escreva em comentário se `TAXA` e `preco` devem ser `let` ou `const`, e por quê.
   Exemplo: digitando `50`, sai `50 0.1`.

## 3. Tipos de dados (inferência)
1. Sem escrever o tipo, crie `preco = 24.9`, `quantidade = 2`, `cardapio = "Hamburguer"` e `ehAdulto = idade >= 18` (com `idade = 15`). Escreva em comentário o tipo de cada uma e confira passando o mouse sobre o nome no editor.
   Exemplo: `number`, `number`, `string`, `boolean`.
2. Peça o nome e a idade com `input` e guarde em duas `const`. Escreva em comentário o tipo de cada uma e por que a idade também é `string`, mesmo sendo um número digitado. Confira passando o mouse sobre o nome.
   Exemplo: `string` e `string`.

## 4. Tipos de dados (explícito)
1. Com anotação de tipo, crie `LOJA` (string), `ANO_ABERTURA` (number, `2019`) e `aberto` (boolean). Peça o nome do cliente e guarde em `const cliente: string`. Mostre os quatro.
2. Crie `let nota: number = 7` e atribua `9` depois. Escreva em comentário por que `nota = "nove"` dá erro e por que `"9.5"` (com aspas) não é um `number`.

## 5. Strings (aspas, crase e template string)
1. Escreva `Byte Burger` com aspas duplas, aspas simples e crase e mostre os três. Depois, com `const ano = 2026`, mostre `Ano: ${ano}` com aspas duplas e com crase, e explique em comentário a diferença.
   Exemplo: `Ano: ${ano}` e `Ano: 2026`.
2. Peça nome e idade e mostre `Meu nome é Maria e tenho 13 anos`, com template string e uma variável dentro de cada `${...}`.
   Exemplo: `Maria` e `13`.

## 6. Strings (`trim`, `toUpperCase`, `toLowerCase`, `includes`)
1. O atendente digitou `" maria eduarda lima "` com espaços sobrando. Guarde em `nomeCliente`, crie `nome` sem os espaços das pontas e mostre `nome` em maiúsculas, em minúsculas e se ele inclui `"lima"`.
   Exemplo: `MARIA EDUARDA LIMA`, `maria eduarda lima`, `true`.
2. Peça um e-mail e mostre ele sem espaços nas pontas e em minúsculas, encadeando os métodos. Mostre também se ele inclui `"@"`.
   Exemplo: `"  ALUNO@CETAM.COM  "` vira `aluno@cetam.com` e `true`.

## 7. Strings (mais métodos)
1. Com `const nome = "maria eduarda lima"`, mostre a quantidade de caracteres, o nome separado em palavras (`split`) e o `primeiroNome` com inicial maiúscula. Use `indexOf` para achar o espaço, `charAt` e `slice`, e junte com crase.
   Exemplo: `18`, `[ 'maria', 'eduarda', 'lima' ]`, `Maria`.
2. Com `const telefone = "92988887777"`, monte `(92) 98888-7777` recortando com `slice` (sem digitar os números). Depois peça o número do pedido e mostre a senha com 3 dígitos (`padStart`), mais uma linha de 40 asteriscos (`repeat`).
   Exemplo: `(92) 98888-7777` e, com pedido `7`, `Senha: 007`.

## 8. Números (`Math`, `toFixed` e conversões)
1. A Maria pediu 2 hambúrgueres de `24.9`, 1 batata de `12.5` e 3 refris. O preço do refri veio como texto: `const precoRefriTexto = "7.5"`. Converta, calcule o `subtotal` e mostre: o subtotal com 2 casas, arredondado para cima, o maior e o menor entre os três totais (`Math.max` e `Math.min`) e o total com 10% de taxa, com 2 casas.
   Exemplo: `84.80`, `85`, `49.8`, `12.5`, `93.28`.
2. Sorteie a senha do pedido, um inteiro de 0 a 99, e mostre. Peça um palpite, converta com `Number` e mostre também `Number.isNaN` do que foi digitado. Teste digitando uma letra.
   Exemplo: palpite `abc` mostra `true`.

## 9. Operadores aritméticos
1. A mesa do salão é um retângulo. Peça base e altura e mostre a área e o perímetro.
   Exemplo: `4` e `3` dão `12` e `14`.
2. Peça três notas e mostre a média com uma casa decimal. Cuidado com a ordem das operações. Depois mostre o resto da divisão de `17` por `5` e explique em comentário o que o resto indica.
   Exemplo: `6`, `8` e `10` dão `8.0`; o resto é `2`.

## 10. Operadores de atribuição
1. Programa de pontos: crie `let pontos = 120` e `const totalPedido = 93.28`. Sem criar outra variável, some o `totalPedido` arredondado para baixo (`Math.floor`), multiplique por 2 (pontos em dobro) e tire 150 (milk-shake trocado). Mostre `pontos` depois de cada passo.
   Exemplo: `213`, `426`, `276`.
2. Crie `let visitas = 9` e `let estoqueBurger = 50`. A Maria visitou a loja (`++`), saíram 2 hambúrgueres (`-=`) e um caiu no chão (`--`). Mostre `visitas` e `estoqueBurger`. Depois, sem rodar, escreva em comentário o valor de `let n = 7` depois de `n %= 4` e depois de `n **= 2`, e confira.
   Exemplo: `10`, `47`; `n` fica `3` e depois `9`.

## 11. Operadores relacionais
1. Com `pontos = 276`, `qtdItens = 6`, `cupom = "BYTE10"`, `idadeCliente = 15` e `diaDaSemana = "terca"`, crie com `const`, saindo de uma comparação (nada de escrever `true` ou `false`): `ehVip` (pontos de 250 ou mais), `pedidoGrande` (mais de 5 itens), `cupomValido` (igual a `"BYTE10"`), `ehMenor` (menos de 18) e `diaPromocao` (igual a `"sexta"`). Mostre as cinco.
   Exemplo: `true true true true false`.
2. Peça um número com `Number(input(...))` e mostre `numero == "5"` e `numero === "5"`. Explique em comentário por que a gente prefere `===` e o que o editor mostra na linha do `==`.
   Exemplo: digitando `5`, saem `true` e `false`.

## 12. Operadores lógicos
1. Com as constantes da questão anterior e `pagouComPix = true`, crie: `ganhaBatata` (VIP e pedido grande), `ganhaDesconto` (cupom válido ou dia de promoção), `participaSorteio` (pagou com Pix e não é menor) e `naoEhVip` (o contrário de `ehVip`). Escreva em comentário o que você espera antes de rodar.
   Exemplo: `true true false false`.
2. Peça a idade e se tem carteira (`"s"` ou `"n"`). Guarde em `podeDirigir` o resultado de `idade >= 18 && temCarteira`, com `temCarteira` saindo de uma comparação com a resposta. Explique em comentário por que `!!false` continua `false`.
   Exemplo: `20` e `s` dão `true`; `20` e `n` dão `false`; `15` e `s` dão `false`.

## 13. Condicional simples (`if` / `else`)
1. Peça o número do pedido e mostre `Par` ou `Ímpar` usando `%`.
   Exemplo: `8` mostra `Par`; `7` mostra `Ímpar`.
2. Peça o saldo de pontos e o valor do resgate. Mostre `Resgate aprovado` ou `Pontos insuficientes`. Teste também o caso em que os dois valores são iguais.
   Exemplo: `276` e `150` aprovam; `150` e `150` também aprovam.

## 14. Condicional composta (`else if` e lógicos)
1. Peça a nota da avaliação e mostre `Excelente` (9 ou mais), `Aprovado` (7 ou mais), `Recuperação` (5 ou mais) ou `Reprovado`. Teste 9, 7, 5 e 4.9.
2. Peça o total do pedido e classifique: `Pedido grande` (mais de 100), `Pedido médio` (mais de 50) ou `Pedido pequeno`. Teste os limites 100, 100.01 e 50.
   Exemplo: `79.8` mostra `Pedido médio`; `100` mostra `Pedido médio`; `100.01` mostra `Pedido grande`.

## 15. Condicional aninhada
1. Peça se está logado e se é admin (`"s"` ou `"n"`). Mostre `Painel de administrador`, `Painel de usuário` ou `Faça login`.
   Exemplo: `s` e `n` mostram `Painel de usuário`; `n` mostra `Faça login`.
2. Peça nota e faltas. Com nota 7 ou mais, mostre `Aprovado` se as faltas forem 15 ou menos, senão `Reprovado por falta`. Com nota menor, mostre `Reprovado por nota`.
   Exemplo: nota `8` e faltas `16` mostram `Reprovado por falta`.

## 16. Escolha (`switch`)
1. Peça o número do combo e mostre: 1 `Combo Clássico`, 2 `Combo Duplo`, 3 `Combo Kids`. Qualquer outro, `Combo inválido`.
   Exemplo: `2` mostra `Combo Duplo`; `9` mostra `Combo inválido`.
2. Peça a forma de pagamento: 1 `Pagamento por Pix`, 2 `Pagamento no cartão`, 3 `Pagamento em dinheiro`, outro `Forma desconhecida`. Depois tire o `break` do `case 1` e escreva em comentário o que aparece quando a pessoa digita `1`.
   Exemplo (sem o `break`): `1` mostra `Pagamento por Pix` e `Pagamento no cartão`.

## 17. `while`
1. A Byte Burger tem senhas na fila. Peça quantas e, com `while`, mostre `Chamando senha 5`, `Chamando senha 4` ... até `Chamando senha 1`.
   Exemplo: `5` mostra cinco linhas, da 5 até a 1.
2. Peça um número `n` e mostre a soma de 1 até `n`.
   Exemplo: `100` mostra `5050`.

## 18. `do while`
1. Peça o número de itens do pedido e repita a pergunta enquanto a pessoa digitar zero ou negativo. Mostre o número aceito.
   Exemplo: `0`, `-3`, `4` mostram `4`.
2. Com `numero = 10` e condição `numero < 5`, mostre que o bloco roda uma vez. Escreva em comentário a diferença para o `while`.
   Exemplo: sai uma linha, mesmo com a condição falsa desde o começo.

## 19. `for`
1. Mostre a tabuada de um número lido do teclado, de 1 a 10, no formato `7 x 1 = 7`, com template string.
   Exemplo: `7` mostra de `7 x 1 = 7` até `7 x 10 = 70`.
2. Some só os números pares de 1 a 100 com `for`, um `let soma = 0` e `+=`.
   Exemplo: `2550`.

## 20. Funções
1. Escreva `calcularTotal(preco: number, quantidade: number): number`, que devolve o preço vezes a quantidade. Mostre o total de 2 hambúrgueres de `24.9`, com 2 casas.
   Exemplo: `49.80`.
2. Escreva `boasVindas(nome: string): void`, que mostra `Bem-vinda a Byte Burger, Maria!`. Chame com um nome lido do teclado e explique em comentário por que ela é `void` e por que a chamada fica sozinha na linha.
   Exemplo: `Maria` mostra `Bem-vinda a Byte Burger, Maria!`.

## 21. Arrow function
1. Escreva `taxa`, uma arrow sem chaves que devolve 10% do subtotal. Depois `comTaxa`, uma arrow com chaves e `return`, que devolve o subtotal mais a taxa. Mostre `comTaxa(84.8)` com 2 casas.
   Exemplo: `93.28`.
2. Escreva `const ehMaior = (idade: number): boolean => idade >= 18`. Peça a idade e mostre o resultado. Depois escreva `dobro` com um parâmetro e sem anotar o retorno, e explique em comentário qual tipo o TypeScript inferiu.
   Exemplo: `15` mostra `false`; `dobro(8)` mostra `16`.

## 22. Vetores (criação, acesso, `push`, `pop`, `shift`, `unshift`)
1. Crie `const pedidos: string[] = ["burger", "batata"]`. Chegou um `"refri"`: ponha no fim. Chegou um cliente VIP com `"milk-shake"`: ponha no início. Mostre a fila e quantos pedidos tem.
   Exemplo: `[ 'milk-shake', 'burger', 'batata', 'refri' ]` e `4`.
2. Atenda o primeiro da fila (`shift`), mostre os pedidos restantes numa linha, separados por `" | "`, o último pedido usando `length - 1` e se ainda tem `"batata"`.
   Exemplo: `burger | batata | refri`, `refri`, `true`.

## 23. Vetores (`includes`, `indexOf`, `join`, `slice`, `reverse`)
1. Com `["burger", "batata", "refri"]`, peça um item e mostre se ele existe (`includes`) e em que índice está (`indexOf`).
   Exemplo: `batata` mostra `true` e `1`; `pizza` mostra `false` e `-1`.
2. Copie os dois primeiros itens com `slice(0, 2)` e mostre que o original não mudou. Depois use `reverse` e mostre o vetor original. Escreva em comentário a diferença entre `slice` e `reverse`.
   Exemplo: o `slice` dá `[ 'burger', 'batata' ]`; depois do `reverse`, o original fica `[ 'refri', 'batata', 'burger' ]`.

## 24. Vetores (`map`, `filter`, `find`, `reduce`, `forEach`)
1. Com `const precos = [24.9, 12.5, 7.5]`: use `map` para somar 10% de taxa a cada preço (arredonde cada um para 2 casas), `filter` para ficar com os maiores que 10 e `reduce` para a soma de todos, com 2 casas.
   Exemplo: `[ 27.39, 13.75, 8.25 ]`, `[ 24.9, 12.5 ]`, `44.90`.
2. Peça 5 números e guarde em um vetor. Peça um valor e use `find` para mostrar o primeiro número maior que ele. Use `forEach` para mostrar `Item: X` de cada número.
   Exemplo: números `3 8 1 9 4` e valor `5` mostram `8`.

## 25. Vetores (outros métodos de alta ordem)
1. Com `const notas = [7, 9.5, 4, 8, 6]`, mostre o índice da primeira nota abaixo de 5 (`findIndex`), se alguma nota está abaixo de 5 (`some`) e se todas são maiores ou iguais a 4 (`every`).
   Exemplo: `2`, `true`, `true`.
2. Mostre as notas em ordem decrescente sem alterar `notas`, e a última nota com `at(-1)`. Depois ordene `[3, 1, 10, 2]` com `sort()` sem função e com `(a, b) => a - b`, e explique em comentário por que os resultados são diferentes.
   Exemplo: `[ 9.5, 8, 7, 6, 4 ]`, `6`, `[ 1, 10, 2, 3 ]` e `[ 1, 2, 3, 10 ]`.

## 26. Vetores (`splice`, `Array.from` e encadeamento)
1. Chegaram duas notas atrasadas, `10` e `5`. Junte com `notas.concat` num vetor novo `todas`. Depois, com `splice`, troque a nota do índice 2 de `todas` por `4.5`. Confira que `notas` continua igual.
   Exemplo: `[ 7, 9.5, 4.5, 8, 6, 10, 5 ]`.
2. Com `numeros = [1, 2, 3, 4, 5]`, encadeie `filter`, `map` e `reduce` para somar os cubos dos ímpares. Depois gere `[0, 3, 6, 9]` com `Array.from({ length: 4 }, ...)`.
   Exemplo: `153` e `[ 0, 3, 6, 9 ]`.

## 27. Vetor de objetos
Use o cardápio da Byte Burger:

```ts
const cardapio = [
    { nome: "burger", preco: 24.9, estoque: 47 },
    { nome: "batata", preco: 12.5, estoque: 0 },
    { nome: "refri", preco: 7.5, estoque: 30 },
    { nome: "milk-shake", preco: 15, estoque: 5 },
]
```

1. Mostre só os nomes (`map`), só os itens em falta (`filter`, estoque `0`) e o preço do `"refri"` (`find`).
   Exemplo: `[ 'burger', 'batata', 'refri', 'milk-shake' ]`, a batata e `7.5`.
2. Calcule o valor total em estoque (`preco * estoque`, somado com `reduce`), com 2 casas. Mostre se algum item custa mais de 20 (`some`), se todos têm estoque (`every`) e o cardápio do mais caro para o mais barato, sem alterar `cardapio`.
   Exemplo: `1470.30`, `true`, `false` e a ordem burger, milk-shake, batata, refri.

## 28. `for of`
1. Com `const pedidos = ["burger", "batata", "refri"]`, mostre cada pedido com `for of`. Depois some `[24.9, 12.5, 7.5]` com `for of` e um `let total = 0`, e mostre com 2 casas.
   Exemplo: `44.90`.
2. Percorra o `cardapio` do assunto 27 com `for of` e mostre o nome de cada item, com `esgotado` ao lado se o estoque for 0.
   Exemplo: `burger`, `batata esgotado`, `refri`, `milk-shake`.

## 29. `for` com índice
1. Com `pedidos` do assunto 28, mostre a fila numerada a partir de 1 (`i + 1`). Depois mostre a mesma fila do fim ao começo, com `i--`.
   Exemplo: `1 - burger`, `2 - batata`, `3 - refri`; depois `refri`, `batata`, `burger`.
2. Escreva `classificar(estoque: number): string` com `else if`: `"esgotado"` para 0, `"baixo"` para menos de 10, senão `"ok"`. Percorra o `cardapio` com `for` e índice e mostre a posição, o nome e a classificação.
   Exemplo: `0 - burger - ok`, `1 - batata - esgotado`, `2 - refri - ok`, `3 - milk-shake - baixo`.

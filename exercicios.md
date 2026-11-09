# Exercícios

São 2 questões por assunto. Cada uma tem um enunciado com os dados, o que fazer e a saída esperada.

Como resolver:

- Crie um arquivo `.ts` para cada assunto e escreva as duas questões nele.
- Todos os valores estão no enunciado: escreva-os direto no código, sem ler nada do teclado.
- Use só o que foi visto até o assunto da questão.
- Onde o enunciado pedir um comentário, escreva no próprio arquivo, com `//`.
- Rode com `tsx` e compare a saída com a esperada.

```bash
tsx ~/CURSO-TS-CETAM/seu-arquivo.ts
```

---

## 1. Variáveis (`let`)

**Questão 1.** A secretaria de uma escola cadastrou um aluno com o nome `"Pedro"` e a idade `11`. Crie as variáveis `nome` e `idade` com `let` e mostre as duas numa linha só. Depois a secretaria percebeu que errou: o nome certo é `"Pedro Alves"` e a idade é `12`. Troque os valores das mesmas variáveis, sem escrever `let` de novo, e mostre as duas outra vez.

Saída esperada:

```
Pedro 11
Pedro Alves 12
```

**Questão 2.** Há dois copos: `copo1` guarda `"suco"` e `copo2` guarda `"água"`. Crie as duas variáveis com `let` e mostre as duas numa linha. Troque o conteúdo dos copos, de modo que `copo1` fique com `"água"` e `copo2` com `"suco"`, sem perder nenhum valor (você vai precisar de uma terceira variável para guardar um dos valores). Mostre as duas outra vez.

Saída esperada:

```
suco água
água suco
```

## 2. Constantes (`const`)

**Questão 1.** Uma loja tem um nome que nunca muda, `"Mercadinho"`, e um cliente que está sendo atendido, `"Ana"`. Crie `loja` com `const` e `cliente` com `let`, e mostre os dois numa linha. Quando o próximo da fila chega, o cliente passa a ser `"Bruno"`: troque o valor de `cliente` e mostre os dois de novo. Por fim, escreva `loja = "Outro"`, veja o erro que o editor mostra e deixe essa linha comentada, com uma explicação, também em comentário, de por que ela dá erro.

Saída esperada:

```
Mercadinho Ana
Mercadinho Bruno
```

**Questão 2.** Você vai guardar quatro dados e precisa escolher `let` ou `const` para cada um: o valor de pi, `3.14`, que nunca muda (`PI`); a temperatura, que começa em `25` e muda durante o dia (`temperatura`); o nome da escola, `"CETAM"`, que não muda (`nomeEscola`); e a quantidade de alunos presentes, que começa em `20` e muda a cada chegada (`alunosPresentes`). Crie as quatro, troque `temperatura` para `30` e `alunosPresentes` para `21`, e mostre as quatro numa linha, nessa ordem.

Saída esperada:

```
3.14 30 CETAM 21
```

## 3. Tipos de dados (inferência)

**Questão 1.** Um caderno custa `19.9`, você comprou `3` e ele está em estoque. Crie as constantes `preco`, `quantidade`, `produto` (valendo `"caderno"`) e `emEstoque` (valendo `true`), sem escrever o tipo de nenhuma. Mostre as quatro numa linha. Ao lado de cada constante, escreva em comentário o tipo que o TypeScript descobriu (`number`, `string` ou `boolean`) e confira passando o mouse sobre o nome no editor.

Saída esperada:

```
19.9 3 caderno true
```

**Questão 2.** Crie `const idade = 15` e `const podeVotar = idade >= 16`. Crie também `const anoTexto = "2026"` e `const anoNumero = 2026`. Mostre `podeVotar`, `anoTexto` e `anoNumero` numa linha. Em comentário, escreva o tipo de cada uma das três e explique por que `anoTexto` e `anoNumero` têm tipos diferentes mesmo mostrando o mesmo valor.

Saída esperada:

```
false 2026 2026
```

## 4. Tipos de dados (explícito)

**Questão 1.** Uma ficha de cadastro tem `codigo` com `3021`, `altura` com `1.62`, `ativo` com `true` e `cidade` com `"Manaus"`. Crie as quatro constantes escrevendo o tipo de cada uma na frente do nome (`: number`, `: boolean` ou `: string`) e mostre as quatro numa linha, nessa ordem.

Saída esperada:

```
3021 1.62 true Manaus
```

**Questão 2.** Crie `let nota: number = 7` e depois atribua `9` a ela. Mostre `nota`. Em seguida, escreva a linha `nota = "nove"`, veja o erro do editor e deixe-a comentada. Em comentário, explique por que ela dá erro e por que `"9.5"`, com aspas, não é um `number`.

Saída esperada:

```
9
```

## 5. Strings (aspas, crase e template string)

**Questão 1.** Crie `let texto` com `"Bom dia"` (aspas duplas) e mostre. Troque o valor para `'Boa tarde'` (aspas simples) e mostre. Troque de novo para `` `Boa noite` `` (crase) e mostre.

Saída esperada:

```
Bom dia
Boa tarde
Boa noite
```

**Questão 2.** Você tem `const nome = "Lucas"` e `const idade = 13`. Com template string, mostre a frase `Meu nome é Lucas e tenho 13 anos`, sem escrever `Lucas` nem `13` direto na frase: use as variáveis dentro de `${...}`. Depois mostre `"Nome: ${nome}"` com aspas duplas e explique em comentário por que a saída não troca `${nome}` pelo valor.

Saída esperada:

```
Meu nome é Lucas e tenho 13 anos
Nome: ${nome}
```

## 6. Strings (`trim`, `toUpperCase`, `toLowerCase`, `includes`)

**Questão 1.** Um formulário recebeu o nome `"  Ana Souza  "`, com espaços sobrando no começo e no fim. Guarde esse texto em `entrada`. Crie `limpo`, que é `entrada` sem os espaços das pontas, `maiusculo`, que é `limpo` todo em maiúsculas, e `minusculo`, que é `limpo` todo em minúsculas. Mostre `limpo`, `maiusculo` e `minusculo` numa linha.

Saída esperada:

```
Ana Souza ANA SOUZA ana souza
```

**Questão 2.** Dada `const frase = "Aprender programar é legal"`, mostre numa linha só se a frase inclui a palavra `"programar"` e se ela inclui a palavra `"java"`.

Saída esperada:

```
true false
```

## 7. Strings (mais métodos)

**Questão 1.** Dada `const nome = "Maria Clara"`, mostre numa linha: a quantidade de caracteres, o primeiro caractere, a posição onde começa o trecho `"Clara"` e os 5 primeiros caracteres recortados do nome.

Saída esperada:

```
11 M 6 Maria
```

**Questão 2.** Faça três coisas, cada uma numa linha de saída. Primeiro, dado `const codigo = "42"`, mostre o código completado à esquerda com zeros até ter 5 caracteres. Depois, dado `const aviso = "ha"`, mostre o aviso repetido 4 vezes. Por fim, dada `const data = "10/05/2025"`, mostre a data separada em pedaços pela barra.

Saída esperada:

```
00042
hahahaha
[ '10', '05', '2025' ]
```

## 8. Números (`Math`, `toFixed` e conversões)

**Questão 1.** Dado `const preco = 7.456`, mostre numa linha: o preço com 2 casas decimais, o preço arredondado do jeito normal, o preço arredondado para baixo e o preço arredondado para cima.

Saída esperada:

```
7.46 7 7 8
```

**Questão 2.** Dado `const texto = "42.9"`, mostre três linhas: o texto convertido em número com `Number` mais 1, o texto convertido em inteiro com `parseInt` e o texto convertido em decimal com `parseFloat`. Em uma quarta linha, mostre um inteiro sorteado de 0 a 9.

Saída esperada:

```
43.9
42
42.9
(um inteiro de 0 a 9, que muda a cada execução)
```

## 9. Operadores aritméticos

**Questão 1.** Um terreno retangular tem `base = 12` metros e `altura = 5` metros. Crie as duas constantes e mostre numa linha a área (base vezes altura) e o perímetro (a soma de todos os lados).

Saída esperada:

```
60 34
```

**Questão 2.** Um aluno tirou as notas `6`, `8` e `10`. Mostre a média das três, tomando cuidado com a ordem das operações. Na mesma linha, mostre o resto da divisão de `17` por `5` e o resultado de `2` elevado a `10`. Em comentário, explique o que o resto da divisão indica.

Saída esperada:

```
8 2 1024
```

## 10. Operadores de atribuição

**Questão 1.** Uma conta começa com `let saldo = 100`. Sem criar outras variáveis e usando só operadores de atribuição, faça, nesta ordem: some `50`, tire `30`, multiplique por `2` e divida por `4`. Mostre o `saldo` depois de cada passo.

Saída esperada:

```
150
120
240
60
```

**Questão 2.** Crie `let contador = 0`. Some 1 três vezes com `++` e mostre. Tire 1 uma vez com `--` e mostre. Eleve o contador a `3` com `**=` e mostre. Por fim, troque o contador pelo resto da divisão por `5` com `%=` e mostre.

Saída esperada:

```
3
2
8
3
```

## 11. Operadores relacionais

**Questão 1.** Crie `const a = 10` e `const b = 4`. Mostre numa linha, nessa ordem, o resultado de `a > b`, `a < b`, `a >= 10` e `a <= 9`.

Saída esperada:

```
true false true false
```

**Questão 2.** Mostre numa linha, nessa ordem, o resultado de `5 === "5"`, `5 == "5"`, `5 !== "5"` e `5 != "5"`. O editor vai sublinhar a linha de vermelho, mas o `tsx` roda mesmo assim. Em comentário, escreva qual dos dois jeitos de comparar a gente prefere e por quê.

Saída esperada:

```
false true true false
```

## 12. Operadores lógicos

**Questão 1.** Uma pessoa tem `idade = 20`, tem carteira de motorista (`temCarteira = true`) e hoje não está chovendo (`estaChovendo = false`). Crie essas três constantes e depois crie, a partir delas: `podeDirigir`, que é verdadeiro quando a idade é 18 ou mais e a pessoa tem carteira; `passeioLivre`, que é o contrário de `estaChovendo`; e `ficaEmCasa`, que é verdadeiro quando está chovendo ou a idade é menor que 18. Mostre as três numa linha.

Saída esperada:

```
true true false
```

**Questão 2.** Para cada expressão abaixo, escreva em comentário o resultado que você espera, antes de rodar. Depois mostre as seis numa linha e confira: `true && false`, `true || false`, `!true`, `!!false`, `!(10 === 10)` e `10 < 5 || 5 < 7`.

Saída esperada:

```
false true false false false true
```

## 13. Condicional simples (`if` / `else`)

**Questão 1.** Dada `const numero = 7`, mostre `Par` se o número for par e `Ímpar` se for ímpar. Use o resto da divisão por 2. Depois troque `numero` para `8` e rode de novo.

Saída esperada (com `7`):

```
Ímpar
```

**Questão 2.** Uma pessoa tem `const saldo = 80` e quer fazer uma compra de `const compra = 120`. Mostre `Compra aprovada` se o saldo for suficiente e `Saldo insuficiente` se não for. Depois teste com `saldo = 120` para ver o que acontece quando os dois valores são iguais.

Saída esperada (com `80`):

```
Saldo insuficiente
```

## 14. Condicional composta (`else if`)

**Questão 1.** Dada `const nota = 7.5`, mostre `Excelente` se a nota for 9 ou mais, `Aprovado` se for 7 ou mais, `Recuperação` se for 5 ou mais e `Reprovado` nos outros casos. Depois teste com `9`, `5` e `4.9`.

Saída esperada (com `7.5`):

```
Aprovado
```

**Questão 2.** Dada `const temperatura = 28`, mostre `Muito quente` se for 30 ou mais, `Agradável` se for 20 ou mais, `Fresco` se for 10 ou mais e `Frio` nos outros casos. Depois teste com `30`, `10` e `9`.

Saída esperada (com `28`):

```
Agradável
```

## 15. Condicional aninhada

**Questão 1.** Um sistema tem `const logado = true` e `const admin = false`. Se a pessoa estiver logada, o sistema olha se ela é administradora: mostra `Painel de administrador` se for e `Painel de usuário` se não for. Se a pessoa não estiver logada, mostra `Faça login`. Escreva isso com um `if` dentro de outro e teste as quatro combinações de `logado` e `admin`.

Saída esperada (com `true` e `false`):

```
Painel de usuário
```

**Questão 2.** Um aluno tem `const nota = 8` e `const faltas = 16`. Se a nota for 7 ou mais, ele só é aprovado se as faltas forem 15 ou menos: mostre `Aprovado` nesse caso e `Reprovado por falta` se as faltas passarem de 15. Se a nota for menor que 7, mostre `Reprovado por nota`, não importa o número de faltas.

Saída esperada (com `8` e `16`):

```
Reprovado por falta
```

## 16. Escolha (`switch`)

**Questão 1.** Dada `const dia = 3`, use `switch` para mostrar o nome do dia: `1` é `Domingo`, `2` é `Segunda`, `3` é `Terça` e `4` é `Quarta`. Para qualquer outro número, mostre `Outro dia`. Depois teste com `9`.

Saída esperada (com `3`):

```
Terça
```

**Questão 2.** Dada `const opcao = 2`, use `switch` para mostrar: `1` é `Iniciar`, `2` é `Pausar`, `3` é `Sair` e qualquer outro valor é `Opção inválida`. Depois tire o `break` do `case 2`, rode de novo e escreva em comentário o que mudou na saída e por quê.

Saída esperada (com o `break`):

```
Pausar
```

Saída esperada (sem o `break` do `case 2`):

```
Pausar
Sair
```

## 17. `while`

**Questão 1.** Uma contagem regressiva começa em `let n = 5`. Com `while`, mostre `5`, `4`, `3`, `2` e `1`, um por linha, e depois mostre `Fim`.

Saída esperada:

```
5
4
3
2
1
Fim
```

**Questão 2.** Com `while`, some todos os números de 1 a 100. Use `let i = 1` e `let soma = 0`, e mostre a soma no fim.

Saída esperada:

```
5050
```

## 18. `do while`

**Questão 1.** Dada `let tentativa = 10`, escreva um `do while` que mostre `Tentativa 10`, some 1 em `tentativa` e continue enquanto `tentativa < 5`. Em comentário, explique por que o bloco rodou uma vez mesmo com a condição falsa desde o começo.

Saída esperada:

```
Tentativa 10
```

**Questão 2.** Com `do while`, mostre os números de 1 a 5, um por linha. Depois escreva o mesmo com `while` e, em comentário, explique em que situação você precisaria do `do while` em vez do `while`.

Saída esperada:

```
1
2
3
4
5
```

## 19. `for`

**Questão 1.** Com `for`, mostre a tabuada do `7`, de `7 x 1` até `7 x 10`, uma conta por linha, usando template string.

Saída esperada (as duas primeiras e a última linha):

```
7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70
```

**Questão 2.** Com `for`, `if` e o resto da divisão por 2, some só os números pares de 1 a 100 e mostre a soma no fim.

Saída esperada:

```
2550
```

## 20. Funções

**Questão 1.** Escreva a função `calcularTotal`, que recebe o `preco` e a `quantidade` (os dois `number`) e devolve o preço vezes a quantidade (também `number`). Mostre, numa linha, o total de `3` unidades de `12` e o total de `4` unidades de `2.5`.

Saída esperada:

```
36 10
```

**Questão 2.** Escreva a função `saudacao`, que recebe um `nome` (`string`) e mostra `Olá, ` seguido do nome e de `!`, sem devolver nada. Chame a função duas vezes, com `"Lucas"` e com `"Ana"`. Em comentário, explique por que o tipo de retorno é `void` e por que a chamada fica sozinha na linha, sem `console.log` em volta.

Saída esperada:

```
Olá, Lucas!
Olá, Ana!
```

## 21. Arrow function

**Questão 1.** Escreva `subtrair`, uma arrow function sem chaves que recebe dois números e devolve a diferença, e `multiplicar`, uma arrow function com chaves e `return` que devolve o produto. Mostre, numa linha, `subtrair(10, 4)` e `multiplicar(3, 7)`.

Saída esperada:

```
6 21
```

**Questão 2.** Escreva `dobro`, uma arrow function que recebe um número `n` e devolve o dobro, sem escrever o tipo de retorno, e `ehMaior`, uma arrow function que recebe uma `idade` e devolve se ela é 18 ou mais (tipo de retorno `boolean`). Mostre, numa linha, `dobro(8)`, `ehMaior(15)` e `ehMaior(18)`. Em comentário, escreva qual tipo de retorno o TypeScript descobriu para `dobro`.

Saída esperada:

```
16 false true
```

## 22. Vetores (criação, acesso, `push`, `pop`, `shift`, `unshift`)

**Questão 1.** Crie o vetor `const frutas: string[] = ["maçã", "banana", "uva"]`. Mostre o vetor inteiro, o primeiro item e a quantidade de itens, cada um em uma linha.

Saída esperada:

```
[ 'maçã', 'banana', 'uva' ]
maçã
3
```

**Questão 2.** Com o vetor `frutas` da questão anterior, coloque `"laranja"` no fim e `"morango"` no início e mostre o vetor. Depois tire o último item e o primeiro item e mostre o vetor de novo.

Saída esperada:

```
[ 'morango', 'maçã', 'banana', 'uva', 'laranja' ]
[ 'maçã', 'banana', 'uva' ]
```

## 23. Vetores (`includes`, `indexOf`, `join`, `slice`, `reverse`)

**Questão 1.** Dado `const cores = ["azul", "verde", "rosa"]`, mostre numa linha: se o vetor inclui `"verde"`, a posição de `"rosa"`, a posição de `"preto"` e todos os itens juntos em um texto, separados por vírgula e espaço.

Saída esperada:

```
true 2 -1 azul, verde, rosa
```

**Questão 2.** Com o mesmo vetor `cores`, copie os dois primeiros itens com `slice` e mostre a cópia e depois o vetor original. Em seguida, inverta a ordem com `reverse`, mostre o resultado e mostre o vetor original de novo. Em comentário, escreva qual dos dois métodos altera o vetor original.

Saída esperada:

```
[ 'azul', 'verde' ]
[ 'azul', 'verde', 'rosa' ]
[ 'rosa', 'verde', 'azul' ]
[ 'rosa', 'verde', 'azul' ]
```

## 24. Vetores (`map`, `filter`, `find`, `reduce`, `forEach`)

**Questão 1.** Dado `const numeros = [1, 2, 3, 4, 5]`, mostre, uma em cada linha: um vetor novo com o dobro de cada número, um vetor novo só com os números pares e a soma de todos os números, começando de `0`.

Saída esperada:

```
[ 2, 4, 6, 8, 10 ]
[ 2, 4 ]
15
```

**Questão 2.** Com o mesmo vetor `numeros`, mostre o primeiro número maior que `3`. Depois mostre cada número numa linha, no formato `Item: ` seguido do número.

Saída esperada:

```
4
Item: 1
Item: 2
Item: 3
Item: 4
Item: 5
```

## 25. Vetores (outros métodos de alta ordem)

**Questão 1.** Dado `const notas = [7, 9.5, 4, 8, 6]`, mostre numa linha: a posição da primeira nota abaixo de 5, se alguma nota está abaixo de 5, se todas as notas são 4 ou mais e a última nota que é 8 ou mais.

Saída esperada:

```
2 true true 8
```

**Questão 2.** Ordene o vetor `[3, 1, 10, 2]` três vezes, sempre partindo do vetor original: com `sort()` sem função, com `sort((a, b) => a - b)` e com `sort((a, b) => b - a)`. Mostre cada resultado numa linha e, em comentário, explique por que o primeiro ficou diferente do segundo.

Saída esperada:

```
[ 1, 10, 2, 3 ]
[ 1, 2, 3, 10 ]
[ 10, 3, 2, 1 ]
```

## 26. Vetores (`splice`, `Array.from` e encadeamento)

**Questão 1.** Dado `const numeros = [1, 2, 3, 4, 5]`, faça uma cópia com `[...numeros]` e, nessa cópia, remova 2 itens a partir da posição 1 e mostre a cópia. Depois insira o número `99` na posição 1, sem remover nada, e mostre a cópia. Por fim, mostre o vetor `numeros` original.

Saída esperada:

```
[ 1, 4, 5 ]
[ 1, 99, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
```

**Questão 2.** Com o vetor `numeros` da questão anterior, encadeie `filter`, `map` e `reduce` para somar o cubo (`n ** 3`) dos números ímpares. Em outra linha, use `Array.from` para criar o vetor `[0, 3, 6, 9]`, com 4 itens, cada um sendo a posição vezes 3.

Saída esperada:

```
153
[ 0, 3, 6, 9 ]
```

## 27. Vetor de objetos

Nas questões deste assunto e do seguinte, use este vetor:

```ts
const produtos = [
    { nome: "caneta", preco: 3, estoque: 10 },
    { nome: "caderno", preco: 15, estoque: 0 },
    { nome: "mochila", preco: 120, estoque: 4 },
]
```

**Questão 1.** Mostre, uma em cada linha: um vetor só com os nomes dos produtos, os produtos que têm estoque (estoque maior que 0) e o produto cujo nome é `"mochila"`.

Saída esperada:

```
[ 'caneta', 'caderno', 'mochila' ]
(os objetos da caneta e da mochila)
{ nome: 'mochila', preco: 120, estoque: 4 }
```

**Questão 2.** Mostre numa linha: o valor total em estoque (a soma de `preco * estoque` de todos os produtos), se algum produto está esgotado (estoque `0`) e se todos os produtos têm preço maior que 0. Em outra linha, mostre os produtos do mais barato para o mais caro, sem alterar o vetor `produtos`.

Saída esperada:

```
510 true true
(os objetos na ordem caneta, caderno, mochila)
```

## 28. `for of`

**Questão 1.** Dado `const notas: number[] = [7, 9, 5]`, percorra o vetor com `for of` mostrando cada nota numa linha. Durante o percurso, vá somando as notas em `let total = 0` e, depois do laço, mostre `Total: ` seguido da soma.

Saída esperada:

```
7
9
5
Total: 21
```

**Questão 2.** Percorra o vetor `produtos` do assunto 27 com `for of` e mostre uma linha para cada produto, no formato `nome - R$ preco`. Quando o estoque do produto for `0`, acrescente ` (esgotado)` no fim da linha.

Saída esperada:

```
caneta - R$ 3
caderno - R$ 15 (esgotado)
mochila - R$ 120
```

## 29. `for` com índice

**Questão 1.** Dado `const frutas = ["maçã", "banana", "uva"]`, use `for` com índice para mostrar a lista numerada a partir de 1, no formato `1 - maçã`. Depois mostre os itens do último para o primeiro, um por linha, também com `for` e índice.

Saída esperada:

```
1 - maçã
2 - banana
3 - uva
uva
banana
maçã
```

**Questão 2.** Dado `const numeros = [10, 20, 30, 40, 50]`, use `for` com índice para mostrar só os itens que estão em posições pares (0, 2 e 4), no formato `Posição 0: 10`.

Saída esperada:

```
Posição 0: 10
Posição 2: 30
Posição 4: 50
```

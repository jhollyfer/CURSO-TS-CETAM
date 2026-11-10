# Exercícios

São 2 questões por assunto. Cada uma tem um enunciado com os dados, o que fazer e a saída esperada.

Como resolver:

- Cada questão tem o seu arquivo, com o nome da questão: a questão 1 é o `Q1.ts`, a 2 é o `Q2.ts`, e assim por diante.
- Cada arquivo é independente: copie para ele os dados que a questão usa.
- Todos os valores estão no enunciado: escreva-os direto no código, sem ler nada do teclado.
- Use só o que foi visto até o assunto da questão.
- Onde o enunciado pedir um comentário, escreva no próprio arquivo, com `//`.
- Rode com `tsx` e compare a saída com a esperada. O comando de cada questão está no fim dela.

---

## 1. Variáveis (`let`)

**Questão 1** (arquivo `Q1.ts`). A secretaria de uma escola cadastrou um aluno com o nome `"Pedro"` e a idade `11`. Crie as variáveis `nome` e `idade` com `let` e mostre as duas numa linha só. Depois a secretaria percebeu que errou: o nome certo é `"Pedro Alves"` e a idade é `12`. Troque os valores das mesmas variáveis, sem escrever `let` de novo, e mostre as duas outra vez.

Saída esperada:

```
Pedro 11
Pedro Alves 12
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q1.ts
```

**Questão 2** (arquivo `Q2.ts`). Há dois copos: `copo1` guarda `"suco"` e `copo2` guarda `"água"`. Crie as duas variáveis com `let` e mostre as duas numa linha. Troque o conteúdo dos copos, de modo que `copo1` fique com `"água"` e `copo2` com `"suco"`, sem perder nenhum valor (você vai precisar de uma terceira variável para guardar um dos valores). Mostre as duas outra vez.

Saída esperada:

```
suco água
água suco
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q2.ts
```

## 2. Constantes (`const`)

**Questão 3** (arquivo `Q3.ts`). Uma loja tem um nome que nunca muda, `"Mercadinho"`, e um cliente que está sendo atendido, `"Ana"`. Crie `loja` com `const` e `cliente` com `let`, e mostre os dois numa linha. Quando o próximo da fila chega, o cliente passa a ser `"Bruno"`: troque o valor de `cliente` e mostre os dois de novo. Por fim, escreva `loja = "Outro"`, veja o erro que o editor mostra e deixe essa linha comentada, com uma explicação, também em comentário, de por que ela dá erro.

Saída esperada:

```
Mercadinho Ana
Mercadinho Bruno
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q3.ts
```

**Questão 4** (arquivo `Q4.ts`). Você vai guardar quatro dados e precisa escolher `let` ou `const` para cada um: o valor de pi, `3.14`, que nunca muda (`PI`); a temperatura, que começa em `25` e muda durante o dia (`temperatura`); o nome da escola, `"CETAM"`, que não muda (`nomeEscola`); e a quantidade de alunos presentes, que começa em `20` e muda a cada chegada (`alunosPresentes`). Crie as quatro, troque `temperatura` para `30` e `alunosPresentes` para `21`, e mostre as quatro numa linha, nessa ordem.

Saída esperada:

```
3.14 30 CETAM 21
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q4.ts
```

## 3. Tipos de dados (inferência)

**Questão 5** (arquivo `Q5.ts`). Um caderno custa `19.9`, você comprou `3` e ele está em estoque. Crie as constantes `preco`, `quantidade`, `produto` (valendo `"caderno"`) e `emEstoque` (valendo `true`), sem escrever o tipo de nenhuma. Mostre as quatro numa linha. Ao lado de cada constante, escreva em comentário o tipo que o TypeScript descobriu (`number`, `string` ou `boolean`) e confira passando o mouse sobre o nome no editor.

Saída esperada:

```
19.9 3 caderno true
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q5.ts
```

**Questão 6** (arquivo `Q6.ts`). Crie `const idade = 15` e `const podeVotar = idade >= 16`. Crie também `const anoTexto = "2026"` e `const anoNumero = 2026`. Mostre `podeVotar`, `anoTexto` e `anoNumero` numa linha. Em comentário, escreva o tipo de cada uma das três e explique por que `anoTexto` e `anoNumero` têm tipos diferentes mesmo mostrando o mesmo valor.

Saída esperada:

```
false 2026 2026
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q6.ts
```

## 4. Tipos de dados (explícito)

**Questão 7** (arquivo `Q7.ts`). Uma ficha de cadastro tem `codigo` com `3021`, `altura` com `1.62`, `ativo` com `true` e `cidade` com `"Manaus"`. Crie as quatro constantes escrevendo o tipo de cada uma na frente do nome (`: number`, `: boolean` ou `: string`) e mostre as quatro numa linha, nessa ordem.

Saída esperada:

```
3021 1.62 true Manaus
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q7.ts
```

**Questão 8** (arquivo `Q8.ts`). Crie `let nota: number = 7` e depois atribua `9` a ela. Mostre `nota`. Em seguida, escreva a linha `nota = "nove"`, veja o erro do editor e deixe-a comentada. Em comentário, explique por que ela dá erro e por que `"9.5"`, com aspas, não é um `number`.

Saída esperada:

```
9
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q8.ts
```

## 5. Strings (aspas, crase e template string)

**Questão 9** (arquivo `Q9.ts`). Crie `let animal` com `"gato"` (aspas duplas) e mostre. Troque o valor para `'cachorro'` (aspas simples) e mostre. Troque de novo para `` `papagaio` `` (crase) e mostre.

Saída esperada:

```
gato
cachorro
papagaio
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q9.ts
```

**Questão 10** (arquivo `Q10.ts`). Você tem `const aluno = "Marina"` e `const nota = 9`. Com template string, mostre a frase `Marina tirou nota 9 na prova`, sem escrever `Marina` nem `9` direto na frase: use as variáveis dentro de `${...}`. Depois mostre `"Aluno: ${aluno}"` com aspas duplas e explique em comentário por que a saída não troca `${aluno}` pelo valor.

Saída esperada:

```
Marina tirou nota 9 na prova
Aluno: ${aluno}
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q10.ts
```

## 6. Strings (`trim`, `toUpperCase`, `toLowerCase`, `includes`)

**Questão 11** (arquivo `Q11.ts`). Um formulário recebeu o nome do estabelecimento `"  Cafeteria Central  "`, com espaços sobrando no começo e no fim. Guarde esse texto em `entrada`. Crie `limpo`, que é `entrada` sem os espaços das pontas, `maiusculo`, que é `limpo` todo em maiúsculas, e `minusculo`, que é `limpo` todo em minúsculas. Mostre `limpo`, `maiusculo` e `minusculo` numa linha.

Saída esperada:

```
Cafeteria Central CAFETERIA CENTRAL cafeteria central
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q11.ts
```

**Questão 12** (arquivo `Q12.ts`). Dado `const arquivo = "relatorio.pdf"`, mostre numa linha só se o nome do arquivo inclui o trecho `".pdf"` e se ele inclui o trecho `".docx"`.

Saída esperada:

```
true false
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q12.ts
```

## 7. Strings (mais métodos)

**Questão 13** (arquivo `Q13.ts`). Dado `const pais = "Costa Rica"`, mostre numa linha: a quantidade de caracteres, o primeiro caractere, a posição onde começa o trecho `"Rica"` e os 5 primeiros caracteres recortados do país.

Saída esperada:

```
10 C 6 Costa
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q13.ts
```

**Questão 14** (arquivo `Q14.ts`). Faça três coisas, cada uma numa linha de saída. Primeiro, dado `const sala = "5"`, mostre a sala completada à esquerda com zeros até ter 3 caracteres. Depois, dado `const eco = "la"`, mostre o eco repetido 5 vezes. Por fim, dada `const data = "2025-11-10"`, mostre a data separada em pedaços pelo hífen.

Saída esperada:

```
005
lalalalala
[ '2025', '11', '10' ]
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q14.ts
```

## 8. Números (`Math`, `toFixed` e conversões)

**Questão 15** (arquivo `Q15.ts`). Dado `const altura = 15.678`, mostre numa linha: a altura com 2 casas decimais, a altura arredondada do jeito normal, a altura arredondada para baixo e a altura arredondada para cima.

Saída esperada:

```
15.68 16 15 16
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q15.ts
```

**Questão 16** (arquivo `Q16.ts`). Dado `const texto = "99.9"`, mostre três linhas: o texto convertido em número com `Number` mais 1, o texto convertido em inteiro com `parseInt` e o texto convertido em decimal com `parseFloat`. Em uma quarta linha, mostre um inteiro sorteado de 0 a 9.

Saída esperada:

```
100.9
99
99.9
(um inteiro de 0 a 9, que muda a cada execução)
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q16.ts
```

## 9. Operadores aritméticos

**Questão 17** (arquivo `Q17.ts`). Um terreno retangular tem `base = 12` metros e `altura = 5` metros. Crie as duas constantes e mostre numa linha a área (base vezes altura) e o perímetro (a soma de todos os lados).

Saída esperada:

```
60 34
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q17.ts
```

**Questão 18** (arquivo `Q18.ts`). Um aluno tirou as notas `6`, `8` e `10`. Mostre a média das três, tomando cuidado com a ordem das operações. Na mesma linha, mostre o resto da divisão de `17` por `5` e o resultado de `2` elevado a `10`. Em comentário, explique o que o resto da divisão indica.

Saída esperada:

```
8 2 1024
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q18.ts
```

## 10. Operadores de atribuição

**Questão 19** (arquivo `Q19.ts`). Uma conta começa com `let saldo = 100`. Sem criar outras variáveis e usando só operadores de atribuição, faça, nesta ordem: some `50`, tire `30`, multiplique por `2` e divida por `4`. Mostre o `saldo` depois de cada passo.

Saída esperada:

```
150
120
240
60
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q19.ts
```

**Questão 20** (arquivo `Q20.ts`). Crie `let contador = 0`. Some 1 três vezes com `++` e mostre. Tire 1 uma vez com `--` e mostre. Eleve o contador a `3` com `**=` e mostre. Por fim, troque o contador pelo resto da divisão por `5` com `%=` e mostre.

Saída esperada:

```
3
2
8
3
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q20.ts
```

## 11. Operadores relacionais

**Questão 21** (arquivo `Q21.ts`). Crie `const a = 10` e `const b = 4`. Mostre numa linha, nessa ordem, o resultado de `a > b`, `a < b`, `a >= 10` e `a <= 9`.

Saída esperada:

```
true false true false
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q21.ts
```

**Questão 22** (arquivo `Q22.ts`). Mostre numa linha, nessa ordem, o resultado de `5 === "5"`, `5 == "5"`, `5 !== "5"` e `5 != "5"`. O editor vai sublinhar a linha de vermelho, mas o `tsx` roda mesmo assim. Em comentário, escreva qual dos dois jeitos de comparar a gente prefere e por quê.

Saída esperada:

```
false true true false
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q22.ts
```

## 12. Operadores lógicos

**Questão 23** (arquivo `Q23.ts`). Uma pessoa tem `idade = 20`, tem carteira de motorista (`temCarteira = true`) e hoje não está chovendo (`estaChovendo = false`). Crie essas três constantes e depois crie, a partir delas: `podeDirigir`, que é verdadeiro quando a idade é 18 ou mais e a pessoa tem carteira; `passeioLivre`, que é o contrário de `estaChovendo`; e `ficaEmCasa`, que é verdadeiro quando está chovendo ou a idade é menor que 18. Mostre as três numa linha.

Saída esperada:

```
true true false
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q23.ts
```

**Questão 24** (arquivo `Q24.ts`). Para cada expressão abaixo, escreva em comentário o resultado que você espera, antes de rodar. Depois mostre as seis numa linha e confira: `true && false`, `true || false`, `!true`, `!!false`, `!(10 === 10)` e `10 < 5 || 5 < 7`.

Saída esperada:

```
false true false false false true
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q24.ts
```

## 13. Condicional simples (`if` / `else`)

**Questão 25** (arquivo `Q25.ts`). Dada `const numero = 7`, mostre `Par` se o número for par e `Ímpar` se for ímpar. Use o resto da divisão por 2. Depois troque `numero` para `8` e rode de novo.

Saída esperada (com `7`):

```
Ímpar
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q25.ts
```

**Questão 26** (arquivo `Q26.ts`). Uma pessoa tem `const saldo = 80` e quer fazer uma compra de `const compra = 120`. Mostre `Compra aprovada` se o saldo for suficiente e `Saldo insuficiente` se não for. Depois teste com `saldo = 120` para ver o que acontece quando os dois valores são iguais.

Saída esperada (com `80`):

```
Saldo insuficiente
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q26.ts
```

## 14. Condicional composta (`else if`)

**Questão 27** (arquivo `Q27.ts`). Dada `const nota = 7.5`, mostre `Excelente` se a nota for 9 ou mais, `Aprovado` se for 7 ou mais, `Recuperação` se for 5 ou mais e `Reprovado` nos outros casos. Depois teste com `9`, `5` e `4.9`.

Saída esperada (com `7.5`):

```
Aprovado
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q27.ts
```

**Questão 28** (arquivo `Q28.ts`). Dada `const temperatura = 28`, mostre `Muito quente` se for 30 ou mais, `Agradável` se for 20 ou mais, `Fresco` se for 10 ou mais e `Frio` nos outros casos. Depois teste com `30`, `10` e `9`.

Saída esperada (com `28`):

```
Agradável
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q28.ts
```

## 15. Condicional aninhada

**Questão 29** (arquivo `Q29.ts`). Um sistema tem `const logado = true` e `const admin = false`. Se a pessoa estiver logada, o sistema olha se ela é administradora: mostra `Painel de administrador` se for e `Painel de usuário` se não for. Se a pessoa não estiver logada, mostra `Faça login`. Escreva isso com um `if` dentro de outro e teste as quatro combinações de `logado` e `admin`.

Saída esperada (com `true` e `false`):

```
Painel de usuário
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q29.ts
```

**Questão 30** (arquivo `Q30.ts`). Um aluno tem `const nota = 8` e `const faltas = 16`. Se a nota for 7 ou mais, ele só é aprovado se as faltas forem 15 ou menos: mostre `Aprovado` nesse caso e `Reprovado por falta` se as faltas passarem de 15. Se a nota for menor que 7, mostre `Reprovado por nota`, não importa o número de faltas.

Saída esperada (com `8` e `16`):

```
Reprovado por falta
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q30.ts
```

## 16. Escolha (`switch`)

**Questão 31** (arquivo `Q31.ts`). Dada `const dia = 3`, use `switch` para mostrar o nome do dia: `1` é `Domingo`, `2` é `Segunda`, `3` é `Terça` e `4` é `Quarta`. Para qualquer outro número, mostre `Outro dia`. Depois teste com `9`.

Saída esperada (com `3`):

```
Terça
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q31.ts
```

**Questão 32** (arquivo `Q32.ts`). Dada `const opcao = 2`, use `switch` para mostrar: `1` é `Iniciar`, `2` é `Pausar`, `3` é `Sair` e qualquer outro valor é `Opção inválida`. Depois tire o `break` do `case 2`, rode de novo e escreva em comentário o que mudou na saída e por quê.

Saída esperada (com o `break`):

```
Pausar
```

Saída esperada (sem o `break` do `case 2`):

```
Pausar
Sair
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q32.ts
```

## 17. `while`

**Questão 33** (arquivo `Q33.ts`). Uma contagem regressiva começa em `let n = 5`. Com `while`, mostre `5`, `4`, `3`, `2` e `1`, um por linha, e depois mostre `Fim`.

Saída esperada:

```
5
4
3
2
1
Fim
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q33.ts
```

**Questão 34** (arquivo `Q34.ts`). Com `while`, some todos os números de 1 a 100. Use `let i = 1` e `let soma = 0`, e mostre a soma no fim.

Saída esperada:

```
5050
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q34.ts
```

## 18. `do while`

**Questão 35** (arquivo `Q35.ts`). Dada `let tentativa = 10`, escreva um `do while` que mostre `Tentativa 10`, some 1 em `tentativa` e continue enquanto `tentativa < 5`. Em comentário, explique por que o bloco rodou uma vez mesmo com a condição falsa desde o começo.

Saída esperada:

```
Tentativa 10
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q35.ts
```

**Questão 36** (arquivo `Q36.ts`). Com `do while`, mostre os números de 1 a 5, um por linha. Depois escreva o mesmo com `while` e, em comentário, explique em que situação você precisaria do `do while` em vez do `while`.

Saída esperada:

```
1
2
3
4
5
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q36.ts
```

## 19. `for`

**Questão 37** (arquivo `Q37.ts`). Com `for`, mostre a tabuada do `7`, de `7 x 1` até `7 x 10`, uma conta por linha, usando template string.

Saída esperada (as duas primeiras e a última linha):

```
7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q37.ts
```

**Questão 38** (arquivo `Q38.ts`). Com `for`, `if` e o resto da divisão por 2, some só os números pares de 1 a 100 e mostre a soma no fim.

Saída esperada:

```
2550
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q38.ts
```

## 20. Funções

**Questão 39** (arquivo `Q39.ts`). Escreva a função `calcularTotal`, que recebe o `preco` e a `quantidade` (os dois `number`) e devolve o preço vezes a quantidade (também `number`). Mostre, numa linha, o total de `3` unidades de `12` e o total de `4` unidades de `2.5`.

Saída esperada:

```
36 10
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q39.ts
```

**Questão 40** (arquivo `Q40.ts`). Escreva a função `saudacao`, que recebe um `nome` (`string`) e mostra `Olá, ` seguido do nome e de `!`, sem devolver nada. Chame a função duas vezes, com `"Lucas"` e com `"Ana"`. Em comentário, explique por que o tipo de retorno é `void` e por que a chamada fica sozinha na linha, sem `console.log` em volta.

Saída esperada:

```
Olá, Lucas!
Olá, Ana!
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q40.ts
```

## 21. Arrow function

**Questão 41** (arquivo `Q41.ts`). Escreva `subtrair`, uma arrow function sem chaves que recebe dois números e devolve a diferença, e `multiplicar`, uma arrow function com chaves e `return` que devolve o produto. Mostre, numa linha, `subtrair(10, 4)` e `multiplicar(3, 7)`.

Saída esperada:

```
6 21
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q41.ts
```

**Questão 42** (arquivo `Q42.ts`). Escreva `dobro`, uma arrow function que recebe um número `n` e devolve o dobro, sem escrever o tipo de retorno, e `ehMaior`, uma arrow function que recebe uma `idade` e devolve se ela é 18 ou mais (tipo de retorno `boolean`). Mostre, numa linha, `dobro(8)`, `ehMaior(15)` e `ehMaior(18)`. Em comentário, escreva qual tipo de retorno o TypeScript descobriu para `dobro`.

Saída esperada:

```
16 false true
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q42.ts
```

## 22. Vetores (criação, acesso, `push`, `pop`, `shift`, `unshift`)

**Questão 43** (arquivo `Q43.ts`). Crie o vetor `const frutas: string[] = ["maçã", "banana", "uva"]`. Mostre o vetor inteiro, o primeiro item e a quantidade de itens, cada um em uma linha.

Saída esperada:

```
[ 'maçã', 'banana', 'uva' ]
maçã
3
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q43.ts
```

**Questão 44** (arquivo `Q44.ts`). Crie de novo `const frutas: string[] = ["maçã", "banana", "uva"]`. Coloque `"laranja"` no fim e `"morango"` no início e mostre o vetor. Depois tire o último item e o primeiro item e mostre o vetor de novo.

Saída esperada:

```
[ 'morango', 'maçã', 'banana', 'uva', 'laranja' ]
[ 'maçã', 'banana', 'uva' ]
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q44.ts
```

## 23. Vetores (`includes`, `indexOf`, `join`, `slice`, `reverse`)

**Questão 45** (arquivo `Q45.ts`). Dado `const cores = ["azul", "verde", "rosa"]`, mostre numa linha: se o vetor inclui `"verde"`, a posição de `"rosa"`, a posição de `"preto"` e todos os itens juntos em um texto, separados por vírgula e espaço.

Saída esperada:

```
true 2 -1 azul, verde, rosa
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q45.ts
```

**Questão 46** (arquivo `Q46.ts`). Crie de novo `const cores = ["azul", "verde", "rosa"]`. Copie os dois primeiros itens com `slice` e mostre a cópia e depois o vetor original. Em seguida, inverta a ordem com `reverse`, mostre o resultado e mostre o vetor original de novo. Em comentário, escreva qual dos dois métodos altera o vetor original.

Saída esperada:

```
[ 'azul', 'verde' ]
[ 'azul', 'verde', 'rosa' ]
[ 'rosa', 'verde', 'azul' ]
[ 'rosa', 'verde', 'azul' ]
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q46.ts
```

## 24. Vetores (`map`, `filter`, `find`, `reduce`, `forEach`)

**Questão 47** (arquivo `Q47.ts`). Dado `const numeros = [1, 2, 3, 4, 5]`, mostre, uma em cada linha: um vetor novo com o dobro de cada número, um vetor novo só com os números pares e a soma de todos os números, começando de `0`.

Saída esperada:

```
[ 2, 4, 6, 8, 10 ]
[ 2, 4 ]
15
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q47.ts
```

**Questão 48** (arquivo `Q48.ts`). Dado `const numeros = [1, 2, 3, 4, 5]`, mostre o primeiro número maior que `3`. Depois mostre cada número numa linha, no formato `Item: ` seguido do número.

Saída esperada:

```
4
Item: 1
Item: 2
Item: 3
Item: 4
Item: 5
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q48.ts
```

## 25. Vetores (outros métodos de alta ordem)

**Questão 49** (arquivo `Q49.ts`). Dado `const notas = [7, 9.5, 4, 8, 6]`, mostre numa linha: a posição da primeira nota abaixo de 5, se alguma nota está abaixo de 5, se todas as notas são 4 ou mais e a última nota que é 8 ou mais.

Saída esperada:

```
2 true true 8
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q49.ts
```

**Questão 50** (arquivo `Q50.ts`). Ordene o vetor `[3, 1, 10, 2]` três vezes, sempre partindo do vetor original: com `sort()` sem função, com `sort((a, b) => a - b)` e com `sort((a, b) => b - a)`. Mostre cada resultado numa linha e, em comentário, explique por que o primeiro ficou diferente do segundo.

Saída esperada:

```
[ 1, 10, 2, 3 ]
[ 1, 2, 3, 10 ]
[ 10, 3, 2, 1 ]
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q50.ts
```

## 26. Vetores (`splice`, `Array.from` e encadeamento)

**Questão 51** (arquivo `Q51.ts`). Dado `const numeros = [1, 2, 3, 4, 5]`, faça uma cópia com `[...numeros]` e, nessa cópia, remova 2 itens a partir da posição 1 e mostre a cópia. Depois insira o número `99` na posição 1, sem remover nada, e mostre a cópia. Por fim, mostre o vetor `numeros` original.

Saída esperada:

```
[ 1, 4, 5 ]
[ 1, 99, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q51.ts
```

**Questão 52** (arquivo `Q52.ts`). Dado `const numeros = [1, 2, 3, 4, 5]`, encadeie `filter`, `map` e `reduce` para somar o cubo (`n ** 3`) dos números ímpares. Em outra linha, use `Array.from` para criar o vetor `[0, 3, 6, 9]`, com 4 itens, cada um sendo a posição vezes 3.

Saída esperada:

```
153
[ 0, 3, 6, 9 ]
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q52.ts
```

## 27. Vetor de objetos

Nas questões deste assunto e do seguinte, copie este vetor para o arquivo:

```ts
const produtos = [
    { nome: "caneta", preco: 3, estoque: 10 },
    { nome: "caderno", preco: 15, estoque: 0 },
    { nome: "mochila", preco: 120, estoque: 4 },
]
```

**Questão 53** (arquivo `Q53.ts`). Mostre, uma em cada linha: um vetor só com os nomes dos produtos, os produtos que têm estoque (estoque maior que 0) e o produto cujo nome é `"mochila"`.

Saída esperada:

```
[ 'caneta', 'caderno', 'mochila' ]
(os objetos da caneta e da mochila)
{ nome: 'mochila', preco: 120, estoque: 4 }
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q53.ts
```

**Questão 54** (arquivo `Q54.ts`). Mostre numa linha: o valor total em estoque (a soma de `preco * estoque` de todos os produtos), se algum produto está esgotado (estoque `0`) e se todos os produtos têm preço maior que 0. Em outra linha, mostre os produtos do mais barato para o mais caro, sem alterar o vetor `produtos`.

Saída esperada:

```
510 true true
(os objetos na ordem caneta, caderno, mochila)
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q54.ts
```

## 28. `for of`

**Questão 55** (arquivo `Q55.ts`). Dado `const notas: number[] = [7, 9, 5]`, percorra o vetor com `for of` mostrando cada nota numa linha. Durante o percurso, vá somando as notas em `let total = 0` e, depois do laço, mostre `Total: ` seguido da soma.

Saída esperada:

```
7
9
5
Total: 21
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q55.ts
```

**Questão 56** (arquivo `Q56.ts`). Copie o vetor `produtos` do assunto 27 para o arquivo e percorra-o com `for of` e mostre uma linha para cada produto, no formato `nome - R$ preco`. Quando o estoque do produto for `0`, acrescente ` (esgotado)` no fim da linha.

Saída esperada:

```
caneta - R$ 3
caderno - R$ 15 (esgotado)
mochila - R$ 120
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q56.ts
```

## 29. `for` com índice

**Questão 57** (arquivo `Q57.ts`). Dado `const frutas = ["maçã", "banana", "uva"]`, use `for` com índice para mostrar a lista numerada a partir de 1, no formato `1 - maçã`. Depois mostre os itens do último para o primeiro, um por linha, também com `for` e índice.

Saída esperada:

```
1 - maçã
2 - banana
3 - uva
uva
banana
maçã
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q57.ts
```

**Questão 58** (arquivo `Q58.ts`). Dado `const numeros = [10, 20, 30, 40, 50]`, use `for` com índice para mostrar só os itens que estão em posições pares (0, 2 e 4), no formato `Posição 0: 10`.

Saída esperada:

```
Posição 0: 10
Posição 2: 30
Posição 4: 50
```

Para executar:

```bash
tsx ~/CURSO-TS-CETAM/Q58.ts
```

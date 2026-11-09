# Exercícios — Curso TypeScript (CETAM)

Cada módulo tem 5 questões, todas usando **somente** o que aparece no `index.ts`.
Escolha uma (ou mais) por módulo e resolva em um arquivo `.ts`, rodando com `tsx`.

---

## 1. Variáveis (`let`)
1. Crie `cidade` com seu município, mostre com `console.log`, troque o valor e mostre de novo.
2. Crie `saldo = 100`, reatribua para `250` e mostre os dois valores (antes e depois).
3. Crie `nome` e `idade`, mostre os dois juntos em um único `console.log`, depois altere ambos e mostre novamente.
4. Crie `contador = 0`, reatribua três vezes (1, 2, 3) mostrando o valor após cada troca.
5. Crie duas variáveis `a = 1` e `b = 2`, depois reatribua `a = b` e mostre as duas.

## 2. Constantes (`const`)
1. Crie `const ANO_NASCIMENTO` com seu ano e mostre.
2. Crie `const GRAVIDADE = 9.8` e mostre. Tente reatribuir e leia a mensagem de erro (depois comente a linha).
3. Crie `const nome` e `let sobrenome`; troque apenas o `sobrenome` e mostre os dois.
4. Crie `const TAXA = 0.1` e `let preco = 200`; mostre `preco * TAXA`.
5. Explique em um comentário a diferença entre `let` e `const` e dê um exemplo de cada.

## 3. Tipos de dados — inferência
1. Crie quatro `const` sem anotação (number, decimal, string, boolean) e comente o tipo inferido de cada.
2. Crie `const maior = 20 > 10` e diga qual tipo o TypeScript infere.
3. Crie `const temperatura = 36.6` e comente por que não existe separação entre int e float.
4. Crie `const turma = "3A"` e `const aprovado = turma === "3A"`; mostre os dois e comente os tipos.
5. Crie `const resultado = 5 + 3` e `const texto = "5" + "3"`; mostre e comente os tipos e valores.

## 4. Tipos de dados — explícito (anotação)
1. Crie `const matricula: number = 2026` e `const aluno: string = "Ana"`.
2. Crie `const ativo: boolean = true` e mostre.
3. Crie `const media: number = 8.5` e `const situacao: string = "Aprovado"`.
4. Reescreva as quatro constantes do módulo 3 com anotação explícita.
5. Crie `let nota: number = 7` e reatribua para `9`; depois comente por que `nota = "nove"` daria erro.

## 5. String — básico (aspas, crase, template)
1. Crie três textos iguais usando aspas duplas, simples e crase; mostre os três.
2. Com template string, mostre `"Meu nome é <nome> e tenho <idade> anos"`.
3. Crie `const a = 4` e `const b = 6` e mostre com template string `"4 + 6 = 10"` usando `${a + b}`.
4. Crie `const produto = "caneta"` e `const preco = 3.5` e mostre `"A caneta custa R$ 3.5"` com template string.
5. Crie `const ano = 2026` e mostre `"Estamos em 2026"` com template string.

## 6. String — `trim`, `toUpperCase`, `toLowerCase`, `includes`
1. Dado `const entrada = "   maria   "`, mostre o texto sem espaços nas pontas.
2. Mostre `"  Curso TS  "` limpo e em MAIÚSCULAS.
3. Mostre `"  CURSO TS  "` limpo e em minúsculas.
4. Dado `const email = " Ana@Mail.com "`, limpe e converta para minúsculas.
5. Dado `const frase = "aprendendo typescript"`, mostre se ela inclui `"type"` e se inclui `"java"`.

## 7. String — mais métodos
1. Dado `const nome = "Lucas Silva"`, mostre a quantidade de caracteres (`length`) e o primeiro caractere (`charAt`).
2. Com `indexOf`, mostre a posição de `"Silva"` e de `"Souza"` (que não existe).
3. Com `slice`, recorte `"Lucas"` de `"Lucas Silva"`; com `replace`, troque `"Silva"` por `"Souza"`.
4. Com `split(" ")`, quebre `"Lucas Silva Souza"` em partes; depois com `startsWith("Lu")` e `endsWith("za")` mostre os dois resultados.
5. Com `repeat` crie `"abcabcabc"` e com `padStart` transforme `"5"` em `"005"`.

## 8. Number — métodos e `Math`
1. Dado `const n = 7.8912`, mostre `toFixed(2)`, `Math.round`, `Math.floor` e `Math.ceil`.
2. Mostre `Math.max(4, 9, 2)`, `Math.min(4, 9, 2)` e `Math.abs(-25)`.
3. Mostre `Math.pow(5, 2)` e `Math.sqrt(81)`.
4. Converta `"100"` com `Number` e some `5`; converta `"3.99"` com `parseInt` e com `parseFloat`.
5. Gere um inteiro aleatório de 0 a 9 e mostre; depois mostre `Number.isInteger(7.5)` e `Number.isNaN(NaN)`.

## 9. Operadores aritméticos
1. Com `x = 20` e `y = 6`, mostre soma, subtração, multiplicação e divisão.
2. Com `x = 20` e `y = 6`, mostre o resto (`%`) e a potência (`**`).
3. Calcule a área de um retângulo de base `8` e altura `5` e mostre.
4. Calcule o preço de 3 itens a `12.5` cada, mostrando o total com `toFixed(2)`.
5. Use `%` para mostrar o resto de `17 % 5` e de `20 % 5` e comente o que cada resto indica.

## 10. Operadores de atribuição
1. Com `let v = 10`, aplique `+= 5`, `-= 3` e mostre o valor após cada operação.
2. Com `let v = 4`, aplique `*= 3` e `/= 2` e mostre.
3. Com `let v = 2`, aplique `**= 5` e depois `%= 7` e mostre.
4. Com `let c = 0`, use `c++` três vezes e `c--` uma vez; mostre o valor final.
5. Com `let total = 100`, aplique `-= 20`, `*= 2` e `+= 15`; comente o valor após cada linha.

## 11. Operadores relacionais
1. Com `a = 15` e `b = 9`, mostre `a > b`, `a < b`, `a >= 15` e `a <= 14`.
2. Mostre `5 == "5"` e `5 === "5"` e comente a diferença.
3. Mostre `5 != "5"` e `5 !== "5"` e comente a diferença.
4. Crie `const idade = 17` e guarde em `const podeVotar` o resultado de `idade >= 16`; mostre.
5. Mostre o resultado de `10 === 10` e `10 !== 10`; comente por que preferir `===` e `!==`.

## 12. Operadores lógicos
1. Mostre `true && false`, `true || false` e `!true`.
2. Com `x = 10` e `y = 3`, mostre `x > 5 && y < 5`.
3. Mostre `10 < 5 || 5 < 7` e `!(10 === 10)`.
4. Com `idade = 20` e `temCarteira = true`, guarde em `podeDirigir` o resultado de `idade >= 18 && temCarteira`.
5. Mostre `!!false` e `!!true` e explique em comentário por que os dois `!` se cancelam.

## 13. Condicional simples (`if` / `else`)
1. Com `const idade = 20`, mostre `"Maior de idade"` se `idade >= 18` (apenas `if`).
2. Com `const nota = 4`, mostre `"Aprovado"` ou `"Reprovado"` usando `if`/`else` (aprovado se `nota >= 6`).
3. Com `const numero = 8`, mostre se é `"Par"` ou `"Ímpar"` usando `%`.
4. Com `let podeDirigir = false`, inverta com `!` e mostre `"Pode dirigir"` se ficar `true`, usando `if` sem chaves.
5. Com `const saldo = 50` e `const valor = 80`, mostre `"Compra aprovada"` ou `"Saldo insuficiente"`.

## 14. Condicional composta (`else if` / lógicos)
1. Com `nota = 8`, mostre `"Excelente"` (>= 9), `"Aprovado"` (>= 7), `"Recuperação"` (>= 5) ou `"Reprovado"`.
2. Com `numero = 0`, mostre `"Positivo"`, `"Negativo"` ou `"Zero"`.
3. Com `idade = 70`, mostre `"Tem desconto"` se `idade < 12 || idade > 65`.
4. Com `idade = 25` e `temCarteira = true`, mostre `"Pode dirigir"` se `idade >= 18 && temCarteira`.
5. Com `temCarteira = false`, mostre `"Sem carteira"` usando `!`.

## 15. Condicional aninhada
1. Com `logado = true` e `admin = true`, mostre `"Painel de administrador"`, `"Painel de usuário"` ou `"Faça login"`.
2. Com `idade = 20` e `temCarteira = false`, se maior de idade, mostre `"Pode tirar carteira"` ou `"Pode dirigir"`; senão `"Menor de idade"`.
3. Com `nota = 8` e `faltas = 10`, se `nota >= 7`, mostre `"Aprovado"` caso `faltas <= 15`, senão `"Reprovado por falta"`; se nota menor, `"Reprovado por nota"`.
4. Com `numero = 12`, se for positivo, mostre `"Par"` ou `"Ímpar"`; senão `"Número não positivo"`.
5. Com `estoque = 3` e `preco = 20`, se há estoque, mostre `"Vender"` se `preco < 50`, senão `"Preço alto"`; sem estoque, `"Esgotado"`.

## 16. Escolha (`switch`)
1. Com `dia = 1..7`, mostre o nome do dia da semana (1 = Domingo ... 7 = Sábado) com `default` para valores inválidos.
2. Com `const mes: number = 2`, mostre `"Fevereiro"` e use `default` para `"Outro mês"` (basta 3 cases).
3. Com `const opcao: number = 2`, mostre `"Iniciar"` (1), `"Pausar"` (2), `"Sair"` (3) ou `"Opção inválida"`.
4. Com `const nota: number = 2`, mostre `"Ruim"` (1), `"Regular"` (2), `"Bom"` (3) ou `"Inválida"`.
5. Remova um `break` de um dos seus cases e comente o que acontece (cai no próximo `case`).

## 17. `while`
1. Mostre os números de 1 a 10.
2. Mostre os números de 10 a 1 (contagem regressiva).
3. Mostre os números pares de 2 a 20.
4. Some os números de 1 a 5 e mostre o total ao final.
5. Mostre a tabuada do 3 (de 3 x 1 até 3 x 10).

## 18. `do while`
1. Mostre os números de 1 a 5 usando `do while`.
2. Com `numero = 10` e condição `numero < 5`, mostre que o bloco roda uma vez.
3. Mostre a contagem regressiva de 5 até 1.
4. Some os números de 1 a 10 e mostre o total.
5. Mostre a tabuada do 2 com `do while`.

## 19. `for`
1. Mostre os números de 0 a 9.
2. Mostre os números de 1 a 20 que são múltiplos de 5.
3. Mostre a contagem regressiva de 10 até 1.
4. Some os números de 1 a 100 e mostre o total.
5. Mostre a tabuada do 7 (de 7 x 1 até 7 x 10) com template string.

## 20. Funções
1. Crie `dividir(a: number, b: number): number` e mostre `dividir(10, 4)`.
2. Crie `maior(a: number, b: number): number` que retorna o maior valor (use `if`).
3. Crie `ehPar(n: number): boolean` e mostre para `4` e para `7`.
4. Crie `apresentar(nome: string, idade: number): void` que mostra `"Nome tem X anos"`.
5. Crie `media(a: number, b: number, c: number): number` e mostre `media(7, 8, 9)`.

## 21. Arrow function
1. Crie `const triplo = (n: number) => n * 3` e mostre `triplo(5)`.
2. Crie `const somar = (a: number, b: number): number => a + b` e mostre `somar(2, 9)`.
3. Crie uma arrow com chaves e `return` que calcula a área de um retângulo (`base`, `altura`).
4. Crie `const ehMaior = (idade: number): boolean => idade >= 18` e teste com `10` e `30`.
5. Crie `const saudar = (nome: string): void => { console.log(...) }` com template string.

## 22. Vetores — criação, acesso, `push`/`pop`/`shift`/`unshift`
1. Crie `const cores: string[] = ["azul", "verde", "rosa"]`, mostre o vetor e a posição `0`.
2. Mostre a quantidade de itens (`length`) e o último item usando `length - 1`.
3. Adicione `"preto"` no fim (`push`) e `"branco"` no início (`unshift`); mostre.
4. Remova o último (`pop`) e o primeiro (`shift`); mostre o vetor.
5. Crie `const notas: number[] = [6, 8, 10]` e mostre `notas[1]` e `notas.length`.

## 23. Vetores — busca e cópia (`includes`, `indexOf`, `join`, `slice`, `reverse`)
1. Dado `["maçã", "uva", "pera"]`, mostre se contém `"uva"` e se contém `"kiwi"`.
2. Mostre o índice de `"pera"` e de `"kiwi"` (que retorna `-1`).
3. Una os itens do vetor em uma string separada por `" - "` com `join`.
4. Copie os dois primeiros itens com `slice(0, 2)` e mostre que o original não mudou.
5. Use `reverse` e mostre o vetor invertido, comentando que ele altera o original.

## 24. Vetores — `map`, `filter`, `find`, `reduce`, `forEach`
1. Com `[1, 2, 3, 4, 5]`, use `map` para obter os quadrados.
2. Com o mesmo vetor, use `filter` para obter só os ímpares.
3. Use `find` para achar o primeiro número maior que `2`.
4. Use `reduce` para somar todos os itens (valor inicial `0`).
5. Use `forEach` para mostrar `"Item: X"` para cada número.

## 25. Vetores — métodos de alta ordem adicionais
1. Use `findIndex` para achar o índice do primeiro número maior que `2` e `findLast` para o último menor que `5`.
2. Use `some` e `every` para verificar se algum é maior que `4` e se todos são positivos.
3. Ordene `[30, 5, 100, 1]` com `sort()` sem função e depois com `(a, b) => a - b`; comente a diferença.
4. Ordene `[30, 5, 100, 1]` em ordem decrescente com `(a, b) => b - a`.
5. Use `flatMap` para gerar `[n, n * 10]` e `flat` em `[[1, 2], [3, 4]]`; depois `concat`, spread `...` e `at(-1)` para juntar e acessar o último.

## 26. Vetores — `splice`, `Array.from` e encadeamento
1. Com uma cópia `[...numeros]`, use `splice(1, 2)` para remover dois itens e mostre.
2. Com uma cópia, use `splice(1, 0, 99)` para inserir `99` na posição `1` sem remover.
3. Use `Array.from({ length: 5 }, (_, i) => i * 3)` para gerar `[0, 3, 6, 9, 12]`.
4. Encadeie `filter` + `map` + `reduce` para somar os cubos dos números ímpares de `[1, 2, 3, 4, 5]`.
5. Encadeie `map` + `filter` para dobrar os números de `[1, 2, 3, 4, 5]` e manter só os maiores que `4`.

## 27. Vetor de objetos
Use `const produtos = [{ nome: "caneta", preco: 3, estoque: 10 }, { nome: "caderno", preco: 15, estoque: 0 }, { nome: "mochila", preco: 120, estoque: 4 }]`.
1. Use `map` para mostrar apenas os nomes.
2. Use `filter` para mostrar os produtos com estoque maior que `0`.
3. Use `find` para encontrar o produto `"caderno"`.
4. Use `reduce` para calcular o valor total em estoque (`preco * estoque`).
5. Use `some` (algum esgotado?), `every` (todos com preço > 0?) e `[...produtos].sort` para ordenar por preço decrescente.

## 28. `for of`
1. Percorra `["a", "b", "c"]` com `for of` e mostre cada item.
2. Percorra `[2, 4, 6]` com `for of` e mostre o dobro de cada um.
3. Percorra `[3, 7, 10]` e some os valores em uma variável `total`.
4. Percorra um vetor de strings e mostre só as que incluem `"a"`.
5. Percorra o vetor `produtos` do módulo 27 e mostre `"nome - R$ preco"` de cada item.

## 29. `for` com índice
1. Percorra `["x", "y", "z"]` mostrando `índice` e `valor`.
2. Percorra `[5, 10, 15]` e mostre `"Posição i: valor"` com template string.
3. Percorra um vetor de números e mostre apenas os que estão em posições pares (`i % 2 === 0`).
4. Percorra o vetor do fim ao começo (`i--`) mostrando cada item.
5. Percorra `produtos` e mostre `"1 - caneta"`, `"2 - caderno"`... usando `i + 1`.

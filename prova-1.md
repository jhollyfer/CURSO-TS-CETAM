# Prova prática: boletim da aluna (10 pontos)

Você vai criar um programa que monta o boletim da aluna Maria. Crie o arquivo `prova-1.ts` dentro da pasta `CURSO-TS-CETAM` e vá fazendo os itens na ordem. Para rodar, use:

```bash
tsx ~/CURSO-TS-CETAM/prova-1.ts
```

Confira o que aparece no terminal.

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

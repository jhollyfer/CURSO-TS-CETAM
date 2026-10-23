# Prova prática: boletim da aluna (10 pontos)

Você vai escrever um programa que monta o boletim da aluna Maria.

## Antes de começar

- O arquivo `prova-1.ts` já existe dentro da pasta `CURSO-TS-CETAM`. Abre ele: tem um comentário para cada questão (`// QUESTAO 1`, `// QUESTAO 2`...). Escreve a resposta de cada questão **embaixo do comentário dela**.
- Para rodar o programa, usa no terminal:

  ```bash
  tsx ~/CURSO-TS-CETAM/prova-1.ts
  ```

- Quando a questão pedir para "mostrar" alguma coisa, é pra aparecer no terminal com `console.log`.
- Faz as questões na ordem, porque uma usa as variáveis da outra.
- Dica: faz um item, roda, confere se deu certo e só então passa pro próximo. Não deixa pra testar tudo no final.

---

### Questão 1. Criando as variáveis (1,5 pt)

a) Crie estas duas variáveis com `let`:

| Nome        | Valor                                                       |
| ----------- | ----------------------------------------------------------- |
| `nomeAluno` | `"  maria oliveira  "` (os espaços no começo e no fim são de propósito) |
| `faltas`    | `2`                                                         |

b) Crie estas quatro com `const`, **escrevendo o tipo** de cada uma, igual ao exemplo `const idade: number = 12`:

| Nome          | Tipo     | Valor   |
| ------------- | -------- | ------- |
| `NOTA_MINIMA` | `number` | `7`     |
| `nota1`       | `number` | `6.75`  |
| `nota2`       | `number` | `8.4`   |
| `notaTexto`   | `string` | `"9.5"` |

c) Crie mais uma `const`, com o nome e o valor que você quiser, mas **sem escrever o tipo**. Num comentário do lado, diga qual tipo o TypeScript descobriu sozinho.

d) Num comentário, explique com suas palavras por que `NOTA_MINIMA = 8` daria erro.

---

### Questão 2. Mudando um valor (0,5 pt)

A Maria faltou mais 3 aulas. Atualize `faltas` somando essas 3.

Não é pra criar uma variável nova: é pra mudar o valor da `faltas` que você já tem.

---

### Questão 3. Arrumando o nome (2,5 pt)

a) Tire os espaços do começo e do fim do nome e **guarde o resultado de volta em `nomeAluno`**. Daqui pra frente, use sempre o nome já sem os espaços.

b) Mostre o nome todo em MAIÚSCULAS. Depois, todo em minúsculas.

c) Mostre quantos caracteres o nome tem (o espaço do meio também conta).

d) Monte as iniciais da aluna. Tem que dar `"MO"`, as duas letras maiúsculas. O caminho é separar o nome em partes (uma pra cada palavra) e pegar a primeira letra de cada parte. Guarda as iniciais numa variável, você vai precisar delas na questão 7.

e) Mostre, como `true` ou `false`:
   - se o nome tem a palavra `"oliveira"`
   - se o nome começa com `"ma"`
   - se o nome termina com `"x"`

f) Mostre em que posição do nome começa a palavra `"oliveira"`.

g) Mostre só as 5 primeiras letras do nome.

h) Troque `"maria"` por `"ana"` e mostre o resultado. No mesmo `console.log`, mostre também `nomeAluno`, pra provar que ela **continua igual**.

---

### Questão 4. Calculando a média (2,0 pt)

a) A terceira nota está guardada como texto, em `notaTexto`. Transforme em número e guarde numa variável nova chamada `nota3`.

b) Calcule a média das 3 notas (`nota1`, `nota2` e `nota3`) e guarde em `media`.

c) Mostre a média de quatro jeitos:
   - com exatamente 2 casas depois da vírgula
   - arredondada para o inteiro mais próximo
   - arredondada sempre pra baixo
   - arredondada sempre pra cima

d) Mostre a maior das 3 notas. Depois, a menor.

e) Mostre:
   - se a média é um número inteiro (`true` ou `false`)
   - se converter o texto `"abc"` para número dá `NaN` (`true` ou `false`)
   - que número sai quando você converte o texto `"8.9"` para inteiro

---

### Questão 5. Aprovação e matrícula (1,5 pt)

a) Crie a variável `aprovado`. Ela vale `true` se a média for maior ou igual a `NOTA_MINIMA`, e `false` se não for. Não vale escrever `true` ou `false` direto: o valor tem que sair de uma comparação.

b) Sorteie um número inteiro de 0 a 999 pra ser a matrícula da Maria, usando o sorteio do objeto `Math`. A cada vez que rodar pode sair um número diferente, e tudo bem.

c) Deixe a matrícula sempre com 4 dígitos, completando com zeros na frente. Por exemplo:

| Número sorteado | Como deve ficar |
| --------------- | --------------- |
| 7               | `0007`          |
| 42              | `0042`          |
| 833             | `0833`          |

Guarda a matrícula já com os zeros numa variável, ela também entra na questão 7.

---

### Questão 6. Fazendo contas (1,0 pt)

Crie `totalAulas` valendo `40` e mostre:

a) quantas aulas a Maria assistiu (usando `totalAulas` e `faltas`)

b) o dobro das faltas

c) o total de aulas dividido pelas faltas

d) o resto da divisão de 40 por 6

e) 2 elevado a 3, de dois jeitos: um com operador e outro com uma função do `Math`

f) a raiz quadrada de 49

g) a diferença entre `nota1` e `nota2`, sem o sinal de negativo

---

### Questão 7. Mostrando o boletim (1,0 pt)

a) Mostre uma linha com 30 sinais de `=`. Digitar os 30 na mão não vale: use um método de string que repete o texto.

b) Usando **crase** (template string), mostre o boletim exatamente assim:

```
Aluno: MARIA OLIVEIRA (MO) | Matricula: 0833
Media: 8.2 | Aprovado: true
```

Repare que:
- o nome sai em MAIÚSCULAS, com as iniciais entre parênteses;
- a matrícula é a da questão 5 (o número na sua tela vai ser outro, mas com 4 dígitos);
- a média aparece com **1 casa** depois da vírgula;
- nada disso é digitado direto no texto: nome, iniciais, matrícula, média e aprovado vêm das variáveis.

c) Termine o programa com uma mensagem final, a que você quiser, escrita entre **aspas simples** (`'...'`).

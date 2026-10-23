# Prova prática: boletim da aluna (10 pontos)

Você vai escrever um programa que monta o boletim da aluna Maria.

## Antes de começar

- O arquivo `prova-1.ts` já existe dentro da pasta `CURSO-TS-CETAM`. Abre ele: tem um comentário para cada questão (`// QUESTAO 1`, `// QUESTAO 2`...). Escreve a resposta de cada questão **embaixo do comentário dela**.
- Para rodar o programa, usa no terminal:

  ```bash
  tsx ~/CURSO-TS-CETAM/prova-1.ts
  ```

- Quando a questão pedir para "mostrar" alguma coisa, é pra aparecer no terminal com `console.log`. Pode usar um `console.log` pra cada coisa ou juntar várias no mesmo, separadas por vírgula.
- Faz as questões na ordem, porque uma usa as variáveis da outra.
- Dica: faz um item, roda, confere se deu certo e só então passa pro próximo. Não deixa pra testar tudo no final.

---

### Questão 1. Criando as variáveis (1,5 pt)

a) Crie estas duas variáveis com `let`:

| Nome        | Valor                                                       |
| ----------- | ----------------------------------------------------------- |
| `nomeAluno` | `"  maria oliveira  "`                                      |
| `faltas`    | `2`                                                         |

Os espaços no começo e no fim de `"  maria oliveira  "` são de propósito. Copie do jeito que está.

b) Crie estas quatro com `const`, **escrevendo o tipo** de cada uma, igual ao exemplo `const idade: number = 12`:

| Nome          | Tipo     | Valor   |
| ------------- | -------- | ------- |
| `NOTA_MINIMA` | `number` | `7`     |
| `nota1`       | `number` | `6.75`  |
| `nota2`       | `number` | `8.4`   |
| `notaTexto`   | `string` | `"9.5"` |

c) Crie a `const` `totalAulas` valendo `40`, mas dessa vez **sem escrever o tipo**. Num comentário do lado, diga qual tipo o TypeScript descobriu sozinho.

d) Num comentário (linha começando com `//`), explique com suas palavras por que `NOTA_MINIMA = 8` daria erro. Não escreva `NOTA_MINIMA = 8` como código de verdade, senão o programa para de rodar.

---

### Questão 2. Mudando um valor (0,5 pt)

A Maria faltou mais 3 aulas. Altere o valor da `let` **`faltas`** (criada na questão 1) somando essas 3.

Não é pra criar uma variável nova: é pra mudar o valor da `faltas` que já existe.

---

### Questão 3. Arrumando o nome (2,5 pt)

a) Tire os espaços do começo e do fim de `nomeAluno` e guarde o resultado numa nova `const` chamada **`nome`**. Daqui pra frente, todos os itens usam `nome`.

b) Crie a `const` **`nomeMaiusculo`** com `nome` todo em MAIÚSCULAS e mostre `nomeMaiusculo`. Depois mostre `nome` todo em minúsculas (esse não precisa guardar em variável).

c) Mostre quantos caracteres `nome` tem (o espaço do meio também conta).

d) Crie a `const` **`partes`** com `nome` separado em partes (uma pra cada palavra). Depois crie a `const` **`iniciais`** juntando, num texto só, a primeira letra de cada item de `partes`, em maiúscula. Tem que dar `"MO"`. Mostre `iniciais`.

   Pra pegar um item de dentro de um vetor, escreva o nome do vetor e a posição do item entre colchetes. A contagem começa em 0, igual às letras de um texto. Exemplo com outro vetor:

   ```ts
   const frutas = ["uva", "pera", "caju"]
   console.log(frutas[0]) // uva
   console.log(frutas[2]) // caju
   ```

e) Mostre, como `true` ou `false`:
   - se `nome` tem a palavra `"oliveira"`
   - se `nome` começa com `"ma"`
   - se `nome` termina com `"x"`

f) Mostre em que posição de `nome` começa a palavra `"oliveira"`.

g) Mostre só as 5 primeiras letras de `nome`.

h) Em `nome`, troque `"maria"` por `"ana"` e mostre o resultado (não precisa guardar em variável). No mesmo `console.log`, mostre também `nome`, pra provar que ele **continua igual**.

---

### Questão 4. Calculando a média (2,0 pt)

a) A terceira nota está guardada como texto, em `notaTexto`. Transforme em número e guarde numa nova `const` chamada **`nota3`**.

b) Calcule a média das 3 notas (`nota1`, `nota2` e `nota3`) e guarde numa `const` chamada **`media`**.

c) Mostre `media` de quatro jeitos:
   - com exatamente 2 casas depois da vírgula
   - arredondada para o inteiro mais próximo
   - arredondada sempre pra baixo
   - arredondada sempre pra cima

d) Mostre a maior nota entre `nota1`, `nota2` e `nota3`. Depois, a menor entre as mesmas três.

e) Mostre:
   - se `media` é um número inteiro (`true` ou `false`)
   - se converter o texto `"abc"` para número dá `NaN` (`true` ou `false`)
   - que número sai quando você converte o texto `"8.9"` para inteiro

---

### Questão 5. Aprovação e matrícula (1,5 pt)

Nessa questão você só cria as variáveis, não precisa mostrar nada. Elas aparecem no boletim da questão 7.

a) Crie a `const` **`aprovado`**. Ela vale `true` se `media` for maior ou igual a `NOTA_MINIMA`, e `false` se não for. Não vale escrever `true` ou `false` direto: o valor tem que sair de uma comparação.

b) Sorteie um número inteiro de 0 a 999 pra ser a matrícula da Maria, usando o sorteio do objeto `Math`, e guarde numa `const` chamada **`matricula`**. A cada vez que rodar pode sair um número diferente, e tudo bem.

c) Crie a `const` **`codigo`** com a `matricula` sempre com 4 dígitos, completando com zeros na frente. Por exemplo:

| Número sorteado | Como deve ficar |
| --------------- | --------------- |
| 7               | `0007`          |
| 42              | `0042`          |
| 833             | `0833`          |

---

### Questão 6. Fazendo contas (1,0 pt)

Aqui você usa a `const` `totalAulas` (questão 1) e a `let` `faltas` (já atualizada na questão 2). Não crie nenhuma das duas de novo. Mostre:

a) quantas aulas a Maria assistiu, usando `totalAulas` e `faltas`

b) o dobro de `faltas`

c) `totalAulas` dividido por `faltas`

d) o resto da divisão de `totalAulas` por 6

e) 2 elevado a 3, de dois jeitos: um com operador e outro com uma função do `Math`

f) a raiz quadrada de 49

g) a diferença entre `nota1` e `nota2`, sem o sinal de negativo

---

### Questão 7. Mostrando o boletim (1,0 pt)

a) Mostre uma linha com 30 sinais de `=`. Digitar os 30 na mão não vale: use um método de string que repete o texto.

b) Usando **crase** (template string), mostre o boletim exatamente assim (pode usar um `console.log` pra cada linha):

```
Aluno: MARIA OLIVEIRA (MO) | Matricula: 0833
Media: 8.2 | Aprovado: true
```

Repare que:
- o nome vem de `nomeMaiusculo`, com `iniciais` entre parênteses;
- a matrícula vem de `codigo` (o número na sua tela vai ser outro, mas com 4 dígitos);
- a média vem de `media`, mostrada com **1 casa** depois da vírgula;
- o `true` vem de `aprovado`;
- nada disso é digitado direto no texto: tudo tem que vir das variáveis.

c) Termine o programa com uma mensagem final, a que você quiser, escrita entre **aspas simples** (`'...'`).

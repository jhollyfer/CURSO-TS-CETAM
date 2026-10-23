# Prova prática: boletim da aluna (10 pontos)

Você vai escrever um programa que monta o boletim da aluna Maria.

## Antes de começar

- O arquivo `prova-1.ts` já existe dentro da pasta `CURSO-TS-CETAM`. Abre ele: tem um comentário para cada questão (`// QUESTAO 1`, `// QUESTAO 2`...). Escreve a resposta de cada questão **embaixo do comentário dela**.
- Para rodar o programa, usa no terminal:

  ```bash
  tsx ~/CURSO-TS-CETAM/prova-1.ts
  ```

- Cada item diz se você vai criar uma `let` ou uma `const`, e com qual nome. Use exatamente esse nome.
- Quando a questão pedir para "mostrar" alguma coisa, é pra aparecer no terminal com `console.log`. Pode usar um `console.log` pra cada coisa ou juntar várias no mesmo, separadas por vírgula.
- Faz as questões na ordem, porque uma usa as variáveis da outra.
- Dica: faz um item, roda, confere se deu certo e só então passa pro próximo. Não deixa pra testar tudo no final.

---

### Questão 1. Criando as variáveis (1,5 pt)

a) Crie estas duas variáveis com `let`:

| Crie a `let` | Valor                  |
| ------------ | ---------------------- |
| `nomeAluno`  | `"  maria oliveira  "` |
| `faltas`     | `2`                    |

Os espaços no começo e no fim de `"  maria oliveira  "` são de propósito. Copie do jeito que está.

b) Crie estas quatro com `const`, **escrevendo o tipo** de cada uma, igual ao exemplo `const idade: number = 12`:

| Crie a `const` | Tipo     | Valor   |
| -------------- | -------- | ------- |
| `NOTA_MINIMA`  | `number` | `7`     |
| `nota1`        | `number` | `6.75`  |
| `nota2`        | `number` | `8.4`   |
| `notaTexto`    | `string` | `"9.5"` |

c) Crie a `const` `totalAulas` valendo `40`, mas dessa vez **sem escrever o tipo**. Num comentário do lado, diga qual tipo o TypeScript descobriu sozinho.

d) Esse item não cria nada. Num comentário (linha começando com `//`), explique com suas palavras por que escrever `NOTA_MINIMA = 8` daria erro. Não escreva `NOTA_MINIMA = 8` como código de verdade, senão o programa para de rodar.

---

### Questão 2. Mudando um valor (0,5 pt)

A Maria faltou mais 3 aulas. Altere o valor da `let` `faltas` (criada na questão 1) somando essas 3.

Não é pra criar uma variável nova: é pra mudar o valor da `faltas` que já existe.

---

### Questão 3. Arrumando o nome (2,5 pt)

a) Crie a `const` `nome` com `nomeAluno` sem os espaços do começo e do fim. Daqui pra frente, todos os itens usam `nome`.

b) Crie a `const` `nomeMaiusculo` com `nome` todo em MAIÚSCULAS. Depois crie a `const` `nomeMinusculo` com `nome` todo em minúsculas. Mostre as duas.

c) Crie a `const` `tamanhoNome` com a quantidade de caracteres de `nome` (o espaço do meio também conta). Mostre `tamanhoNome`.

d) Crie a `const` `partes` com `nome` separado em partes (uma pra cada palavra). Depois crie a `const` `iniciais` juntando, num texto só, a primeira letra de cada item de `partes`, em maiúscula. Tem que dar `"MO"`. Mostre `iniciais`.

   Pra pegar um item de dentro de um vetor, escreva o nome do vetor e a posição do item entre colchetes. A contagem começa em 0, igual às letras de um texto. Exemplo com outro vetor:

   ```ts
   const frutas = ["uva", "pera", "caju"]
   console.log(frutas[0]) // uva
   console.log(frutas[2]) // caju
   ```

e) Crie estas três `const`. Cada uma vai guardar `true` ou `false`. Mostre as três.

| Crie a `const`  | Com a resposta pra pergunta            |
| --------------- | -------------------------------------- |
| `temOliveira`   | `nome` tem a palavra `"oliveira"`?     |
| `comecaComMa`   | `nome` começa com `"ma"`?              |
| `terminaComX`   | `nome` termina com `"x"`?              |

f) Crie a `const` `posicaoOliveira` com a posição de `nome` onde começa a palavra `"oliveira"`. Mostre `posicaoOliveira`.

g) Crie a `const` `cincoPrimeiras` com só as 5 primeiras letras de `nome`. Mostre `cincoPrimeiras`.

h) Crie a `const` `nomeTrocado` com `nome`, mas trocando `"maria"` por `"ana"`. No mesmo `console.log`, mostre `nomeTrocado` e `nome`, pra provar que `nome` **continua igual**.

---

### Questão 4. Calculando a média (2,0 pt)

a) A terceira nota está guardada como texto, em `notaTexto`. Crie a `const` `nota3` com `notaTexto` transformada em número.

b) Crie a `const` `media` com a média das 3 notas (`nota1`, `nota2` e `nota3`).

c) Crie estas quatro `const`, todas a partir de `media`. Mostre as quatro.

| Crie a `const`      | Com `media`...                            |
| ------------------- | ----------------------------------------- |
| `mediaDuasCasas`    | com exatamente 2 casas depois da vírgula  |
| `mediaArredondada`  | arredondada para o inteiro mais próximo   |
| `mediaPraBaixo`     | arredondada sempre pra baixo              |
| `mediaPraCima`      | arredondada sempre pra cima               |

d) Crie a `const` `maiorNota` com a maior nota entre `nota1`, `nota2` e `nota3`. Depois crie a `const` `menorNota` com a menor entre as mesmas três. Mostre as duas.

e) Crie estas três `const`. Mostre as três.

| Crie a `const`     | Com o quê                                                         |
| ------------------ | ----------------------------------------------------------------- |
| `mediaEhInteira`   | `true` ou `false`: `media` é um número inteiro?                   |
| `abcEhNaN`         | `true` ou `false`: o texto `"abc"` convertido pra número dá `NaN`? |
| `inteiroDoTexto`   | o número que sai quando você converte o texto `"8.9"` pra inteiro |

---

### Questão 5. Aprovação e matrícula (1,5 pt)

Nessa questão você só cria as variáveis, não precisa mostrar nada. Elas aparecem no boletim da questão 7.

a) Crie a `const` `aprovado`. Ela vale `true` se `media` for maior ou igual a `NOTA_MINIMA`, e `false` se não for. Não vale escrever `true` ou `false` direto: o valor tem que sair de uma comparação.

b) Crie a `const` `matricula` com um número inteiro sorteado de 0 a 999, usando o sorteio do objeto `Math`. A cada vez que rodar pode sair um número diferente, e tudo bem.

c) Crie a `const` `codigo` com `matricula` sempre com 4 dígitos, completando com zeros na frente. Por exemplo:

| Se `matricula` for | `codigo` fica |
| ------------------ | ------------- |
| 7                  | `0007`        |
| 42                 | `0042`        |
| 833                | `0833`        |

---

### Questão 6. Fazendo contas (1,0 pt)

Aqui você usa a `const` `totalAulas` (questão 1) e a `let` `faltas` (já atualizada na questão 2). Não crie nenhuma das duas de novo.

Crie as `const` abaixo e mostre todas:

| Item | Crie a `const`      | Com o quê                                                  |
| ---- | ------------------- | ---------------------------------------------------------- |
| a)   | `aulasAssistidas`   | quantas aulas a Maria assistiu, usando `totalAulas` e `faltas` |
| b)   | `dobroFaltas`       | o dobro de `faltas`                                        |
| c)   | `aulasPorFalta`     | `totalAulas` dividido por `faltas`                         |
| d)   | `restoDivisao`      | o resto da divisão de `totalAulas` por 6                   |
| e)   | `potenciaOperador`  | 2 elevado a 3, usando um operador                          |
| e)   | `potenciaMath`      | 2 elevado a 3, usando uma função do `Math`                 |
| f)   | `raizQuadrada`      | a raiz quadrada de 49                                      |
| g)   | `diferencaNotas`    | a diferença entre `nota1` e `nota2`, sem o sinal de negativo |

---

### Questão 7. Mostrando o boletim (1,0 pt)

a) Crie a `const` `linha` com 30 sinais de `=`. Digitar os 30 na mão não vale: use um método de string que repete o texto. Mostre `linha`.

b) Usando **crase** (template string), crie a `const` `boletimLinha1` e a `const` `boletimLinha2`, uma pra cada linha do boletim abaixo. Depois mostre as duas. Tem que sair exatamente assim:

```
Aluno: MARIA OLIVEIRA (MO) | Matricula: 0833
Media: 8.2 | Aprovado: true
```

Repare que:
- o nome vem de `nomeMaiusculo`, com `iniciais` entre parênteses
- a matrícula vem de `codigo` (o número na sua tela vai ser outro, mas com 4 dígitos)
- a média vem de `media`, mostrada com **1 casa** depois da vírgula
- o `true` vem de `aprovado`
- nada disso é digitado direto no texto, tudo vem das variáveis

c) Crie a `const` `mensagemFinal` com uma mensagem do jeito que você quiser, escrita entre **aspas simples** (`'...'`). Mostre `mensagemFinal` no fim do programa.

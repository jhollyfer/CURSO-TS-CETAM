# Prova prática: boletim da aluna (10 pontos)

Você vai escrever um programa que monta o boletim da aluna Maria. São 10 questões, cada uma vale 1 ponto.

## Antes de começar

- O arquivo `prova-1.ts` já existe dentro da pasta `CURSO-TS-CETAM`. Abre ele: tem um comentário para cada questão (`// QUESTAO 1`, `// QUESTAO 2`...). Escreve a resposta de cada questão **embaixo do comentário dela**.
- Para rodar o programa, usa no terminal:

  ```bash
  tsx ~/CURSO-TS-CETAM/prova-1.ts
  ```

- Cada questão diz se você vai criar uma `let` ou uma `const`, e com qual nome. Use exatamente esse nome.
- Quando a questão pedir para "mostrar" alguma coisa, é pra aparecer no terminal com `console.log`. Pode usar um `console.log` pra cada coisa ou juntar várias no mesmo, separadas por vírgula.
- Faz as questões na ordem, porque uma usa as variáveis da outra.
- Dica: faz uma questão, roda, confere se deu certo e só então passa pra próxima. Não deixa pra testar tudo no final.

---

### Questão 1. Criando as variáveis (1 pt)

Crie estas duas com `let`:

| Crie a `let` | Valor                  |
| ------------ | ---------------------- |
| `nomeAluno`  | `"  maria oliveira  "` |
| `faltas`     | `2`                    |

Os espaços no começo e no fim de `"  maria oliveira  "` são de propósito. Copie do jeito que está.

Depois crie estas quatro com `const`, **escrevendo o tipo** de cada uma, igual ao exemplo `const idade: number = 12`:

| Crie a `const` | Tipo     | Valor   |
| -------------- | -------- | ------- |
| `NOTA_MINIMA`  | `number` | `7`     |
| `nota1`        | `number` | `6.75`  |
| `nota2`        | `number` | `8.4`   |
| `notaTexto`    | `string` | `"9.5"` |

---

### Questão 2. O TypeScript descobre sozinho (1 pt)

Crie a `const` `totalAulas` valendo `40`, mas dessa vez **sem escrever o tipo**. Num comentário do lado, diga qual tipo o TypeScript descobriu sozinho.

Embaixo, num comentário (linha começando com `//`), explique com suas palavras por que escrever `NOTA_MINIMA = 8` daria erro. Não escreva `NOTA_MINIMA = 8` como código de verdade, senão o programa para de rodar.

---

### Questão 3. Mudando um valor (1 pt)

A Maria faltou mais 3 aulas. Altere o valor da `let` `faltas` (criada na questão 1) somando essas 3. Depois mostre `faltas`.

Não é pra criar uma variável nova: é pra mudar o valor da `faltas` que já existe.

---

### Questão 4. Arrumando o nome (1 pt)

Crie estas três `const` e mostre as três:

| Crie a `const`  | Com o quê                                                    |
| --------------- | ------------------------------------------------------------ |
| `nome`          | `nomeAluno` sem os espaços do começo e do fim                |
| `nomeMaiusculo` | `nome` todo em MAIÚSCULAS                                    |
| `tamanhoNome`   | quantos caracteres `nome` tem (o espaço do meio também conta) |

Daqui pra frente, quando a prova falar do nome da aluna, use `nome`.

---

### Questão 5. Iniciais (1 pt)

Crie a `const` `partes` com `nome` separado em partes (uma pra cada palavra).

Depois crie a `const` `iniciais` juntando, num texto só, a primeira letra de cada item de `partes`, em maiúscula. Tem que dar `"MO"`. Mostre `iniciais`.

Se não lembrar como pegar um item de dentro de um vetor, olha a seção "Vetores" do guia de estudos.

---

### Questão 6. Procurando no nome (1 pt)

Crie estas três `const`:

| Crie a `const`    | Com o quê                                          |
| ----------------- | -------------------------------------------------- |
| `temOliveira`     | `true` ou `false`: `nome` tem a palavra `"oliveira"`? |
| `posicaoOliveira` | a posição de `nome` onde começa a palavra `"oliveira"` |
| `nomeTrocado`     | `nome`, mas trocando `"maria"` por `"ana"`         |

Mostre `temOliveira` e `posicaoOliveira`. Depois, no mesmo `console.log`, mostre `nomeTrocado` e `nome`, pra provar que `nome` **continua igual**.

---

### Questão 7. Calculando a média (1 pt)

Crie estas quatro `const` e mostre `mediaDuasCasas` e `maiorNota`:

| Crie a `const`   | Com o quê                                                       |
| ---------------- | --------------------------------------------------------------- |
| `nota3`          | `notaTexto` transformada em número                              |
| `media`          | a média de `nota1`, `nota2` e `nota3`                           |
| `mediaDuasCasas` | `media` com exatamente 2 casas depois da vírgula                |
| `maiorNota`      | a maior nota entre `nota1`, `nota2` e `nota3`                   |

---

### Questão 8. Aprovação e matrícula (1 pt)

Crie estas três `const`. Não precisa mostrar nada: elas aparecem no boletim da questão 10.

| Crie a `const` | Com o quê                                                                 |
| -------------- | ------------------------------------------------------------------------- |
| `aprovado`     | `true` se `media` for maior ou igual a `NOTA_MINIMA`, `false` se não for  |
| `matricula`    | um número inteiro sorteado de 0 a 999, usando o sorteio do objeto `Math`  |
| `codigo`       | `matricula` sempre com 4 dígitos, completando com zeros na frente         |

Em `aprovado`, não vale escrever `true` ou `false` direto: o valor tem que sair de uma comparação.

A cada vez que rodar, `matricula` pode sair diferente, e tudo bem. Exemplos de como `codigo` deve ficar:

| Se `matricula` for | `codigo` fica |
| ------------------ | ------------- |
| 7                  | `0007`        |
| 42                 | `0042`        |
| 833                | `0833`        |

---

### Questão 9. Fazendo contas (1 pt)

Use a `const` `totalAulas` (questão 2) e a `let` `faltas` (já atualizada na questão 3). Não crie nenhuma das duas de novo.

Crie estas três `const` e mostre as três:

| Crie a `const`    | Com o quê                                                      |
| ----------------- | -------------------------------------------------------------- |
| `aulasAssistidas` | quantas aulas a Maria assistiu, usando `totalAulas` e `faltas` |
| `restoDivisao`    | o resto da divisão de `totalAulas` por 6                       |
| `diferencaNotas`  | a diferença entre `nota1` e `nota2`, sem o sinal de negativo   |

---

### Questão 10. Mostrando o boletim (1 pt)

Crie a `const` `linha` com 30 sinais de `=`. Digitar os 30 na mão não vale: use um método de string que repete o texto. Mostre `linha`.

Depois, usando **crase** (template string), crie a `const` `boletimLinha1` e a `const` `boletimLinha2`, uma pra cada linha do boletim abaixo, e mostre as duas. Tem que sair exatamente assim:

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

Por último, crie a `const` `mensagemFinal` com uma mensagem do jeito que você quiser, escrita entre **aspas simples** (`'...'`), e mostre `mensagemFinal`.

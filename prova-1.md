# Prova prática: ficha do funcionário (10 pontos)

Você vai escrever um programa que monta a ficha do Carlos, vendedor de uma loja. São 10 questões, cada uma vale 1 ponto.

## Antes de começar

- O arquivo `prova-1.ts` já existe dentro da pasta `CURSO-TS-CETAM`. Abre ele: tem um comentário para cada questão (`// QUESTAO 1`, `// QUESTAO 2`...). Escreve a resposta de cada questão **embaixo do comentário dela**.
- Para rodar o programa, usa no terminal:

  ```bash
  tsx ~/CURSO-TS-CETAM/prova-1.ts
  ```

- Quando a questão mandar criar alguma coisa, ela diz se é com `let` ou com `const`, e qual nome usar. Use exatamente esse nome.
- Quando a questão pedir para "mostrar" alguma coisa, é pra aparecer no terminal com `console.log`. Pode usar um `console.log` pra cada coisa ou juntar várias no mesmo, separadas por vírgula.
- Faz as questões na ordem, porque uma usa as variáveis da outra.
- Dica: faz uma questão, roda, confere se deu certo e só então passa pra próxima. Não deixa pra testar tudo no final.

---

### Questão 1. Criando as variáveis (1 pt)

Crie estas duas com `let`:

| Crie com `let`    | Valor                 |
| ----------------- | --------------------- |
| `nomeFuncionario` | `"  carlos mendes  "` |
| `faltas`          | `2`                   |

Os espaços no começo e no fim de `"  carlos mendes  "` são de propósito. Copie do jeito que está.

Depois crie estas quatro com `const`, **escrevendo o tipo** de cada uma, igual ao exemplo `const idade: number = 12`:

| Crie com `const` | Tipo     | Valor    |
| ---------------- | -------- | -------- |
| `META_VENDAS`    | `number` | `7000`   |
| `vendas1`        | `number` | `6750`   |
| `vendas2`        | `number` | `8400`   |
| `vendasTexto`    | `string` | `"9500"` |

`vendas1`, `vendas2` e `vendasTexto` são quanto o Carlos vendeu (em reais) em cada um dos últimos 3 meses.

---

### Questão 2. O TypeScript descobre sozinho (1 pt)

Crie com `const` a `totalDias` valendo `22` (os dias de trabalho do mês), mas dessa vez **sem escrever o tipo**. Num comentário do lado, diga qual tipo o TypeScript descobriu sozinho.

Embaixo, num comentário (linha começando com `//`), explique com suas palavras por que escrever `META_VENDAS = 8000` daria erro. Não escreva `META_VENDAS = 8000` como código de verdade, senão o programa para de rodar.

---

### Questão 3. Mudando um valor (1 pt)

A variável `faltas`, que você criou na questão 1, guarda quantas vezes o Carlos faltou. Ele faltou mais 3 dias.

Mude o valor de `faltas` somando esses 3. Depois mostre `faltas`.

Não é pra criar outra variável com o mesmo nome: é pra trocar o valor da `faltas` que já existe.

---

### Questão 4. Arrumando o nome (1 pt)

Crie estas três com `const` e mostre as três:

| Crie com `const` | Com o quê                                                      |
| ---------------- | -------------------------------------------------------------- |
| `nome`           | `nomeFuncionario` sem os espaços do começo e do fim            |
| `nomeMaiusculo`  | `nome` todo em MAIÚSCULAS                                      |
| `tamanhoNome`    | quantos caracteres `nome` tem (o espaço do meio também conta)  |

Daqui pra frente, quando a prova falar do nome do Carlos, use `nome`.

---

### Questão 5. Iniciais (1 pt)

Crie com `const` a `partes`, com `nome` separado em partes (uma pra cada palavra).

Depois crie com `const` a `iniciais`, juntando num texto só a primeira letra de cada item de `partes`, em maiúscula. Tem que dar `"CM"`. Mostre `iniciais`.

Se não lembrar como pegar um item de dentro de um vetor, olha a seção "Vetores" do guia de estudos.

---

### Questão 6. Procurando no nome (1 pt)

Crie estas três com `const`:

| Crie com `const` | Com o quê                                               |
| ---------------- | ------------------------------------------------------- |
| `temMendes`      | `true` ou `false`: `nome` tem a palavra `"mendes"`?     |
| `posicaoMendes`  | a posição de `nome` onde começa a palavra `"mendes"`    |
| `nomeTrocado`    | `nome`, mas trocando `"carlos"` por `"caio"`            |

Mostre `temMendes` e `posicaoMendes`. Depois, no mesmo `console.log`, mostre `nomeTrocado` e `nome`, pra provar que `nome` **continua igual**.

---

### Questão 7. Calculando a média de vendas (1 pt)

Crie estas quatro com `const` e mostre `mediaArredondada` e `maiorVenda`:

| Crie com `const`   | Com o quê                                                |
| ------------------ | -------------------------------------------------------- |
| `vendas3`          | `vendasTexto` transformada em número                     |
| `media`            | a média de `vendas1`, `vendas2` e `vendas3`              |
| `mediaArredondada` | `media` arredondada para o inteiro mais próximo          |
| `maiorVenda`       | a maior venda entre `vendas1`, `vendas2` e `vendas3`     |

---

### Questão 8. Meta e crachá (1 pt)

Crie estas três com `const`. Não precisa mostrar nada: elas aparecem na ficha da questão 10.

| Crie com `const` | Com o quê                                                                  |
| ---------------- | -------------------------------------------------------------------------- |
| `bateuMeta`      | `true` se `media` for maior ou igual a `META_VENDAS`, `false` se não for   |
| `numeroCracha`   | um número inteiro sorteado de 0 a 999, usando o sorteio do objeto `Math`   |
| `cracha`         | `numeroCracha` sempre com 4 dígitos, completando com zeros na frente       |

Em `bateuMeta`, não vale escrever `true` ou `false` direto: o valor tem que sair de uma comparação.

A cada vez que rodar, `numeroCracha` pode sair diferente, e tudo bem. Exemplos de como `cracha` deve ficar:

| Se `numeroCracha` for | `cracha` fica |
| --------------------- | ------------- |
| 7                     | `0007`        |
| 42                    | `0042`        |
| 833                   | `0833`        |

---

### Questão 9. Fazendo contas (1 pt)

Use a `totalDias` (questão 2) e a `faltas` (já atualizada na questão 3). Não crie nenhuma das duas de novo.

Crie estas três com `const` e mostre as três:

| Crie com `const`  | Com o quê                                                         |
| ----------------- | ----------------------------------------------------------------- |
| `diasTrabalhados` | quantos dias o Carlos trabalhou, usando `totalDias` e `faltas`    |
| `restoDivisao`    | o resto da divisão de `totalDias` por 6                           |
| `diferencaVendas` | a diferença entre `vendas1` e `vendas2`, sem o sinal de negativo  |

---

### Questão 10. Mostrando a ficha (1 pt)

Crie com `const` a `linha`, com 30 sinais de `=`. Digitar os 30 na mão não vale: use um método de string que repete o texto. Mostre `linha`.

Depois, usando **crase** (template string), crie com `const` a `fichaLinha1` e a `fichaLinha2`, uma pra cada linha da ficha abaixo, e mostre as duas. Tem que sair exatamente assim:

```
Funcionario: CARLOS MENDES (CM) | Cracha: 0833
Media de vendas: 8216.67 | Bateu a meta: true
```

Repare que:
- o nome vem de `nomeMaiusculo`, com `iniciais` entre parênteses
- o crachá vem de `cracha` (o número na sua tela vai ser outro, mas com 4 dígitos)
- a média vem de `media`, mostrada com **2 casas** depois da vírgula
- o `true` vem de `bateuMeta`
- nada disso é digitado direto no texto, tudo vem das variáveis

Por último, crie com `const` a `mensagemFinal`, com uma mensagem do jeito que você quiser, escrita entre **aspas simples** (`'...'`), e mostre `mensagemFinal`.

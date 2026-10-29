# Desafios em dupla: sistema da Byte Burger

Hoje vocês são a equipe de desenvolvimento da **Byte Burger**, uma lanchonete que está montando o próprio sistema. São 4 desafios, e cada um é um pedaço do sistema: o cadastro do cliente, o pedido, o programa de pontos e o fechamento da conta.

Os desafios contam uma história só, mas cada arquivo já traz os dados de que precisa. Se a dupla não terminar um, começa o próximo do zero sem problema.

## Como funciona (programação em par)

A gente vai trabalhar do jeito que muita empresa trabalha: **programação em par**, uma prática do XP (Extreme Programming). Duas pessoas usam o mesmo computador para resolver o mesmo problema, e cada uma tem um papel.

| Papel         | O que faz                                                                                                              |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Piloto**    | Fica no teclado e escreve o código. Fala em voz alta o que está fazendo.                                               |
| **Navegador** | Não toca no teclado. Lê o enunciado, pensa no próximo passo, procura erro de digitação e consulta o `index.ts` e o guia. |

Regras da dupla:

- Cada desafio tem **30 minutos**. Aos **15 minutos** o cronômetro apita e vocês **trocam de papel**: quem era piloto vira navegador e o contrário.
- Nos primeiros minutos, leiam o desafio inteiro juntos antes de digitar qualquer coisa. Esse tempo já conta no turno do primeiro piloto.
- O navegador não pega o teclado nem "dita letra por letra". Ele diz **o que** fazer ("agora tira os espaços do nome"), e o piloto decide **como** escrever.
- Fez uma tarefa? Roda. Deu certo? Próxima. Não deixa para testar tudo no final.
- Travou? Primeiro a dupla conversa e olha o `index.ts` e o `GUIA-DE-ESTUDOS.md`. Só depois chama o professor.
- Acabou o tempo, parou. Roda a correção, vê a nota e vai para o próximo desafio.

## Cronograma (2 horas)

| Horário     | Desafio                                   | Assunto                                           |
| ----------- | ----------------------------------------- | ------------------------------------------------- |
| 0:00 – 0:30 | [1. Cadastro do cliente](#desafio-1-cadastro-do-cliente) | variáveis, constantes, tipos e strings            |
| 0:30 – 1:00 | [2. Montando o pedido](#desafio-2-montando-o-pedido)     | números, `Math` e operadores aritméticos          |
| 1:00 – 1:30 | [3. Programa de pontos](#desafio-3-programa-de-pontos)   | operadores de atribuição, relacionais e lógicos   |
| 1:30 – 2:00 | [4. Fechando a conta](#desafio-4-fechando-a-conta)       | condicional simples (`if`) juntando tudo          |

Cada desafio tem 5 tarefas de 2 pontos: **10 pontos por desafio**.

## Antes de começar

- Cada desafio tem um arquivo: `desafio-1.ts`, `desafio-2.ts`, `desafio-3.ts` e `desafio-4.ts`. Dentro dele tem um comentário para cada tarefa (`// TAREFA 1`, `// TAREFA 2`...). Escreve a resposta **embaixo do comentário dela**.
- Para rodar o desafio 1, por exemplo:

  ```bash
  tsx ~/CURSO-TS-CETAM/desafio-1.ts
  ```

- Para ver a nota do desafio 1 (troca o `1` pelo número do desafio):

  ```bash
  tsx ~/CURSO-TS-CETAM/desafios.spec.ts 1
  ```

- Quando a tarefa mandar criar alguma coisa, ela diz se é com `let` ou com `const`, e qual nome usar. Use **exatamente** esse nome.
- Quando a tarefa pedir para "mostrar", é com `console.log`.
- Quando a tarefa pedir para **ler** (o usuário digita), é com o `input`. Todo arquivo já vem com ele importado lá em cima, não precisa escrever de novo:

  ```ts
  import { input } from '#core/input.ts'
  ```

  O `input` sempre devolve **texto** (`string`). Se precisar de número, converte com `Number(...)`.
- Nos desafios 3 e 4 o arquivo já começa com um bloco `// DADOS DO SISTEMA (nao mexa)`. Não mude nada ali.
- Valor que dá para calcular **não se digita direto**. Se a tarefa pede o total, o total sai de uma conta, não de você escrever `93.28`.

---

## Desafio 1. Cadastro do cliente

A Maria Eduarda chegou na Byte Burger pela primeira vez. O sistema precisa cadastrar ela e imprimir um cartão de boas-vindas.

Arquivo: `desafio-1.ts`

### Tarefa 1. Criando o cadastro (2 pts)

O atendente digita os dados da cliente. Crie estas duas com `let`, **lendo com `input`**:

| Crie com `let` | Pergunta na tela          | O que digitar ao rodar     |
| -------------- | ------------------------- | -------------------------- |
| `nomeCliente`  | `"Nome do cliente: "`     | `  maria eduarda lima  `   |
| `telefone`     | `"Telefone (so numeros): "` | `92991234567`            |

Na hora de rodar, digite o nome com 2 espaços antes e 2 depois: é de propósito, o atendente se enrolou no teclado.

Crie estas duas com `const`, **escrevendo o tipo** (igual a `const idade: number = 12`):

| Crie com `const` | Tipo     | Valor           |
| ---------------- | -------- | --------------- |
| `LOJA`           | `string` | `"Byte Burger"` |
| `ANO_ABERTURA`   | `number` | `2019`          |

Por último, crie com `const` a `clienteNovo` valendo `true`, **sem escrever o tipo**. Num comentário do lado, diga qual tipo o TypeScript descobriu sozinho.

### Tarefa 2. Corrigindo o cadastro (2 pts)

A Maria trocou de número. Mude o valor de `telefone` para `"92988887777"` e mostre `telefone`. Não é para criar outra variável: é para trocar o valor da que já existe.

Num comentário, explique por que não daria para fazer o mesmo com a `LOJA` (não escreva isso como código, senão o programa para).

Depois crie com `const` a `anosDeLoja`: quantos anos a loja tem em 2026, fazendo a conta com `ANO_ABERTURA`. Mostre `anosDeLoja`.

### Tarefa 3. Arrumando o nome (2 pts)

Crie estas quatro com `const` e mostre as quatro:

| Crie com `const` | Com o quê                                                     |
| ---------------- | ------------------------------------------------------------- |
| `nome`           | `nomeCliente` sem os espaços do começo e do fim               |
| `nomeMaiusculo`  | `nome` todo em MAIÚSCULAS                                     |
| `partes`         | `nome` separado em partes, uma para cada palavra              |
| `tamanhoNome`    | quantos caracteres `nome` tem (os espaços do meio contam)     |

### Tarefa 4. Primeiro nome, iniciais e telefone (2 pts)

Crie estas três com `const` e mostre as três:

| Crie com `const`    | Com o quê                                                                  | Tem que dar          |
| ------------------- | -------------------------------------------------------------------------- | -------------------- |
| `primeiroNome`      | o primeiro item de `partes`, com só a primeira letra maiúscula             | `"Maria"`            |
| `iniciais`          | a primeira letra de cada item de `partes`, em maiúscula, num texto só      | `"MEL"`              |
| `telefoneFormatado` | `telefone` no formato de telefone, usando pedaços dele                     | `"(92) 98888-7777"`  |

Dicas:
- para `primeiroNome`: pegue a primeira letra e deixe maiúscula, depois junte com o resto da palavra a partir da posição 1
- para `telefoneFormatado`: use **crase** e recorte o `telefone` em pedaços. Os dois primeiros números são o DDD. Nada de digitar os números direto

### Tarefa 5. Cartão de boas-vindas (2 pts)

Crie com `const`:

| Crie com `const` | Com o quê                                                                                      | Tem que dar      |
| ---------------- | ---------------------------------------------------------------------------------------------- | ---------------- |
| `codigoCliente`  | `ANO_ABERTURA`, um traço e `tamanhoNome` sempre com 3 dígitos (zeros na frente)                | `"2019-018"`     |
| `linha`          | 40 asteriscos (`*`), usando um método que repete o texto                                       | `"****...****"`  |

Agora, com **crase**, crie com `const` a `cartao1` e a `cartao2`. Tudo tem que vir das variáveis. Mostre `linha`, `cartao1`, `cartao2` e `linha` de novo, nessa ordem, um embaixo do outro:

```
****************************************
Bem-vinda a Byte Burger, Maria! (MEL)
Codigo: 2019-018 | Tel: (92) 98888-7777
****************************************
```

---

## Desafio 2. Montando o pedido

A Maria pediu 2 hambúrgueres, 1 batata e 3 refrigerantes. Primeiro ela pensou em dividir a conta com 2 amigos, mas no fim pagou tudo com uma nota de 100. O sistema precisa calcular as duas coisas.

Arquivo: `desafio-2.ts`

### Tarefa 1. O cardápio (2 pts)

Crie com `const`, **escrevendo o tipo**:

| Crie com `const`  | Tipo     | Valor    |
| ----------------- | -------- | -------- |
| `PRECO_BURGER`    | `number` | `24.9`   |
| `PRECO_BATATA`    | `number` | `12.5`   |
| `precoRefriTexto` | `string` | `"7.5"`  |

O preço do refri veio do cardápio digital como **texto**. Vamos ter que converter.

O caixa digita as quantidades. Crie com `const`, **sem escrever o tipo**, **lendo com `input`** e convertendo para número com `Number(...)`:

| Crie com `const` | Pergunta na tela               | O que digitar ao rodar |
| ---------------- | ------------------------------ | ---------------------- |
| `qtdBurger`      | `"Quantos hamburgueres? "`     | `2`                    |
| `qtdBatata`      | `"Quantas batatas? "`          | `1`                    |
| `qtdRefri`       | `"Quantos refrigerantes? "`    | `3`                    |

Por que precisa do `Number`? Porque o `input` devolve texto, e `"2" * 24.9` até funciona, mas `"2" + 1` vira `"21"`.

### Tarefa 2. Somando o pedido (2 pts)

Crie com `const` e mostre `subtotal`:

| Crie com `const` | Com o quê                                               |
| ---------------- | ------------------------------------------------------- |
| `precoRefri`     | `precoRefriTexto` transformado em número                |
| `totalBurger`    | preço do hambúrguer vezes a quantidade                  |
| `totalBatata`    | preço da batata vezes a quantidade                      |
| `totalRefri`     | preço do refri vezes a quantidade                       |
| `subtotal`       | a soma dos três totais                                  |

### Tarefa 3. Taxa de serviço (2 pts)

Crie com `const`:

| Crie com `const`  | Com o quê                                                    |
| ----------------- | ------------------------------------------------------------ |
| `itemMaisCaro`    | o maior entre `totalBurger`, `totalBatata` e `totalRefri`    |
| `itemMaisBarato`  | o menor entre os três                                        |
| `taxa`            | 10% de `subtotal`                                            |
| `total`           | `subtotal` mais `taxa`                                       |
| `totalTexto`      | `total` com 2 casas depois da vírgula                        |

Mostre `itemMaisCaro`, `itemMaisBarato` e `totalTexto`. O `totalTexto` tem que dar `"93.28"`.

### Tarefa 4. Dividindo a conta (2 pts)

São 3 pessoas. Ninguém quer mexer com centavo, então cada um paga o valor arredondado **para cima**, e o que sobrar fica de gorjeta.

| Crie com `const`        | Com o quê                                                                   |
| ----------------------- | --------------------------------------------------------------------------- |
| `pessoas`               | `3`                                                                         |
| `porPessoa`             | `total` dividido por `pessoas`                                              |
| `porPessoaArredondado`  | `porPessoa` arredondado para cima                                           |
| `gorjeta`               | quanto as 3 pessoas pagam juntas (já arredondado) menos o `total`           |
| `gorjetaTexto`          | `gorjeta` com 2 casas depois da vírgula                                     |

Mostre `porPessoaArredondado` e `gorjetaTexto`.

### Tarefa 5. Troco e senha (2 pts)

Agora esquece a divisão: a Maria resolveu pagar tudo sozinha, com uma nota de 100.

| Crie com `const` | Com o quê                                                                           |
| ---------------- | ----------------------------------------------------------------------------------- |
| `pagamento`      | `100`                                                                               |
| `troco`          | `pagamento` menos `total`                                                           |
| `trocoTexto`     | `troco` com 2 casas depois da vírgula                                               |
| `notasDe5`       | quantas notas de 5 cabem no troco (só a parte inteira)                              |
| `numeroPedido`   | um número inteiro sorteado de 0 a 99, usando o sorteio do `Math`                    |
| `senha`          | `numeroPedido` sempre com 3 dígitos, completando com zeros na frente                |

Com **crase**, crie com `const` o `resumo` e mostre. Tem que sair assim (a senha muda a cada vez que roda):

```
Pedido 042 | Total: R$ 93.28 | Troco: R$ 6.72 | Notas de 5: 1
```

---

## Desafio 3. Programa de pontos

A Byte Burger tem um programa de fidelidade. A cada pedido o cliente ganha pontos, e com pontos ganha vantagens.

Arquivo: `desafio-3.ts`. Ele já começa com os dados do pedido da Maria. **Não mexa neles.**

### Tarefa 1. Somando os pontos (2 pts)

Crie com `let` a `pontos` valendo `120` (o que a Maria já tinha). Depois, **sem criar outra variável e usando os operadores de atribuição curtos** (`+=`, `-=`, `*=`):

1. some em `pontos` o `totalPedido` arredondado para baixo (cada real vale 1 ponto)
2. hoje é dia de pontos em dobro: multiplique `pontos` por 2
3. a Maria trocou 150 pontos por um milk-shake: tire 150 de `pontos`

Mostre `pontos` depois de cada passo. No fim tem que dar `276`.

### Tarefa 2. Contadores (2 pts)

| Crie com `let`  | Valor |
| --------------- | ----- |
| `visitas`       | `9`   |
| `estoqueBurger` | `50`  |

- A Maria acabou de visitar a loja: some 1 em `visitas` usando `++`.
- Saíram os 2 hambúrgueres do pedido: tire `qtdBurger` de `estoqueBurger` usando `-=`.
- Um hambúrguer caiu no chão: tire 1 de `estoqueBurger` usando `--`.

Mostre `visitas` e `estoqueBurger`.

### Tarefa 3. Fazendo perguntas (2 pts)

Crie com `const`. Cada uma tem que sair de uma **comparação**, nada de escrever `true` ou `false` direto:

| Crie com `const` | É `true` quando...                                  |
| ---------------- | --------------------------------------------------- |
| `ehVip`          | `pontos` é maior ou igual a 250                     |
| `pedidoGrande`   | `qtdItens` é maior que 5                            |
| `cupomValido`    | `cupom` é igual a `"BYTE10"` (valor **e** tipo)     |
| `ehMenor`        | `idadeCliente` é menor que 18                       |
| `diaPromocao`    | `diaDaSemana` é igual a `"sexta"` (valor **e** tipo)|

Mostre as cinco. Embaixo, num comentário, explique a diferença entre `==` e `===`, e qual a gente prefere usar.

### Tarefa 4. As regras da loja (2 pts)

Crie com `const`, usando as variáveis da tarefa 3 e os operadores lógicos (`&&`, `||`, `!`):

| Crie com `const`     | Regra                                                         |
| -------------------- | ------------------------------------------------------------- |
| `ganhaBatata`        | ganha batata grátis quem é VIP **e** fez pedido grande        |
| `ganhaDesconto`      | ganha desconto quem tem cupom válido **ou** é dia de promoção |
| `participaSorteio`   | participa do sorteio quem pagou com Pix **e não** é menor     |
| `naoEhVip`           | o contrário de `ehVip`                                        |

Mostre as quatro. Antes de rodar, a dupla deve combinar em voz alta o que espera que apareça.

### Tarefa 5. Painel do cliente (2 pts)

Com **crase**, crie com `const` o `painel1` e o `painel2` e mostre os dois. Tudo vem das variáveis:

```
Pontos: 276 | Visitas: 10 | Estoque: 47
VIP: true | Batata gratis: true | Desconto: true | Sorteio: false
```

---

## Desafio 4. Fechando a conta

A Maria pediu por delivery e a conta precisa ser fechada. Cada regra da loja só vale **se** uma condição for verdadeira, e quem confere isso no código é o `if`.

Arquivo: `desafio-4.ts`. Ele já começa com os dados do pedido. **Não mexa neles.**

Regra deste desafio: valor que depende de uma regra **só muda dentro de um `if`**. Não vale escrever `desconto = 17` direto.

### Tarefa 1. Começando a conta (2 pts)

| Crie com `let` | Valor |
| -------------- | ----- |
| `desconto`     | `0`   |
| `taxaEntrega`  | `8`   |
| `brindes`      | `0`   |

Depois, com um `if`: se `ehVip` for verdadeiro, mostre `"Cliente VIP no pedido!"`.

### Tarefa 2. Descontos (2 pts)

Um `if` para cada regra:

- se `cupom` for igual a `"BYTE10"`, some 10 em `desconto`
- se `ehVip` for verdadeiro **e** `subtotal` for maior que 50, some 5 em `desconto`
- se `pagouComPix` for verdadeiro, some 2 em `desconto`

Mostre `desconto`.

### Tarefa 3. Taxa de entrega (2 pts)

- se `distanciaKm` for maior que 5, some 4 em `taxaEntrega` (é longe)
- se `subtotal` for maior ou igual a 100 **ou** for `aniversario`, a entrega é grátis: `taxaEntrega` passa a ser 0

Mostre `taxaEntrega`. Antes de rodar, combine com a dupla: a entrega vai sair grátis ou não? Por quê?

### Tarefa 4. Total e brindes (2 pts)

Crie com `const` o `total`: `subtotal` menos `desconto` mais `taxaEntrega`. Mostre `total`.

Depois, um `if` para cada regra, usando `++` ou `+=`:

- se `total` for maior que 50, ganha 1 brinde
- se `ehVip` for verdadeiro, ganha 1 brinde
- se for `aniversario`, ganha 3 brindes

Mostre `brindes`.

### Tarefa 5. Avisos e comprovante (2 pts)

- se `horaPedido` for maior ou igual a 22, mostre `"Atencao: a cozinha fecha as 23h"`
- se `pagouComPix` **não** for verdadeiro, mostre `"Pagamento na entrega"`

Com o pedido de hoje, só o primeiro aviso aparece. O segundo `if` tem que estar no código mesmo assim.

Por último, com **crase**, crie com `const` o `comprovante` e mostre. Os valores em dinheiro com 2 casas:

```
Cliente: Maria | Desconto: R$ 17.00 | Entrega: R$ 12.00 | Total: R$ 79.80 | Brindes: 2
```

---

## Terminou antes do tempo?

Volta no desafio e procura um jeito de deixar o código mais claro: nomes, comentários, ordem das linhas. Depois troca de computador com outra dupla e tenta explicar o código dela em voz alta.

# Trabalho prático: funções que não dependem de `cliente`

## Contexto

Hoje as funções `sacar`, `depositar` e `visualizarSaldo` em [modulos.ts](modulos.ts) leem e alteram direto a constante `cliente`, que vem de [constantes.ts](constantes.ts). Com isso, elas só funcionam para essa conta e são difíceis de testar.

A função `visualizarExtrato` já segue outro caminho: ela não importa nada de `cliente`. Recebe as operações por parâmetro e trabalha só com o que recebeu.

```ts
export function visualizarExtrato(operacoes: Operacao[]) {
  // usa apenas o que chegou em "operacoes"
}
```

## Objetivo

Ajustar `sacar`, `depositar` e `visualizarSaldo` para seguirem o mesmo modelo: **tudo o que a função usa entra por parâmetro, e tudo o que ela muda sai pelo retorno**. Quem passa os dados do `cliente` para as funções é o [index.ts](index.ts).

No fim, o arquivo `modulos.ts` não pode ter nenhum `import { cliente }`.

## Requisitos

1. [ ] **`visualizarSaldo`**
   1. [ ] Receber o saldo por parâmetro em vez de ler `cliente.saldo`.
   2. [ ] Continuar exibindo o saldo formatado com `formatarMoeda`.
2. [ ] **`depositar`**
   1. [ ] Receber o saldo atual, a lista de operações e o valor do depósito.
   2. [ ] Não alterar a lista recebida: nada de `push`. Criar uma lista nova com a operação (aprovada ou recusada) no final.
   3. [ ] Devolver um objeto com o novo saldo e a nova lista. Se o depósito for recusado, o saldo volta sem alteração.
3. [ ] **`sacar`**
   1. [ ] Receber o saldo atual, a lista de operações e o valor do saque.
   2. [ ] Manter as mesmas validações de hoje.
   3. [ ] Não alterar a lista recebida: nada de `push`. Criar uma lista nova com a operação (aprovada ou recusada) no final.
   4. [ ] Devolver um objeto com o novo saldo e a nova lista. Se o saque for recusado, o saldo volta sem alteração.
4. [ ] **`tipos.ts`**
   1. [ ] Criar o tipo `ResultadoOperacao` para o objeto devolvido por `sacar` e `depositar`.
5. [ ] **`index.ts`**
   1. [ ] Passar os dados do `cliente` em cada chamada.
   2. [ ] Guardar o saldo e a lista devolvidos por `sacar` e `depositar` de volta em `cliente.saldo` e `cliente.operacoes`.
6. [ ] **`modulos.ts`**
   1. [ ] Remover o `import { cliente } from "./constantes"`.

## Assinaturas esperadas

```ts
// tipos.ts
export type ResultadoOperacao = {
  saldo: number;
  operacoes: Operacao[];
};

// modulos.ts
export function visualizarSaldo(saldo: number): void
export function depositar(saldo: number, operacoes: Operacao[], valor: number): ResultadoOperacao
export function sacar(saldo: number, operacoes: Operacao[], valor: number): ResultadoOperacao
```

O retorno deve seguir este formato:

```ts
return { saldo: novoSaldo, operacoes: [...operacoes, operacao] };
```

## Ponto para pensar

Se `depositar` fizesse `operacoes.push(operacao)` no parâmetro, o `cliente.operacoes` mudaria mesmo sem o `index.ts` guardar o retorno. Já `saldo = saldo + valor` no parâmetro não muda o `cliente.saldo`. Por que essa diferença existe, e por que é melhor devolver uma lista nova em vez de usar `push`?

Escreva a resposta em duas ou três linhas, em um comentário no topo do `modulos.ts`.

## Como testar

Rode o programa e faça a sequência abaixo. O saldo inicial é R$ 100,00.

| Passo | Ação | Saldo esperado |
|---|---|---|
| 1 | Ver saldo | R$ 100,00 |
| 2 | Depositar `50` | R$ 150,00 |
| 3 | Sacar `200` (recusado) | R$ 150,00 |
| 4 | Sacar `150` | R$ 0,00 |
| 5 | Depositar `abc` (recusado) | R$ 0,00 |
| 6 | Ver saldo | R$ 0,00 |

Depois rode `pnpm typecheck` e confira se não há erros nos arquivos do `banco-v-1`.

## Defesa

Além do código, cada aluno deve defender as mudanças em uma exposição em sala, mostrando o próprio código.

A exposição deve passar por três partes:

1. **O que mudou.** Para cada função alterada, mostrar a assinatura antes e depois e explicar o que mudou no comportamento.
2. **Vantagens x desvantagens.** Comparar a versão que lia `cliente` direto com a versão que recebe tudo por parâmetro. Apresentar pelo menos três vantagens e duas desvantagens, cada uma com um exemplo concreto do próprio código.
3. **Por que das decisões.** Justificar as escolhas feitas durante o trabalho, respondendo:
   1. Por que a ordem dos parâmetros ficou essa?
   2. Por que o saldo e a lista voltam pelo `return` em vez de serem alterados dentro da função?
   3. Por que criar uma lista nova em vez de usar `push`? Qual é o custo dessa escolha?
   4. Por que as validações ficaram dentro de `sacar` e `depositar`, e não no `index.ts`?
   5. Que outra solução foi considerada e por que foi descartada?

Cada aluno tem 5 minutos para a exposição, e a turma pode fazer perguntas no final.

## Critérios de avaliação

| Critério | Peso |
|---|---|
| `modulos.ts` sem nenhuma referência a `cliente` | 20% |
| `sacar` e `depositar` devolvem o saldo e a lista nova certos em todos os casos, sem alterar a lista recebida | 20% |
| `index.ts` atualiza `cliente.saldo` e `cliente.operacoes` com o retorno das funções | 15% |
| Sequência de teste com os saldos esperados | 10% |
| Resposta do "Ponto para pensar" | 5% |
| Defesa: vantagens x desvantagens com exemplos do código | 15% |
| Defesa: justificativa das decisões | 15% |

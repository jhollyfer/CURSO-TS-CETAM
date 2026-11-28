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
      *Dica. Veja quantos dados do cliente a função realmente usa.*
   2. [ ] Continuar exibindo o saldo formatado com `formatarMoeda`.
2. [ ] **`depositar`**
   1. [ ] Receber o saldo atual, a lista de operações e o valor do depósito.
   2. [ ] Registrar a operação (aprovada ou recusada) na lista recebida.
   3. [ ] Devolver o novo saldo com `return`. Se o depósito for recusado, devolver o saldo sem alteração.  
      *Dica. Teste: se a função fizer `saldo = saldo + valor` no parâmetro, o `cliente.saldo` muda?*
3. [ ] **`sacar`**
   1. [ ] Receber o saldo atual, a lista de operações e o valor do saque.
   2. [ ] Manter as mesmas validações de hoje e registrar a operação na lista recebida.
   3. [ ] Devolver o novo saldo com `return`. Se o saque for recusado, devolver o saldo sem alteração.
4. [ ] **`index.ts`**
   1. [ ] Passar os dados do `cliente` em cada chamada.
   2. [ ] Guardar o saldo devolvido por `sacar` e `depositar` de volta em `cliente.saldo`.  
      *Dica. `cliente.saldo = depositar(...)`.*
5. [ ] **`modulos.ts`**
   1. [ ] Remover o `import { cliente } from "./constantes"`.  
      *Dica. Se o TypeScript reclamar de `cliente` depois de remover o import, ainda falta trocar alguma coisa por parâmetro.*

## Assinaturas esperadas

```ts
export function visualizarSaldo(saldo: number): void
export function depositar(saldo: number, operacoes: Operacao[], valor: number): number
export function sacar(saldo: number, operacoes: Operacao[], valor: number): number
```

## Ponto para pensar

Por que o **saldo** precisa ser devolvido com `return`, mas as **operações** não?

*Dica. Compare o que acontece ao mudar um parâmetro do tipo `number` e ao fazer `push` em um parâmetro do tipo array. Pesquise "passagem por valor e por referência em JavaScript".*

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

## Critérios de avaliação

| Critério | Peso |
|---|---|
| `modulos.ts` sem nenhuma referência a `cliente` | 30% |
| `sacar` e `depositar` devolvem o saldo certo em todos os casos (aprovado e recusado) | 30% |
| `index.ts` atualiza `cliente.saldo` com o retorno das funções | 20% |
| Sequência de teste com os saldos esperados | 10% |
| Resposta do "Ponto para pensar" | 10% |

## Desafio extra (opcional)

Faça `sacar` e `depositar` também **não alterarem** o array recebido. Em vez de `push`, devolva um objeto com o novo saldo e a nova lista:

```ts
return { saldo: novoSaldo, operacoes: [...operacoes, operacao] };
```

*Dica. Pesquise "spread operator" na MDN.*

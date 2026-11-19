# Banco V1

O [arquivo banco-v-um.ts](banco-v-um.ts) começa com uma conta fixa e R$ 100,00 de saldo. Os exemplos mostram como o saldo muda a cada saque e depósito. Para a próxima versão do exercício, a proposta é fazer essas operações pelo terminal e poder consultar o saldo e o extrato.

## Requisitos funcionais

1. [ ] **Sacar**  
   *Dica. Comece pela função `sacar`.*
   1. [ ] Informar o valor do saque.  
      *Dica. Veja como ler texto em `_core/input.ts`.*
   2. [ ] Conferir se o valor é válido e se há saldo para o saque.  
      *Dica. Pesquise `Number.isFinite` e operadores de comparação.*
   3. [ ] Descontar o valor do saldo e registrar o saque no extrato.  
      *Dica. Pense no que acontece depois que o saque é aprovado.*
   4. [ ] Mostrar o novo saldo se a operação for aprovada. Se for recusada, explicar o motivo.  
      *Dica. Leia a mensagem e veja se fica claro o que aconteceu.*
2. [ ] **Depositar**  
   *Dica. Comece pela função `depositar`.*
   1. [ ] Informar o valor do depósito.  
      *Dica. Experimente digitar um valor com centavos.*
   2. [ ] Validar o valor informado.  
      *Dica. Compare o que o programa recebe ao digitar `10`, `abc` ou espaços.*
   3. [ ] Somar o valor ao saldo e registrar o depósito no extrato.  
      *Dica. Confira quais dados do cliente mudam no depósito.*
   4. [ ] Mostrar o novo saldo se a operação for aprovada. Se for recusada, explicar o motivo.  
      *Dica. Simule um depósito válido e um inválido.*
3. [ ] **Consultar o saldo**  
   *Dica. Procure o saldo no objeto `cliente`.*
   1. [ ] Escolher a opção de saldo no menu.  
      *Dica. Pesquise `switch` na MDN.*
   2. [ ] Exibir a agência, a conta e o saldo atual.  
      *Dica. Pesquise template literals na MDN.*
4. [ ] **Consultar o extrato**  
   *Dica. Veja o que já existe em `cliente.operacoes`.*
   1. [ ] Exibir os saques e depósitos do mais recente para o mais antigo.  
      *Dica. Pesquise como percorrer um array em ordem inversa.*
   2. [ ] Mostrar a data, o tipo, o valor e o saldo após cada operação.  
      *Dica. Pesquise tipos de objeto no Handbook do TypeScript.*
   3. [ ] Se a conta ainda não teve movimentações, avisar que o extrato está vazio.  
      *Dica. Pesquise a propriedade `length` de um array.*
5. [ ] **Usar o banco pelo terminal**  
   *Dica. Rascunhe o fluxo do menu no papel.*
   1. [ ] Exibir um menu com as opções de sacar, depositar, consultar saldo, ver extrato e sair.  
      *Dica. Rascunhe uma opção para cada ação.*
   2. [ ] Voltar ao menu depois de uma operação ou de uma entrada inválida.  
      *Dica. Pesquise `while` na MDN.*
   3. [ ] Encerrar o programa quando o usuário escolher sair.  
      *Dica. Pense no que faz o laço parar.*

## Requisitos não funcionais

1. [ ] Escrever o menu e as mensagens em português. Indicar o que digitar.  
   *Dica. Leia o menu como quem acabou de abrir o programa.*
2. [ ] Mostrar os valores no formato brasileiro, como `R$ 100,00`.  
   *Dica. Pesquise `Intl.NumberFormat` na MDN.*
3. [ ] Calcular os valores com precisão de centavos. Um depósito de `R$ 0,10` seguido de outro de `R$ 0,20` deve acrescentar exatamente `R$ 0,30` ao saldo.  
   *Dica. Experimente `0.1 + 0.2` no console e pesquise ponto flutuante.*
4. [ ] Avisar se a pessoa digitar texto no lugar de um valor, deixar um campo vazio ou escolher uma opção que não existe. Deixar que ela tente de novo sem fechar o programa.  
   *Dica. Aperte Enter sem digitar nada. Depois, tente uma opção fora do menu.*

## Regras de negócio

1. [ ] O valor de um saque ou depósito deve ser maior que zero e ter no máximo duas casas decimais.  
   *Dica. Teste zero, um valor negativo e um com três casas decimais.*
2. [ ] Um saque só pode ser aprovado se o valor for menor ou igual ao saldo disponível. Sacar o saldo inteiro é permitido.  
   *Dica. Compare um saque do saldo inteiro com outro de um centavo a mais.*
3. [ ] Cada saque ou depósito aprovado deve alterar o saldo uma vez e gerar exatamente um registro no extrato.  
   *Dica. Conte os registros antes e depois de uma operação aprovada.*
4. [ ] Se a operação for recusada, o saldo e o extrato devem ficar como estavam.  
   *Dica. Anote o saldo e o tamanho do extrato antes de tentar um saque inválido.*
5. [ ] Consultar o saldo ou o extrato deve apenas exibir informações, sem gerar movimentação.  
   *Dica. Consulte duas vezes e compare o saldo e a lista de operações.*

## Onde pesquisar

- [MDN — switch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch)
- [MDN — Number.isFinite](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)
- [MDN — Intl.NumberFormat](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
- [Handbook do TypeScript — tipos de objeto](https://www.typescriptlang.org/docs/handbook/2/objects.html)

## Escopo do exercício

O exercício usa uma única conta. O saldo e o extrato ficam em memória enquanto o programa estiver aberto.

## Possíveis evoluções

1. **Pix.** Informar a chave do destinatário e o valor, revisar os dados e confirmar a transferência.
2. **TED.** Informar os dados da conta de destino e o valor, revisar os dados e confirmar a transferência.
3. **Financiamento.** Simular parcelas e exibir o total a pagar.

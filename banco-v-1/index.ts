const cliente = {
  agencia: 3740,
  conta: '11111-2',
  saldo: 100,
  operacoes: []
}

// sacar
function sacar(valor: number) {
  cliente.saldo = cliente.saldo - valor;
}

// depositar
function depositar(valor: number) {
  cliente.saldo = cliente.saldo + valor;
}
console.log(cliente.saldo)
depositar(8000)
console.log(cliente.saldo)
sacar(45)
console.log(cliente.saldo)
sacar(15)
console.log(cliente.saldo)

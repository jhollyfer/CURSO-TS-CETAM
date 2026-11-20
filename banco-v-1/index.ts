type Operacao = {
  data: string;
  tipo: "SAQUE" | "DEPOSITO";
  valor: number;
};

type Cliente = {
  agencia: number;
  conta: string;
  saldo: number;
  operacoes: Operacao[];
};

const cliente: Cliente = {
  agencia: 3740,
  conta: "11111-2",
  saldo: 100,
  operacoes: [],
};

//github.com/jhollyfer/CURSO-TS-CETAM/readme.md
// sacar
function sacar(valor: number) {
  const saldoEMaiorQueZero = cliente.saldo > 0;
  const valorMenorQueSaldo = valor < cliente.saldo;
  const podeSacar = saldoEMaiorQueZero && valorMenorQueSaldo;
  if (podeSacar) {
    cliente.saldo -= valor;

    const operacao: Operacao = {
      data: new Date().toISOString(),
      valor: -valor,
      tipo: "SAQUE",
    };

    cliente.operacoes.push(operacao);
  } else {
    console.log("Operacao nao pode ser realizada.")
  }
}

// depositar
function depositar(valor: number) {
  if (valor > 0) {
    cliente.saldo = cliente.saldo + valor;

    const operacao: Operacao = {
      data: new Date().toISOString(),
      // valor: valor,
      valor,
      tipo: "DEPOSITO",
    };

    cliente.operacoes.push(operacao);
  } else {
    console.log("Operacao nao pode ser realizada.")
    console.log("Valor de deposito negativo")
  }
}

console.log(cliente.saldo);
depositar(8000);
console.log(cliente.saldo);
sacar(45);
console.log(cliente.saldo);
sacar(15);
console.log(cliente.saldo);
sacar(8000);
console.log(cliente.saldo);
sacar(140);
console.log(cliente.saldo);
sacar(200);
console.log(cliente.saldo);
depositar(-40);
console.log(cliente.saldo);
// console.log(cliente.operacoes);

type Operacao = {
  data: string;
  tipo: "SAQUE" | "DEPOSITO";
  valor: number;
  erro?: {
    mensagem: string;
  }
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
  const saldoValido = cliente.saldo > 0;
  const valorValido = valor < cliente.saldo;
  const podeSacar = saldoValido && valorValido;

  if (!saldoValido) {
    const operacao: Operacao = {
      data: new Date().toISOString(),
      tipo: 'SAQUE',
      valor: -valor,
      erro: {
        mensagem: "Saldo insuficiente."
      }
    }
    cliente.operacoes.push(operacao)
    return
  }

  if (!valorValido) {
    const operacao: Operacao = {
      data: new Date().toISOString(),
      tipo: 'SAQUE',
      valor: -valor,
      erro: {
        mensagem: "Valor de saque não pode ser maior que saldo."
      }
    }
    cliente.operacoes.push(operacao)
    return
  }

  // Sucesso ao efetuar operacao
  cliente.saldo -= valor;

  const operacao: Operacao = {
    data: new Date().toISOString(),
    valor: -valor,
    tipo: "SAQUE",
  };

  cliente.operacoes.push(operacao);
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
console.log(cliente.operacoes);

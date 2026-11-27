import { input } from "#core/input.ts";

type Operacao = {
  data: string;
  tipo: "SAQUE" | "DEPOSITO";
  valor: number;
  erro?: {
    mensagem: string;
  };
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

  if (!saldoValido) {
    const operacao: Operacao = {
      data: new Date().toISOString(),
      tipo: "SAQUE",
      valor: -valor,
      erro: {
        mensagem: "Saldo insuficiente.",
      },
    };
    cliente.operacoes.push(operacao);
    return;
  }

  if (!valorValido) {
    const operacao: Operacao = {
      data: new Date().toISOString(),
      tipo: "SAQUE",
      valor: -valor,
      erro: {
        mensagem: "Valor de saque não pode ser maior que saldo.",
      },
    };
    cliente.operacoes.push(operacao);
    return;
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
      valor,
      tipo: "DEPOSITO",
    };
    cliente.operacoes.push(operacao);
    return;
  }

  if (!(valor > 0)) {
    const operacao: Operacao = {
      data: new Date().toISOString(),
      valor,
      tipo: "DEPOSITO",
      erro: {
        mensagem: "Valor de depósito inválido.",
      },
    };
    cliente.operacoes.push(operacao);
    return;
  }
}

function visualizarSaldo() {
  const saida = `Saldo atual: ${cliente.saldo}`
  console.log(saida)
}

let opcao: number;

do {
  console.log("========================");
  console.log("1 - Depositar");
  console.log("2 - Sacar");
  console.log("3 - Ver saldo\n");
  console.log("4 - Ver extrato\n");
  console.log("0 - Sair\n");
  console.log("========================");
  opcao = Number(input("Digite opção: "));

  switch (opcao) {
    case 1:
      const d = Number(input("Digite valor para depósito: "));
      depositar(d);
      break;
    case 2:
      const s = Number(input("Digite valor para saque: "));
      sacar(s);
      break;
    case 3:
      visualizarSaldo()
      break;
    default:
      console.log("Opção inválida. Tente novamente.")

  }
} while (opcao !== 0);

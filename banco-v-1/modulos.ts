import { cliente } from "./constantes";
import type { Operacao } from "./tipos";

export function sacar(valor: number) {
  const saldoValido = cliente.saldo > 0;
  const valorValido = valor <= cliente.saldo;

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

export function depositar(valor: number) {
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

export function visualizarSaldo() {
  const saldoFormatado = formatarMoeda(cliente.saldo)
  const saida = `Saldo atual: ${saldoFormatado}`;
  console.log(saida);
}

export function formatarMoeda(valor: number) {
  const configuracao = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  })

  return configuracao.format(valor)
}

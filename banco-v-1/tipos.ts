export type Operacao = {
  data: string;
  tipo: "SAQUE" | "DEPOSITO";
  valor: number;
  erro?: {
    mensagem: string;
  };
};

export type Cliente = {
  agencia: number;
  conta: string;
  saldo: number;
  operacoes: Operacao[];
};

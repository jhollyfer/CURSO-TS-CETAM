//github.com/jhollyfer/CURSO-TS-CETAM/readme.md
import { input } from "#core/input.ts";
import { depositar, sacar, visualizarSaldo } from "./modulos";

let opcao: number;

do {
  console.log("========================");
  console.log("1 - Depositar");
  console.log("2 - Sacar");
  console.log("3 - Ver saldo");
  console.log("4 - Ver extrato");
  console.log("0 - Sair");
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
      visualizarSaldo();
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
  }
} while (opcao !== 0);

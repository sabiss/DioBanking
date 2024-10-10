import { ContaBancaria } from "./ContaBancaria";

export class ContaEmpresarial extends ContaBancaria {
  constructor(nome: string) {
    super(nome);
  }

  getLoan(valor: number): string {
    if (this.contaAtiva()) {
      this.deposit(valor);
      return "Empréstimo feito com sucesso";
    } else {
      return "Conta Inativa. Empréstimo Negado";
    }
  }
}

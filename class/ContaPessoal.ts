import { ContaBancaria } from "./ContaBancaria";

export class ContaPessoal extends ContaBancaria {
  constructor(nome: string) {
    super(nome);
  }
  depositWithBonus(valor: number): string {
    if (this.valorDeDepositoValido(valor)) {
      valor += 10;
      this.deposit(valor);
      return "Depósito feito com sucesso e acrescido de R$10 de bônus !";
    } else {
      return "Valor Inválido!";
    }
  }
}

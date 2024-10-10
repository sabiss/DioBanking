export abstract class ContaBancaria {
  private readonly nome: string;
  private readonly numeroConta: number = Math.random();
  private saldo: number = 0;
  private status: boolean = true;

  constructor(nome: string) {
    this.nome = nome;
  }

  deposit(valor: number): string {
    //deposito
    if (this.valorDeDepositoValido(valor)) {
      this.saldo += valor;
      return "Depositado com sucesso";
    } else {
      return "Valor inválido";
    }
  }

  withDraw(valor: number): string {
    //saque
    if (this.contaAtiva()) {
      if (this.balance(valor)) {
        this.saldo -= valor;
        return `Saque de R$${valor} realizado com sucesso\nSaldo Restante: R$${this.saldo}`;
      } else {
        return "Você não possui saldo suficiente";
      }
    } else {
      return "A conta está inativa. Saque negado";
    }
  }

  protected valorDeDepositoValido(valor: number): boolean {
    if (valor > 0) {
      return true;
    } else {
      return false;
    }
  }

  desativarConta() {
    this.status = false;
  }

  protected contaAtiva(): boolean {
    const status = this.getStatus();
    if (status === true) {
      return true;
    } else {
      return false;
    }
  }

  balance(valor: number): boolean {
    //verifica se o saldo é suficiente pro saque
    const saldo = this.getSaldo();
    if (saldo >= valor) {
      return true;
    } else {
      return false;
    }
  }
  protected getSaldo(): number {
    return this.saldo;
  }
  protected getStatus(): boolean {
    return this.status;
  }
}

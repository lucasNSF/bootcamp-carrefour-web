class ContaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.getSaldo) {
      this.setSaldo = this.getSaldo - valor;
      console.log(`Você sacou R$${valor.toFixed(2).replace(".", ",")}.`);
    } else {
      console.log("Valor inválido ou o saque é maior que o saldo em conta.");
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this.setSaldo = this.getSaldo + valor;
      console.log("Depósito realizado com sucesso.");
    } else {
      console.log("Valor para depósito inválido.");
    }
  }

  get getSaldo() {
    return this.saldo;
  }

  set setSaldo(saldo) {
    this.saldo = saldo;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, tipo, saldo, cartaoCredito) {
    super(agencia, numero, tipo, saldo);
    this.cartaoCredito = cartaoCredito;
    this.tipo = "CC";
  }

  get getCartaoCredito() {
    return this.cartaoCredito;
  }

  set setCartaoCredito(cartaoCredito) {
    this.cartaoCredito = cartaoCredito;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    super(agencia, numero, tipo, saldo);
    this.tipo = "CP";
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    super(agencia, numero, tipo, saldo);
    this.tipo = "CU";
  }

  sacar(valor) {
    if (valor <= this.saldo && valor < 500) {
      this.saldo = this.saldo - valor;
      console.log(`Você sacou R$${valor.toFixed(2).replace(".", ",")}.`);
    } else {
      console.log("Valor para saque inválido.");
    }
  }
}

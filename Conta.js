export class Conta {
   constructor(saldoInicial, cliente, agencia) {
      this._saldo = saldoInicial;
      this._cliente = cliente;
      this._agencia = agencia;
   }

   set cliente(novoValor) {
      if (novoValor instanceof Cliente) {
         this._cliente = novoValor;
      }
   }

   get cliente() {
      return this._cliente;
   }


   get saldo() {
      return this._saldo;
   }

   depositar(valor) {
      if (valor <= 0) {
         return;
      }
      this._saldo += valor;
   }

   sacar(valor) {
      if (this._saldo >= valor) {
         this._saldo -= valor;
         return valor;
      }
   }

   transferir(valor, conta) {
      const valorSacado = this.sacar(valor);
      conta.depositar(valorSacado);
   }
}
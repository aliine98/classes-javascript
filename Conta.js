import { Cliente } from "./Cliente.js";
export class Conta {
   constructor(saldoInicial, cliente, agencia) {
      if (this.constructor == Conta) {
         throw new Error('Você não deveria instânciar um objeto do tipo Conta diretamente, pois esta é uma classe abstrata.');
      }
      this._saldo = saldoInicial;
      this.cliente = cliente;
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

   sacar() {
      throw new Error('O método sacar da conta é abstrato.');
   }

   _sacar(valor, taxa) {
      const valorSacado = taxa * valor;
      if (this._saldo >= valorSacado) {
         this._saldo -= valorSacado;
         return valorSacado;
      }
      return 0;
   }

   transferir(valor, conta) {
      const valorSacado = this.sacar(valor);
      conta.depositar(valorSacado);
   }
}
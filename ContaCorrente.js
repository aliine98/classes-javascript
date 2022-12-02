import { Cliente } from "./Cliente.js"

// colorcar underline "_" no início do nome do atributo representa que este é privado
// e não deve ser alterado fora da classe, porém ele continua sendo acessível
// já foi implementado campos privados usando #
export class ContaCorrente {
   static numeroDeContas = 0;

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


   constructor(cliente, agencia) {
      this.agencia = agencia;
      this.cliente = cliente;
      this._saldo = 0;
      ContaCorrente.numeroDeContas += 1;
   }



   depositar(valor) {
      //early return, verifica uma condição para interromper a execução do método/função
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
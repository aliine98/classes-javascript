// Há uma proposta de implementação de campos privados em classes
// quando houver # no início do nome do atributo ele se torna privado
// acessível apenas dentro da classe, não pode ser alterado nem visto por fora
// há controversias em relação ao seu uso
class ContaCorrente {
   agencia;
   #saldo = 0;

   depositar(valor) {
      if (valor > 0) {
         this.#saldo += valor;
      }
   }

   sacar(valor) {
      if (this.#saldo >= valor) {
         this.#saldo -= valor;
      }
   }
}
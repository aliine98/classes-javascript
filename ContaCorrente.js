import { Cliente } from "./Cliente.js"
import { Conta } from "./Conta.js";

// colorcar underline "_" no início do nome do atributo representa que este é privado
// e não deve ser alterado fora da classe, porém ele continua sendo acessível
// já foi implementado campos privados usando #
export class ContaCorrente extends Conta {
   static numeroDeContas = 0;
   constructor(cliente, agencia) {
      super(0, cliente, agencia);
      ContaCorrente.numeroDeContas += 1;
   }
}
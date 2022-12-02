import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente('Ricardo', 11122233344);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

contaCorrenteRicardo.depositar(550);
contaCorrenteRicardo.sacar(50);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
console.log("🚀 ~ file: index.js:13 ~ ", contaPoupanca)


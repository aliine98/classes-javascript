import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";
const cliente1 = new Cliente('Ricardo', 11122233344);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);
console.log("🚀 ~ file: index.js:11 ~ contaCorrenteRicardo", contaCorrenteRicardo)

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);
console.log("🚀 ~ file: index.js:14 ~ contaPoupanca", contaPoupanca)

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);
console.log("🚀 ~ file: index.js:18 ~ contaSalario", contaSalario)

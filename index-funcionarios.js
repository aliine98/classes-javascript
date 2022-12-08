import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Rodrigo', 10000, 12345678900);
diretor.cadastrarSenha('123456789');
const gerente = new Gerente('Aline', 5000, 12378945601);
gerente.cadastrarSenha('123');

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123');
console.log("🚀 ~ file: index-funcionarios.js:12 ~ gerenteEstaLogado", gerenteEstaLogado);
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456789');
console.log("🚀 ~ file: index-funcionarios.js:14 ~ diretorEstaLogado", diretorEstaLogado);
const cliente = new Cliente('Lais', 78945612379, '456');
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '456');
console.log("🚀 ~ file: index-funcionarios.js:17 ~ clienteEstaLogado", clienteEstaLogado);

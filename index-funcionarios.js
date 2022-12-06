import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Rodrigo', 10000, 12345678900);
diretor.cadastrarSenha('123456789');
const gerente = new Gerente('Aline', 5000, 12378945601);

const estaLogado = SistemaAutenticacao.login(diretor, '123456789');
console.log("🚀 ~ file: index-funcionarios.js:9 ~ estaLogado", estaLogado);
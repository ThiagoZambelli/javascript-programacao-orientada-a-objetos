import User from './User.js';
import Docente from './Docente.js';
import Admin from './Admin.js';

const novoUser = new User('Pedrinho', 'ped@p.com', '23-12')
const novoAdmin = new Admin('Tits', 'ti@t.com', '23-12')
const novoDocente = new Docente('Bruna', 'bru@b.com', '23-12')

console.log(novoUser.exibirInfos());
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.nome);
console.log(novoDocente.exibirInfos());

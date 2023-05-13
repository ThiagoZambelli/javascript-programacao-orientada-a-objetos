import User from './User.js';

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
    criarCurso(nomeDoCurso, numVagas){
        return  `Curso: ${nomeDoCurso} possui ${numVagas} vagas.`
    }
}

const novoAdmin = new Admin('Rodrigo', 'Pedro@p.com', '2023-04-12')
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso('Pipoca', 34));
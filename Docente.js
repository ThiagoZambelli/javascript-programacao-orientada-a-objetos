import User from './User.js';

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso){
        return `O docente ${this.nome} aprovou o(a) estudante ${estudante} no curso ${curso}.`
    }
}

const novoDocente = new Docente('Rodrigo', 'Pedro@p.com', '2023-04-12')
console.log(novoDocente.aprovaEstudante('Lili', 'Pipoca'))
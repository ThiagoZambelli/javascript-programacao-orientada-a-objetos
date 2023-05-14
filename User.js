export default class User {
    // O # faz com que o atributo seja privado, ou seja, não possa ser acessado fora da classe.
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo;
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }
    set nome(novoNome) {
        if(novoNome === ''){
            throw new Error('Voçê precisa digitar algum nome!')
        }
        this.#nome = novoNome
    }

    #montaObjeto() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    exibirInfos() {
        const objUser = this.#montaObjeto();
        return objUser;
    }
}

// Criação de um Obj

// const novoUser = new User('pipoca', 'Pipoca@package.com', '2021-01-01');

// console.log(novoUser.exibirInfos())


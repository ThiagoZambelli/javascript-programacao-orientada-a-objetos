function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}`
    }
}

// Construtor do JS
const novoUser = new User('thiago', 'pipoca@a');
console.log(novoUser.exibirInfos())

// Object create
function Admin(role, nome, email) {
    User.call(this, nome, email)
    this.role = role || 'estudante';
}

Admin.prototype = Object.create(User.prototype)
const novoUser2 = new Admin('admin', 'pedro', 'pedro@p.com')

console.log(novoUser2.exibirInfos());


// Objeto literal
const user = {
    init: function(nome, email){
        this.nome = nome;
        this.email = email;
    },
    exibirInfos: function(){
        return this.nome
    }
}

const novoUser3 = Object.create(user);
novoUser3.init('Thiago', 'Thiago@this.com')
console.log(novoUser3.exibirInfos())
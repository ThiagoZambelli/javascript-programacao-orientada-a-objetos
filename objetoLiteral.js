const user = {
    nome: 'Thiago',
    email: 'Th@t.com',
    nascimento: '2021/02/03',
    role: 'estudante',
    ativo: true,
    exibirInfod: function () {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Thiago',
    email: 'Th@t.com',
    nascimento: '2021/02/03',
    role: 'admin',
    ativo: true,
    criarCurso: function () {
        console.log('curso criado')
    }
}

Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfod();
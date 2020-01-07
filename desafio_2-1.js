class Usuario {
    constructor (email, senha) {
        this.email = email
        this.senha = senha
        this.admin = false
    }

    isAdmin () {
        return this.admin
    }
}

class Admin extends Usuario{
    constructor (email, senha) {
        super(email, senha)
        this.admin = true
    }
}

const User = new Usuario('email@teste.com', 'senha123');
const Adm = new Admin('email@teste.com', 'senha123');
console.log(User.isAdmin()) // false
console.log(Adm.isAdmin()) // true

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
   
var idades = usuarios.map(function (usuario) {
    return usuario.idade
})

console.log(idades)

var usuariosRocket = usuarios.filter(function (usuario) {
    return usuario.empresa == 'Rocketseat' && usuario.idade > 18
})

console.log(usuariosRocket)

var google = usuarios.find(function (usuario) {
    return usuario.empresa == 'Google'
})

console.log(google)

var idadesX2 = usuarios.map(function (usuario) {
    usuario.idade = usuario.idade * 2
    return usuario
})

var idadesMaisde50 = usuarios.filter(function (usuario) {
    return usuario.idade <= 50
})

console.log(idadesMaisde50)

const arr = [1, 2, 3, 4, 5]
arr.map(item => item + 10)

const usuario = { nome: 'Diego', idade: 23 }
const mostraIdade = (usuario) => usuario.idade

console.log(mostraIdade(usuario))

const nome = "Diego"
const idade = 23
var mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade })

console.log(mostraUsuario(nome, idade))
console.log(mostraUsuario(nome))

const promise = () => new Promise((resolve, reject) => resolve())

const empresa = {
    name: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   }
   
const { name, endereco : {cidade, estado} } = empresa

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23 }))
   
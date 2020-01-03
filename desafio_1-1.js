function exerc1() {
    var endereco = {
        rua: "Rua dos pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
       };
    return `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}`
}

function exerc2(x, y) {
    var qnt = y - x
    var pares = [qnt]
    for (i = 0; i <= qnt; i++){
        if (((x + i) % 2) == 0){
            pares[i] = x + i
        }
    }
    return pares
}

function exerc3(skills) {
    for (i = 0; i < skills.length(); i++) {
        if (skills[i] == 'Javascript') {
            return true
        }
    }
    return false
}

function exerc4(anos) {
    if (anos > 0 && anos < 2) {
        return 'Iniciante'
    }else if (anos > 1 && anos < 4) {
        return 'Intermediário'
    }else if (anos > 3 && anos < 7) {
        return 'Avançado'
    }else if (anos > 6) {
        return 'Jedi Master'
    }else {
        return 'Númmero inválido'
    }
}

function exerc5(usuarios) {
    var arrayJson = JSON.parse(usuarios);
    arrayJson.forEach(function(usuario){
        console.log(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(', ')}`)
    })
}
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
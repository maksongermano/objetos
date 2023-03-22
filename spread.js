// spread ...


const pessoa = {
    nome: 'makson',
    idade: 31,
    cidade: 'Natal-RN',
    profissao: "DEV"

};

const endereco = {
    rua: "rua dos loucos",
    numero: 0,
    bairro: "De tijolos amarelos"
}

const objetoFundido = {
    ...pessoa,
    ...endereco
};

console.log(objetoFundido)
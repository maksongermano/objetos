const produtosConsumidos = [

    {
        nome: "pão de alho",
        precoUnit: 1500,
        quantidadeDeProduto: 3
    },
    {
        nome: "coca-cola",
        precoUnit: 500,
        quantidadeDeProduto: 5
    },
    {
        nome: "água",
        precoUnit: 200,
        quantidadeDeProduto: 2
    }
]

const cartao = {
    nome: 'makson',
    peso: 98.5,
    idade: 31,
    aposentado: true,
    produtosConsumidos

};
console.log(cartao.nome) // makson
console.log(cartao.idade)
cartao.idade = 30;
console.log(cartao.idade)
console.log(cartao.produtosConsumidos[0].nome); // pão de alho
console.log(cartao.produtosConsumidos[produtosConsumidos.length - 1].precoUnit)

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

let totalAPagar = 0;
for (let produto of produtosConsumidos) {
    totalAPagar += produto.precoUnit * produto.quantidadeDeProduto;
}
const totalFormatado = (totalAPagar / 100).toFixed(2);

console.log(`Sr(a)${cartao.nome}, o total a pagar é ${totalFormatado}`)

const pessoa = {
    nome: "Makson",
    idade: 31,
    altura: 1.73,
    peso: 60,
    temCnh: true,
    apelidos: ["creuza", 'locomotiva']


};
const textoCNH = (pessoa.temCnh ? "possui CNH" : 'não possui CNH'); // ternário tem tres partes 


console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura}, ${textoCNH} e os seguinte apelidos: 
 `);
for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`)
}
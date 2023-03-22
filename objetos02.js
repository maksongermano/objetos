const pessoa = {
    nome: "Makson",
    idade: 31,
    altura: 1.73,
    peso: 60,
    temCnh: true,
    apelidos: ["creuza", 'locomotiva']


};
let textoCNH = "";
if (pessoa.temCnh === true) {
    textoCNH = "possue CNH";
} else {
    textoCNH = "não possui CNH";
}


console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura}, ${textoCNH} e os seguinte apelidos: 
- ${pessoa.apelidos[0]}
- ${pessoa.apelidos[1]} `);
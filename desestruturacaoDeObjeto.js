const pessoa = {
    nome: "Makson",
    idade: 31,
    altura: 1.73,
    peso: 60,
    temCnh: true,
    apelidos: ["creuza", 'locomotiva']
};

// const nome = pessoa.nome
// const idade = pessoa.idade

const { nome, idade, ...outros } = pessoa; // a desestruturação funciona exatamente como você vê no comentario, mas ele sempre percorre o primeiro item de um objeto, certifique-se que sempre fez uso de boas práticas na programação;


console.log(nome, idade);
console.log(outros)

const prompt = require("prompt-sync")(); // serve para importar o módulo prompt-sync no Node.js, permitindo que você leia informações digitadas pelo usuário diretamente no terminal.
console.log("===========INFORME O CLIENTE POR ORDEM DE CHEGADA==========");
console.log("==========DIGITE 'fim' para sair===========");
const clientes = []; // criei um vetor global vazio 
do {
    const nome = prompt("Nome: ");// pergunta e armazena resposta dentro da variavel nome
    if (nome == "fim") { // antes de ler a idade verifica se não foi digitado fim 
        break; // se tiver digitado fim, ele para o loop !
    }

    const idade = Number(prompt("Idade: ")); // pergunta e armazena resposta dentro da variavel idade 
    clientes.push({ nome, idade }); // adiciona no final do vetor 
    console.log("Adiconado a fila com sucesso !"); // imprimi na tela confirmando que foi adicionado 

} while (true); // mantém o loop funcionando até que o break seja executado


console.log("\nFILA PREFERENCIAL"); // mostra o título da fila preferencial
console.log("=".repeat(40)); // repete '=' 40 vezes 

// filter() serve para verificar cada cliente do vetor clientes.
// cliente representa o elemento atual que está sendo analisado.
// cliente.idade representa a idade do cliente atual.
// >= 60 verifica se o cliente tem 60 anos ou mais.
// Os clientes que atendem à condição são colocados no vetor filaPref.

const filaPref = clientes.filter(cliente => cliente.idade >= 60);


// Percorre todos os elementos que estão dentro do vetor filaPref
for (let i = 0; i < filaPref.length; i++) {

    // pega o cliente que está atualmente na posição i do vetor
    const fila = filaPref[i];

    // Mostra no console:
    // i + 1 → posição do cliente começando em 1
    // fila.nome → nome do cliente atual
    console.log(`${i + 1}. ${fila.nome}`);
}


console.log("\nFILA");
// Cria uma linha com 40 caracteres "=" para separar as informações
console.log("=".repeat(40));

// Cria um novo vetor chamado filaNormal
// filter() serve para verificar cada cliente do vetor clientes.
// cliente representa o elemento atual que está sendo analisado.
// cliente.idade representa a idade do cliente atual.
// >= 60 verifica se o cliente tem 60 anos ou mais.
// Os clientes que atendem à condição são colocados no vetor filaPref.

const filaNormal = clientes.filter(cliente => cliente.idade < 60);
// Percorre todos os clientes que foram selecionados para a filaNormal
for (const fila of filaNormal) {

    // fila representa diretamente o cliente atual 
    // Não precisamos usar filaNormal[i] 
    // Mostra o nome do cliente 

    console.log(fila.nome);
}
const prompt = require("prompt-sync")(); // adicionei as biblioteca node

console.log("================INFORME OS ALUNOS ABAIXO=============");
console.log("===============DIGITE 'fim' PARA SAIR=============");
const alunos = [];
do {
    const nome = prompt("Digite seu nome: ");
    if (nome == "fim") { // verifica 
        break; // para o loop       
    }
    const nota = Number(prompt("Nota: ")); // lê o nome
    alunos.push({ nome, nota }); // empurra para o final do vetor alunos

    console.log("Aluno foi cadastrado com sucesso !");
} while (true);
console.log("-".repeat(40)); // exibe isso => --------- 40 vezes 
// math.max compara, qual desses numeros é maior ?                            
// alunos.reduce(acumulador, elemento) => Math.max('a'  = maior nota encontrada,'b' representa o elemento, o aluno atual), Comece considerando a nota do primeiro aluno como a maior.)
const maior = alunos.reduce((a, b) => Math.max(a, b.nota), alunos[0].nota);
console.log(`Maior nota é: ${maior}`); // imprimi a maior idade 
if (maior >= 7) { // verifica a nota se igual ou maior que 7
    // filter Ele passa por todos os elementos do array e pergunta: "Esse elemento atende à condição?" Se sim → coloca no novo array. Se não → ignora.
    const destaques = alunos.filter(aluno => aluno.nota == maior); //aluno representa cada aluno que está sendo analisado, aluno.nota  Pegue a nota desse aluno. dps compara A nota desse aluno é igual à maior nota? 
    for (const destaque of destaques) { //O nome destaque é uma variável que representa um aluno por vez.
        console.log(`- ${destaque.nome}`); // Você está pegando o nome do aluno atual. 
    }
} else { //Se a condição do if for falsa, mostre que não existem alunos em destaque.
    console.log("Não há alunos em destaque na turma");
}

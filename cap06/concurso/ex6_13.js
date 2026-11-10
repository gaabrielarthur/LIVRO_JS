const frm = document.querySelector("form");
const resp1 = document.querySelector("pre");

const dados = [];
const minimoAcertos = Number(prompt("Números de Acertos para Aprovação?"));


// EVENTO 1: CADASTRAR CANDIDATOS

// Adiciona um evento de envio ao formulário
frm.addEventListener("submit", (e) => {
    // Impede que a página seja recarregada ao enviar o formulário
    e.preventDefault();


    const nome = frm.inName.value; // captura nome digitado pelo usuario 
    const acertos = Number(frm.inNumber.value); // Number() transforma o valor recebido em número

    // Adiciona um objeto com nome e acertos dentro do vetor dados
    dados.push({ nome, acertos });
    frm.inName.value = ""; // Limpa o campo de acertos após o cadastro
    frm.inNumber.value = ""; // limpa o campo de 
    frm.inName.focus(); // Coloca o cursor novamente no campo de nome

});

// EVENTO 2: LISTAR TODOS OS CANDIDATOS
// Adiciona um evento de clique ao botão btListar
frm.btListar.addEventListener("click", () => {

    let candidatos = ""; // Cria uma variável vazia para armazenar os candidatos
    for (let i = 0; i < dados.length; i++) {
        // Adiciona o nome e os acertos do candidato à variável
        // \n serve para pular uma linha
        candidatos += `Nome: ${dados[i].nome} - Acertos: ${dados[i].acertos}\n `;
    }
    // Exibe todos os candidatos dentro do elemento <pre>
    resp1.innerText = candidatos;


});

// EVENTO 3: LISTAR SOMENTE OS APROVADOS
// Adiciona um evento de clique ao botão btNext

frm.btNext.addEventListener("click", () => {

    let aprovados = ""; // variavel vazia para armazenar os aprovados 
    // percorre por dentro do vetor, posição por posição 
    for (let i = 0; i < dados.length; i++) {
        // faz a verificação apenas dos acertos e compara se os acertos 
        // são maiores ou iguais a quantidade minima de acertos 
        if (dados[i].acertos >= minimoAcertos) {
            // por fim se a condição for verdadeira, adiciona o candidato à variável
            aprovados += `Nome: ${dados[i].nome} - Acertos: ${dados[i].acertos}\n`;
        }
    }

    // exibe os aprovados se nenhum for aprovado, apresenta uma mensagem alternativa
    resp1.innerText = aprovados || "Nenhum candidato atingiu a nota miníma";

});

const frm = document.querySelector("form"); // seleciona o formulário da página

const respNome = document.querySelector("span"); // seleciona o <span> para mostrar o paciente atendido

const respLista = document.querySelector("pre"); // seleciona o <pre> para mostrar a fila

const paciente = []; // cria um vetor vazio para armazenar os pacientes


frm.addEventListener("submit", (e) => { // executa quando o formulário for enviado

    e.preventDefault(); // impede o formulário de recarregar a página

    const nome = frm.innome.value; // pega o nome digitado no input
    paciente.push(nome); // adiciona o paciente no final do vetor
    let lista = ""; // cria uma variável para montar a lista

    for (let i = 0; i < paciente.length; i++) { // percorre todos os pacientes

        lista += `${i + 1}. ${paciente[i]}\n`; // adiciona cada paciente na lista

    } // fim do for

    respLista.innerText = lista; // mostra a lista na tela
    frm.innome.value = ""; // limpa o campo de nome
    frm.innome.focus(); // coloca o cursor novamente no campo

}) // fim do evento submit


frm.urgencia.addEventListener("click", () => { // executa quando clicar em Urgência

    if (!frm.checkValidity()) { // verifica se o formulário é válido

        alert("Informe o nome do paciente a ser atendido em caráter de urgência"); // mostra uma mensagem de erro

        frm.innome.focus(); // coloca o cursor no campo de nome

        return; // interrompe a execução da função

    } // fim do if

    const nome = frm.innome.value; // pega o nome digitado no input
    paciente.unshift(nome); // adiciona o paciente no início do vetor
    let lista = ""; // cria uma variável para montar a lista

    for (let i = 0; i < paciente.length; i++) { // percorre todos os pacientes

        lista += `${i + 1}. ${paciente[i]}\n`; // adiciona cada paciente na lista

    } // fim do for

    respLista.innerText = lista; // atualiza a fila na tela
    frm.innome.value = ""; // limpa o campo de nome
    frm.innome.focus(); // coloca o cursor novamente no campo

}) // fim do evento de urgência


frm.atende.addEventListener("click", () => { // executa quando clicar em Atender

    if (paciente.length == 0) { // verifica se a fila está vazia

        alert("Não há paciente a ser atendido"); // mostra mensagem informando que não há pacientes

        frm.innome.focus(); // coloca o cursor no campo de nome

        return; // interrompe a execução da função

    } // fim do if

    const atende = paciente.shift(); // remove e pega o primeiro paciente da fila
    respNome.innerText = atende; // mostra o nome do paciente atendido
    let lista = ""; // cria uma variável para montar a nova lista

    for (let i = 0; i < paciente.length; i++) { // percorre os pacientes restantes

        lista += `${i + 1}. ${paciente[i]}\n`; // adiciona cada paciente na lista

    } // fim do for

    respLista.innerText = lista; // atualiza a fila na tela

}) // fim do evento de atendimento
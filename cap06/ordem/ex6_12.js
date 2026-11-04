const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h3");

const numeros = [];

// botão para adicionar numero 
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evitar o envio do formulario 
    const number = Number(inNumber.value);
    let numero = "Números: ";

    // verificação para ver se o o usuário digitou algum número
    if (inNumber.value === "") {
        alert("Digite algum número");
        return;
    }
    // verifica se o número já foi digitado
    if (numeros.includes(number)) {
        alert("Este número já existe já foi adicionado na lista");
        return
    }

    // após as duas verificações envia o numero para armazena dentro do vetor 
    numeros.push(number);



    for (let i = 0; i < numeros.length; i++) {
         // Adiciona o número da posição atual à variável numero
        // A cada repetição, acrescenta uma vírgula para separar os valores
        numero += ` ${numeros[i]},`;
    }

    resp1.innerText = numero; // Exibe na página a lista de números armazenados no vetor
    frm.inNumber.value = ""; // Limpa o campo de entrada após adicionar o número
    frm.inNumber.focus();  // Coloca o cursor novamente no campo de entrada,permitindo que o usuário digite outro número

})

// mostrar se está em ordem crescente ou decrescente 
frm.btVerificar.addEventListener("click", () => {

    let crescente = true;

    if (numeros.length < 2) {
        alert("Tem que existir pelo menos 2 números digitado par ocorrer a comparação");
        return;
    }

    // aqui está percorrendo o vetor, posição por posição 
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < numeros[i + 1]) { // copara posição atual com próximo número ex: número atual < numero próximo
            // se o atual for menor que o próximo
            //significa que a sequência não está e ordem decrescente
            crescente = false;
            //break interrompe o laço quando encontra essa situação
            break;
        }
    }

    // Verifica o valor da variável crescente
    if (crescente) {
        // se continuar true, mostra esta mensagemm
        resp2.innerText = `Os números não estão em ordem cresente`;
    } else {
        resp2.innerText = `Os números  estão em ordem crescente`;
    }

})
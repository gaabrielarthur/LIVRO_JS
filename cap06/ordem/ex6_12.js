const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h3");

const numeros = [];

// botão para adicionar numero 
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evitar o envio do formulario 
    const number = Number(inNumber.value);

    // verificação para ver se o o usuário digitou algum número
    if(inNumber.value === ""){
        alert("Digite algum número");
        return;
    }
    // verifica se o número já foi digitado
    if(numeros.includes(number)){
        alert("Este número já existe já foi adicionado na lista");
    }

    // após as duas verificações envia o numero para armazena dentro do vetor 
    numeros.push(number); 

    frm.inNumber.value = "";
    frm.inNumber.focus(); 
  
})

// mostrar se está em ordem crescente ou decrescente 
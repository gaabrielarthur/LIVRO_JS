const frm = document.querySelector("form");
const Adicionar = document.querySelector("#btListar");
const resp1 = document.querySelector("resp1");

// criar um vetor para armazenar todos times adicionados na lista 
const times = [];

frm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const  nome = frm.inNome.value; // pega o nome 
    times.push(nome); // adicionana o nome no final do vetor 
    
    frm.inNome.value = "";
    frm.inNome.focus();

})

frm.btListar.addEventListener("click", ()=>{
    if(!frm.checkValidity){
        alert("Não á nenhum time cadastrado !")
        frm.inNome.focus();
        return; 
    }

     let lista = "";
    const nome = frm.inNome.value;
    const lista = times.shift();

    for(let i = 0; i < times.length; i++){
        lista += `${i + 1}.` `${times[i]} \n`;
    }


})


   


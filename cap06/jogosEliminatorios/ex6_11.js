const frm = document.querySelector("form");
const resp1 = document.querySelector("pre");

// criar um vetor para armazenar todos times adicionados na lista 
const times = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inName.value; // pega o nome 
    times.push(nome); // adicionana o nome no final do vetor 
  
    frm.inName.value = ""; // esvazia a caixa de entrada 
    frm.inName.focus(); // colocar o curso dentro da caixa

});

// mostrar os times listados 
frm.btListar.addEventListener("click", () => {
    if (times.length == 0) { // testa se dentro do vetor tem times cadastrados 
        alert("Não á nenhum time cadastrado !");
        frm.inName.focus(); //colocar o curso dentro da caixa
        return;
    }

    let lista = "";

   for (let i = 0; i < times.length; i++) { // percorre o vetor
        lista += `${i + 1}. ${times[i]}\n`; 
    }
 
    resp1.innerText = lista;
    frm.inName.value = ""; // esvazia a caixa de entrada 
    frm.inName.focus(); // colocar o curso dentro da caixa

});

// Parte de mostrar tabela
frm.btMostrar.addEventListener("click" , ()=>{ // botão de escuta após o usuário clicar no botão de mostrar
    if(times.length < 2){ // faz a verificação se tem dois times cadastrados e salvos dentro do vetor 
        alert("É necessário ter no minímo 2 times adicionados !"); // se não tiver 2 times, ele imprimi essa mensagem 
        return; // para o programa 
    }

    let tabela = ""; // criei essa variavel vazia 

    // usei o for para percorrer o vetor pulando 
    for(let i = 0; i < times.length; i+=2){  // usei o i+= para pegar dois times em cada rodada do laço de repetição.
        //times[i] acessa a posição atual, ex: acessa time 1
        //times[i + 1] acessa a próxima posição, ex: acessa time 2.
        if(times[i + 1] == undefined){ // undefined significa que uma variavel ou posição não possui um valor definido
            //ele aparece quando tentamos acessar uma posição do vetor que não existe.
            tabela += `${times[i]} classificado automaticamente`; // vai armazena dentro
        }else{
            tabela += `${times[i]} x ${times[i + 1]}\n`; // vai adiconar a mensagem dentro da variavel tabala, time 1 x time 2
        }
    }

    resp1.innerText = tabela; // adiciona dentro da tag pre do formulario, para imprimir na tela 
    frm.inNome.value = ""; //esvazia a caixa de entrada 
    frm.inNome.focus(); // colocar o cursor dentro da caixa 
});
//? explicação sobre como o sistema funciona  
//!  console.log(times[0]);  Cruzeiro
//!   console.log(times[1]);  Galo
//!  console.log(times[2]);  Flamengo
//!  console.log(times[3]);  undefined 



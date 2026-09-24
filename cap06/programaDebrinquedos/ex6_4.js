const frm = document.querySelector("form");
const resp = document.querySelector("pre");



const criancas = []; // vetor global 

// adicionando um botão de escuta 
frm.addEventListener("submit", (e) => {
    e.preventDefault();// evitar o envio do formulario 
    // atribundo os valores digitados em variaveis 
    const nome = frm.inName.value;
    const idade = Number(frm.inNumber.value);

    /// Cria um objeto contendo nome e idade
    criancas.push({ nome, idade }); // push = empurra,  adiciona ao final do vetor, esta empurrando o conteudo das variaveis ao vetor global 

    frm.reset(); // limpa todos os campos form
    frm.inName.focus(); // serve para posicionar o cursor no input nome 
    btListar.click();
});

frm.btListar.addEventListener("click", () => {
    if (criancas.length == 0) { // verifica se tem alguma criança 
        alert("Não a crianças na lista"); // se não tiver imprimi isso na caixa do navegador
    }

    let lista = ""; // vetor para guarda a lista de crianças 

    for (let i = 0; i < criancas.length; i++) {
        const crianca = criancas[i];
        const { nome, idade } = crianca; //retira as propriedades nome e idade de dentro do objeto crianca capturado no passo anterior, salvando-as em duas constantes locais.
        lista += nome + " - " + idade + " anos\n"; // nta o texto do nome, da idade e a quebra de linha (\n), concatenando essa nova informação ao final do texto que já existia na variável lista.
    }
    resp.innerText = lista; //exibe a lista 
});

frm.btResumir.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert("Não á nenhuma criança cadastrada");
        return; // "Pare a execução dessa função aqui."
    }
    const copia = [...criancas]; // cria uma copia do vetor criança, os ... significaPegue todos os elementos de criancas e coloque dentro de um novo vetor chamado copia
  copia.sort((a, b) => a.idade - b.idade); // ordena pela idade 
    let resumo = "";
    let aux = copia[0].idade; // menor idade no vetor ordenado

    let nomes = []; // para inserir nomes de cada idade 
    for (let i = 0; i < copia.length; i++) {
        const crianca = copia[i];
        const { nome, idade } = crianca;
        if (idade == aux) {
            nomes.push(nome); // adiciona ao vetor nomes 

        }
        else { // senão, monta resummo para cada idade              
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(", ") + ")\n\n";
            aux = idade;
            nomes = [];
            nomes.push(nome);
        }
    }

    resumo += aux + "ano(s): " + nomes.length + "criança(s)";
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";
    resp.innerText = resumo // exibe a resposta 


});
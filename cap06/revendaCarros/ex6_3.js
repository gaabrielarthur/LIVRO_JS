const frm = document.querySelector("form");

const resp = document.querySelector("pre");

const btListar = document.querySelector("#btListar");

const btFiltrar = document.querySelector("#btFiltrar");

const btSimular = document.querySelector("#btSimular");

const carros = []; // declarei um vetor que vai armazenar carros 

// Botão de escuta 

frm.addEventListener("submit", (e) => {

    e.preventDefault();

    const modelo = frm.inModelo.value;

    const preco = Number(frm.inPreco.value);

    carros.push({ modelo, preco }); // adiciona dados ao vetor de objetos 

    frm.inModelo.value = ""; // limpa o campo form

    frm.inPreco.value = "";

    frm.inModelo.focus(); // posiciona o curso em modelo

    btListar.click();

});

btListar.addEventListener("click", () => {

    if (carros.length == 0) {// verifica o tamanho do vetor se não é igual a zero 

        alert("Não há nenhum veículo cadastrado!");

        return;

    }

    // método reduce = concatena uma string, obtendo modelo e preco de cada veiculo 

    const lista = carros.reduce(

        (acumulador, carro) =>

            acumulador + carro.modelo + "- R$: " + carro.preco.toFixed(2) + "\n", "");

    resp.innerText = `Lista de carros cadastrados\n${"-".repeat(40)}\n${lista}`;

});

btFiltrar.addEventListener("click", () => {

    const maximo = Number(prompt("Qual o preço máximo que o cliente deseja pagar ?"));

    if (maximo == 0 || isNaN(maximo)) { // se não informou ou valor invalido 

        return;

    }

    // cria um novo vetor de com os objetos que atendem a codição de filtro 

    const carrosFilter = carros.filter(carro => carro.preco <= maximo);

    if (carrosFilter.length == 0) { // verificar se não é igual a zero 

        alert("Não há carros com preço inferior ou igual ao solicitado");

        return;

    }

    let lista = "";

    for (const carro of carrosFilter) { // percorrer cada elemento do array,Aqui temos um for...of. Para cada elemento de carrosFilter, faça alguma coisa.

        //Pegue o que já existe em lista e acrescente mais alguma coisa. lista armazena as mudanças 

        lista += ` Carros até R$: ${maximo.toFixed(2)} - R$ ${carro.preco.toFixed(2)}\n`;

    }

    resp.innerText = `Carros até ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`;

});

btSimular.addEventListener("click", () => {

    const desconto = Number(prompt("Qual o percentual de desconto: "));

    if (desconto == 0 || isNaN(desconto)) {

        return;

    }

    const carroDesc = carros.map(aux => ({

        modelo: aux.modelo,

        preco: aux.preco - (aux.preco * desconto / 100)

    }));

    let lista = "";

    for (const carro of carroDesc) { // percorrer cada elemento e altera

        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;

    }

    resp.innerText = `Carros com ${desconto}% de desconto\n${"-".repeat(40)}\n${lista}`;

});
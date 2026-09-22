const frm = document.querySelector("form");
// Pega o formulário HTML.

const respErro = document.querySelector("#outerros");
// Pega o <span> que mostra os erros.

const respChance = document.querySelector("#outchances");
// Pega o elemento que deveria mostrar as chances.

const respDica = document.querySelector("#outdica");
// Pega o elemento que mostra a dica.

const erro = [];
// Cria um vetor vazio para guardar os números já tentados.

const sorteado = Math.floor(Math.random() * 100) + 1;
// Sorteia um número entre 1 e 100.

const chance = 6;
// Define que o jogador possui 6 chances.

frm.addEventListener("submit", (e) => {
    // Executa quando o formulário for enviado.

    e.preventDefault();
    // Impede o formulário de recarregar a página.

    const numero = Number(frm.inNumero.value);
    // Pega o número digitado e transforma em Number.

    if (numero == sorteado) {
        // Verifica se o jogador acertou.

        respDica.innerText = `Parabéns! Número sorteado: ${sorteado}`;
        // Mostra mensagem de vitória.

        frm.btsubmit.disabled = true;
        // Desativa o botão Apostar.

        frm.btnovo.className = "exibe";
        // Mostra o botão Jogar Novamente.
    }

    else {
        // Caso o jogador tenha errado.

        if (erro.includes(numero)) {
            // Verifica se esse número já foi usado.

            alert(`Você já apostou esse número: ${numero}`);
            // Avisa que o número já foi utilizado.
        }

        else {
            // Número ainda não utilizado.

            erro.push(numero);
            // Adiciona o número ao vetor.

            const numErro = erro.length;
            // Quantidade de números errados.

            const numChance = chance - numErro;
            // Calcula quantas chances ainda restam.

            respErro.innerText =
                `${numErro} (${erro.join(" , ")})`;
            // Mostra quantidade e números errados.

            respChance.innerText = numChance;
            // Mostra quantas chances restam.

            if (numChance == 0) {
                // Verifica se acabaram as chances.

                alert("Suas chances acabaram...");

                frm.btsubmit.disabled = true;
                // Desativa o botão Apostar.

                frm.btnovo.className = "exibe";
                // Mostra Jogar Novamente.

                respDica.innerText =
                    `Game Over! Número Sorteado: ${sorteado}`;
                // Mostra o número sorteado.
            }

            else {
                // Ainda existem chances.

                const dica =
                    numero < sorteado ? "maior" : "menor";
                // Se o número foi menor, manda tentar maior.
                // Caso contrário, manda tentar menor.

                respDica.innerText =
                    `Dica: tente um número ${dica} que ${numero}`;
                // Exibe a dica.
            }
        }
    }

    frm.inNumero.value = "";
    // Limpa o input.

    frm.inNumero.focus();
    // Coloca o cursor novamente no input.
});
// BOTÃO JOGAR NOVAMENTE 

frm.btnovo.addEventListener("click", () => { location.reload(); 
    //recarrega a página e reinicia todo o jogo 
});
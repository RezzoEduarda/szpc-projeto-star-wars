/*OBJETIVO - ao clicar no botão, mostrar a imagem de fundo que corresponde ao botao
passo1 - pegar os botoes no HTML
passo2 - identificar que o botao foi clicado
passo3 - desmarcar o botao selecionado anteri0
passo4 - marcar o botao novo
passo5 - esconder a imagem anterior
passo6 - mostrar a nova imagem 
*/


const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo2 //
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo3 //     
        desativarBotaoSelecionado();

        // passo4 //
        selecionarBotaoCarrosel(botao);

        // passo5 //
        esconderImagemAtiva();

        // passo6 //
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
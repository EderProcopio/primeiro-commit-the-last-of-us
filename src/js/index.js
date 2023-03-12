/* Criação das funções de carrossel dos botões
    que muda mudam as imagens de fundo ao serem clicadas
*/

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        removerBotaoAtivo();

        selecionarBotao(botao);

        esconderImagemAtiva();

        mostrarImagemSelecionada(indice);
    })
})

function mostrarImagemSelecionada(indice) {
    imagens[indice].classList.add('.ativa');
}

function selecionarBotao(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function removerBotaoAtivo() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

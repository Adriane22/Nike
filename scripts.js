let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");
let botao = document.querySelector(".botao-carrinho");

function mudarVisual(cor, imagem) {
    // Aplica a cor de fundo
    body.style.background = cor;

    // Muda a cor do botão
    botao.style.backgroundColor = cor;

    // (Opcional) Ajusta a cor do texto do botão se o fundo for claro
    if (cor === '#ccee66') {
        botao.style.color = 'black';
    } else {
        botao.style.color = 'white';
    }

    // Animação de troca do tênis
    tenis.classList.add("troca-tenis");

    setTimeout(() => {
        tenis.src = imagem;
        tenis.classList.remove("troca-tenis");
    }, 500);
}





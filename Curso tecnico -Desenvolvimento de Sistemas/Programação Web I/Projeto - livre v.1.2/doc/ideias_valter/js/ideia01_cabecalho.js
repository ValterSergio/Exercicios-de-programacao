function ativar_botoes(nomeClasse) {
    // ativar o evento de mouse para os botoes 
    // da barra de navegação
    let botoes = window.document.getElementsByClassName(nomeClasse);
    let n = botoes.length;

    for (let i = 0; i < n; i++) {
        let botao = botoes[i];

        // Define transição uma vez para todos os botões
        botao.style.transition = `all 1s`;

        // Evento quando o mouse entra
        botao.addEventListener(`mouseenter`, function() {
            botao.style.fontSize = `130%`;          // reduz a fonte levemente
            botao.style.backgroundColor = `#acb1f8`; // muda a cor de fundo
            botao.style.color = `#00154f`
        });
        
        // Evento quando o mouse sai
        botao.addEventListener(`mouseleave`, function() {
            botao.style.fontSize = ``;             // volta ao tamanho original
            botao.style.backgroundColor = ``;      // volta à cor original
            botao.style.color = ``
        });
    }
}

ativar_botoes("botaoNav");
ativar_botoes("botaoMenu");

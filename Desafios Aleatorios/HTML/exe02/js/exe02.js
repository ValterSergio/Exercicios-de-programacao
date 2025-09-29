// codigo para mudar a cor do bloco header
const bloco_header = window.document.getElementById("blocoHeader");

// função para aplicar os efeitos do cabecalho
function mudar_cor(){
    // aplicar um contraste de funco cyan com letras pretas
    // para fundo preto com letras cyan
    var cor_fundo = bloco_header.style.backgroundColor;
    var cor_letra = bloco_header.style.color;

    // se a cor de fundo for cyan altera para preto
    if (cor_fundo == "cyan"){
        bloco_header.style.backgroundColor = "black";
        bloco_header.style.color = "cyan";

        // aumenta a indentação do texto
        bloco_header.style.textIndent = `0px`;
        var acumalador = 0;
        bloco_header.style.fontSize = "large";
        for (let i = 0; i < 35; i++){
            acumalador += 1;
            bloco_header.style.textIndent =`${acumalador}%`;
        }
    } else {
        bloco_header.style.backgroundColor = "cyan";
        bloco_header.style.color = "black";
        
        // reduz a indentção do teexto
        bloco_header.style.textIndent = `0px`;
        var acumalador = 35;
        bloco_header.style.fontSize = "x-large";
        for (let i = 2; i < 35; i++){
            acumalador -= 1;
            bloco_header.style.textIndent =`${acumalador}%`;
    }
}
}

// cria o evento para que o header mude de cor toda vez que o mouse passar por ele
bloco_header.addEventListener("mouseenter", mudar_cor);

// codigo para validar a senha do cofre
const formulario = window.document.getElementById("formSenha");
let tentativas = 3;

function validarSenha(evento){
    evento.preventDefault();
    const senha_resgistrada = "1234";
    const campoSenha = document.getElementById("senhaUsuario");

    var senha_usuario = campoSenha.value;

    if (senha_usuario === senha_resgistrada){
        document.getElementById("resultado").innerText = "Acesso Liberado";
        document.getElementById("tituloPrincipal").innerText = "COFRE ABERTO";
        document.getElementById("imagemCadeado").src = `img/cadeado_aberto.png`;
        // recarrega a página após 10 segundos
        setTimeout(() => window.location.reload(), 10000);
        return true;
    } 

    tentativas -= 1;
    document.getElementById("resultado").innerText = "Acesso Negado";
    document.getElementById("tentativas").innerText = `Tentativas Restantes: ${tentativas}`;
    campoSenha.value = ""; // limpa o campo

    // se acabou as tentativas
    if (tentativas <= 0){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById("resultado").innerText = "Senha Inválida, tente mais tarde !!!";

        // recarrega a página após 10 segundos
        setTimeout(() => window.location.reload(), 10000);
        return false;
    }
}

// adiciona o evento e ao clicar no botão
formulario.addEventListener("submit", validarSenha);

//
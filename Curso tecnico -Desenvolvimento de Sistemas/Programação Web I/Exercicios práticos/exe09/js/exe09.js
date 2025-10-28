function fEnviar() {
    // pegar os elementos do formulario
    let senhaUsuario = document.getElementById("senhaUsuario").value;
    let senhaUsuarioConfirmar = document.getElementById("senhaUsuarioConfirmar").value;

    if (senhaUsuario === senhaUsuarioConfirmar){
        window.alert("Senhas Iguais");
        // redireciona o usuario para index
        window.location.href = `index.html`;
    } else {
        window.alert("Senhas Diferentes");
    }


};

function paginaCadastrar() {
    window.location.href = `cadastrar.html`;
};

function fazerLogin() {
    window.location.href = `login.html`;
}

function fazerCadastro() {
    window.location.href = `cadastrar.html`;
}

function trocarCoresClaro() {
    // pegar os elementos com id
    let container = window.document.getElementById("acessoContainer");
    let botao1 = window.document.getElementById("botao1");
    let botao2 = window.document.getElementById("botao2");

    let elementos = [container, botao1, botao2];
    for (let i = 0; i < 3; i++){
        let elemento = elementos[i];
        elemento.classList.remove("cor2")
        elemento.classList.add("cor1")
    }
}

function trocarCoresEscuro() {
    // pegar os elementos com id
    let container = window.document.getElementById("acessoContainer");
    let botao1 = window.document.getElementById("botao1");
    let botao2 = window.document.getElementById("botao2");

    let elementos = [container, botao1, botao2];
    for (let i = 0; i < 3; i++){
        let elemento = elementos[i];
        elemento.classList.remove("cor1")
        elemento.classList.add("cor2")
    }
}
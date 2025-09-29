function getDados(){
    let nome_usuario = window.document.getElementById("nomeLogin").value;

    let senha1 = window.document.getElementById("senhaLogin").value;
    let senha2 = window.document.getElementById("senhaConfirmaLogin").value;

    if (senha1 == senha2){
        alert("Senhas Iguais, indo para página de SUCESSO.")
        window.location.href = `sucesso_login.html`;
        return; // encerra
    }
    
    alert("Senhas Diferentes, indo para a página de FALHA");
    window.location.href = `fracasso_login.html`;
};

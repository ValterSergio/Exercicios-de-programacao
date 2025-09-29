// Criar codigo para obter o tempo do atleta e calcular a media 

// seleciona o formulario pelo id
const formulario = document.getElementById("formAtleta");

// escuta o botão submit
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    var t1 = parseFloat(document.getElementById("tempo1").value);
    var t2 = parseFloat(document.getElementById("tempo2").value);
    var t3 = parseFloat(document.getElementById("tempo3").value);

    var media = (t1 + t2 + t3) / 3;

    var categoria = "";
    if (media <= 10){
        categoria = "OURO";
    } else if (media <= 15){
        categoria = "PRATA";
    } else if (media <= 20){
        categoria = "BRONZE";
    } else {
        categoria = "DESCLASSIFICADO";
    }

    document.getElementById("resultado").textContent = `Media: ${media.toFixed(2)} segundos.\nClassificação: ${categoria}`;
});

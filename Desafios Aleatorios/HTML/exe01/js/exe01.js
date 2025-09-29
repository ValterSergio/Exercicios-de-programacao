const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    var salario = parseFloat(document.getElementById("salarioBase").value);
    if (salario <= 0) {
        document.getElementById("resultado").textContent = 
            `ERRO: SALARIO DEVE SER UM VALOR ACIMA DE 0`;
        return;
    }

    var tempo_de_servico = parseInt(document.getElementById("tempoServico").value);
    if (tempo_de_servico < 0){
        document.getElementById("resultado").textContent = 
            `ERRO: TEMPO DE SERVIÇO DEVE SER POSITIVO`;
        return;
    }
    
    var nota_desempenho = parseFloat(document.getElementById("notaDesempenho").value);
    if (nota_desempenho < 0 || nota_desempenho > 10){
        document.getElementById("resultado").textContent = 
            `ERRO: NOTA DE DESEMPENHO DEVE ESTAR ENTRE 0 E 10`;
        return;
    }

    var bonus = 0;
    if (tempo_de_servico < 3){
        bonus = 0;
    } else if (tempo_de_servico <= 5){
        bonus = 5;
    } else {
        bonus = 10;
    }

    if (nota_desempenho < 4){
        bonus = 0;
    } else if (nota_desempenho <= 7) {
        // mantém o bônus como está
    } else {
        bonus = bonus * 2;
    }

    var bonus_salarial = salario * (bonus / 100);
    var resultado = `Bônus Final: ${bonus}% | R$: ${bonus_salarial.toFixed(2)}`;

    document.getElementById("resultado").textContent = resultado;
});

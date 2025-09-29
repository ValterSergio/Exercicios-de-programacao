// pegar formulario e a div para resposta 
const formulario = window.document.getElementById("formNotas");
const divResultado = window.document.getElementById("resultado");

function remover_nota_recuperacao() {
    // remover elementos que foram criados dinamicamente
    let notaTexto = window.document.getElementById("notaTexto");
    let notaBtn = window.document.getElementById("notaBtn");
    let notaRecuperacao = window.document.getElementById("notaRecuperacao");
    
    let br = window.document.getElementById("br");
    let hr = window.document.getElementById("hr");
    
    
    formulario.removeChild(notaTexto);
    formulario.removeChild(notaBtn);
    formulario.removeChild(notaRecuperacao);
    formulario.removeChild(br);    
    formulario.removeChild(hr);    
}

function criar_campo_recuperacao(){
    /**
     * Criar os elementos dinamicamente e adicionar ao formulario
     */

    // cria o label
    let label = window.document.createElement("label");
    label.setAttribute("for", "notaRecuperacao");
    label.textContent = `Informe a nota de recuperação: `;
    label.backgroundColor = `#0000ff`;
    label.id = `notaTexto`;

    // cria o input
    let input = window.document.createElement("input");
    input.type = `text`;
    input.id = "notaRecuperacao";
    input.name = `notaRecuperacao`;
    input.required = true;

    // cria o input (submit evento)
    let input_submit = window.document.createElement("input");
    input_submit.type = "submit";
    input_submit.value = "Calcular Recuperação";
    input_submit.id = `notaBtn`;

    
    // cria as quebras de linha
    let br = window.document.createElement("br");
    br.id = `br`;
    let hr = window.document.createElement("hr");
    hr.id = `hr`;

    // cria um evento para o novo campo
     input_submit.addEventListener("click", function (event){
        event.preventDefault();

        // faz a validação da recuperação
        let nota = parseFloat(window.document.getElementById("notaRecuperacao").value);

        //verifica intervalo
        if (nota <= 0 || nota > 10){
            resultado = `ERRO: Informe apenas valores entre 0 e 10 para cada campo`;
            mudar_resultado(resultado, "blue");
            remover_nota_recuperacao();
            return;
        }
        
        // verifica se está aprovado
        if (nota > 5){
            resultado = `Aprovado`;
            mudar_resultado(resultado, "green");
            remover_nota_recuperacao();
            return;
        } else {
            resultado = `Reprovado`;
            mudar_resultado(resultado, "green");
            remover_nota_recuperacao();
            return;

        }
     });

    // adiciona Filho
    formulario.appendChild(label);
    formulario.appendChild(input);
    formulario.appendChild(input_submit);
    formulario.appendChild(br);
    formulario.appendChild(hr);
}

function exibir_resultado(media){
    let resultado = ``;
    if (media <= 3)
        {
            resultado = `Reprovado`;
            mudar_resultado(resultado, "blue");
            return;
        }
    else if (media < 6)
        {
            resultado = `Recuperação`;
            mudar_resultado(resultado, "blue");
            criar_campo_recuperacao();
            return;
        }
    else
        {
            resultado = `Aprovado`;
            mudar_resultado(resultado, "green");
            return;
        }
}

function mudar_resultado(resultado, cor) {

    if (cor === "blue"){
        var cor = `#0000ff`;
    } else if (cor === "green"){
        var cor = `#00ff00`;
    }
    divResultado.textContent = resultado;
    divResultado.style.transition = `all 3s`;
    divResultado.style.backgroundColor = cor;
    divResultado.style.fontSize = `18pt`;
    divResultado.style.color = `#ffffff`;
    divResultado.style.borderRadius = `35px`;
    divResultado.style.marginTop = `10px`;
    divResultado.style.marginBottom = `10px`;
    divResultado.style.height = `100%`;
    divResultado.style.width = `100%`;
    divResultado.style.textAlign = `center`;

    
}

// criar função para o evento submit do input
function main(event) {
  event.preventDefault();
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);

    // Nego a afirmação
    let resultado = ``; /**Guarda a resposta da validação */
    if (n1 <= 0 || n1 >= 10)
        {
            resultado = `ERRO: Informe apenas valores entre 0 e 10 para cada campo`;
            mudar_resultado(resultado, "blue");
            return;
        }
    else if (n2 <= 0 || n2 >= 10) 
        {
            resultado = `ERRO: Informe apenas valores entre 0 e 10 para cada campo`;
            mudar_resultado(resultado, "blue");
            return;
        }
    else if (n3 <= 0 || n3 >= 10) 
        {
            resultado = `ERRO: Informe apenas valores entre 0 e 10 para cada campo`;
            mudar_resultado(resultado, "blue");
            return;
        }
    
        /**Calcular a mediá */
        let media = (n1 + n2 + n3) / 3;
        exibir_resultado(media);


}

formulario.addEventListener("submit", main);
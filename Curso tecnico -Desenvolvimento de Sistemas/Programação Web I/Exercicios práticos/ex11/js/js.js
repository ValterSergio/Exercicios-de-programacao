function separar_codigo(codigo){
    // O codigo vem em formato de string e o que importa são os dois primeiros valores apenas
    let n_str = codigo.replace(".", "")
    return parseInt(n_str.slice(0, 2));

}

function obter_desconto_codigo(codigo_int){
    if (isNaN(codigo_int)){
        return false
    }

    if (codigo_int == 10){
        return 7.5 / 100 
    } else {
        return 0
    }
}

function obter_forma_pagamento(){
    let pix = window.document.getElementById("Pix")      // Radio button para pagamento PIX
    let prazo = window.document.getElementById("Prazo")  // Radio button para pagamento a prazo
    if (pix.checked){
        return 'pix'
    } else if (prazo.checked){
        return 'prazo'
    }
}

function obter_desconto_final(){
    let cod_prod = window.document.getElementById("CodProd").value
    codigo = separar_codigo(cod_prod)
    if (!isNaN(codigo)){
        desconto = obter_desconto_codigo(codigo)
        if (desconto === false){
            return {mensagem: false, resposta: "ERRO: Codigo de produto invalido", retorno: null}
        } else {
            let pagamento = obter_forma_pagamento()
            if (pagamento === 'pix'){
                let pix_desconto = 2 / 100
                if (desconto === 0){
                    desconto = pix_desconto
                    return {mensagem: true, resposta: "desconto", retorno: desconto}
                } else {
                    desconto = desconto + pix_desconto;
                    return {mensagem: true, resposta: "desconto", retorno: desconto}
                }
            } else if (pagamento === 'prazo'){
                let juros = 5 / 100;
                return {mensagem: true, resposta: "juros", retorno: desconto}
            }
        }
    } else {
        return {mensagem: false, resposta: "ERRO: Não foi possivel ler o codigo de produto", retorno: null }
    }
}

function exibir_resultado(resposta){
    document.getElementById("resultado").textContent = resposta;
}

function calcular_preco_final(event){
    event.preventDefault();
    let quantidade = window.document.getElementById("qntd").value
    let valor_produto = parseFloat(window.document.getElementById("Val").value)
    let desconto_final = obter_desconto_final()
    let msg = desconto_final.mensagem
    let resposta = desconto_final.resposta
    if (msg === true){
        if (resposta === 'desconto'){
            let novo_valor =  valor_produto - (valor_produto * resposta)
            return exibir_resultado(novo_valor * quantidade)
        } else {
            let novo_valor = valor_produto + (valor_produto * resposta)
            return exibir_resultado(novo_valor * quantidade)
        }
    } else {
        return exibir_resultado(resposta)
    }
}

let botao = window.document.getElementById("Calc")
botao.addEventListener("click", calcular_preco_final) //nao sei se ta da forma certa mais ta funcionando

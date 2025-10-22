// Regras de negócio:
// 1. Formato do código do produto: xx.xxx (onde os 2 primeiros dígitos são a classificação)
// 2. Produtos 10.xxx recebem 7,5% de desconto
// 3. Pagamento PIX recebe 2% de desconto adicional
// 4. Pagamento a prazo recebe 5% de juros

// Captura o formulário do HTML
let Formulario = window.document.getElementById("formulario");

// Captura os elementos de forma de pagamento
let pix = window.document.getElementById("Pix")      // Radio button para pagamento PIX
let Prazo = window.document.getElementById("Prazo")  // Radio button para pagamento a prazo

// Captura os campos de entrada do formulário
let CodProd = window.document.getElementById("CodProd")  // código do produto
let Val = window.document.getElementById("Val")          // valor
let qntd = window.document.getElementById("qntd")        // quantidade

// Referência ao corpo da página e variável para armazenar o preço
let corpo = window.document.body // nao sei se é necessario mas no ultimo exercicio eu usei ent deixei
var preco;

// Captura o botão de calcular
let botao = window.document.getElementById("Calc")

// Adiciona o evento de click ao botão, chamando a função Calcular_Preço
botao.addEventListener("click", Calcular_Preco) //nao sei se ta da forma certa mais ta funcionando

// Função principal que realiza os cálculos
function Calcular_Preco(){
    // Pega os valores dos campos e faz o tratamento inicial
    let codProd = CodProd.value.replace('.', '').replace(' ', '');  // Remove o ponto do código (ex: 10.111 -> 10111), peguei com o chat
    codProd = parseInt(codProd);                   // Converte para número previnindo erro
    let val = parseFloat(Val.value.replace(',', '.'));  // Converte vírgula para ponto e transforma em número
    let quantidade = parseInt(qntd.value);         // Converte quantidade para número
    
    // Validação: verifica se todos os campos numéricos são válidos
    if (isNaN(codProd) || isNaN(val) || isNaN(quantidade)) {
        document.getElementById("resultado").textContent = "Por favor, preencha todos os campos numéricos corretamente";
        return;  // Encerra a função se houver erro, NaN significa "Not a Number" aprendi isso agora, || significa "ou"
    }

    // Inicializa o preço com o valor base
    let preco = val;

    // Math.floor() é uma função que arredonda um número para baixo até o número inteiro mais próximo
    // Exemplo: Math.floor(5.9) retorna 5, Math.floor(5.1) também retorna 5
    // 
    // No nosso caso: quando dividimos codProd por 1000, estamos pegando só os primeiros dígitos
    // Exemplo: se codProd = 10111
    
    // 10111 / 1000 = 10.111
    // Math.floor(10.111) = 10
    // Então comparamos se é igual a 10 para dar o desconto
    if (Math.floor(codProd / 1000) === 10) {
        preco = val - ((val/100)*7.5);  // Aplica 7.5% de desconto (multiplica por 1 - 0.075)
    }

    // Verifica a forma de pagamento selecionada
    if (pix.checked) {  // Se o radio button do PIX estiver marcado (checked retorna true ou false)
        preco = preco - ((preco/100)*2);  // Aplica 2% de desconto adicional para PIX (multiplica por 1 - 0.02)
    } else if (Prazo.checked) {  // Se não for PIX, verifica se é pagamento a prazo
        preco = preco + ((preco/100)*5);  // Aplica 5% de juros para pagamento a prazo (multiplica por 1 + 0.05)
    }

    // Multiplica o preço unitário pela quantidade de itens
    preco = preco * quantidade;

    // Exibe o resultado formatado com duas casas decimais no elemento HTML
    document.getElementById("resultado").textContent = `Preço Final: R$ ${preco.toFixed(2)}`;
}

   

   
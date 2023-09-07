// Implementação de variáveis dos inputs e resultados
var inputSinal = document.querySelector('#inputSinal');
var inputMensais = document.querySelector('#inputMensais');
var inputSemestrais = document.querySelector('#inputSemestrais');
var inputFinal = document.querySelector('#inputFinal');
var valorUnidade = document.querySelector('#inputUnidade');
var resultado = document.querySelector('#resultadoSoma');
var restanteUnidade = document.querySelector('#restanteUnidade');  // 

// Função de Aprovação e soma do fluxo
function somar() {
    // Soma dos valores mensais e semestrais
    var soma = parseInt(inputSinal.value)+parseInt(inputMensais.value*50)+parseInt(inputSemestrais.value*8) + parseInt(inputFinal.value);

    // Atualiza o resultado da soma no HTML
    resultado.innerHTML = soma;

    // Subtrai o valor da unidade da soma
    var valorRestante = parseInt(valorUnidade.value) - soma;

    // Atualiza o valor restante no HTML
    restanteUnidade.innerHTML = valorRestante;

    // Verifica se o valorRestante é menor que 0
    if (valorRestante > 0) {
        alert(`Faltam ${valorRestante} para atingir o resultado esperado.`);
    }

    if (valorRestante < 0) {
        alert(`O fluxo excedeu o valor da unidade em ${(-valorRestante)}.`);
    }

    // Verifica se o valorRestante é igual a 0
    if (valorRestante === 0) {
        alert("Você atingiu o resultado esperado");

        const resultadoSpan = document.getElementById("resultadoSoma");

        resultadoSpan.textContent = "APROVADO";

        resultadoSpan.classList.add('resultadoAprovado');  // <-- PARTE NOVA

    

    }



     
}

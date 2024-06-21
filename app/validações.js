function VerificaSeOChutePossuiValorValido (chute){
    const numero = +chute

    if (chuteInvalido (numero)) {
        elementoChute.innerHTML += '<div> Valor Invalido ';
        return
    }

    if (numeroMaiorOuMenorQueOPermitido(numero)){
        elementoChute.innerHTML += `<div> Valor Invalido : O numero dito deve estar entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h1>PARABENS!!</h1>
            <br>
            <h2>Você acertou.</h2>
            <h3>O numero Secreto é ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar-novamente">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML+=`
        <div>O numero secreto é menor  <i class="fa-solid fa-circle-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML+=`
        <div>O numero secreto é maior  <i class="fa-solid fa-circle-arrow-up"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueOPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', Event => {
    if (Event.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
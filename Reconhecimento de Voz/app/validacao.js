const min_value = menor.innerHTML;
const max_value = maior.innerHTML;

function verificaValorValido(chute){
    const numero = +chute
    
    
    if (chuteForInvalido(numero)){
        
        elementoChute.innerHTML += "<div class='alerta'>Valor Inválido</div>";
        console.log('Valor Inválido');
        return
    }
    
    if (numeroForMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div class = 'alerta'>Valor Inválido: o número precisa estar entre ${min_value} 
        e ${max_value} </div>`;
        console.log(`Valor Inválido: o número precisa estar entre ${min_value} e ${max_value}`);
        return
    }
    if (numero === numAleatorio){
        document.body.innerHTML = `<h2>Você Acertou!!!</h2>
        <h3>O número secreto era: ${numAleatorio}</h3>
        
        <button id="recomecar" class='btn_recomecar'>Gerar um novo número</button>
        `
    } else if (numero < numAleatorio){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
        return
    } else{
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
        return
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenor(numero){
    return numero > max_value || numero < min_value;
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'recomecar'){
        window.location.reload();
    }
})
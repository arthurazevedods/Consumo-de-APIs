const menor = document.getElementById('menor-valor');
const maior = document.getElementById('maior-valor');
const numAleatorio = getRandom(menor.innerHTML,maior.innerHTML);
const chute = document.getElementById('chute');
console.log('menor valor: '+menor.innerHTML);
console.log('maior valor: '+maior.innerHTML);
console.log(numAleatorio);

function getRandom(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


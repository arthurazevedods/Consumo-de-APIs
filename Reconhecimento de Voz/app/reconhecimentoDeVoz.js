const elementoChute = document.getElementById('chute');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const action = document.getElementById('reconhecimentoDeVoz');
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();



recognition.addEventListener('result', getSpeech)

function getSpeech(e) {

    transcript = e.results[0][0].transcript;
    
    exibeChuteNaTela(transcript);
    verificaValorValido(transcript);

}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
     `;
}

recognition.addEventListener('end', ()=>recognition.start());

// const textEL = document.getElementById('text');
// const speakEL = document.getElementById('speak');

// speakEL.addEventListener('click', speakText);
// function speakText() {

//     // stop any speaking in progress
//     window.speechSynthesis.cancel();

//     const text = textEL.value;
//     const utterance = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(utterance);
// }


const inputText = document.getElementById('text');
const buttonSpeak = document.getElementById('speak');

buttonSpeak.addEventListener('click', initiateSpeech);
function initiateSpeech() {

    // Stop any ongoing speech
    window.speechSynthesis.cancel();

    const textToSpeak = inputText.value;
    const speech = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(speech);
}

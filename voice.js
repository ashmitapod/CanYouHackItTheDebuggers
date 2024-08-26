const text = document.getElementById("textToConvert");
const recognizeBtn = document.getElementById("recognizeBtn");
const error = document.querySelector('.error-para');


// Speech-to-Text
recognizeBtn.addEventListener('click', function () {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = function() {
        error.textContent = "Listening...";
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        text.value = transcript;
        error.textContent = "Speech recognized!";
    };

    recognition.onerror = function(event) {
        error.textContent = "Error occurred in recognition: " + event.error;
    };

    recognition.onend = function() {
        error.textContent = "Speech recognition ended.";
    };

    recognition.start();
});
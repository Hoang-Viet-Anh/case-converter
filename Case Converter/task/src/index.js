let upperCase = document.getElementById("upper-case");
let lowerCase = document.getElementById("lower-case");
let properCase = document.getElementById("proper-case");
let sentenceCase = document.getElementById("sentence-case");
let saveTextFile = document.getElementById("save-text-file");
let textArea = document.querySelector("textarea");

upperCase.addEventListener("click", toUpper);
lowerCase.addEventListener("click", toLower);
properCase.addEventListener("click", toProper);
sentenceCase.addEventListener("click", toSentence);
saveTextFile.addEventListener("click", download);

function toUpper() {
    textArea.value = textArea.value.toUpperCase();
}
function toLower() {
    textArea.value = textArea.value.toLowerCase();
}
function toProper() {
    let array = textArea.value.split(" ");
    array = array.map(word => word.charAt(0).toUpperCase() + word.substring(1));
    textArea.value = array.join(" ");
}
function toSentence() {
    let sentences = textArea.value.split(".");
    sentences = sentences.map(sentence => sentence.trim())
        .map(sentence => sentence.charAt(0).toUpperCase() + sentence.substring(1).toLowerCase());
    textArea.value = sentences.join(". ").trim();
}
function download() {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textArea.value));
    element.setAttribute('download', 'text.txt');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

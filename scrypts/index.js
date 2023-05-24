const noMessage = document.getElementsByClassName("no--message")[0];
const resultMessage = document.getElementsByClassName("result--message")[0];


function getTextarea() {
    const text = document.getElementById("textarea").value;
    if (!text) {
        noMessage.classList.remove("hidden");
        resultMessage.classList.add("hidden");
        return;
    }
    return text;
}

function encryptEvent() {
    const text = getTextarea();
    if (!text) {
        return;
    }
    const encryptedText = encrypt(text);

    noMessage.classList.add("hidden");
    resultMessage.classList.remove("hidden");

    document.getElementById("result").innerHTML = encryptedText;
}

function decryptEvent() {
    const text = getTextarea();
    if (!text) {
        return;
    }
    const decryptedText = decrypt(text);

    noMessage.classList.add("hidden");
    resultMessage.classList.remove("hidden");

    document.getElementById("result").innerHTML = decryptedText;
}

function copyEvent() {
    const text = document.getElementById("result").innerHTML;
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard! Text: " + text);
}
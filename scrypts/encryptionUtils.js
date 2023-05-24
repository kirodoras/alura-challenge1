const conversionList = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
};

let reverseConversionList = {};

for (let key in conversionList) {
    let value = conversionList[key];
    reverseConversionList[value] = key;
}

function encrypt(text) {
    let encryptedText = "";
    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        let conversion = conversionList[letter];
        if (conversion) {
            encryptedText += conversion;
        } else {
            encryptedText += letter;
        }
    }
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = "";
    let i = 0;
    while (i < text.length) {
        let foundMatch = false;
        for (let key in reverseConversionList) {
            let value = reverseConversionList[key];
            if (text.startsWith(key, i)) {
                decryptedText += value;
                i += key.length;
                foundMatch = true;
                break;
            }
        }
        if (!foundMatch) {
            decryptedText += text[i];
            i++;
        }
    }
    return decryptedText;
}

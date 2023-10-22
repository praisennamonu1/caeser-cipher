export default {
    encode: (originalMessage, shift)=>{
        return encryptedMessage(originalMessage, shift);
    },
    decode: (originalMessage, shift)=>{
        return decryptedMessage(originalMessage, shift);
    }
}

function encryptedMessage (originalMessage, shift) {
    let encryptedMessage = '';
    for (let i = 0; i < originalMessage.length; i++) {
        let letter = originalMessage[i];
        let encryptedLetter = shiftLetter(letter, shift);
        encryptedMessage += encryptedLetter;
    }
    return encryptedMessage;
}

function decryptedMessage (originalMessage, shift) {
    let decryptedMessage = '';
    for (let i = 0; i < originalMessage.length; i++) {
        let letter = originalMessage[i];
        let decryptedLetter = shiftLetter(letter, -shift);
        decryptedMessage += decryptedLetter;
    }
    return decryptedMessage;
}

function shiftLetter(letter, shift) {
    let newLetter = '';
    let letterCode = letter.charCodeAt(0);
    let newLetterCode = letterCode + shift;

    if (letterCode < 65 || letterCode > 90 && letterCode < 97 || letterCode > 122) {
        newLetterCode = letterCode;
    }

    if (letterCode >= 65 && letterCode <= 90) {
        if (newLetterCode > 90) {
            newLetterCode = newLetterCode -= 26;
        } else if (newLetterCode < 65) {
            newLetterCode = newLetterCode += 26;
        }
    } else if (letterCode >= 97 && letterCode <= 122) {
        if (newLetterCode > 122) {
            newLetterCode = newLetterCode -= 26;
        } else if (newLetterCode < 97) {
            newLetterCode = newLetterCode += 26;
        }
    }

    newLetter = String.fromCharCode(newLetterCode);
    return newLetter;
}
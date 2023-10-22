import cipher from './cipher.js';

// Encryption
let originalInput =  document.querySelector('#encryptOriginal')
let shiftInput = document.querySelector('#encryptShift')
let encodedOutput = document.querySelector('#encoded')

let originalMessage

originalInput.addEventListener('input', ()=>{
    originalMessage = originalInput.value
    startEnconding()
}, false)

shiftInput.addEventListener('input', ()=>{
    startEnconding()
}, false)

function startEnconding() {
    let shift = shiftInput.value ? Number(shiftInput.value) : 0
    const encodedMessage = cipher.encode(originalMessage, shift)
    encodedOutput.value = encodedMessage
}

// Decryption
let originalInput2 = document.querySelector('#decryptOriginal')
let shiftInput2 = document.querySelector('#decryptShift')
let decodedOutput = document.querySelector('#decoded')

let originalMessage2

originalInput2.addEventListener('input', ()=>{
    originalMessage2 = originalInput2.value
    startDecoding()
}, false)

shiftInput2.addEventListener('input', ()=>{
    startDecoding()
}, false)

function startDecoding() {
    let shift = shiftInput2.value ? Number(shiftInput2.value) : 0
    const decodedMessage = cipher.decode(originalMessage2, shift)
    decodedOutput.value = decodedMessage
}


// TO display the encryption and decryption screens
const welcomeScreen = document.querySelector('#welcome')
const encryptScreen = document.querySelector('#encrpyt')
const decryptScreen = document.querySelector('#decrypt')

function showEncrypt() {
    welcomeScreen.style.display = 'none';
    encryptScreen.style.display = 'block';
}

function showDecrypt() {
    welcomeScreen.style.display = 'none';
    decryptScreen.style.display = 'block';
}

function showWelcome() {
    encryptScreen.style.display = 'none';
    decryptScreen.style.display = 'none';
    welcomeScreen.style.display = 'block';
}

document.querySelector('.encrypt').addEventListener('click', showEncrypt);
document.querySelector('.decrypt').addEventListener('click', showDecrypt);
document.querySelectorAll('.back').forEach(button => {
    button.addEventListener('click', showWelcome);
});
const passwordBox = document.getElementById("password");
const button = document.getElementById("myButton");
const copy = document.getElementById("copyit");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%*";

const allChracters = upperCase + lowerCase + number +symbols;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allChracters[Math.floor(Math.random() * allChracters.length)];

    }
    passwordBox.value = password;
}

button.onclick = function(){
    createPassword();
    console.log("clicked")
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

copy.onclick = function(){
    copyPassword();
}

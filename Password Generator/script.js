const upperSet  = "ABCDEFGHIJKLMNOPQRST";
const lowerSet = "abcdefghijklmnopqrst";
const  symble = "!@#$%^&*()-=_+[]{};':,./<>?";
const num = "123456789";

const len = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const sym = document.getElementById("symbole");
const number = document.getElementById("num");
const outPut = document.getElementById("display");

const randPass1 = (dataSet) =>{return dataSet[Math.floor(Math.random() * dataSet.length)]; } 

function generatedPass(pass = "") {

    // if the password length greater then entered number the trim 
    if(pass.length > len.value)
        return pass.slice(0,len.value);

    if (upper.checked) {
        pass += randPass1(upperSet);
    }
    if (lower.checked)
        pass += randPass1(lowerSet);

    if (sym.checked)
        pass += randPass1(symble);

    if (number.checked)
        pass += randPass1(num);

    if (pass.length < len.value)
        return generatedPass(pass);

    console.log(pass);
    outPut.value = pass;
}

function copyToClipboard(){
    const copy = outPut.value;
    navigator.clipboard.writeText(copy);
    alert("copied the value :"+copy);
}

document.getElementById("generate").addEventListener("click",function() {generatedPass();});

document.getElementById("copy").addEventListener("click",function(){copyToClipboard();});



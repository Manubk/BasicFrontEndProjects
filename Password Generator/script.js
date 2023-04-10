const upperSet  = "ABCDEFGHIJKLMNOPQRST";
const lowerSet = "abcdefghijklmnopqrst";
const  symble = "!@#$%^&*()-=_+[]{};':,./<>?";
const num = "123456789";

const length = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const sym = document.getElementById("symbole");
const number = document.getElementById("num");
const outPut = document.getElementById("display");

const randPass1 = (dataSet) =>{return dataSet[Math.floor(Math.random() * dataSet.length)]; } 

const generatedPass = (pass = "") => {

if(pass.length > length.value)
    console.log("more");

if(upper.checked){
    pass += randPass1(upperSet);
}
if(lower.checked)
    pass += randPass1(lowerSet);

if(sym.checked)
    pass += randPass1(symble);

if(number.checked)
    pass += randPass1(num);

if(pass.length < length.length)
    return generatedPass(pass);

console.log(pass);
}

document.getElementById("generate").addEventListener("click",function() {generatedPass();});



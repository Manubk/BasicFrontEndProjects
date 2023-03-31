function changeColor(){
    const random =  Math.floor(Math.random()*1677215);
    const randCode ="#"+random.toString(16);
    console.log(random,randCode);
    document.body.style.backgroundColor = randCode;
    document.getElementById("hashcode").innerText = randCode;
    navigator.clipboard.writeText(randCode);
}

document.getElementById("button").addEventListener("click",changeColor);
changeColor();
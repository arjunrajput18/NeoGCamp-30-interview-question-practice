const txtInput=document.querySelector("#txt-input")
const btnH1=document.querySelector("#btn-h1")
const btnH2=document.querySelector("#btn-h2")
const btnH3=document.querySelector("#btn-h3")
const output=document.querySelector("#output")

function handlerH1(){
    output.innerText=txtInput.value;
    output.style.fontWeight=`bolder`
    output.style.fontSize=`32px`
}

function handlerH2(){
    output.innerText=txtInput.value;
    output.style.fontWeight=`bolder`
    output.style.fontSize=`24px`
}
function handlerH3(){
    output.innerText=txtInput.value;
    output.style.fontWeight=`bolder`
    output.style.fontSize=`1.17em`
}
function txtInt(){
output.innerText=txtInput.value
}




txtInput.addEventListener("input",txtInt);
btnH1.addEventListener("click",handlerH1);
btnH2.addEventListener("click",handlerH2);
btnH3.addEventListener("click",handlerH3);
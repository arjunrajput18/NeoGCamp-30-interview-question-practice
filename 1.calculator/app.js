const firstInput=document.querySelector("#first-input");
const secondInput=document.querySelector("#second-input");
const addBtn=document.querySelector("#add");
const multiplyBtn=document.querySelector("#multiply");
const minusBtn=document.querySelector("#minus");
const divideBtn=document.querySelector("#divide");
const output=document.querySelector("#output")



function addition(){
    const result=Number(firstInput.value)+Number(secondInput.value);
    output.innerText=result;
}

function mul(){
    const result=Number(firstInput.value)*Number(secondInput.value);
    output.innerText=result;
}

function minus(){
    const result=Number(firstInput.value)-Number(secondInput.value);
    output.innerText=result;
}

function divide(){
    const result=Number(firstInput.value)/Number(secondInput.value);
    output.innerText=result;
}


addBtn.addEventListener("click",addition);
multiplyBtn.addEventListener("click",mul)
minusBtn.addEventListener("click",minus)
divideBtn.addEventListener("click",divide)
const txtInput=document.querySelector("#txt-input");
const passwordInput=document.querySelector("#password-input");
const BtnCheck=document.querySelector("#btn-check");
const output=document.querySelector("#output-div")

const txtInput2=document.querySelector("#txt-input-2");
const passwordInput2=document.querySelector("#password-input-2");
// const BtnCheck2=document.querySelector("#btn-check-2");
const output2=document.querySelector("#output-div-2")
function checkHandler(){
    var Inputs=txtInput.value.toLowerCase();
    var pwd=passwordInput.value.toLowerCase();
    console.log(Inputs,pwd)
 check=Inputs.includes(pwd);
//console.log(check)
if(Inputs && pwd){
 if(check){
    output.innerText="Password can't have name";
 }else{
    output.innerText="Okay to go"
 }
}else{
    output.innerText="Write inputs correct"
}
}

function checkHandler2(){
    var Inputs=txtInput2.value.toLowerCase();
    var pwd=passwordInput2.value.toLowerCase();
    console.log(Inputs,pwd)
 check=Inputs.includes(pwd);
//console.log(check)
if(Inputs && pwd){
 if(check){
    output2.innerText="Password can't have name";
 }else{
    output2.innerText="Okay to go"
 }
}else{
    output2.innerText="Write inputs correct"
} 
}
passwordInput2.addEventListener("input",checkHandler2)
BtnCheck.addEventListener("click",checkHandler)

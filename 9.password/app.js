const inputs=document.querySelector("#txt-input");
const btnSubmit=document.querySelector("#btn-submit");
const output=document.querySelector("#output");
const btnDisabled=document.querySelector("#btn-disabled");
const thirdInput=document.querySelector("#third-input")
const btnThree=document.querySelector("#btn-three");

function handlerSubmit(){
    var pwd=inputs.value
if(pwd.length<10){
output.innerText="Password should be greater than 10 characters"
output.style.color="red"
}
else{
    output.innerText="Password Submitted"
}
}


function handlerThird(){
   inputsThird =thirdInput.value
   style=window.getComputedStyle(thirdInput,null).getPropertyValue('background-color');
   colorChange=parseFloat(style)
   if(inputsThird.length!==0){
   if(inputsThird.length<8){
    thirdInput.style.backgroundColor="red"
    btnThree.disabled=true
   }
   else{
    thirdInput.style.backgroundColor="green"
    btnThree.disabled=false
   }
   }



}

thirdInput.addEventListener("input",handlerThird)

btnSubmit.addEventListener("click",handlerSubmit)
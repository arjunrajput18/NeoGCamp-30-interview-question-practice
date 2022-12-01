var txtInput=document.querySelector("#txt-input");
var getApi=document.querySelector("#get-api");
var outputApi=document.querySelector("#output-api");
var inputOtp=document.querySelector("#input-otp")
var outputMsg=document.querySelector("#output-msg");
var checkOtp=document.querySelector("#check-otp")


var otpval=''
function constructedApi(nameInput){
   return "https://otpgenerator.ishanjirety.repl.co/get-otp?name="+nameInput;
}


function apiHandler(){
    nameInput=txtInput.value
    fetch(constructedApi(nameInput))
    .then(res=>res.json())
    .then(json=>{
      otpval=json.otp
        outputApi.innerText="OTP :"+otpval
    })
}

function otpCheckHandler(){
  otpVerify=inputOtp.value
 

    if(otpval==otpVerify){
        outputMsg.innerText="success"
        outputMsg.style.color="green"
    }else{
        outputMsg.innerText="faliure"
        outputMsg.style.color="red"
    }
}





checkOtp.addEventListener("click",otpCheckHandler)
getApi.addEventListener("click",apiHandler)
const btnLog = document.querySelector("#btn-log");
const btnWarn = document.querySelector("#btn-warn");
const btnError = document.querySelector("#btn-error");
const txtInput = document.querySelector("#txt-input");
const buttonsDiv=document.querySelector("#buttons")
// function btnLogHandler() {
//   //inputText=txtInput.value;
//   //style=window.getComputedStyle(txtInput,)
//   txtInput.style.color="black"
//   console.log("working")
// }

// function btnWarnHandler() {
//   //inputText=txtInput.value;
//   //style=window.getComputedStyle(txtInput,)
//   txtInput.style.color="yellow "
//   console.log("working")
// }
// function btnErrorHandler() {
//   //inputText=txtInput.value;
//   //style=window.getComputedStyle(txtInput,)
//   txtInput.style.color="red "
//   console.log("working")
// }

function buttonsDivHandler(e){
buttonVal=e.target.innerText;
if(buttonVal=="Log"){
txtInput.style.color="black";
}
else if(buttonVal=="Warn"){
  txtInput.style.color="yellow";

}
else if(buttonVal=="Error"){
  txtInput.style.color="red";

}
}

// btnLog.addEventListener("click", btnLogHandler);
// btnWarn.addEventListener("click", btnWarnHandler);
// btnError.addEventListener("click", btnErrorHandler);
buttonsDiv.addEventListener("click",buttonsDivHandler)

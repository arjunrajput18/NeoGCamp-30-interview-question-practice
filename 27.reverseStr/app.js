var txtInput = document.querySelector("#txt-input");
var btnClick = document.querySelector("#btn-click");
var outputDiv = document.querySelector("#output");

function clickHandler() {
  txt = txtInput.value.toLowerCase();
  reverseStr = txt.split("").reverse().join("")
  outputDiv.innerText = reverseStr;
}

btnClick.addEventListener("click", clickHandler);

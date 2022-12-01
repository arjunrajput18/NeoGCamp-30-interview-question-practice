const txtInput = document.querySelector("#txt-input");
const btnRed = document.querySelector("#btn-red");
const btnGreen = document.querySelector("#btn-green");
const btnYellow = document.querySelector("#btn-yellow");
const output = document.querySelector("#output");

function redHandler() {
  const input = txtInput.value;
  txtInput.style.color = "red";
  txtInput.innerText = input;
}

function GreenHandler() {
  const input = txtInput.value;
  txtInput.style.color = "Green";
  txtInput.innerText = input;
}

function YellowHandler() {
  const input = txtInput.value;
  output.style.color = "Yellow";
  output.innerText = input;
}

function handlerTextInput() {
  const ip = txtInput.value;
  output.innerText = ip;
}

txtInput.addEventListener("input", handlerTextInput);
btnRed.addEventListener("click", redHandler);
btnGreen.addEventListener("click", GreenHandler);
btnYellow.addEventListener("click", YellowHandler);

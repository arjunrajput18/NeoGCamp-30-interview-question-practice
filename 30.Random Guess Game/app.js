var txtInput = document.querySelector("#txt-input");
var btnClick = document.querySelector("#btn-click");
var outputDiv = document.querySelector("#output");

function clickHandler() {
  txt=txtInput.value;
    x=Math.floor((Math.random()*5)+1);
    console.log(x)
  if(x==txt){
    outputDiv.innerText="Guess is Correct";
  }
  else{
    outputDiv.innerText="Guess is not  Correct";
  }

}

btnClick.addEventListener("click", clickHandler);

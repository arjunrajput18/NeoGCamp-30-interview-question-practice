const btnClick = document.querySelector("#btn-click");
const output = document.querySelector("#output");
const txtInput = document.querySelector("#txt-input");

function clickHandler() {
  var inputVal = txtInput.value;
  var name=inputVal.charAt(0).toUpperCase()+inputVal.slice(1).toLowerCase();

  if ( name=== "Tanvi") {
    output.innerText = "She is the best CEO ever!";
  } else if (name=== "Tanay") {
    output.innerText = "He is our FUNNY mentor!";
  } else if (name === "Swapnil") {
    output.innerText = "He helps us CONQUER jobs!";
  } else if (name=== "Akanksha") {
    output.innerText = "She is our CHEERFUL Interviewer!";
  } else {
    output.innerText = "Invalid input";
  }
}

btnClick.addEventListener("click", clickHandler);

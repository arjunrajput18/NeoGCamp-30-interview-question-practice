const inputEl = document.querySelector('#input-el')
let preNum = ''

function checkInput() {
  if (isNaN(inputEl.value)) {
    inputEl.value = preNum
  } else {
     preNum = inputEl.value
  }

}

inputEl.addEventListener('input', checkInput)

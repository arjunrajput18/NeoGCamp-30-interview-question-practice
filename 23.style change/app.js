var boldBtn = document.querySelector('#bold')
var italicsBtn = document.querySelector('#italics')
var underlineBtn = document.querySelector('#underline')
var none= document.querySelector('#none')
var outputDiv = document.querySelector("#output");
var txtInput = document.querySelector("#txtinput");
var btnType=document.querySelector("#btn-type");


// function boldHandler(){
//     let inputs=txtInput.value
//     output.style.fontWeight="bold"
//     output.innerText=inputs

// }
// function italichandler(){
//     let inputs=txtInput.value
//     output.style.fontStyle="italic"
//     output.innerText=inputs
// }
// function underlineHandler(){
//     let inputs=txtInput.value
//     output.style.textDecoration="underline"
//     output.innerText=inputs
// }


function inputHandler(){
    output.innerText=txtInput.value
}


function btnHanlder(e){
    var clickedBtn=e.target.innerText
    if (clickedBtn === 'Bold') {
        outputDiv.style.fontWeight = 'bold'
      } else if (clickedBtn === 'Italics') {
        outputDiv.style.fontStyle = 'italic'
      } else if (clickedBtn === 'Underline') {
        outputDiv.style.textDecoration = 'underline'
      }
      else if (clickedBtn === 'none') {
        outputDiv.style.fontWeight= 'normal'
        outputDiv.style.fontStyle = 'normal'
        outputDiv.style.textDecoration = 'none'
      }

}



txtInput.addEventListener("input",inputHandler)
btnType.addEventListener("click",btnHanlder)
// btnBold.addEventListener("click",boldHandler);
// btnItalic.addEventListener("click",italichandler);
// btnUnderline.addEventListener("click",underlineHandler)
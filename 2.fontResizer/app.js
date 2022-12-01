var textInput = document.querySelector("#text-input");
var incFont = document.querySelector("#inc-font");
var decFont = document.querySelector("#decrease-font");
var output = document.querySelector("#output");

const handlerTextInput=()=>{
    output.innerText=textInput.value
}
const incHandler=()=>{
    output.innerText=textInput.value 
    const style=window.getComputedStyle(output,null).getPropertyValue('font-size');
    const currentSize=parseFloat(style);
    output.style.fontSize=`${currentSize+2}px`
}

const decHandler=()=>{
    output.innerText=textInput.value
    const style=window.getComputedStyle(output,null).getPropertyValue('font-size');
    const currentSize=parseFloat(style)
    output.style.fontSize=`${currentSize -2}px`

}
textInput.addEventListener('input', handlerTextInput);
incFont.addEventListener("click", incHandler);
decFont.addEventListener("click", decHandler);

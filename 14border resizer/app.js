const btn5px=document.querySelector("#btn1");
const btn10px=document.querySelector("#btn2");
const headOne=document.querySelector("#heading");
const reset=document.querySelector("#reset");




function btn5pxHandler(){
  //style=window.getComputedStyle(headOne,null).getPropertyValue('border')
  headOne.style.border="5px solid black"
}
function btn10pxHandler(){
  //style=window.getComputedStyle(headOne,null).getPropertyValue('border')
  headOne.style.border="10px solid black"
}
function resetHandler(){
  //style=window.getComputedStyle(headOne,null).getPropertyValue('border')
  headOne.style.border="1px solid black"
}

btn10px.addEventListener("click",btn10pxHandler)
btn5px.addEventListener("click",btn5pxHandler)
reset.addEventListener("click",resetHandler)
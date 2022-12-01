
const btnLoad=document.querySelector("#btn-load");




function loadHandler(){
var  headLoading=document.querySelector("#loading");

if(headLoading.style.display=="none"){
console.log("abc")
headLoading.style.display= "block"

}
else{
    headLoading.style.display="none";
}
}


btnLoad.addEventListener("click",loadHandler)
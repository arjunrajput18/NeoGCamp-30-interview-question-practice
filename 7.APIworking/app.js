var txtInput=document.querySelector("#txt-input");
var btnAge=document.querySelector("#btn-age");
var outputShow=document.querySelector("#output");


serverURL='https://api.agify.io/';
function constructedURL(inputVal){
    return serverURL+"?name="+inputVal;

}

function errorHandler(error){
    outputShow.innerText="Something is bad 🥶Try after Some time"
}

function serverHandler(){
var inputVal=txtInput.value
console.log(inputVal)
    fetch(constructedURL(inputVal))
    .then(res=>res.json())
    .then(json=>{
        outputShow.style.color="blue"
        outputShow.innerText=`${inputVal}'s age is ${json.age}`
        console.log(json.age)
    })
    .catch(errorHandler)
}



btnAge.addEventListener("click",serverHandler)
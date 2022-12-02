var btnFetch=document.querySelector("#btn-fetch");
var outputDiv=document.querySelector("#output")

function errorHandler(e){
  console.log(e.message)
  console.log(e)

  outputDiv.innerHTML=e
}


function fetchHandler(){
var URL="https://randomsuser.me/api"
  fetch(URL)
  .then(res=>res.json())
  .then(json=>{
    console.log("hello")
  })
  .catch(errorHandler)


}


btnFetch.addEventListener("click",fetchHandler)
var btnApi=document.querySelector("#btn-Api");
var output=document.querySelector("#output");

function fetchApi(){
  console.log("working")
  fetch(" https://mystery-api.kushanksriraj.repl.co")
  .then(res=>{
    if(res.status===404){
      output.innerHTML="page not found"
    }else if(res.status===403){
      output.innerText="You are not logged in";
    }
    else if(res.status===200){
      output.innerHTML="APi is working"
    }
  })
  .catch((err)=>{
    console.log(err)})
}



btnApi.addEventListener("click",fetchApi)
const btnYJHD=document.querySelector("#btn-YJHD");
const btnZNMD=document.querySelector("#btn-ZNMD");
const output=document.querySelector("#output");
const buttonsDiv=document.querySelector("#buttons");


function constructedURL(movieName){
  return "https://mock-practice.prakhar10v.repl.co/bollywood?name="+movieName 
}


function handler(event){
  inputs=event.target.value

  fetch(constructedURL())
  .then(res=>res.json())
  .then(json=>{
    //console.log(json.message)
    output.innerText=json.message
  })

}

function buttonsDivhandler(e){
  var movieName=e.target.value
 
  fetch(constructedURL(movieName))
  .then(res=>res.json())
  .then(json=>{
    output.innerText=json.message;
  })

}



buttonsDiv.addEventListener("click",buttonsDivhandler)
//btnYJHD.addEventListener("click",handler)
var outputDiv=document.querySelector("#output");
var txtInput=document.querySelector("#txt-input");
var btnHeading=document.querySelector("#btn-heading");
// H1=32
// H2=24
// H3=19
// H4=16
// H5=14
// H6=13

// h1 :2em;
// h2  :1.5em; 
// h3  : 1.17em;
// h4: 1em
// h5  :.83em;
// h6:0.75rem

function btnHandler(e){
  btn=e.target.innerText;
  txt=txtInput.value;
  // console.log(txt)
  if(btn==="h1"){
    outputDiv.style.fontSize="32px";
    // outputDiv.style.fontSize="2em";
    outputDiv.innerText=txt
  }
  else if(btn==="h2"){
    outputDiv.style.fontSize="24px";
    outputDiv.innerText=txt
  }
  else if(btn==="h3"){
    outputDiv.style.fontSize="1.17em";
    outputDiv.innerText=txt
  }

}


btnHeading.addEventListener("click",btnHandler)
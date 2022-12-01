var txtInput=document.querySelector("#txt-input");
var output=document.querySelector("#output");
var btnClick=document.querySelector("#btn-click")
var charCount=document.querySelector("#char-count");

function wordHandler(){
    var tweet=txtInput.value;
    btnClick.disabled=false;
    count=30-tweet.length;
    charCount.textContent="Characters: "+ count;
    if(count <=0){
        charCount.style.color="red";
       btnClick.disabled=true   
    }
    else if(count>=15){
        charCount.style.color="black"
    }
    else if(count>0 && count <= 15){
        charCount.style.color="yellow"
    }

    
}


function tweetIt(){
    var htmlString=`<div>${txtInput.value}</div>`
    output.innerHTML +=htmlString;
}


btnClick.addEventListener("click",tweetIt);
txtInput.addEventListener("input",wordHandler)
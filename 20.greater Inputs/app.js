const firstInput=document.querySelector("#first-input");
const secondInput=document.querySelector("#second-input");
const output=document.querySelector("#output-div");


function inputHandler(){
    inputFirst=parseInt(firstInput.value);
    inputSecond=parseInt(secondInput.value);
    //console.log(inputFirst,inputSecond);
    if(inputFirst<inputSecond){
        firstInput.style.backgroundColor="white"

        //style=window.getComputedStyle("firstInput,null").getPropertyValue("color")
        secondInput.style.backgroundColor="yellow"
        //firstInput.style.color="yellow";

        output.innerText="second input Number is greater than first input Number";

    }
    else if(inputFirst>inputSecond){
        secondInput.style.backgroundColor="white"
        
        //style=window.getComputedStyle("secondInput,null").getPropertyValue("color")
        firstInput.style.backgroundColor="yellow"

        output.innerText="first input Number is greater than second input number"
    }
    else if(inputFirst==inputSecond){
        firstInput.style.backgroundColor="yellow"
        secondInput.style.backgroundColor="yellow"

        output.innerText="both are equal"
    }
}



secondInput.addEventListener("input",inputHandler)
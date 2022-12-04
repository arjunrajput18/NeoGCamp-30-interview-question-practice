// let vowelCount=document.querySelector("#vowels");
// let consonantsCount=document.querySelector("#consonants")
// let wordsType=document.querySelector("#words")

// var v=0;
// var c=0
// function wordHandler(){
//  // console.log(wordsType.value)
//   wordVal=wordsType.value;
//   if (wordVal !=="") {
//   for (var i = 0; i < wordVal.length; i++) {
//     if (
//       wordVal[i] === "a" ||
//       wordVal[i] === "e" ||
//       wordVal[i] === "i" ||
//       wordVal[i] === "o" ||
//       wordVal[i] === "u"
//     ) {
//       console.log(wordVal[i]);
//       console.log(v)
//       v++;
//       console.log(v)
//     } else {
//       c++;
//     }
//   }
//   }
// vowels.textContent = 'Vowels: ' + v
// consonantsCount.textContent = 'consonants: ' + c

// v=0;
// c=0;
// }



// wordsType.addEventListener("input",wordHandler)
//New way to solve
// Create a web app to take text input from the user and show the number of vowels and consonants. (spaces should not be counted)

var textField = document.querySelector('#text')
var vowels = document.querySelector('#vowels')
var consonants = document.querySelector('#consonants')

var v = 0
var c = 0

function countVowels(txt) { 
  let text = textField.value
 
    for (var i = 0; i < text.length; i++) {
      ch=text[i]
      if(ch>="a" && ch<="z" || ch>="A" && ch<="Z"){
     
      if (
        ch=== "a" ||
        ch === "e" ||
        ch === "i" ||
        ch=== "o" ||
        ch === "u"
      ) {
        v++;
      }else  {
    c++
        }
      
      
    }
  }
  vowels.textContent = 'Vowels: ' + v
  consonants.textContent = 'Consonants: ' + c
  v=0;
  c=0;
}

textField.addEventListener('input', countVowels)

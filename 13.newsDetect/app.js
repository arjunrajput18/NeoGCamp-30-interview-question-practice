// Create a CLI app which would detect fake news. This app will take news as input and then source. If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?

var readlineSync = require('readline-sync');

var userName = readlineSync.question("what is your name?");

var newsInput = readlineSync.question("whar is source of news?");

var fakeNewsArray = ['facebook', 'whatsapp', 'telegream', 'fb', 'wp', 'tg'];

function arrayCheck() {
var found = fakeNewsArray.includes(newsInput.toLowerCase());
  if (found) {
    console.log("Don't believe things on FB and Whatsapp, specally on "  + newsInput)
  } else {
    alert("it is true news")
  }
}

arrayCheck();
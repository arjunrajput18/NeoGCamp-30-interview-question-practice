var doc = document.querySelector("#fullPage");
var start = document.querySelector("#btnStart");
var stop = document.querySelector("#btnStop");

var color = ["yellow", "green", "red", "blue"];
var i = 0;
function startHandler() {
  interval = setInterval(function () {
    doc.style.backgroundColor = color[i];
    current = color[i];
    i++;
    if (i > color.length - 1) {
      i = 0;
    }
  }, 1000);
}

function stopHandler() {
  clearInterval(interval);
  doc.style.backgroundColor = current;
  console.log(current);
}

start.addEventListener("click", startHandler);
stop.addEventListener("click", stopHandler);

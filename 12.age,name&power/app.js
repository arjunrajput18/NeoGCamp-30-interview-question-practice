// Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.
var readlineSync=require('readline-sync')

var obj1 = {
  name: "Ram",
  power: 200,
  yuga: "Treta"
};

var obj2 = {
  name: "Krishna",
  power: 2325,
  yuga: "Dwapar"
}

var obj = [obj1, obj2]
function morePower() {
  obj.map(() => {
    if (obj1.power > obj2.power) {
      console.log(obj1.name,"",obj1.power)
    }
    else {
      console.log(obj2.name," ",obj2.power)
    }

  }

  )

}

morePower();
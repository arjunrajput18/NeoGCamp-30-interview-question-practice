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



-------------second method---
// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points.

// Write a function which takes two objects and return the person with more power based on their name and power both.

// Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.

const obj1 = {
  name: "Ram",
  power: 2500,
  yuga: "Treta",
};

const obj2 = {
  name: "Krishna",
  power: 2325,
  yuga: "Dwapar",
};

const powerOfChar = 35;

function getSuperPower(person1, person2) {
  return getPower(person1) > getPower(person2) ? person1.name : person2.name;
}

function getPower(person) {
  console.log(person.name.length * 35 + person.power + " " + person.name)
  return person.name.length * 35 + person.power;
}

console.log("The superPowerFul :: " + getSuperPower(obj1, obj2));

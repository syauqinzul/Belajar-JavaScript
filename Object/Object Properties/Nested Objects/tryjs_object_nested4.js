// Create nested Objects
const myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
  }
}

let p1 = "myCars";
let p2 = "car2";
document.getElementById("demo").innerHTML = myObj[p1][p2];
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array from the Properties
const myArray = Object.values(person);

// Stringify the Array
let text = myArray.toString();

document.getElementById("demo").innerHTML = text;
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Display JSON
let text = JSON.stringify(person);

document.getElementById("demo").innerHTML = text; 
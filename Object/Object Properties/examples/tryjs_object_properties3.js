const person = {
  firstName: "John",
  lastName : "Doe",
  age      :  50
};

let x = "firstName";
let y = "age";
document.getElementById("demo").innerHTML = person[x] + " is " + person[y] + " years old.";
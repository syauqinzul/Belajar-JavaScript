// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};

// Add a Method
person.name = function() {
  return (this.firstName + " " + this.lastName).toUpperCase();
};

// Display Object Data
document.getElementById("demo").innerHTML =
"My father is " + person.name(); 
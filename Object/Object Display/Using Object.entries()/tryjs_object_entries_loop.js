const fruits = {Bananas:300, Oranges:200, Apples:500}; 

let text = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  text += fruit + ": " + amount + "<br>";
}

document.getElementById("demo").innerHTML = text;
// DOM Selection
// document.getElementById()
const header = document.getElementById("header");
header.style.color = "blue";
header.style.borderBottom = "2px solid blue";
header.innerHTML += " (Modified by JS)";

// document.getElementsByTagName (HTMLCollection)
// mirip HTMLCollection itu seperti array tapi bukan array beneran
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.fontFamily = "Arial, sans-serif";
}
p[0].style.background = "color: green;"; // tidak berpengaruh karena HTMLCollection

const h1 = document.getElementsByTagName("h1");
// querySelector
// querySelectorAll
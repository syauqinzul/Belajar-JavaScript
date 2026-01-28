// Access a paragraph Element
const myItems = document.querySelectorAll(".demo");

// Change the text content of the elements
myItems[0].innerHTML = "This is the first paragraph accessed using querySelectorAll() method.";
myItems[1].innerHTML = "This is the second paragraph accessed using querySelectorAll() method.";

// Change the content of another element to show the text from the selected paragraphs
document.getElementById("mypara").innerHTML =
  "The text from the first paragraph with class 'demo' is: " + myItems[0].innerHTML + "<br>" +
  "The text from the second paragraph with class 'demo' is: " + myItems[1].innerHTML;


// Let document listen for mousemove
document.addEventListener("mousemove", function (event) {
  document.getElementById("demo").innerHTML =
  "X: " + event.clientX + " Y: " + event.clientY;
});
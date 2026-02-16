const k = document.getElementById("k");

// Let k listen for keydown
k.addEventListener("keydown", function (event) {
  document.getElementById("demo").innerHTML = "You pressed: " + event.key;
});
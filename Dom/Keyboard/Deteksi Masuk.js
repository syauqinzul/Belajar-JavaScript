const in01 = document.getElementById("in01");

// Let in01 listen for keydown
in01.addEventListener("keydown", function (event) {
// If key was "enter", then display text
  if (event.code === "Enter") {
    document.getElementById("demo").innerHTML = "Enter was pressed!";
  }
});
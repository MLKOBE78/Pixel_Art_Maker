// Declaring variables from HTML
// Select color input
var color = document.getElementById("colorPicker");
// Select size input
var size = document.getElementById("sizePicker");
var canvas = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()
size.addEventListener("submit", function (event) {
    event.preventDefault();
    makeGrid();
});

//Making the grid
function makeGrid() {

    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
        canvas.innerHTML = null;

    for (var x = 0; x <= height; x++) {
        var row = canvas.insertRow(x);
        for (var y = 0; y <= width; y++) {
            var cell = row.insertCell(y);
            canvas.addEventListener("click", function(event) {
            event.target.style.backgroundColor = color.value;
         });
        }
    }
}
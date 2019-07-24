// Declaring variables from HTML
// Select color input
const color = document.getElementById("colorPicker");
// Select size input
const size = document.getElementById("sizePicker");
const canvas = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()
size.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});

//Making the grid
function makeGrid() {

    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    canvas.innerHTML = null;

    for (var x = 0; x < height; x++) {
        const row = canvas.insertRow(x);
        for (var y = 0; y < width; y++) {
            const cell = row.insertCell(y);
            canvas.addEventListener("click", function(event) {
                event.target.style.backgroundColor = color.value;
            });
        }
    }
}
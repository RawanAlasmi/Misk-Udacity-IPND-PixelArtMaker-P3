// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

function makeGrid(event) {

    // prevent reloading the page when user click on submit button
    event.preventDefault();

    // defined needed variables 
    var row, cell, canvas, grid;

    // assign values to each variable
    row = document.getElementById("inputHeight").value;
    cell = document.getElementById("inputWidth").value;
    canvas = document.getElementById("pixelCanvas");
    grid = '';
    
    // to clear the grid
    canvas.innerHTML = grid;

    // for loop for creating the canvas 
    for(var x = 0; x < row; x++){
        console.log("adding row");
        var rows = document.createElement("tr");
        for(var y = 0; y < cell; y++){
            console.log("adding cell");
            var cells = document.createElement("td");
            rows.appendChild(cells);
        }
        canvas.appendChild(rows);
    }

}


function getColor(event){
    // checking if the user clicked the cell 
    if(event.target.nodeName == "TD"){
        var cellColor = document.getElementById("colorPicker").value;
        event.target.style.backgroundColor = cellColor;
    }
    
}


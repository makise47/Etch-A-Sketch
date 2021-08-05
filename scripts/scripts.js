let slider = document.getElementById("grid-size")
let grid = document.getElementById("grid")
let mode = 0
// mode = 0 for random colours, mode = 1 for eraser, mode = 2 for colour picker.
let colourpickervalue
let gridvalue
console.log(gridvalue)

// Changing the look of the buttons when they are clicked
let randomcolourmode = document.getElementById("randomcolour")
let erasermode = document.getElementById("eraser")
let colourpickermode = document.getElementById("colorpicker")

// Variable to change colour of element if click has happened before. 0 for false and 1 for true.
let click = 0
let mousedownvar = 0

ChangeGrid(16)
randomcolourmode.style.background = "rgb(4, 170, 109, 0.7)"

grid.ondragstart = function () { return false;};

function clearGrid() {
    grid.innerHTML = ''
    gridvalue = slider.value
    ChangeGrid(gridvalue)
}

slider.oninput = function() {
    clearGrid()
}

function RandomiseColour() {
    mode = 0
    randomcolourmode.style.background = "rgb(4, 170, 109, 0.7)"
    erasermode.style.background = ""
    colourpickermode.style.background = ""
}

function Eraser() {
    mode = 1
    erasermode.style.background = "rgb(4, 170, 109, 0.7)"
    randomcolourmode.style.background = ""
    colourpickermode.style.background = ""
}

function ColourPickerMode() {
    mode = 2
    colourpickervalue = document.getElementById("colorpicker").value
    erasermode.style.background = ""
    randomcolourmode.style.background = ""
    colourpickermode.style.background = "rgb(4, 170, 109, 0.7)"
}

function ColourPickerModeonclick() {
    mode = 2
    colourpickervalue = document.getElementById("colorpicker").value
    erasermode.style.background = ""
    randomcolourmode.style.background = ""
    colourpickermode.style.background = "rgb(4, 170, 109, 0.7)"
}

function ChangeGrid (gridvalue) {
    grid.style.gridTemplateColumns = `repeat(${gridvalue}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${gridvalue}, 1fr)`
    for (let i = 0; i<(gridvalue*gridvalue); i++) {
        let gridElement = document.createElement('div')
        gridElement.addEventListener("mousedown", ChangeColor)
        gridElement.addEventListener("mouseover", DragChangeColor)
        gridElement.addEventListener("mouseup", ResetClick)
        grid.appendChild(gridElement)
    }
}

function ChangeColor (e) {
    if (mode == 0) {
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    }
    else if (mode == 1) {
        e.target.style.backgroundColor = `rgb(255, 255, 255)`
    }
    else if (mode == 2) {
        e.target.style.backgroundColor = colourpickervalue
    }
    click = 1
    mousedownvar = 1
}

function DragChangeColor (e) {
    if (click == 1 && mousedownvar == 1) {
        if (mode == 0) {
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
        }
        else if (mode == 1) {
            e.target.style.backgroundColor = `rgb(255, 255, 255)`
        }
        else if (mode == 2) {
            e.target.style.backgroundColor = colourpickervalue
        }
    }
}

function ResetClick (e) {
    click = 0
    mousedownvar = 0
}

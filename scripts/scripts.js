let slider = document.getElementById("grid-size")
let grid = document.getElementById("grid")
let mode = 0
// mode = 0 for random colours, mode = 1 for eraser, mode = 2 for colour picker
let colourpickervalue
let gridvalue
console.log(gridvalue)

// Changing the look of the buttons when they are clicked
let randomcolourmode = document.getElementById("randomcolour")
let erasermode = document.getElementById("eraser")
let colourpickermode = document.getElementById("colorpicker")

DefaultGrid()

function DefaultGrid() {
    ChangeGrid(16)
    randomcolourmode.style.background = "rgb(4, 170, 109, 0.7)"
}

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
        gridElement.addEventListener("mouseover", ChangeColor)
        gridElement.style.borderwidth = "1px"
        gridElement.style.bordercolor = "rgb(220, 220, 220, 0.25)"
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
    else if (mode ==2) {
        e.target.style.backgroundColor = colourpickervalue
    }
}

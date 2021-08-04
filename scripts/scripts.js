let slider = document.getElementById("grid-size")
let grid = document.getElementById('grid')
let mode = 0
// mode = 0 for random colours, mode = 1 for eraser, mode = 2 for colour picker
let colourpickervalue

DefaultGrid()

function clearGrid() {
    grid.innerHTML = ''
}

function DefaultGrid() {
    ChangeGrid(16)
}


slider.oninput = function() {
    let gridvalue = slider.value
    console.log(gridvalue)
    document.getElementById("grid").innerHTML = ""
    ChangeGrid(gridvalue)
}

function RandomiseColour() {
    mode = 0
}

function Eraser() {
    mode = 1
}

function ColourPickerMode() {
    mode = 2
    colourpickervalue = document.getElementById("colorpicker").value
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

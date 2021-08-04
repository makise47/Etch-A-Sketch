let slider = document.getElementById("grid-size")
let grid = document.getElementById('grid')

function clearGrid() {
    grid.innerHTML = ''
}

slider.oninput = function() {
    let gridvalue = slider.value
    console.log(gridvalue)
    grid.style.gridTemplateColumns = `repeat(${gridvalue}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${gridvalue}, 1fr)`
    for (let i = 0; i<(gridvalue*gridvalue); i++) {
        let gridElement = document.createElement('div')
        gridElement.addEventListener("mouseover", ChangeColor);
        gridElement.style.borderwidth = "1px"
        gridElement.style.bordercolor = "rgb(220, 220, 220, 0.25)"
        grid.appendChild(gridElement)
    }
}

function ChangeColor (e) {
    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}
<!DOCTYPE html>
<html>
    <head>
        <meta charset = "utf-8">
        <title>Etch a Sketch</title>
        <link href = "css/style.css" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    </head>

    <body>
        <div class="container">
            <h1 class="title-text">Etch a Sketch</h1>

            <div class="controls">
                <input type="button" class="randomcolour" id="randomcolour" value="Random" onclick="RandomiseColour()">
                <input type="color" class="colorpicker" id="colorpicker" value="Pick Colour" onclick="ColourPickerModeonclick()" onchange="ColourPickerMode()">
                <input type="button" class="eraser" id="eraser" value="Eraser" onclick="Eraser()">
                <input type="button" class="reset" id="reset" value="Reset" onclick="clearGrid()">
                <input type="range" min="0" max="32" value="16" step="4" class="slider" id="grid-size">                
            </div>

            <div class="grid" id="grid"></div>
        </div>
    </body>
    <script type="text/javascript" src="scripts/scripts.js"></script>
</html>
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
                <input type="button" class="color" value="Colour">
                <input type="button" class="eraser" value="Eraser">
                <input type="range" min="0" max="64" value="32" step="4" class="slider" id="grid-size">
                
            </div>

            <div class="grid" id="grid"></div>
        </div>
    </body>
    <script type="text/javascript" src="scripts/scripts.js"></script>
</html>
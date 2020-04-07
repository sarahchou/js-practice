var buttons = document.getElementsByClassName('colorButton');
var heading;
heading = document.getElementById('colorValue');
function setButtonColor(button, red, green, blue) {
    button.setAttribute('style', 'background-color: rgb('+ red + ',' + green + ',' + blue + ');'
    );
}

function makeColorValue() {
    return Math.round(Math.random()*255);
}
var red = makeColorValue();
var green = makeColorValue();
var blue = makeColorValue();
setButtonColor(buttons[0], red, green, blue);
setButtonColor(buttons[1], 40, 255, 25);
setButtonColor(buttons[2], 180, 0, 240);
setButtonColor(buttons[3], 210, 235, 100);
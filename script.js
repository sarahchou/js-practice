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

for (var i = 0; i < buttons.length; i ++) {
    var red = makeColorValue();
    var green = makeColorValue();
    var blue = makeColorValue();
    setButtonColor(buttons[i], red, green, blue);
}

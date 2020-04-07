var buttons = document.getElementsByClassName('colorButton');
var heading;
heading = document.getElementById('colorValue');
function setButtonColor(button, red, green, blue) {
    button.setAttribute('style', 'background-color: rgb('+ red + ',' + green + ',' + blue + ');'
    );
}
setButtonColor(buttons[0], 0, 0, 255);
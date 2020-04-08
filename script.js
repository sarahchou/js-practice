//Functions
function setButtonColor(button, red, green, blue) {
    button.setAttribute('style', 'background-color: rgb('+ red + ',' + green + ',' + blue + ');'
    );
}

function makeColorValue() {
    return Math.round(Math.random()*255);
}

//Variables
var buttons = document.getElementsByClassName('colorButton');
var heading = document.getElementById('colorValue');
var answerMessage = document.getElementById('answer');
var answerButton = Math.round(Math.random()*(buttons.length - 1));

//Setting up each color value button
for (var i = 0; i < buttons.length; i ++) {
    var red = makeColorValue();
    var green = makeColorValue();
    var blue = makeColorValue();
    setButtonColor(buttons[i], red, green, blue);

    if (i == answerButton) {
        heading.innerHTML = `(${red},${green},${blue})`;
    }

    buttons[i].addEventListener('click', function(){
        if (this === buttons[answerButton]) {
            answerMessage.innerHTML = "Correct!";
        }
        else {
            answerMessage.innerHTML = "Wrong answer. Guess again!";
        }

    });
}


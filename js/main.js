
var numberContainer = document.getElementById("number-container"),
gTimes = document.getElementById("gTimes"),
wTimes = document.getElementById("wTimes"),
clickCounter = 0,
numberOne,
numberTwo,
numberThree,
numberButtons = document.getElementsByClassName('number'),
greenLight = document.getElementById('greenLight'),
redLight = document.getElementById('redLight'),
intervalTimer = 0,
goodTimes = 0,
wrongTimes = 0;

function getNumber(button) {
    numberContainer.innerHTML += button.value;
    clickCounter++;
    if(clickCounter ==1){
        numberOne = button.value;
    }
    else if (clickCounter == 2) {
        numberTwo = button.value;
    }
    else {

        numberThree = button.value;
        if (numberOne == 1 && numberTwo == 1 && numberThree == 2){
            clickCounter = 0;
            goodTimes++;
            gTimes.innerHTML = goodTimes;
            numberContainer.innerHTML = "correct";
            for(i=0; i < numberButtons.length; i++) {
                numberButtons[i].setAttribute('disabled', 'disabled');
            }
            greenblink = setInterval(function () {
                intervalTimer++;

                if(greenLight.style.visibility == 'hidden')
                {
                    greenLight.style.visibility = 'visible';
                }
                else
                {
                    greenLight.style.visibility = 'hidden'
                }
                if(intervalTimer >= 10){
                    intervalTimer = 0
                    clearInterval(greenblink);
                    numberContainer.innerHTML = "";
                    for(i=0; i < numberButtons.length; i++) {
                        numberButtons[i].removeAttribute('disabled');
                    }
                }
            },500);
        }
        else{
            clickCounter = 0;
            wrongTimes++;
            wTimes.innerHTML = wrongTimes;
            numberContainer.innerHTML = "incorrect";
            for(i=0; i < numberButtons.length; i++) {
                numberButtons[i].setAttribute('disabled', 'disabled');
            }
            redblink = setInterval(function () {
                intervalTimer++;

                if(redLight.style.visibility == 'hidden')
                {
                    redLight.style.visibility = 'visible';
                }
                else
                {
                    redLight.style.visibility = 'hidden'
                }
                if(intervalTimer >= 10){
                    intervalTimer = 0
                    clearInterval(redblink);
                    numberContainer.innerHTML = "";
                    for(i=0; i < numberButtons.length; i++) {
                        numberButtons[i].removeAttribute('disabled');
                    }
                }
            },500);
        }
    }
}
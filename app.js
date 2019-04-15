// let timeInternal = [15,70,10,15]
let timeInternal = [1500, 300, 1500, 300, 1500, 300, 1500, 900];
let timeInternalNumber;
let timeRemain;
let timerId;
const timeShow = document.getElementById('timeshow');
const controllerButton = document.getElementById('controllerbutton');
//const docTitle = document.title; 

function refreshTime() {
    let displayTime;
    displayTime=  Math.floor( timeRemain / 60) + ":"+ ("0" + timeRemain % 60).slice(-2);
    timeShow.innerText = displayTime;
    document.title = displayTime + ' Pomodoro Timer';
}

function startClick() {
    switch (controllerButton.innerText) {
        case 'Start':
        timeInternalNumber = 0;        
        timeRemain= timeInternal[0];
        timerId= setInterval(myTimer, 1000);
        controllerButton.innerText='Pause';
        refreshTime();
        break;
        case 'Pause':
        clearInterval(timerId);
        controllerButton.innerText='Continue';
        break;
        case 'Continue':
        timerId= setInterval(myTimer, 1000);
        controllerButton.innerText='Pause';    
        break;
    }
}

function myTimer() {
    let displayTime;
    timeRemain--;
    refreshTime();
    if (timeRemain==0) {
        document.getElementById('myAudio').play();
        if (timeInternalNumber +1 < timeInternal.length) {
            timeInternalNumber++;
            timeRemain = timeInternal[timeInternalNumber];
        } else {
            clearInterval(timerId);
            controllerButton.innerText='Start';
        }
    }
    
}


const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const lapsList = document.getElementById('laps');
const tickSound = document.getElementById('tickSound');
const lapBtn = document.getElementById('lap');

let startTime;
let interval;
let lapCount = 1;

function get_time(d){
    d = d.childNodes;
    t = "";
    for (let i = 1; i<9; i+=2) {
        t = t+d[i].innerHTML+' ';
    }
    return t;
}


function updateTime(t) {
    t[3] = parseInt(t[3])+1
    if(t[3]<10){
        t[3] = ' 0'+t[3].toString()+' '
    }else if(t[3]>99){
        t[3] = ' 00 '
        t[2] = parseInt(t[3])+1
    }else{
        t[3] = ' '+t[3].toString()+' '
    }

    if(t[2]<10){
        t[2] = ' 0'+t[2].toString()+' '
    }else if(t[2]>59){
        t[2] = ' 00 '
        t[1] = parseInt(t[1])+1
    }else{
        t[2] = ' '+t[3].toString()+' '
    }
    return t.join(':')
}
console.log(updateTime(get_time(document.getElementsByClassName('time')[0]).split(':')))

startBtn.addEventListener('click', () => {
    startTime = new Date().getTime();
    interval = setInterval(updateTime, 1000);
    tickSound.play(); // Play tick sound
});

pauseBtn.addEventListener('click', () => {
    clearInterval(interval);
    tickSound.pause(); // Pause tick sound
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    display.textContent = '00:00:00';
    lapsList.innerHTML = '';
    lapCount = 1;
    tickSound.currentTime = 0; // Reset tick sound
});

lapBtn.addEventListener('click', () => {
    const lapTime = display.textContent; // Get the current time
    addLap(lapTime); // Call the function to add lap
});

function addLap(time) {
    const listItem = document.createElement('li');
    listItem.textContent = `Lap ${lapCount}: ${time}`;
    lapsList.appendChild(listItem);
    lapCount++;
}




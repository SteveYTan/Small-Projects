const daysEle = document.getElementById("days");
const hoursEle = document.getElementById("hours");
const minsEle = document.getElementById("mins");
const secondsEle = document.getElementById("seconds");

const christmas = "December 25 " + (new Date().getFullYear()) ;

function countdown() {

    const christmasDate = new Date(christmas);
    const currentDate = new Date();

    const totalSeconds = (christmasDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEle.innerHTML = days;
    hoursEle.innerHTML = formatTime(hours);
    minsEle.innerHTML = formatTime(mins);
    secondsEle.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
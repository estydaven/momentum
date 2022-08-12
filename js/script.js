// TIME AND DATE
const time = document.querySelector('.time');
const calendar = document.querySelector('.date');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
    showGreeting();
}

showTime();

function showDate() {
    const date = new Date();
    const options = { month: 'long', day: 'numeric' };
    const currentDate = date.toLocaleDateString('en-EN', options);
    calendar.textContent = currentDate;
}

// GREETING
function getTimeOfDay() {
    const date = new Date;
    const hours = date.getHours();
    
    if (hours == 23 && hours == 0 && hours <= 5) {
        return 'night';        
    }
    if (hours > 5 && hours <= 11) {
        return 'morning';
    }
    if (hours > 11 && hours <= 17) {
        return 'afternoon';
    }
    if (hours > 17 && hours < 23) {
        return 'evening';
    }
}

function showGreeting() {
    getTimeOfDay();

    const greeting = document.querySelector('.greeting');
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay}, `;

    return greeting.textContent = greetingText;
}

// SET&GET USER NAME IN LOCAL STORAGE

const userName = document.querySelector('.name');

function setLocalStorage() {
    localStorage.setItem('name', userName.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        userName.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage);

// IMAGE SLIDER

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBg() {
    const timeOfDay = getTimeOfDay();
    const bgNum = getRandomNum(0, 20).toString().padStart(2, '0');
    const body = document.body;
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/Nadyahopeeeee/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
}
setBg();
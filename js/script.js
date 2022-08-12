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
    const greeting = document.querySelector('.greeting');
    const date = new Date;
    const hours = date.getHours();
    let greetingText = '';
    
    if (hours == 23 && hours == 0 && hours <= 5) {
        greetingText = 'night';        
    }
    if (hours > 5 && hours <= 11) {
        greetingText = 'morning';
    }
    if (hours > 11 && hours <= 17) {
        greetingText = 'day';
    }
    if (hours > 17 && hours < 23) {
        greetingText = 'evening';
    }

    greeting.textContent = `Good ${greetingText}, `;
}

function showGreeting() {
    getTimeOfDay();
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
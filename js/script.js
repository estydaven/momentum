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

// IMAGE SLIDER

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBg() {
    const timeOfDay = getTimeOfDay();
    const bgNum = getRandomNum(1, 20).toString().padStart(2, '0');
    const body = document.body;
    const img = new Image;
    img.src = `https://raw.githubusercontent.com/Nadyahopeeeee/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/Nadyahopeeeee/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
    }    
}
setBg();

let randomNum = getRandomNum(1, 20);

function getSlidePrev() {
    if (randomNum >= 1) {
        randomNum = 20;
    } else {
        randomNum--;
    }

    setBg();
}

function getSlideNext() {
    if (randomNum >= 20) {
        randomNum = 1;
    } else {
        randomNum++;
    }

    setBg();
}

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

// WEATHER APP

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=d574043e56d6f81580ec278320a0205f&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${data.wind.speed} m/s`;
    humidity.textContent = `${data.main.humidity}%`;
}

function setCity(e) {
    if(e.code === 'Enter') {
        getWeather();
        city.blur();
    }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

// SET&GET USER NAME AND CITY IN LOCAL STORAGE

const userName = document.querySelector('.name');

function setLocalStorage() {
    localStorage.setItem('name', userName.value);
    localStorage.setItem('city', city.textContent);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        userName.value = localStorage.getItem('name');
    }
    if (localStorage.getItem('city')) {
        city.textContent = localStorage.getItem('city');
    }
}
window.addEventListener('load', getLocalStorage);
// Time and Date
const time = document.querySelector('.time');
const calendar = document.querySelector('.date');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime; 
    setTimeout(showTime, 1000);
    showDate();
}

showTime();

function showDate() {
    const date = new Date();
    const options = {month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('en-EN', options);
    calendar.textContent = currentDate;
}
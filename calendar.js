var savedEvents = {
    
}

function updateCal() {
    console.log("retrieving clicked date");
    console.log(clicked);
    savedEvents[clicked + ' ' + document.getElementById("calendarHeader").innerText + ' workout(s)'].push(document.getElementById('eventTitleInput').value);
    document.getElementById('eventTitleInput').value = ''
    closePopup();
    console.log(savedEvents)
    notemptylists = new Array();
    for (const [k, v] of Object.entries(savedEvents)) {
    if (!Array.isArray(v) || v.length) {
        notemptylists.push(k + ": " + v);
    }
    }
    document.getElementById("scheduledevents").innerText = notemptylists.join("\n");
}

const newEventPopup = document.getElementById('newEventPopup');
const deleteEventPopup = document.getElementById('deleteEventPopup');
const backDrop = document.getElementById('PopupBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');

function openPopup(date) {
clicked = date;
const eventForDay = events.find(e => e.date === clicked);

if (eventForDay) {
    document.getElementById('eventText').innerText = eventForDay.title;
    deleteEventPopup.style.display = 'block';
} else {
    newEventPopup.style.display = 'block';
}

backDrop.style.display = 'block';
}

function closePopup() {
deleteEventPopup.style.display = 'none';
newEventPopup.style.display= 'none';
backDrop.style.display = 'none';
}

let monthNav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');

function renderCalendar() {

const date = new Date();

const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const daysInMonth = new Date(year, month + 1, 0).getDate();
const firstDayOfMonth = new Date(year, month, 1);
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const dateString = firstDayOfMonth.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric', 

});



document.getElementById('calendarHeader').innerText = 
`${date.toLocaleDateString('en-us', { month: 'long' })} ${year}`;


calendar.innerHTML = '';

const prevDays = weekdays.indexOf(dateString.split(', ')[0]);
for(let i = 1; i <= prevDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');

    if (i > prevDays) {
        daySquare.innerText = i - prevDays;
        daySquare.addEventListener('click', () => openPopup(daySquare.innerHTML));
        savedEvents[daySquare.innerHTML + ' ' + document.getElementById("calendarHeader").innerText + ' workout(s)'] = Array();
    } 
    else {
        daySquare.classList.add('padding');
    }
calendar.appendChild(daySquare);
}

} 

function saveEvent(day, input) {

}
renderCalendar();
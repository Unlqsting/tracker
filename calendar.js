var savedEvents = {
    
}

function send_Data(endpoint, method, body) {
    fetch("https://lennsflask.duckdns.org/api/etrack_users/" + endpoint, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => console.log(data)); 
}

function updateCal() {
    console.log(savedEvents);
    closePopup();
    document.getElementById("scheduledevents").innerHTML = '';
    if (document.getElementById('eventTitleInput').value.length > 0) {
        console.log("updating events");
        dateK = clicked + monthAndYear;
        workoutsV = document.getElementById('eventTitleInput').value;
        savedEvents[dateK].push(workoutsV);
        if (dateK in notemptyvalues) {
            send_Data("update", "PATCH", {date: dateK, savedWorkouts: workoutsV});
            console.log("patching");
        }
        else {
            send_Data("create", "POST", {date: dateK, savedWorkouts: workoutsV});
            console.log("posting");
        }
    }
    document.getElementById('eventTitleInput').value = ''
    applySavedData();
    // send_Data();
}

const newEventPopup = document.getElementById('newEventPopup');
const editEventPopup = document.getElementById('editEventPopup');
const backDrop = document.getElementById('PopupBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');

function openPopup(date) {
    clicked = date;
    // const eventForDay = events.find(e => e.date === clicked);
    newEventPopup.style.display = 'block';
// if (eventForDay) {
//     document.getElementById('eventText').innerText = eventForDay.title;
//     editEventPopup.style.display = 'block';
// } else {
//     newEventPopup.style.display = 'block';
// }

    backDrop.style.display = 'block';
}

function closePopup() {
    editEventPopup.style.display = 'none';
    newEventPopup.style.display= 'none';
    backDrop.style.display = 'none';
}

let monthNav = 0;
let clicked = null;
// let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];


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
            daySquare.setAttribute("id", i - prevDays)
            daySquare.addEventListener('click', () => openPopup(daySquare.innerHTML));
            savedEvents[daySquare.innerHTML + ' ' + document.getElementById("calendarHeader").innerText] = Array();
        } 
        else {
            daySquare.classList.add('padding');
        }
    calendar.appendChild(daySquare);
    }

} 

function clearWorkouts() {
    console.log(savedEvents);
    targetDates = [];
    console.log(notemptyvalues);
    for (const k in notemptyvalues) {
        console.log("Pushing " + k)
        targetDates.push(k);
    }
    for(var day in savedEvents) {
        savedEvents[day] = [];
        console.log("cleared " + savedEvents)
    }
    applySavedData();

    console.log(targetDates)
    send_Data("delete", "DELETE", {targetDates: targetDates})
}

fetch('https://lennsflask.duckdns.org/api/etrack_users/')
  .then((response) => response.json())
  .then((data) => this.applydata(data));

function applydata(data) {
    console.log(data);
    for (const row of data) {
        console.log(row);
        console.log(row["date"]);
        savedEvents[row["date"]] = row["savedWorkouts"]
    }
    console.log(savedEvents);
    applySavedData();
}

const scheduledEvents = document.getElementById("scheduledevents");
function applySavedData() {
    notemptyvalues= {};
    for (const [k, v] of Object.entries(savedEvents)) {
        document.getElementById(k.split(" ")[0]).style.color="";
            if (!Array.isArray(v) || v.length) {
            notemptyvalues[k] = v;
            document.getElementById(k.split(" ")[0]).style.color="cyan";
            }
    }
    scheduledEvents.innerHTML = '';
    const workoutTable = document.createElement("table");
    const workoutTableBody = document.createElement("tbody");

    rowIndex = 1
    for (const [k, v] of Object.entries(notemptyvalues)) {
        const row = document.createElement("tr");
        const dateCell = document.createElement("td");
        dateCell.innerText = k;
        const editButton = document.createElement("button");
        editButton.innerText = "Edit Date";
        editButton.classList.add('editButton');
        editButton.addEventListener('click', () => openEditPopup(k.split(" ")[0]));
        dateCell.appendChild(editButton);
        const workoutCell = document.createElement("td");
        workoutCell.innerText = v;
        row.appendChild(dateCell);
        row.appendChild(workoutCell);
        workoutTableBody.appendChild(row)
    }
    workoutTable.appendChild(workoutTableBody);
    scheduledEvents.appendChild(workoutTable);
}

function openEditPopup(day) {
    clickedDate = day;
    editEventPopup.style.display = 'block';
    backDrop.style.display = 'block';
}

function editDate() {
    input = document.getElementById("eventDayInput").value

    console.log("input is " + input);
    console.log("clicked date is " + clickedDate);
    if (input + monthAndYear in savedEvents) {
        savedEvents[input + monthAndYear] = savedEvents[clickedDate + monthAndYear]
        send_Data("create", "POST", {date: input + monthAndYear, savedWorkouts: savedEvents[input + monthAndYear]})
        savedEvents[clickedDate + monthAndYear] = []
        send_Data("delete", "DELETE", {targetDates: [clickedDate + monthAndYear]})
        applySavedData();
        // send_Data();
    }
    console.log(savedEvents);
    document.getElementById("eventDayInput").value = '';
    closePopup();
}
renderCalendar();
let monthAndYear = ' ' + document.getElementById("calendarHeader").innerText
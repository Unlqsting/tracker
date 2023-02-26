<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendar</title>
    <link rel="stylesheet" href="calendar.css">
</head>
<body>
    <div id="container">
      <div id="calendarHeader">
          
      </div> 
      <div id="calendartop">
            
          <div id="month">  
            <!-- <button id="backButton" onclick="buttons()">Prev</button>
            <div id="date">
              <h1></h1>
              <p></p>
            </div>
            <button id="nextButton" onclick="buttons()">Next</button> -->
          </div>
        </div>
        
        
        <div id="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thr</div>
          <div>Fri</div>
          <div>Sat</div>
      </div>

      <div id="calendar"></div>
    </div>

    <div id="newEventPopup">
      <h2>New Workout</h2>

      <input id="eventTitleInput" placeholder="Event Title" />

      <button id="saveButton" onclick="updateCal()">Save</button>
      <button id="cancelButton" onclick="closePopup()">Cancel</button>
    </div>

    <div id="editEventPopup">
      <h2>Edit Day</h2>

      <input id="eventDayInput" placeholder="Target Day" />

      <button id="editButton" onclick="editDate()">Edit</button>
      <button id="cancelButton" onclick="closePopup()">Cancel</button>
    </div>

    <div id="PopupBackDrop"></div>

    <div id="eventcontainer">
      <div id="eventtitle">
        <h1>Scheduled Workouts</h1>
      </div>
      
      <div id="scheduledevents">

      </div>
      <button id="clearButton" onclick="clearWorkouts()">Clear All</button>
    </div>

  </body>
  <script src="calendar.js"></script>
</html>
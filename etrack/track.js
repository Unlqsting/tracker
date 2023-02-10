const addWorkout = document.querySelector(".addWorkout")

const divCont = document.querySelector(".workoutWrap")

const chestButton = document.getElementById("chest")

const exerButton = document.querySelector("dropdown-content")

// exerButton.addEventListener("click", chestbuttonSwitch())

function chestbuttonSwitch(){
    exerButton.innerText = chestButton.innerText
}

workoutPreview = '<div class="dropdown">' +
'<button class="dropbtn">Choose Exercise</button>' +
'<div class="dropdown-content">' +
'<button onclick="chestbuttonSwitch()" id="chest">Chest</button>' +
'<a class="back">Back</a>' +
'<a class="legs">Legs</a>' +
'<a class="legs">Legs</a>' +
'</div>' +
'</div>' +
'<button class="removeWorkout">Remove</button>'

function addNew(){
    const newDiv = document.createElement("div");
    newDiv.classList.add("workouts")
    divCont.appendChild(newDiv);
    newDiv.innerHTML = workoutPreview;
    
    const removeButton = newDiv.querySelector(".removeWorkout");
    removeButton.addEventListener("click", function() {
        newDiv.remove();
    });
}

addWorkout.addEventListener("click", addNew);

const addWorkout = document.querySelector(".addWorkout");
const divCont = document.querySelector(".workoutWrap");

workoutPreview = '<div class="workout">' +
  '<button class="choose-exercise choose-exercise-btn">Choose Exercise</button>' +
  '<div class="exercise-options" style="display: none;">' +
  '<button class="exercise-option chest-btn">Chest</button>' +
  '<button class="exercise-option back-btn">Back</button>' +
  '<button class="exercise-option legs-btn">Legs</button>' +
  '<button class="exercise-option other-btn">Other</button>' +
  '</div>' +
  '<button class="choose-reps choose-reps-btn">Reps</button>' +
  '<div class="rep-options" style="display: none;">' +
  '<button class="rep-option five-btn">5 reps</button>' +
  '<button class="rep-option ten-btn">10 reps</button>' +
  '<button class="rep-option fifteen-btn">15 reps</button>' +
  '</div>' +
  '<button class="choose-sets choose-sets-btn">Sets</button>' +
  '<div class="set-options" style="display: none;">' +
  '<button class="set-option fives-btn">5 Sets</button>' +
  '<button class="set-option tens-btn">10 Sets</button>' +
  '<button class="set-option fifteens-btn">15 Sets</button>' +
  '</div>' +
'</div>' +
'<button class="removeWorkout">Remove</button>';

function addNew(){
    const newDiv = document.createElement("div");
    newDiv.classList.add("workouts");
    divCont.appendChild(newDiv);
    newDiv.innerHTML = workoutPreview;
    
    const removeButton = newDiv.querySelector(".removeWorkout");
    removeButton.addEventListener("click", function() {
        newDiv.remove();
    });

    const chooseExercise = newDiv.querySelector(".choose-exercise");
    chooseExercise.addEventListener("click", function() {
        const exerciseOptions = newDiv.querySelector(".exercise-options");
        if (exerciseOptions.style.display === "none") {
            exerciseOptions.style.display = "block";
        } else {
            exerciseOptions.style.display = "none";
        }
    });

    const chooseReps = newDiv.querySelector(".choose-reps");
    chooseReps.addEventListener("click", function() {
        const repOptions = newDiv.querySelector(".rep-options");
        if (repOptions.style.display === "none") {
            repOptions.style.display = "block";
        } else {
            repOptions.style.display = "none";
        }
    });

    const chooseSets = newDiv.querySelector(".choose-sets");
    chooseSets.addEventListener("click", function() {
        const setOptions = newDiv.querySelector(".set-options");
        if (setOptions.style.display === "none") {
            setOptions.style.display = "block";
        } else {
            setOptions.style.display = "none";
        }
    });

    const chestButton = newDiv.querySelector(".chest-btn");
    chestButton.addEventListener("click", function() {
        chooseExercise.innerText = chestButton.innerText;
        exerciseOptions.style.display = "none";
    });

    const backButton = newDiv.querySelector(".back-btn");
    backButton.addEventListener("click", function() {
        chooseExercise.innerText = backButton.innerText;
        exerciseOptions.style.display = "none";
    });

    const legsButton = newDiv.querySelector(".legs-btn");
    legsButton.addEventListener("click", function() {
        chooseExercise.innerText = legsButton.innerText;
        exerciseOptions.style.display = "none";
    });

    const otherButton = newDiv.querySelector(".other-btn");
    otherButton.addEventListener("click", function() {
        chooseExercise.innerText = otherButton.innerText;
        exerciseOptions.style.display = "none";
    });
    
    const fiveButton = newDiv.querySelector(".five-btn");
    fiveButton.addEventListener("click", function() {
        chooseReps.innerText = fiveButton.innerText;
        repOptions.style.display = "none";
    });

    const tenButton = newDiv.querySelector(".ten-btn");
    tenButton.addEventListener("click", function() {
        chooseReps.innerText = tenButton.innerText;
        repOptions.style.display = "none";
    });

    const fifteenButton = newDiv.querySelector(".fifteen-btn");
    fifteenButton.addEventListener("click", function() {
        chooseReps.innerText = fifteenButton.innerText;
        repOptions.style.display = "none";
    });

    const fivesButton = newDiv.querySelector(".fives-btn");
    fivesButton.addEventListener("click", function() {
        chooseSets.innerText = fivesButton.innerText;
        setOptions.style.display = "none";
    });

    const tensButton = newDiv.querySelector(".tens-btn");
    tensButton.addEventListener("click", function() {
        chooseSets.innerText = tensButton.innerText;
        setOptions.style.display = "none";
    });

    const fifteensButton = newDiv.querySelector(".fifteens-btn");
    fifteensButton.addEventListener("click", function() {
        chooseSets.innerText = fifteensButton.innerText;
        setOptions.style.display = "none";
    });

}

addWorkout.addEventListener("click", addNew);


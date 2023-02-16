const addWorkout = document.querySelector(".addWorkout");
const divCont = document.querySelector(".workoutWrap");

const exerciseOptions = '<div class="exercise-options" style="display: none;">' +
    '<button class="exercise-option chest-btn">Chest</button>' +
    '<button class="exercise-option back-btn">Back</button>' +
    '<button class="exercise-option legs-btn">Legs</button>' +
    '<button class="exercise-option other-btn">Other</button>' +
    '</div>';

const repOptions = '<div class="rep-options" style="display: none;">' +
    '<button class="rep-option five-btn">5 reps</button>' +
    '<button class="rep-option ten-btn">10 reps</button>' +
    '<button class="rep-option fifteen-btn">15 reps</button>' +
    '</div>';

const setOptions = '<div class="set-options" style="display: none;">' +
    '<button class="set-option fives-btn">5 Sets</button>' +
    '<button class="set-option tens-btn">10 Sets</button>' +
    '<button class="set-option fifteens-btn">15 Sets</button>' +
    '</div>';

const workoutPreview = `<div class="workout">
    <button class="choose-exercise choose-exercise-btn">Choose Exercise</button>
    ${exerciseOptions}
    <button class="choose-reps choose-reps-btn">Reps</button>
    ${repOptions}
    <button class="choose-sets choose-sets-btn">Sets</button>
    ${setOptions}
    <button class="removeWorkout">Remove</button>
</div>`;

function addNew() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("workouts");
    divCont.appendChild(newDiv);
    newDiv.innerHTML = workoutPreview;

    newDiv.querySelector(".removeWorkout").addEventListener("click", function() {
        newDiv.remove();
    });

    newDiv.querySelector(".choose-exercise").addEventListener("click", function() {
        newDiv.querySelector(".exercise-options").style.display = toggleDisplay(newDiv.querySelector(".exercise-options").style.display);
    });

    newDiv.querySelector(".choose-reps").addEventListener("click", function() {
        newDiv.querySelector(".rep-options").style.display = toggleDisplay(newDiv.querySelector(".rep-options").style.display);
    });
    
    newDiv.querySelector(".choose-sets").addEventListener("click", function() {
        newDiv.querySelector(".set-options").style.display = toggleDisplay(newDiv.querySelector(".set-options").style.display);
    });

    newDiv.querySelectorAll(".exercise-option").forEach(function(option) {
        option.addEventListener("click", function() {
            newDiv.querySelector(".choose-exercise").innerText = option.innerText;
            newDiv.querySelector(".exercise-options").style.display = "none";

            // Send HTTP POST request to update the workout
            const data = { workout: option.innerText };
            fetch('http://127.0.0.1:8086/api/users/', {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            .then(response => console.log('Workout updated successfully'))
            .catch(error => console.error('Error updating workout', error));
        });
    });
    
    newDiv.querySelectorAll(".rep-option").forEach(function(option) {
        option.addEventListener("click", function() {
            newDiv.querySelector(".choose-rep").innerText = option.innerText;
            newDiv.querySelector(".rep-options").style.display = "none";

            // Send HTTP POST request to update the workout
            const data = { workout: option.innerText };
            fetch('http://127.0.0.1:8086/api/users/', {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            .then(response => console.log('Workout updated successfully'))
            .catch(error => console.error('Error updating workout', error));
        });
    });

    newDiv.querySelectorAll(".set-option").forEach(function(option) {
        option.addEventListener("click", function() {
            newDiv.querySelector(".choose-set").innerText = option.innerText;
            newDiv.querySelector(".set-options").style.display = "none";

            // Send HTTP POST request to update the workout
            const data = { workout: option.innerText };
            fetch('http://127.0.0.1:8086/api/users/', {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            .then(response => console.log('Workout updated successfully'))
            .catch(error => console.error('Error updating workout', error));
        });
    })}
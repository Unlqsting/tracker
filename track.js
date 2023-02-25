// const addWorkout = document.querySelector(".addWorkout");
// const divCont = document.querySelector(".workoutWrap");

// workoutPreview = '<div class="workout">' +
//   '<button class="choose-exercise choose-exercise-btn">Choose Exercise12</button>' +
//   '<div class="exercise-options" style="display: none;">' +
//   '<input id="chestOption" class="exercise-option chest-btn">' +
//   '<input id="exerciseOption" class="exercise-option back-btn">' +
//   '<input id="exerciseOption" class="exercise-option legs-btn">' +
//   '<input id="exerciseOption" class="exercise-option other-btn">' +
//   '</div>' +
//   '<input class="choose-reps choose-reps-btn">' +
//   '<div class="rep-options" style="display: none;">' +
//   '<input class="rep-option five-btn">' +
//   '<input class="rep-option ten-btn">' +
//   '<input class="rep-option fifteen-btn">' +
//   '</div>' +
//   '<input class="choose-sets choose-sets-btn">' +
//   '<div class="set-options" style="display: none;">' +
//   '<input class="set-option fives-btn">' +
//   '<input class="set-option tens-btn">' +
//   '<input class="set-option fifteens-btn" id="">' +
//   '</div>' +
// '</div>' +
// '<button class="removeWorkout">Remove</button>';


// function addNew(){

//     const newDiv = document.createElement("div");
//     newDiv.classList.add("workouts");
//     divCont.appendChild(newDiv);
//     newDiv.innerHTML = workoutPreview;
//     const exerciseOptions = newDiv.querySelector(".exercise-options");   
//     const repOptions = newDiv.querySelector(".rep-options"); 
//     const removeButton = newDiv.querySelector(".removeWorkout");
//     const setOptions = newDiv.querySelector(".set-options");
//     removeButton.addEventListener("click", function() {
//         newDiv.remove();
//     });
//     // POST here empty row

//     const chooseExercise = newDiv.querySelector(".choose-exercise");
//     chooseExercise.addEventListener("click", function() {

//         if (exerciseOptions.style.display === "none") {
//             exerciseOptions.style.display = "block";
//         } else {
//             exerciseOptions.style.display = "none";
//         }
//     });

//     const chooseReps = newDiv.querySelector(".choose-reps");
//     chooseReps.addEventListener("click", function() {
        
//         if (repOptions.style.display === "none") {
//             repOptions.style.display = "block";
//         } else {
//             repOptions.style.display = "none";
//         }
//     });

//     const chooseSets = newDiv.querySelector(".choose-sets");
//     chooseSets.addEventListener("click", function() {
        
//         if (setOptions.style.display === "none") {
//             setOptions.style.display = "block";
//         } else {
//             setOptions.style.display = "none";
//         }
//     });

//     const chestButton = newDiv.querySelector(".chest-btn");
//     chestButton.addEventListener("click", function() {
//         newDiv.querySelector(".choose-exercise-btn").innerText = chestButton.innerText;
//         exerciseOptions.style.display = "none";
//         update();
//     });

//     const backButton = newDiv.querySelector(".back-btn");
//     backButton.addEventListener("click", function() {
//         chooseExercise.innerText = backButton.innerText;
//         exerciseOptions.style.display = "none";
//     });

//     const legsButton = newDiv.querySelector(".legs-btn");
//     legsButton.addEventListener("click", function() {
//         chooseExercise.innerText = legsButton.innerText;
//         exerciseOptions.style.display = "none";
//     });

//     const otherButton = newDiv.querySelector(".other-btn");
//     otherButton.addEventListener("click", function() {
//         chooseExercise.innerText = otherButton.innerText;
//         exerciseOptions.style.display = "none";
//     });
  
//     const fiveButton = newDiv.querySelector(".five-btn");
//     fiveButton.addEventListener("click", function() {
//         chooseReps.innerText = fiveButton.innerText;
//         repOptions.style.display = "none";
//     });

//     const tenButton = newDiv.querySelector(".ten-btn");
//     tenButton.addEventListener("click", function() {
//         chooseReps.innerText = tenButton.innerText;
//         repOptions.style.display = "none";
//     });

//     const fifteenButton = newDiv.querySelector(".fifteen-btn");
//     fifteenButton.addEventListener("click", function() {
//         chooseReps.innerText = fifteenButton.innerText;
//         repOptions.style.display = "none";

//     });

//     const fivesButton = newDiv.querySelector(".fives-btn");
//     fivesButton.addEventListener("click", function() {
//         chooseSets.innerText = fivesButton.innerText;
//         setOptions.style.display = "none";
//     });

//     const tensButton = newDiv.querySelector(".tens-btn");
//     tensButton.addEventListener("click", function() {
//         chooseSets.innerText = tensButton.innerText;
//         setOptions.style.display = "none";
//     });

//     const fifteensButton = newDiv.querySelector(".fifteens-btn");
//     fifteensButton.addEventListener("click", function() {
//         chooseSets.innerText = tensButton.innerText;
//         setOptions.style.display = "none";
//     });

// }

// addWorkout.addEventListener("click", addNew);

// // Define a function that sends a patch request and retrieves options from innertext
// function update() {
//     fetch("http://127.0.0.1/api/user/update", {
//         method: "PATCH",
//         body: JSON.stringify({
//             uname: "testUser",
//             savedWorkouts: {},
//         }),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     })
//         .then(response => response.json())
//         .then(data => console.log(data)); 
// }


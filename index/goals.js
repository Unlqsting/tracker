const addGoal = document.querySelector(".addGoal")

const divCont = document.querySelector(".goalWrap")

const addDiffy = document.querySelector("addDifficulty")

const addDate = document.querySelector("addDate")

function addNew(){
    const newDiv =  document.createElement("div");
    newDiv.classList.add("Goal")
    divCont.appendChild(newDiv);
    newDiv.innerHTML = viewGoal
}

viewGoal = 
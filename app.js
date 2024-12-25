const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Please write something to Add");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Adding cross 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); // Toggle btw checked.
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();  // Removes the list
        saveData();
    }
},false);

// Storing the tasks.
function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
}

// Get Data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
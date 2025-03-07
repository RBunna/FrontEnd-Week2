function displayTasks(task) {
  task.style.display = "block";
}

function hideTasks(task) {
  task.style.display = "none";
}

let tasks = [];

function add() {
  if (task.value === "") {
    alert("Task value must not be empty!");
    return;
  }
  tasks.push(task.value, prior.value);
  const text = document.createElement('p');
  text.textContent = task.value;

  const newTask = document.createElement('div');
  newTask.classList.add('task');
  newTask.style.backgroundColor = (prior.value === 'Low') ? "Gray" : "Red";

  newTask.appendChild(text);
  document.getElementsByClassName('right')[0].appendChild(newTask);
}

function imp() {
  showAll();
  for (let i = 1; i < tasks.length; i += 2) {
    if (tasks[i] === "Low") {
      hideTasks(document.querySelector('div.right').children[(i - 1) / 2]);
    }
  }
}

function low() {
  showAll();
  for (let i = 1; i < tasks.length; i += 2) {
    if (tasks[i] !== 'Low') {
      hideTasks(document.querySelector('div.right').children[(i - 1) / 2]);
    }
  }
}

function showAll() {
  for (let i = 1; i < tasks.length; i += 2) {
    displayTasks(document.querySelector('div.right').children[(i - 1) / 2]);
  }
}
// To-Do List SPA by Igor B.
// https://github.com/bogeta11040

var tasksBtn = document.querySelector('#tasksBtn');
var addBtn = document.querySelector('#addBtn');
var editRmBtn = document.querySelector('#editRmBtn');
var mainView = document.querySelector("#mainView");
var mainBody = document.querySelector('#mainBody');
var addTaskView = document.querySelector("#addTaskView");
var formId = document.querySelector("#formId");
var formTask = document.querySelector("#formTask");
var formName = document.querySelector("#formName");
var formBtn = document.querySelector("#formBtn");
var editView = document.querySelector("#editView");
var editTask = document.querySelector("#editTask");
var eformId = document.querySelector("#eformId");
var eformTask = document.querySelector("#eformTask");
var eformName = document.querySelector("#eformName");
var eformBtn = document.querySelector("#eformBtn");
var id;



tasksBtn.addEventListener('click', showTasks);
addBtn.addEventListener('click', showAdd);
formBtn.addEventListener('click', saveForm);
editRmBtn.addEventListener('click', showEdit);
eformBtn.addEventListener('click', change);


function showAdd() {
  mainView.style.display = "none";
  addTaskView.style.display = "block";
  editView.style.display = "none";
  editTask.style.display = "none";
  // Clean that shit
  formId.value = "";
  formTask.value = "";
  formName.value = "";
}

function showTasks() {
  mainView.style.display = "block";
  addTaskView.style.display = "none";
  editView.style.display = "none";
  editTask.style.display = "none";
}

function showEdit() {
  mainView.style.display = "none";
  addTaskView.style.display = "none";
  editView.style.display = "block";
  editTask.style.display = "none";
  editTable();
}

function saveForm() {
  var newTask = {
    id : formId.value,
    task: formTask.value,
    name: formName.value
  }
  db.push(newTask);
  createTable();
  showTasks();
}

// Example tasks are already added.
var db = [
  {
    id : "1",
    task : "Plan our project",
    name : "Marcus"
  },
  {
    id : "2",
    task : "Deliver code",
    name : "Milena"
  },
  {
    id : "3",
    task : "Clean the code",
    name : "Dan"
  }
];

function createTable() {
  var text = '';
  for (i=0; i < db.length; i++) {
    text += '<tr>';
    text += '<td>'+ db[i].id +'</td>';
    text += '<td>'+ db[i].task +'</td>';
    text += '<td>'+ db[i].name +'</td>';
    text += '</tr>';
  }
  mainBody.innerHTML = text;
}

function editTable() {
  var text = '';
  for (n=0; n < db.length; n++) {
    text += '<tr>';
    text += '<td>'+ db[n].id +'</td>';
    text += '<td>'+ db[n].task +'</td>';
    text += '<td>'+ db[n].name +'</td>';
    text += '<td><button data-id="'+n+'" class="btn btn-warning edit">Edit</button></td>';
    text += '<td><button id="'+n+'" class="btn btn-info done">Done!</button></td>';
    text += '</tr>';
  }
  editBody.innerHTML = text;
  var doneBtn = document.querySelectorAll(".done");
  var editBtn = document.querySelectorAll(".edit");
  for (k=0; k < doneBtn.length; k++) {
  doneBtn[k].addEventListener('click',done);
  editBtn[k].addEventListener('click',edit);
}
}

function edit() {
  mainView.style.display = "none";
  addTaskView.style.display = "none";
  editView.style.display = "none";
  editTask.style.display = "block";
  id = this.getAttribute('data-id');
  eformId.value = db[id].id;
  eformTask.value = db[id].task;
  eformName.value = db[id].name;
}

function change() {
  var formId = eformId.value;
  var formTask = eformTask.value;
  var formName = eformName.value;

  db[id] = {
    id : formId,
    task: formTask,
    name: formName
  };

  createTable();
  showTasks();
}

function done() {
  var id = this.id;
  db.splice(id,1);
  createTable();
  showTasks();
}

createTable();

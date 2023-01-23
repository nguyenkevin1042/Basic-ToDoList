const toDoInput = document.querySelector("#todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector("#todo-list");

toDoButton.addEventListener("click", addNewTask);


// ADD A NEW TASK
function addNewTask(event){
	event.preventDefault();
	buildNewTaskHtml(toDoInput.value);
	saveToJson(toDoInput.value);
	toDoInput.placeholder = "Input your new task here...";
}

function buildNewTaskHtml(toDoInputValue){
	const toDoItem = document.createElement("li");
	toDoItem.classList.add("todo-item");

	const toDoText = document.createElement("p");
	toDoText.classList.add("todo-text");
	toDoText.innerText = toDoInputValue;
	toDoItem.appendChild(toDoText);

	const completeBtn = document.createElement("button");
	completeBtn.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
	completeBtn.classList.add('completeBtn');
	completeBtn.addEventListener("click",completeTask);
	toDoItem.appendChild(completeBtn);

	const trashBtn = document.createElement("button");
	trashBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
	trashBtn.classList.add('trashBtn')
	trashBtn.addEventListener("click",deleteTask);
	toDoItem.appendChild(trashBtn);

	toDoList.appendChild(toDoItem);
}

//COMPLETED A TASK
function completeTask(e){
	const item = e.target;
	const todo = item.parentElement.parentElement;
	todo.classList.toggle("completed");
	console.log(todo);
}

// DELETE A TASK
function deleteTask(e){
	const item = e.target;
	const todo = item.parentElement.parentElement;
	console.log(item);
	console.log(todo);
	todo.remove();
}

// SAVE NEW TASK TO JSON
function saveToJson(toDoInputValue){
	var data = {
		"task" : toDoInputValue,
		"status" : "incomplete"};

	console.log(JSON.stringify(data));

	//#Source https://bit.ly/2neWfJ2 
const fs = require('fs');
const JSONToFile = (data, filename) =>
  fs.writeFile(`file.json`, JSON.stringify(obj, null, 2));
JSONToFile({ test: 'is passed' }, 'testJsonFile'); // writes the object to 'testJsonFile.json'

}
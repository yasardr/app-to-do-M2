

// Get the id of the containing element.
var listContainer = document.getElementById('contenedorLista');

// Creation of the base elements
var appTitle = document.createElement('h1');
var form = document.createElement('form');
var textInput = document.createElement('input');
var addTaskButton = document.createElement('button');
addTaskButton.innerHTML = '<i class="fas fa-plus-square"></i>';
var taskContainer = document.createElement('section');
var taskListDiv =  document.createElement('div');
var list = document.createElement('ol');

// add properties of each of the elements created
appTitle.className = 'title';
form.classList='todo-form';
textInput.type = 'text';
textInput.id = 'text';
textInput.classList = 'todo_input';
addTaskButton.type ='submit'
addTaskButton.classList = 'todo_button'
taskContainer.className = 'container';
taskListDiv.id = 'currentTask';
taskListDiv.classList = 'todo_list'
list.id = 'list';

console.log(listContainer);


// Adding Elements to Structure
listContainer.appendChild(appTitle);
appTitle.appendChild(document.createTextNode('To Do List'));
listContainer.appendChild(form);
form.appendChild(textInput);
form.appendChild(addTaskButton);
listContainer.appendChild(taskContainer);
taskContainer.appendChild(taskListDiv);
taskListDiv.appendChild(list);

// selectores
const todoInput = document.querySelector ('.todo_input');
const todoButton = document.querySelector ('.todo_button');
const todoList = document.querySelector ('.todo_list');

let tasks = []; // new Array

//event listeners
todoButton.addEventListener('click', function(event){
    
    event.preventDefault();

    const input = document.getElementById('text').value;
    
    if (input != "") {

        let task = {
          id: new Date().getTime(),
          name: input,
        };
        tasks.push(task);
        addTask(task);
        todoInput.value = "";
    }
    else{
        return null
    }
});

todoList.addEventListener("click", deleteAndCheck)


//Functions

function addTask(task){

    const todoList = document.getElementById("list");
   
    // to do li
    const listTask = document.createElement('li');
    listTask.className = 'todo-list';
    listTask.setAttribute('id',task.id);

    const createDiv = document.createElement('div');
    createDiv.classList = "check";

    listTask.appendChild(createDiv);

    //Name Task
    var taskName = document.createElement('span');
    var name = document.createTextNode(task.name);
    taskName.appendChild(name);
    createDiv.appendChild(taskName);

    //check mark BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList = 'complete_btn';
    listTask.appendChild(completedButton);

     //delete BUTTON
    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = '<i class="far fa-trash-alt"></i>';
    buttonDelete.classList ='delete_btn';
    listTask.appendChild(buttonDelete);

     //Append to Actual LIST
    todoList.appendChild(listTask);
}

function deleteAndCheck(event) {
    const item = event.target;
    
    //DELETE ITEM
   if (item.classList.contains("delete_btn"))
   {
       const taskId = item.closest("li").id;
       document.getElementById(taskId).remove();
   }

   //COMPLETE ITEM
   if (item.classList.contains("complete_btn")) 
   {
       const taskCheck = item.parentElement;
       taskCheck.classList.toggle("completedItem");
   }
}
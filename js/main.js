

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
textInput.type = 'text';
textInput.id = 'text';
textInput.className = 'todo_input';
addTaskButton.type ='submit'
addTaskButton.className = 'todo_button'
taskContainer.className = 'containerTask';
taskListDiv.className = 'todo_list'
list.id = 'list';

console.log(listContainer);

// Adding Elements to Structure
listContainer.appendChild(appTitle);
appTitle.appendChild(document.createTextNode('To Do App'));
listContainer.appendChild(form);
form.appendChild(textInput);
form.appendChild(addTaskButton);
listContainer.appendChild(taskContainer);
taskContainer.appendChild(taskListDiv);
taskListDiv.appendChild(list);

// List of tasks
let tasks = [];

// Create task
addTaskButton.addEventListener('click', function(event){
    
    event.preventDefault();
    
    if (textInput.value !== "") {

        let task = {
          id: new Date().getTime(),
          name: textInput.value,
        };
        tasks.push(task);
        addTask(task);
        textInput.value = "";
    }
    else{
        return null
    }
});

// Append task to html
function addTask(task){

    // Element of the list
    const listTask = document.createElement('li');
    listTask.className = 'todo-list';
    listTask.setAttribute('id',task.id);

    const createDiv = document.createElement('div');
    createDiv.className = "check";

    listTask.appendChild(createDiv);

    // Name Task
    var taskName = document.createElement('span');
    taskName.appendChild(document.createTextNode(task.name));
    createDiv.appendChild(taskName);

    // Complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.className = 'complete_btn';
    listTask.appendChild(completedButton);

     // Delete button
    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = '<i class="far fa-trash-alt"></i>';
    buttonDelete.className ='delete_btn';
    listTask.appendChild(buttonDelete);

    // Append to actual list
    list.appendChild(listTask);
}

taskListDiv.addEventListener("click", deleteAndCheck);

taskListDiv.parentNode

// Analyze if delete or check task
function deleteAndCheck(event) {
    const item = event.target;
    
    // Delete item
   if (item.className === "delete_btn" || item.parentNode.className === "delete_btn" ) {
        const taskId = item.closest("li").id;
        document.getElementById(taskId).remove();
   } else {
        // Complete item
        if (item.className === "complete_btn") {
            item.previousSibling.classList.toggle("completedItem");
            changeIcon(item);
        } else {
            if (item.parentNode.className === "complete_btn") {
                item.parentNode.previousSibling.classList.toggle("completedItem");
                changeIcon(item.parentNode);
            }
        }
   }
}

function changeIcon(item) {
    if (item.children[0].classList[1] === 'fa-check') {
        item.children[0].classList.remove('fa-check');
        item.children[0].classList.add('fa-undo-alt');
        item.style = 'background-color: #0091ea;';
    } else {
        item.children[0].classList.remove('fa-undo-alt');
        item.children[0].classList.add('fa-check');
        item.style = 'background-color: #43a047;';
    }
}
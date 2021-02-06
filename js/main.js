

// Get the id of the containing element.
var listContainer = document.getElementById('contenedorLista');

// Creation of the base elements
var appTitle = document.createElement('h1');
var form = document.createElement('form');
var textInput = document.createElement('input');
var addTaskButton = document.createElement('button');
var taskContainer = document.createElement('section');
var headerTaskListDiv =  document.createElement('div');
var list = document.createElement('ol');

// add properties of each of the elements created
appTitle.className = 'title';
form.classList='todo-form';
textInput.type = 'text';
textInput.id = 'text';
addTaskButton.type ='submit'
taskContainer.className = 'container';
headerTaskListDiv.id = 'currentTask';
list.id = 'ol-list';

//console.log(listContainer);


// Adding Elements to Structure
listContainer.appendChild(appTitle);
appTitle.appendChild(document.createTextNode('To Do List'));
listContainer.appendChild(form);
form.appendChild(textInput);
form.appendChild(addTaskButton);
addTaskButton.appendChild(document.createTextNode('Add Task'));
listContainer.appendChild(taskContainer);
taskContainer.appendChild(headerTaskListDiv);
headerTaskListDiv.appendChild(list);



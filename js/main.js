// Asignación de elemento contenedor.
var listContainer = document.getElementById('contenedorLista');

// Creacion de las Variables de los Elementos
var appTitle = document.createElement('h1');
var addTaskButton = document.createElement('button');
var taskContainer = document.createElement('section');
var taskName = document.createElement('h3');
var deleteField = document.createElement('p');
var textInput = document.createElement('input');
var headerTaskListDiv =  document.createElement('div');

// Adding Propierties to Input
textInput.type = 'text';
textInput.name = 'taskNameField';

// Adding Container Styles
listContainer.style.backgroundColor = 'black';
listContainer.style.padding = '20px';
listContainer.style.textAlign = 'center';

taskContainer.style.backgroundColor = 'white';
taskContainer.style.padding = '20px';
taskContainer.style.marginTop = '20px';
taskContainer.style.textAlign = 'left';

// Adding Text Style


// Adding Inner Text and Styles

appTitle.style.color = 'white';
taskName.color = 'black';

addTaskButton.innerText = 'Add Task';
deleteField.innerText = 'Delete'
taskName.innerText = 'Task:';



//
taskContainer.className = 'container';
headerTaskListDiv.className = 'row';
taskName.className = 'col-sm';
deleteField.className = 'col-sm';

// Agregar el texto al h1.
appTitle.innerText = 'To Do List'

// Adding Elements to Structure

listContainer.appendChild(appTitle);
listContainer.appendChild(textInput);
listContainer.appendChild(addTaskButton);
listContainer.appendChild(taskContainer);
taskContainer.appendChild(headerTaskListDiv);
headerTaskListDiv.appendChild(taskName);
headerTaskListDiv.appendChild(deleteField);


function addTask(inputText){

    var taskDiv = document.createElement('div');
    var taskText = document.createElement('p');
    var taskDelete = document.createElement('button');

    taskDiv.className = 'row';
    taskText.className = 'col-sm';
    taskDelete.className = 'col-sm';

    taskDelete.addEventListener('click', () => {
        // Agregar funcion de boton
    });

    taskText.innerText = inputText;
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(taskDelete);

    taskContainer.appendChild(taskDiv);

    textInput.value = '';
}

addTaskButton.addEventListener('click', () => {
    addTask(textInput.value);
});
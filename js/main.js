

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


//The form class is obtained to be able to make the functionality of its child nodes
var todoForm = document.querySelector(".todo-form");
let tasks = []; //newArray

/**Evento listener para el contenedor form.
 * está función  obtiene el valor de campo de entrada y verifica si el campo de entrada no está vacío,
 * crea un objeto llamado "task" con 3 propiedades
 * id: valor único
 * name: nombre de la tarea
 * isComplete : valor booleano (esté esta pensado para el checkbox si se completa la tarea).
 * Se agrega la tarea en el arreglo llamado "tasks"
 * Se llama la función addTask
 * se resetea el form.
*/
todoForm.addEventListener('submit', function(event){
    event.preventDefault();
    var input = document.getElementById('text').value;
    
    if (input != "") {
        let task = {
          id: new Date().getTime(),
          name: input,
          isCompleted: false
        };
        tasks.push(task);
        addTask(task);
        todoForm.reset();
    }
});


/**Función que agrega las tareas en forma de lista creando li y agregando 
 * como atributo el id de la tarea, con los elementos checkbox,span,button.
*/
function addTask(task){
    var todoList = document.getElementById("ol-list");
   
    var listTask = document.createElement('li');
    listTask.className = 'containerChild';
    listTask.setAttribute('id',task.id);

    var createDiv = document.createElement('div');
    createDiv.classList = "check-boxes";

    listTask.append(createDiv);

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = task.name;
    checkbox.className = 'check';

    createDiv.append(checkbox);

    var taskTitle = document.createElement('span');
    var textTitle = document.createTextNode(task.name);

    taskTitle.append(textTitle);
    createDiv.append(taskTitle);


    var buttonDelete = document.createElement("button");
    var textButton = document.createTextNode("Delete");
    buttonDelete.classList ='remove-task';
    buttonDelete.append(textButton);
    listTask.append(buttonDelete);

    todoList.append(listTask);
}

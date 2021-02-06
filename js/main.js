// Asignación de elemento contenedor.
var listContainer = document.getElementById('contenedorLista');

// Crear título con etiqueta h1 y su texto.
var appTitle = document.createElement('h1');
var titleName = document.createTextNode('To Do List');

var textInputTask = document.create

// Agregar estilos
// ------------------------------------------------

// Contenedor
listContainer.style.backgroundColor = 'black';
listContainer.style.padding = '20px';
listContainer.style.textAlign = 'center';

// Título
appTitle.style.color = 'white';

// ------------------------------------------------

// Agregar el texto al h1.
appTitle.appendChild(titleName);

// Agregar el título al contenedor.
listContainer.appendChild(appTitle);


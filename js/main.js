// Asignación de elemento contenedor.
var contenedorLista = document.getElementById('contenedorLista');

// Crear título con etiqueta h1 y su texto.
var tituloLista = document.createElement('h1');
var textoTitulo = document.createTextNode('To Do List');

// Agregar estilos
// ------------------------------------------------

// Contenedor
contenedorLista.style.backgroundColor = 'black';
contenedorLista.style.padding = '20px';
contenedorLista.style.textAlign = 'center';

// Título
tituloLista.style.color = 'white';

// ------------------------------------------------

// Agregar el texto al h1.
tituloLista.appendChild(textoTitulo);

// Agregar el título al contenedor.
contenedorLista.appendChild(tituloLista);
var url = "https://jsonplaceholder.typicode.com/photos";

var peticion = new XMLHttpRequest();

peticion.open('GET', url, true);
peticion.send();

peticion.addEventListener('load', cargarArchivo);

function cargarArchivo(event) {

    var texto = event.target.responseText;
    const ListaPost = JSON.parse(texto);
    console.log(ListaPost)



}
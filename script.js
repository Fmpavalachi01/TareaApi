//----------------------------------------------ENLACES-----------------------------------------------------------

let url="https://rickandmortyapi.com/api/character";

//----------------------------------------------CONSTANTES--------------------------------------------------------

const selectPersonaje = document.getElementById('seleccionador');
const formulario = document.getElementById("formularioBusqueda");
const contenedorCarta =document.getElementById("contenedor")

//----------------------------------------------FUNCIONES---------------------------------------------------------

fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => crearCarta(data.results))

function crearCarta(charactersArray){
	const contenedorCarta =document.getElementById("contenedor")
	console.log(charactersArray)
	charactersArray.forEach(character => {
		contenedorCarta.innerHTML = contenedorCarta.innerHTML + 
		`<div id="cartaPersonaje-${character.id}">
		<h2 class="nombrePersonaje">${character.name}</h2>
		<img class="imgPersonaje" src=${character.image}></img>
		</div>`
	})
}





function filtrarPorNombre(palabra){

	obtenerJSON(url + palabra).then(json => { 
		console.log(json);
		crearCarta(json);
	});
}


formulario.addEventListener("submit", (event) => {
	event.preventDefault(); 
	const palabra = buscador.value;
	if(palabra){
		filtrarPorNombre(palabra);
		palabra.value = "";
	}
});


obtenerJSON("https://rickandmortyapi.com/api/character").then(json => { 
	
	for(var i=0; i<json.results.length; i++){

		var valor = json.results[i].name;
		var opcion = document.createElement('option');
		opcion.appendChild( document.createTextNode(valor) );
		opcion.value = valor;
		selectPersonaje.appendChild(opcion);
        console.log(json.results[i].name)
	}

	filtrarPorPersonaje();

});
function filtrarPorPersonaje(){

	var personaje = selectPersonaje.value;

	obtenerJSON(url + personaje).then(json => { 
		console.log(json);
		crearCarta(json);
	});
}





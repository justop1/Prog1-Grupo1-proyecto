let qs = location.search;
let qsObj = new URLSearchParams(qs);


const id = qsObj.get('id');
console.log(id);

const nombreCategoriaElemento = document.querySelector (".nombreCategoria");
const contenedorRecetas = document.querySelector(".contenedorRecetas");
const urlBase = "https://dummyjson.com/recipes/";


if (id){

    const url = `${urlBase}${id}`;
    console.log(url);

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {            
           let contenido = `
              <div class="recipe">
                    <h2 class="nombreCategoria"> ${data.cuisine}</h2>
                    <img src="${data.image}" alt="${data.name}" class="imagenCategory">
                    <h2 class="tituloCategoria">${data.name}</h2>
                    <p>Dificultad: ${data.difficulty}</p>
              </div> `;
            contenedorRecetas.innerHTML = contenido;
        });
}



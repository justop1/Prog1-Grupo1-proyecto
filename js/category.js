let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idCategoria = qsObj.get("categoria");
console.log(idCategoria); 


const nombreCategoriaElemento = document.querySelector (".nombreCategoria");
const contenedorRecetas = document.querySelector(".contenedorRecetas");
const url = `https://dummyjson.com/recipes/tag/${idCategoria}`;


function cargarRecetas(url) {
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        nombreCategoriaElemento.innerHTML = `Categoria seleccionada: ${idCategoria}`

        let contenido = "";
        for (let i = 0; i < data.recipes.length; i++) {
            console.log(data.recipes[i]);
            contenido += `<article class="articuloHome" >
                <img class="imagenHome" src="${data.recipes[i].image}" alt="">
                <h3 class="tituloReceta" >${data.recipes[i].name}</h3>
                <p class="textoReceta">Dificultad: ${data.recipes[i].difficulty}</p>
                <a href="receta.html?id=${data.recipes[i].id}" id="verDetalle">Ver Detalle</a>
            </article>`;
        }
        contenedorRecetas.innerHTML = contenido;
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });
}

cargarRecetas(url);
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let buscador = qsObj.get("buscador");
let listaRecetas = document.querySelector(".listaRecetas");


const url = `https://dummyjson.com/recipes/search?q=${buscador}`;
function cargarRecetas(url) {


    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {


            if (data.recipes.length==0) {
                alert("No se encontro ninguna receta")
            }


            console.log(data.recipes);


            let contenido = "";


            for (let i = 0; i < data.recipes.length; i++) {
                console.log(data.recipes[i]);
                contenido += `<article class="articuloHome" >
                    <img class="imagenHome" src="${data.recipes[i].image}" alt="">
                    <h3 class="tituloReceta" >${data.recipes[i].name}</h3>
                    <a href="receta.html?id=${data.recipes[i].id}" id="verDetalle">Ver Detalle</a>
                </article>`;
            }


            listaRecetas.innerHTML += contenido;
        })
        .catch(function (error) {
            console.log("El error es: " + error);
        });
}


cargarRecetas (url);

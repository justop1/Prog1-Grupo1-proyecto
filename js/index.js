
let buscador = document.querySelector(".buscador");
let formBuscador = document.querySelector(".formBuscador");

formBuscador.addEventListener("submit", function () {
    if (buscador.value == "") {
        alert("El campo no puede estar vacío.");
    }else if(buscador.value.length < 3) {
        alert("El término buscado debe tener al menos 3 caracteres.");
    }else{
        this.submit()
    }
});


const listaRecetas = document.querySelector(".listaRecetas");
const cargarMas = document.querySelector(".cargarMas");
let offset = 0;

function cargarRecetas() {
    const url = `https://dummyjson.com/recipes?skip=${offset}&limit=10`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.recipes);
            let contenido = "";

            for (let i = 0; i < data.recipes.length; i++) {
                console.log(data.recipes[i]);
                contenido += `<article class="articuloHome" >
                    <img class="imagenHome" src="${data.recipes[i].image}" alt="">
                    <h3>${data.recipes[i].name}</h3>
                    <p>Nivel de Dificultad: ${data.recipes[i].difficulty}</p>
                    <a href="receta.html?id=${data.recipes[i].id}">Ver Detalle</a>
                </article>`;
            }

            listaRecetas.innerHTML += contenido; 
            offset += 10;
        })
        .catch(function (error) {
            console.log("El error es: " + error);
        });
}

cargarMas.addEventListener("click", cargarRecetas);

cargarRecetas();

let boton = document.querySelector('button');
const listaRecetas = document.querySelector(".listaRecetas");
const cargarMas = document.querySelector(".cargarMas");
let numRecetas = 0;
const enlace = document.getElementById('verDetalle');



function cargarRecetas() {
    const url = `https://dummyjson.com/recipes?skip=${numRecetas}&limit=10`;

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
                    <h3 class="tituloReceta" >${data.recipes[i].name}</h3>
                    <p class="textoReceta" >Nivel de Dificultad: ${data.recipes[i].difficulty}</p>
                    <a href="receta.html?id=${data.recipes[i].id}" id="verDetalle">Ver Detalle</a>
                </article>`;
            }

            listaRecetas.innerHTML += contenido;
            numRecetas += 10;
        })
        .catch(function (error) {
            console.log("El error es: " + error);
        });
}

cargarMas.addEventListener("click", cargarRecetas);
cargarRecetas();


boton.addEventListener('mouseover', function () {
    this.style.color = '#ffffff';
});
boton.addEventListener("mouseout", function () {
    this.style.color = "#000000";
});

enlace.addEventListener('mouseover', function () {
    this.style.color = '#ffffff';
});
enlace.addEventListener("mouseout", function () {
    this.style.color = '#000000';
});

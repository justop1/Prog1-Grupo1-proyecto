const listaTags = document.querySelector(".listaTags");
const cargarMas = document.querySelector(".cargarMas");
let numTags = 0;
let boton = document.querySelector('button');


function cargarEtiquetas() {
 const url = "https://dummyjson.com/recipes/tags";


 fetch(url)
   .then(function (response) {
     return response.json();
   })
   .then(function (tags) {
     mostrarEtiquetas(tags);
   })
   .catch(function (error) {
     console.log("El error es: " + error);
   });
}


function mostrarEtiquetas(tags) {
 let contenido = "";


 for (let i = numTags; i < numTags + 10 && i < tags.length; i++) {
   contenido += `<section class="sectionCategories">
   <article class="articleCategories"> <a href="./index.html">${tags[i]}</a></article>
</section>`;
 }


 listaTags.innerHTML += contenido;
 numTags += 10;
}


cargarMas.addEventListener("click", function () {
 const url = "https://dummyjson.com/recipes/tags";


 fetch(url)
   .then(function (response) {
     return response.json();
   })
   .then(function (tags) {
     mostrarEtiquetas(tags);
   });
});


cargarEtiquetas();




boton.addEventListener('mouseover', function () {
   this.style.color = '#ffffff';
});
boton.addEventListener("mouseout", function () {
   this.style.color = "#000000";
});


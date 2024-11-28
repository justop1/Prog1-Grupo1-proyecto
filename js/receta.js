const recetaDetalle = document.querySelector(".detalleReceta");
const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");




if (recipeId) {
    const url = `https://dummyjson.com/recipes/${recipeId}`;




    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            recetaDetalle.innerHTML = `
              <article class="receta1">
                  
                  <div class="infoR">
                  <h2>${data.name}</h2>
                  <p><strong>Instrucciones:</strong> ${data.instructions}</p>
                  <p><strong>Tiempo de cocción:</strong> ${data.cookTimeMinutes} minutos</p>
                  <p><strong>Categorías:</strong></p>
                 
                   ${function () {
                    let categoriasHTML = "";
                    for (let i = 0; i < data.tags.length; i++) {
                        categoriasHTML += `<a class="nombreCategorias" href="category.html?categoria=${data.tags[i]}">${data.tags[i]}</a> `;
                    }
                    return categoriasHTML;
                }()}
                 </div>
                
                  <div class="imagenR">
                  <img class="imgReceta" src="${data.image}" alt="">
                  </div>


              </article>`;
        })
        .catch(function (error) {
            console.error("Error al cargar la receta:", error);
            recetaDetalle.innerHTML = `<p>Error al cargar la receta. Intenta nuevamente más tarde.</p>`;
        });
} else {
    recetaDetalle.innerHTML = `<p>No se encontró el ID de la receta en la URL.</p>`;
}
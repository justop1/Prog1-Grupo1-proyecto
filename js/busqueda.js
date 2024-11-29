let buscador1 = document.querySelector(".buscador");
let formBuscador = document.querySelector(".formBuscador");


formBuscador.addEventListener("submit", function (e) {
   e.preventDefault();
    if (buscador1.value == "") {
        alert("El campo no puede estar vacío.");
    } else if (buscador1.value.length < 3) {
        alert("El término buscado debe tener al menos 3 caracteres.");
    } else {
        this.submit()
    }
});

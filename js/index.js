
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


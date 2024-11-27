let email = document.querySelector("#email");
let formLogin = document.querySelector(".formLogin");
let clave = document.querySelector("#contrasennia");
let boton = document.querySelector('button');

formLogin.addEventListener("submit", function (event) {
  
    if (email.value == "") {
        event.preventDefault();
        alert("Por favor complete el campo email");
    }
    else if (clave.value == "") {
        event.preventDefault();
        alert("Por favor complete el campo contraseña");
    }
   
});


boton.addEventListener('mouseover', function () {
    this.style.color = '#ffffff';
});
boton.addEventListener("mouseout", function () {
    this.style.color = "#000000";
});

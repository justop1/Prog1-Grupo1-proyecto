let email = document.querySelector("#email");
let formLogin = document.querySelector(".formLogin");
let clave = document.querySelector("#contrasennia");

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


let boton = document.querySelector('button');
let email = document.querySelector("#email");
let formLogin = document.querySelector(".formLogin");
let clave = document.querySelector("#contrasennia");
let obligatorio = document.querySelector(".obligatorio")
let obligatorio2 = document.querySelector(".obligatorio2")

boton.addEventListener('mouseover', function () {
    this.style.color = '#ffffff';
});
boton.addEventListener("mouseout", function () {
    this.style.color = "#000000";
});

formLogin.addEventListener("submit", function (event) {
  
    if (email.value == "") {
        event.preventDefault();
        obligatorio.innerText = "Por favor complete el campo"
    }
    else if (clave.value == "") {
        event.preventDefault();
        obligatorio2.innerText = "Por favor complete el campo"
    }
   
});
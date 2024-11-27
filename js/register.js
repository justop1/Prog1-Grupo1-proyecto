let boton = document.querySelector('button');

boton.addEventListener('mouseover', function () {
    this.style.color = '#ffffff';
});
boton.addEventListener("mouseout", function () {
    this.style.color = "#000000";
});
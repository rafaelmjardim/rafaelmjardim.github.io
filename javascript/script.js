var alerta = document.getElementById('alerta')
var alerta2 = document.getElementById('alerta2')
alerta.addEventListener('click', clicar)
alerta2.addEventListener('click', clicar)

function clicar() {
    alert("Em desenvolvimento!")
}

function navOpen() {
    var navOpen = document.getElementById('nav-mobile');
    navOpen.style.width = '100%';
}

function navClose() {
    var navClose = document.getElementById('nav-mobile');
    navClose.style.width = '0';
}
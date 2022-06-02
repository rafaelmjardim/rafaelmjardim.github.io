var alerta = document.getElementById('alerta')
alerta.addEventListener('click', clicar)

function clicar() {
    alert("Em desenvolvimento!")
}

function navOpen() {
    var navOpen = document.getElementById('nav-mobile');
    var scrollBlock = document.getElementsByTagName('html')[0];
    
    navOpen.style.width = '92%';

    scrollBlock.style.overflowY = 'hidden';
}

function navClose() {
    var navClose = document.getElementById('nav-mobile');
    var scrollUnblock = document.getElementsByTagName('html')[0];
    
    navClose.style.width = '0';

    scrollUnblock.style.overflowY = 'auto';
}
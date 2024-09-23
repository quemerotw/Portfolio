var menuLinks = document.getElementsByClassName("menu-links");
var contenidoMenu = document.getElementsByClassName("contenido-menu");
var tit = document.getElementById("tit");
var hea = document.getElementById("hea");

function opentab(nombreMenu) {
    for (menu of menuLinks) {
        menu.classList.remove("activeL");
    }
    for (contenido of contenidoMenu) {
        contenido.classList.remove("activeC");
    }
    event.currentTarget.classList.add("activeL");
    document.getElementById(nombreMenu).classList.add("activeC");
}

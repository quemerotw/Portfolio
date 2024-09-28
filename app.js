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


let themes = [];
let currentThemeIndex = 0;

const boton = document.getElementById("boton-style");
boton.addEventListener("click", () => {

  themes.forEach(theme => document.documentElement.classList.remove(theme));

  currentThemeIndex = (currentThemeIndex + 1) % themes.length;

  document.documentElement.classList.add(themes[currentThemeIndex]);
});




function loaded(){
    var box = document.createElement('div');
    box.className = 'box';
    box.style.width = '4000px';
    box.style.height = '4000px';
    box.style.zIndex = '1000';
    box.style.background = 'white';
    box.style.position = 'fixed';
    box.style.mixBlendMode = 'difference'; // Set mix-blend-mode to multiply
    box.style.top = '-1500px';
    box.style.left = '60%';
    box.style.transformOrigin = 'left';
    box.style.boxShadow = '10px 10px 50px 50px';
    document.body.appendChild(box);
    box.style.transform = 'translateX(-50%) rotate(360deg)'; // Rotate the box 360 degrees
    setTimeout(function(){

        document.body.removeChild(box);

    }, 5500);

    console.log("ex");

    console.log("ex");

}

var sideMenu = document.getElementById("side-menu");

function openMenu(){
    sideMenu.style.right="0";
}

function closeMenu() {
    sideMenu.style.right="-200px";
}
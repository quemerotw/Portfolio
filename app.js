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
  // Remove all themes
  themes.forEach(theme => document.documentElement.classList.remove(theme));

  // Move to the next theme
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;

  // Add the new theme
  document.documentElement.classList.add(themes[currentThemeIndex]);
});

function loaded(){
    console.log("te amo mucho mi vida ya vamos");
}
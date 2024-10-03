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
    var boxes = [document.createElement('div'),document.createElement('div')];
    boxes.forEach(box => {
        box.className = 'box';
        box.style.width = '4000px';
        box.style.height = '4000px';
        box.style.zIndex = '500';
        box.style.background = 'white';
        box.style.position = 'fixed';
        box.style.mixBlendMode = 'difference';
        box.style.top = '-1500px';
        box.style.left = '50%';
        box.style.transformOrigin = 'left';
        box.style.boxShadow = '0px 0px 0px 0px';
        document.body.appendChild(box);
    });
    boxes[0].style.animation = 'rotate 5s ease forwards';
    boxes[1].style.animation = 'rotate2 5s ease forwards';
    
    setTimeout(function(){
        boxes[0].style.rotate = '150deg';
        boxes[1].style.rotate = '-330deg';
        boxes[0].style.animation = 'tra 2s ease-out forwards';
        boxes[1].style.animation = 'tra2 2s ease-out forwards';
    }, 5500);
    
    setTimeout(function(){
        document.body.removeChild(boxes[0]);
        document.body.removeChild(boxes[1]);
    }, 7500);
    

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
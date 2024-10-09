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
        box.style.width = '100vw';
        box.style.height = '100vh';
        box.style.zIndex = '500';
        box.style.background = 'white';
        box.style.position = 'fixed';
        box.style.mixBlendMode = 'difference';
        box.style.top = '-50%';
        box.style.boxShadow = '0px 0px 20px 20px';
        if (screen.width < 600) {
            box.style.width = '200vh';
            box.style.height = '60vw';
            box.style.top='-20vh';
        }
        document.body.appendChild(box);
    });
    boxes[0].style.left = '-20px';
    boxes[1].style.right = '-20px';
    boxes[0].style.transformOrigin = 'left ';
    boxes[1].style.transformOrigin = 'right ';
    boxes[0].style.animation = 'rotate 2s ease forwards';
    boxes[1].style.animation = 'rotate2 2s ease forwards';
    if (screen.width < 600) {
        document.body.removeChild(boxes[0]);
        setTimeout(function(){
            boxes[1].style.rotate = '-70deg';
            boxes[1].style.animation = 'tra2 2s ease forwards';
        }, 2500);
    }

    else{
        setTimeout(function(){
            boxes[0].style.rotate = '80deg';
            boxes[1].style.rotate = '-80deg';
            boxes[0].style.animation = 'tra 2s ease-in forwards';
            boxes[1].style.animation = 'tra2 2s ease-in forwards';
        }, 2500);
    }
    
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
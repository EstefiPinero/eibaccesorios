
let navMenu = document.getElementsByClassName("nav-menu")[0];
let menuBtn = document.getElementById("menu-btn")

menuBtn.addEventListener("click",showhideMenu)

//BOTON RESPONSIVE
function showhideMenu() {
    
    if(navMenu.style.display == "") {
        navMenu.style.display = "flex"
    } 
    else if  (navMenu.style.display == "flex") {
        navMenu.style.display = ""
    }
}

//ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500});
ScrollReveal().reveal('.cards-brands', { delay: 500});

//OCULTAR CONTAINER 1//

let container = document.getElementsByClassName('container')

// MOSTRAR CONTAINER2-SECCION NOSOTROS//

let container2   = document.getElementsByClassName('container2')


//BUTTOM VARICES//

let btnVarices = document.getElementById('btnVarices');
//portada
let showcase = document.getElementById('showcase');
//varices
let varicesContainer = document.getElementById('varicesContainer');
//productos
let newsCards = document.getElementById('news-cards');
//marcas
let cardsBrands = document.getElementById('cards-brands');

btnVarices.addEventListener('click', showHide);

function showHide (){ 

    if(varicesContainer.style.display == "") {
        varicesContainer.style.display = "flex";
       //newsCards.style.display = "none";
        cardsBrands.style.display = "none";

    }else if(varicesContainer.style.display == "flex"){
        varicesContainer.style.display = "";
        //newsCards.style.display = "grid";
        cardsBrands.style.display = "grid";
    }
  }



//BUTTOM NOSOTROS



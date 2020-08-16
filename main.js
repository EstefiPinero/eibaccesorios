
let navMenu = document.getElementsByClassName("nav-menu")[0];
let menuBtn = document.getElementById("menu-btn")

menuBtn.addEventListener("click",showhideMenu)

function showhideMenu() {
    
    if(navMenu.style.display == "") {
        navMenu.style.display = "flex"
    } 
    else if  (navMenu.style.display == "flex") {
        navMenu.style.display = ""
    }
}

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500});
ScrollReveal().reveal('.cards-brands', { delay: 500});

//OCULTAR CONTAINER 1//

let container = document.getElementsByClassName('container')


// MOSTRAR CONTAINER2-SECCION NOSOTROS//

let container2   = document.getElementsByClassName('container2')




//MOSTRAR SECCION VARICES//

let btnVarices = document.getElementById('btnVarices');
let varicesContainer = document.getElementById('varicesContainer');

btnVarices.addEventListener('click', showHide);

function showHide (){ 

    if(varicesContainer.style.display == "") {
        varicesContainer.style.display = "flex";

    }else if(varicesContainer.style.display == "flex"){
        varicesContainer.style.display = "";
    }
  }


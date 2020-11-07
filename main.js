
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

//scroll suave
const links = document.querySelectorAll(".nav-main ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}

//OCULTAR CONTAINER 1//

let container = document.getElementsByClassName('container')

// MOSTRAR CONTAINER2-SECCION NOSOTROS//

let container2   = document.getElementsByClassName('container2')


//BUTTOM VARICES//

let btnVarices = document.getElementById('btnVarices');
let btnNosotros = document.getElementById('btnNosotros')
//portada
let showcase = document.getElementById('showcase');
//nosotros
let nosotrosContainer = document.getElementById('nosotrosContainer')
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

    } else if(varicesContainer.style.display == "flex"){
        varicesContainer.style.display = "";
        //newsCards.style.display = "grid";
        cardsBrands.style.display = "grid";
    }
  }

btnNosotros.addEventListener('click', showHide2);

  function showHide2 (){ 
  
      if(nosotrosContainer.style.display == "") {
        nosotrosContainer.style.display = "flex";
         //newsCards.style.display = "none";
          cardsBrands.style.display = "none";
  
      }else if(nosotrosContainer.style.display == "flex"){
        nosotrosContainer.style.display = "";
          //newsCards.style.display = "grid";
          cardsBrands.style.display = "grid";
      }
    }

//BOTONES VER MAS

let mujer = document.getElementsByClassName('mujer')[0]
let mujer2 = document.getElementsByClassName('mujer2')[0]
let mujeres = document.getElementById('mujeres').addEventListener('click', () => {
    
    if(mujer.style.display == "") {
        mujer.style.display = "block";
        //mujer2.style.display = "block";
    }else if(mujer.style.display == "block"){
        mujer.style.display = "";
        //mujer2.style.display = "";
    }

}) 




let hombres = document.getElementById('hombres');
let viajeros = document.getElementById('viajeros');
let deportivas = document.getElementById('deportivas');




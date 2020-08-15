
let nav = document.querySelector('.nav-menu');

document.querySelector('.menu-btn').addEventListener('click', () => {
    
    nav.classList.toogle('show');
    
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 800});
ScrollReveal().reveal('.cards-brands', { delay: 800});

//OCULTAR CONTAINER 1//

let container = document.getElementsByClassName('container')


// MOSTRAR CONTAINER2-SECCION NOSOTROS//

let container2 = document.getElementsByClassName('container2')




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


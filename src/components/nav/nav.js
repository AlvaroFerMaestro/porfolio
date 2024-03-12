import { data } from "../data/data";
import "./nav.css";


const divApp = document.querySelector("#app");
const newNav = document.createElement ('nav');
newNav.classList = "newNav"

export const crearheader = (lugar) => {
   const nav = document.createElement ("header");
    nav.className = "nav";

    const ul = document.createElement ("ul");
    ul.className = "indices"

   data.indices.forEach(indice => {
    const li = document.createElement("li");
    li.className = "liNav";
    const enlace = document.createElement("a");
    enlace.textContent = indice;
    enlace.href = `#${indice}`
    li.appendChild(enlace);
    ul.appendChild(li);
   })

   const h1 = document.createElement ("h1")
   h1.innerText = data.name

   document.querySelector(".bars__menu").addEventListener("click", animateBars);
var linea1__bars = document.querySelector(".line1__bars-menu");
var linea2__bars = document.querySelector(".line2__bars-menu");
var linea3__bars = document.querySelector(".line3__bars-menu");
var container__menu = document.querySelector("nav")

const burger = document.querySelector('.bars__menu')
burger.addEventListener('click', () => {
  if (ulHamburguesa.style.display === "flex"){
    ulHamburguesa.style.display = 'none'
  }else{
    ulHamburguesa.style.display = "flex"
  }

})

function animateBars(){
  linea1__bars.classList.toggle("activeline1__bars-menu");
  linea2__bars.classList.toggle("activeline2__bars-menu");
  linea3__bars.classList.toggle("activeline3__bars-menu");
  container__menu.classList.toggle("menu__active");
  ulHamburguesa.classList.toggle("menuActivo");
}

const ulHamburguesa = document.createElement('ul');
ulHamburguesa.style.display = "none"


 data.indices.forEach(indice => {
   const liHamburguesa = document.createElement("li"); 
   const a = document.createElement("a");
    liHamburguesa.classList.add("lihamburguesa");
    a.href = `#${indice}`
    a.textContent = indice; 
    a.classList.add("aHamburguesa")
    liHamburguesa.appendChild(a);
    ulHamburguesa.appendChild(liHamburguesa)
  })
  ulHamburguesa.addEventListener('click', () => {
    if (ulHamburguesa.style.display === "flex"){
      ulHamburguesa.style.display = 'none'
    }
  })
  

   newNav.appendChild(ulHamburguesa);
   divApp.appendChild(newNav);
   ulHamburguesa.classList.add("ulHamburguesa")
   nav.appendChild(h1);
    nav.appendChild(ul);
    lugar.appendChild(nav);
   return nav;
}


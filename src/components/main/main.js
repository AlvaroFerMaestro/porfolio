
import { educaction } from "../Educacion/educacion";
import { creararticulo } from "../Proyectos/proyectos";
import { data } from "../data/data";
import { crearEstudios } from "../estudio/estudio";
import "./main.css";


export const crearMain = (lugar) => {
    const main = document.createElement ("main");
    const section = document.createElement("section");
    section.id = "Conoceme";
    section.className = "section";
    const h2 = document.createElement ("h2");
    h2.textContent = 'Acerca de mí'
    const img = document.createElement ("img");
    img.src = data.avatar;

    
    const presentacion = document.createElement("p")
    const divPresentacion = document.createElement ("div")
    divPresentacion.className = "divPresentacion";
    
    presentacion.className = "pAboume";
    presentacion.textContent = data.abouMe;
    const ubicacion = document.createElement("p");
    ubicacion.id = "Educación"
    ubicacion.textContent = data.address;
    ubicacion.className = "ubicacion";
    const contactme = document.createElement("a");
    contactme.classList = "contactme";
    contactme.href = `mailto:${data.email}`;
    contactme.innerText = "Contactame";


    main.appendChild(section);
    section.appendChild(h2);
    section.appendChild(img);
    crearEstudios(section);
    section.appendChild(divPresentacion); 
    divPresentacion.appendChild(presentacion);
    section.appendChild(ubicacion);
    section.appendChild(contactme); 
    lugar.appendChild(main);
    educaction(main);
    creararticulo(main);
    /* crearfooter(main); */
    return main;
   
}

import { data } from "../data/data";
import "./estudio.css";


export const crearEstudios = (lugar) => {
    const sectionestudio = document.createElement("section");
    sectionestudio.classList ="sectionestudio"
    const ul = document.createElement("ul");
    data.estudios.forEach(estudio => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.className = "p-estudios"
        p.textContent = estudio
        li.className = "li-main"
        ul.className = "ul-main"
        ul.appendChild(li);
        li.appendChild(p);
    })
    sectionestudio.appendChild(ul);
    lugar.appendChild(sectionestudio);
}
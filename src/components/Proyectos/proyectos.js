import { data } from "../data/data";
import "./proyectos.css";

export const creararticulo = (lugar) => {
    const articulo = document.createElement("article");
    articulo.id = "Proyectos";
    articulo.className = "proyectos";

    data.projects.forEach(proyecto => {
        const divproyecto = document.createElement("div");
        divproyecto.className = "divproyecto";

        const titulo = document.createElement("h2");
        titulo.textContent = proyecto.title;
        divproyecto.appendChild(titulo);

        const descripcion = document.createElement("p");
        descripcion.textContent = proyecto.descripcion;
        divproyecto.appendChild(descripcion);

        const imagen = document.createElement("img");
        imagen.className = "imagenproyecto"
        imagen.src = proyecto.imagen;
        divproyecto.appendChild(imagen);

        imagen.addEventListener("click", function() {
            window.location.href = proyecto.link;
        });
        
        divproyecto.appendChild(imagen);
        articulo.appendChild(divproyecto);
    });

    lugar.appendChild(articulo);
    return articulo;
}

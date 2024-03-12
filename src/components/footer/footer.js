import "./footer.css";

export const crearfooter = (lugar) => {
    const footer = document.createElement ("footer")
    footer.className = "footer"
    const h3footer = document.createElement ("h3");
    h3footer.textContent = "©️ Created by Álvaro Fernández"; 
    h3footer.className = "h3footer"
    const imgGithub = document.createElement ("img")
    imgGithub.src = "https://res.cloudinary.com/djjhsxctx/image/upload/v1710099307/proyecto4/hdl6nq2y8yfhctclsd03.jpg"
    imgGithub.className = "imglogo" 
    imgGithub.addEventListener("click", function() {
        window.location.href = "https://github.com/AlvaroFerMaestro";
    });
   
    const imglinkedin = document.createElement ("img");
    imglinkedin.src = "https://res.cloudinary.com/djjhsxctx/image/upload/v1710099295/proyecto4/dlzheru0fwvhtpznedux.jpg"
    imglinkedin.className = "imglogo"
    imglinkedin.addEventListener("click", function() {
        window.location.href = "https://www.linkedin.com/in/alvaro-fern%C3%A1ndez-71ba0a2a2/";
    });
   
    footer.appendChild(h3footer);
    footer.appendChild(imgGithub);
    footer.appendChild(imglinkedin);
    lugar.appendChild(footer);
}
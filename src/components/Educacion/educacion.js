import "./educacion.css";

export const educaction = (lugar) => {
  const articuloedu = document.createElement("article");
  articuloedu.className = "articuloedu"
  const tieducacion = document.createElement("h2");
  tieducacion.className = "h2tieducacion"
  tieducacion.innerText = "Educacion";
  const instituto = document.createElement("h3");
  instituto.innerText = "Buen Gobernador"
  const pinstituto = document.createElement("p");
  pinstituto.innerText = "Cursado durante 2012. Para la obtencion del Gradudado escolar."
  const thecode = document.createElement("h3");
  thecode.innerText = "The Power";
  const pthecode = document.createElement("p");
  pthecode.innerText = "Cursando Bootcamp Full Stack";

  articuloedu.appendChild(tieducacion);
  articuloedu.appendChild(instituto);
  articuloedu.appendChild(pinstituto);
  articuloedu.appendChild(thecode);
  articuloedu.appendChild(pthecode);

  lugar.appendChild(articuloedu);
}
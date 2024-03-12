import './style.css'


import { crearheader } from './src/components/nav/nav';
import { crearMain } from './src/components/main/main';
import { crearfooter } from './src/components/footer/footer';


const app = document.querySelector("#app");

crearheader(app);
crearMain(app);
crearfooter(app)

import "./styles.css";
import { loadPg } from "./components/load-page.js";
import { menuPg } from "./components/menu-page.js";
import { aboutPg } from "./components/about-page.js";

const home = document.getElementById('hm');
const menu = document.getElementById('mnu');
const about = document.getElementById('abt');
console.log("test");

function showPage(pageFn){
    content.replaceChildren();
    pageFn();
}

loadPg()
home.addEventListener('click', ()=>showPage(loadPg));
menu.addEventListener('click', ()=>showPage(menuPg));

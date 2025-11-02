import "./styles.css";
import { loadPg } from "./components/load-page.js";
import { menuPg } from "./components/menu-page.js";

const home = document.getElementById('hm');
const menu = document.getElementById('mnu');
console.log("test");

loadPg()
home.addEventListener('click', loadPg);
menu.addEventListener('click', menuPg);
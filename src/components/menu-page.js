const contentDiv = document.getElementById('content');

function menuPg(){
    const menuHeader = document.createElement('div');
    menuHeader.classList.add('munHdDiv');
    menuHeader.textContent = "Menu";
    contentDiv.appendChild(menuHeader);

}

export {menuPg};
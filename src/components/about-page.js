const contentDiv = document.getElementById('content');

function aboutPg(){
    const abtHdDiv = document.createElement('div');
    abtHdDiv.classList.add('abthdDiv');
    abtHdDiv.textContent = "About Page";
    contentDiv.appendChild(abtHdDiv);
    const textDiv = document.createElement('div');
    textDiv.classList.add('textDiv');
    textDiv.textContent = `Welcome to Res, where flavor has no boundaries!
At Res, we bring together the best of Indian classics, global favorites, and modern comfort food — all crafted with love, passion, and the freshest ingredients. 
Whether you’re craving spicy street-style delights, cheesy Italian pasta, sizzling Asian stir-fries, or a comforting cup of coffee, you’ll find it all under one roof.`
    contentDiv.appendChild(textDiv);
}

export {aboutPg}
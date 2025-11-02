import resimg from "../assets/rest.jpg";

const divContainer = document.getElementById('content');

function loadPg(){
    const header = document.createElement('div');
    header.classList.add('header')
    header.textContent = "This is Home Page of our website.";
    divContainer.appendChild(header);

    const imgPlaceholder = document.createElement('img');
    imgPlaceholder.classList.add('hmImg');
    imgPlaceholder.src = resimg;
    divContainer.appendChild(imgPlaceholder);

    const promoDiv = document.createElement('div');
    promoDiv.classList.add('promoText');
    promoDiv.textContent = `Welcome to our Restaurant — where flavor meets passion!
    Indulge in a delightful dining experience crafted with the freshest ingredients, 
    authentic recipes, and a touch of warmth in every dish. 
    Whether you're craving comfort classics or exploring bold new flavors, 
    our chefs are here to take your taste buds on a journey. 
    Relax in our cozy ambiance, enjoy exceptional service, 
    and make every meal a memory to savor. 
    Come hungry, leave happy — only at our Restaurant.`
    divContainer.appendChild(promoDiv);
}
export {loadPg};
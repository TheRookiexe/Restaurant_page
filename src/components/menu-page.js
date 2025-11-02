const contentDiv = document.getElementById('content');

function menuPg(){
    const menuHeader = document.createElement('div');
    menuHeader.classList.add('munHdDiv');
    menuHeader.textContent = "Menu";
    contentDiv.appendChild(menuHeader);
    const list = document.createElement('div');
    list.classList.add('list');
    list.innerHTML = `<p class="title">Starters / Appetizers</p>
Garlic Bread with Cheese
Crispy French Fries
Veg/Chicken Spring Rolls
Tomato Basil Soup
Paneer Tikka / Chicken Tikka
Caesar Salad
Nachos with Salsa

<p class="title">Main Course</p>
Margherita Pizza
BBQ Chicken Pizza
Veggie Delight Burger
Grilled Chicken Sandwich
Paneer Butter Masala with Naan
Chicken Biryani
Alfredo Pasta / Arrabbiata Pasta

<p class="title">Desserts</p>
Chocolate Lava Cake
Gulab Jamun
Cheesecake
Ice Cream Sundae
Brownie with Ice Cream
Rasmalai

<p class="title">Drinks / Beverages</p>
Cold Coffee
Fresh Lime Soda
Cappuccino
Soft Drinks
Fresh Juice
`;
contentDiv.appendChild(list);

}

export {menuPg};
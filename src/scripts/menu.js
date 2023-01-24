const menuDetails = (()=>{
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const menuItems = ['Breakfast', 'Idly', 'Dosa', 'Masala vada', 'Poori', 'Pongal', 'Chapati', 'Lunch', 'Meals', 'Mini-Meals', 'Variety Rice', 'Chapati',
'Dinner', 'Variety Dosas', 'Parotta', 'Chinese Varieties', 'Beverages', 'Coffee', 'Tea', 'Juice Varieties', 'Falooda'];

    menuItems.forEach(item=>{
        const elementP = document.createElement('p');
        if(item === 'Breakfast' || item === 'Lunch' || item === 'Dinner' || item === 'Beverages'){
            elementP.classList.add(item);
        }
        elementP.innerText = item;
        menu.appendChild(elementP);
    });
    return menu;
})();

export {menuDetails};

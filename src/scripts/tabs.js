// const content = document.querySelector('#content');

const makeTabs = ()=>{
    const menuItems = ['Home', 'Menu', 'About'];
    const header = document.createElement('div');
    header.classList.add('header');
    const icon = document.createElement('span');
    icon.classList.add('material-symbols-outlined');
    icon.innerText = 'menu';
    header.appendChild(icon);
    const navs = document.createElement('div');
    navs.classList.add('nav');
    for(let i=0; i<menuItems.length; i++){
        const para = document.createElement('p');
        para.innerText = menuItems[i];
        navs.appendChild(para);
    }
    header.appendChild(navs);
    return header;
    // console.log(header);
}

export {makeTabs};
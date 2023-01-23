import '../styles/style.css';
import {makeTabs} from '../scripts/tabs';
// import { paras, branchDetails } from './main-page';
import { footerContent } from './footer';
import { timingComponent } from './about';
import {homePage} from './main-page'

const content = document.querySelector('#content');
content.appendChild(makeTabs());
const displayArea = document.createElement('div');
displayArea.classList.add('main-content');
content.appendChild(displayArea);

content.appendChild(footerContent().footer);

displayArea.appendChild(homePage);

const navs = document.querySelector('.header>.nav');

navs.addEventListener('click', (e)=>{
    if(e.target.innerText == 'Home'){
        displayArea.innerHTML = '';
        displayArea.appendChild(homePage);
    }
    else if(e.target.innerText == 'About'){
        displayArea.innerHTML = '';
        displayArea.appendChild(timingComponent);
    }
});

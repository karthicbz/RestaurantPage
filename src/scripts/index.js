import '../styles/style.css';
import {makeTabs} from '../scripts/tabs';
import { paras, branchDetails } from './main-page';

const content = document.querySelector('#content');
content.appendChild(makeTabs());
const displayArea = document.createElement('div');
displayArea.classList.add('main-content');
content.appendChild(displayArea);
const footer = document.createElement('div');
footer.classList.add('footer');
footer.innerText = 'This is footer';
content.appendChild(footer);

Object.keys(paras()).forEach(key=>{
    displayArea.appendChild(paras()[key]);
});

Object.keys(branchDetails()).forEach(key=>{
    // console.log(branchDetails()[key]);
    displayArea.appendChild(branchDetails()[key]);
});

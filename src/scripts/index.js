import '../styles/style.css';
import {makeTabs} from '../scripts/tabs';
import { paras } from './main-page';

const content = document.querySelector('#content');
content.appendChild(makeTabs());
const displayArea = document.createElement('div');
displayArea.classList.add('main-content');
content.appendChild(displayArea);

Object.keys(paras()).forEach(key=>{
    displayArea.appendChild(paras()[key]);
});

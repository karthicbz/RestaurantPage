import '../styles/style.css';
import {makeTabs} from '../scripts/tabs';

const content = document.querySelector('#content');
content.appendChild(makeTabs());
const displayArea = document.createElement('div');
displayArea.classList.add('main-content');
content.appendChild(displayArea);

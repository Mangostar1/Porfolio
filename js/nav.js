import {About} from './About.js';
import {Work} from './Work.js';
import {Home} from './Home.js';

const $main = document.querySelector('main');

document.addEventListener('DOMContentLoaded', Home($main))

document.addEventListener('click', (e) => {
    
    if (e.target.matches('.logo')) {
        $main.lastChild.remove();
        Home($main);
    }

    if (e.target.matches('#about-link')) {
        $main.lastChild.remove();
        About($main);
    }

    if (e.target.matches('#work-link')) {
        $main.lastChild.remove();
        Work($main);
    }
})
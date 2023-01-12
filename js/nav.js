import {About} from './About.js';
import {Work} from './Work.js';
import {Home} from './Home.js';

const $main = document.querySelector('main');

document.addEventListener('DOMContentLoaded', Home($main))

document.addEventListener('click', (e) => {
    
    if (e.target.matches('.logo') || e.target.matches('#home-link')) {
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

    let $menuSandwich = document.querySelector('.nav-logo-content')
    if (e.target.matches('.menu-sandwich') || e.target.matches('.line')) {
        console.log('hace algo')
        $menuSandwich.classList.toggle('active');
    }
})
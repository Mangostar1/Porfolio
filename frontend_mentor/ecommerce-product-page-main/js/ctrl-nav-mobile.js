let closeNav = document.getElementById('close-nav-id');
let menu = document.getElementById('nav');
let openNav = document.getElementById('mobile-menu');

openNav.onclick = () => {
    menu.style.display = 'block';
}

closeNav.onclick = () => {
    menu.style.display = 'none';
}
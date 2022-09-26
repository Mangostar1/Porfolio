let percents = document.getElementsByClassName('percent-tec'); //divs with class percent-tec
let p = document.getElementsByClassName('percent-p'); //divs with class percent-p

//HTML5
let html = p[0].innerHTML;
percents[0].style.cssText = `width: ${html}`;

//CSS 3
let css = p[1].innerHTML;
percents[1].style.cssText = `width: ${css}`;

//Sass
let sass = p[2].innerHTML;
percents[2].style.cssText = `width: ${sass}`;

//Javascript
let javascript = p[3].innerHTML;
percents[3].style.cssText = `width: ${javascript}`;

//Git
let git = p[4].innerHTML;
percents[4].style.cssText = `width: ${git}`;

//React
let react = p[5].innerHTML;
percents[5].style.cssText = `width: ${react}`;

//Tailwind
let Tailwind = p[6].innerHTML;
percents[6].style.cssText = `width: ${Tailwind}`;

//test

let tecDiv = document.getElementsByClassName('tec-div');

function isInViewport(elem) {
    let distance = elem.getBoundingClientRect();
    return (
        distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
    );
}

window.addEventListener('scroll', () => {
    if (isInViewport(tecDiv[0])) {
        console.log('Es visible el elemento en pantalla');
    } else {
        console.log('No es visible el elemento en pantalla');
    }
});

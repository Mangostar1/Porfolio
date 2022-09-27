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

let tecDiv = document.getElementsByClassName('tec-div'); //La animacion se dispara cuando este elemento es visible en pantalla

const keyframeHTML = [
    {width: 0},
    {width: html}
]

const keyframeCSS = [
    {width: 0},
    {width: css}
]

const keyframeSASS = [
    {width: 0},
    {width: sass}
]

const keyframeJS = [
    {width: 0},
    {width: javascript}
]

const keyframeGit = [
    {width: 0},
    {width: git}
]

const keyframeReact = [
    {width: 0},
    {width: react}
]

const keyframeTailwind = [
    {width: 0},
    {width: Tailwind}
]

const timeAnim = {
    duration: 1000,
    iterations: 1,
}

function isInViewport(elem) {
    let distance = elem.getBoundingClientRect();
    return (
        distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
    );
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
}

let callback = () => {
    console.log('elemento visible');
    percents[0].animate(keyframeHTML, timeAnim);
    percents[1].animate(keyframeCSS, timeAnim);
    percents[2].animate(keyframeSASS, timeAnim);
    percents[3].animate(keyframeJS, timeAnim);
    percents[4].animate(keyframeGit, timeAnim);
    percents[5].animate(keyframeReact, timeAnim);
    percents[6].animate(keyframeTailwind, timeAnim);
}

let observer = new IntersectionObserver(callback, options);

observer.observe(percents[0]);
observer.observe(percents[5]);
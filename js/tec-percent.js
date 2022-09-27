let percents = document.getElementsByClassName('percent-tec');
let p = document.getElementsByClassName('percent-p');

let imgHTML = document.getElementById('img-html');
let imgCSS = document.getElementById('img-css');
let imgSASS = document.getElementById('img-sass');
let imgJS = document.getElementById('img-js');
let imgGIT = document.getElementById('img-git');
let imgREACT = document.getElementById('img-react');
let imgTAILWIND = document.getElementById('img-tailwind');

/*---------------------------------*/
/* Default width without animation */
/*---------------------------------*/

let html = p[0].innerHTML;
percents[0].style.cssText = `width: ${html}`;

let css = p[1].innerHTML;
percents[1].style.cssText = `width: ${css}`;

let sass = p[2].innerHTML;
percents[2].style.cssText = `width: ${sass}`;

let javascript = p[3].innerHTML;
percents[3].style.cssText = `width: ${javascript}`;

let git = p[4].innerHTML;
percents[4].style.cssText = `width: ${git}`;

let react = p[5].innerHTML;
percents[5].style.cssText = `width: ${react}`;

let Tailwind = p[6].innerHTML;
percents[6].style.cssText = `width: ${Tailwind}`;


/*-------------------*/
/* KeyFrame and Time */
/*-------------------*/

//percentages
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

//images
const keyframeHtmlImg = [
    {width: '20px',
    height: '20px'},
    {width: '40px',
    height: '40px'}
]

const keyframeCssImg = [
    {width: '20px',
    height: '20px'},
    {width: '40px',
    height: '40px'}
]

const keyframeSassImg = [
    {width: '30px',
    height: '20px'},
    {width: '60px',
    height: '40px'}
]

const keyframeJsImg = [
    {width: '20px',
    height: '20px'},
    {width: '40px',
    height: '40px'}
]

const keyframeGitImg = [
    {width: '20px',
    height: '20px'},
    {width: '40px',
    height: '40px'}
]

const keyframeReactImg = [
    {width: '20px',
    height: '20px'},
    {width: '40px',
    height: '40px'}
]

const keyframeTailImg = [
    {width: '20px',
    height: '20px'},
    {width: '40px',
    height: '40px'}
]

//time
const timeAnim = {
    duration: 1000,
    iterations: 1,
}

const timeAnimImg = {
    duration: 400,
    iterations: 1,
}

/*----------------------*/
/* Observer and options */
/*----------------------*/
const options = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
}

const Animacion = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
        }
        percents[0].animate(keyframeHTML, timeAnim);
        percents[1].animate(keyframeCSS, timeAnim);
        percents[2].animate(keyframeSASS, timeAnim);
        percents[3].animate(keyframeJS, timeAnim);
        percents[4].animate(keyframeGit, timeAnim);
        percents[5].animate(keyframeReact, timeAnim);
        percents[6].animate(keyframeTailwind, timeAnim);
    })
}

const AnimacionImg = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            console.log('el elemento ahora es visible');
            imgHTML.animate(keyframeHtmlImg, timeAnimImg);
            imgCSS.animate(keyframeCssImg, timeAnimImg);
            imgSASS.animate(keyframeSassImg, timeAnimImg);
            imgJS.animate(keyframeJsImg, timeAnimImg);
            imgGIT.animate(keyframeGitImg, timeAnimImg);
            imgREACT.animate(keyframeReactImg, timeAnimImg);
            imgTAILWIND.animate(keyframeTailImg, timeAnimImg);
        }
    })
}

const observer = new IntersectionObserver(Animacion, options);

observer.observe(percents[0]);

const observerImg = new IntersectionObserver(AnimacionImg, options);

observerImg.observe(imgHTML);
//observerImg.observe(imgREACT);
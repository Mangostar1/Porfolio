let $percents = document.getElementsByClassName('percent-tec');
let $p = document.getElementsByClassName('percent-p');

let $imgHTML = document.getElementById('img-html');
let $imgCSS = document.getElementById('img-css');
let $imgSASS = document.getElementById('img-sass');
let $imgJS = document.getElementById('img-js');
let $imgGIT = document.getElementById('img-git');
let $imgREACT = document.getElementById('img-react');
let $imgTAILWIND = document.getElementById('img-tailwind');

/*---------------------------------*/
/* Default width without animation */
/*---------------------------------*/

for (let e = 0; e < $p.length; e++) {
    $percents[e].style.cssText = `width: ${$p[e].innerHTML}`;
}

let html = $p[0].innerHTML;
let css = $p[1].innerHTML;
let sass = $p[2].innerHTML;
let javascript = $p[3].innerHTML;
let git = $p[4].innerHTML;
let react = $p[5].innerHTML;
let Tailwind = $p[6].innerHTML;

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
const widthAndHeight = [
    {width: '20px',
    height: '20px'},
    {width: '40px',
    height: '40px'}
]

const keyframeHtmlImg = widthAndHeight;

const keyframeCssImg = widthAndHeight;

const keyframeSassImg = [
    {width: '30px',
    height: '20px'},
    {width: '60px',
    height: '40px'}
]

const keyframeJsImg = widthAndHeight;

const keyframeGitImg = widthAndHeight;

const keyframeReactImg = widthAndHeight;

const keyframeTailImg = widthAndHeight;

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
    rootMargin: '100px 0px 100px 0px',//margen del screen
    threshold: 1.0//porsentaje del elemento que tiene que estar visible para en el screen para disparar el evento
}

const Animacion = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
        }
        $percents[0].animate(keyframeHTML, timeAnim);
        $percents[1].animate(keyframeCSS, timeAnim);
        $percents[2].animate(keyframeSASS, timeAnim);
        $percents[3].animate(keyframeJS, timeAnim);
        $percents[4].animate(keyframeGit, timeAnim);
        $percents[5].animate(keyframeReact, timeAnim);
        $percents[6].animate(keyframeTailwind, timeAnim);
    })
}

const AnimacionImg = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            //console.log('el elemento ahora es visible');
            $imgHTML.animate(keyframeHtmlImg, timeAnimImg);
            $imgCSS.animate(keyframeCssImg, timeAnimImg);
            $imgSASS.animate(keyframeSassImg, timeAnimImg);
            $imgJS.animate(keyframeJsImg, timeAnimImg);
            $imgGIT.animate(keyframeGitImg, timeAnimImg);
            $imgREACT.animate(keyframeReactImg, timeAnimImg);
            $imgTAILWIND.animate(keyframeTailImg, timeAnimImg);
        }
    })
}

const observer = new IntersectionObserver(Animacion, options);

observer.observe($imgHTML);

const observerImg = new IntersectionObserver(AnimacionImg, options);

observerImg.observe($imgHTML);
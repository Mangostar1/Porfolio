let percents = document.getElementsByClassName('percent-tec'); //divs with class percent-tec
let p = document.getElementsByClassName('percent-p'); //divs with class percent-p

//HTML5
let html = p[0].innerHTML;
percents[0].style.cssText = `width: ${html}`;

//CSS 3
let css = p[1].innerHTML;
percents[1].style.cssText = `width: ${css}`;

//Javascript
let JavaScript = p[2].innerHTML;
percents[2].style.cssText = `width: ${JavaScript}`;

//git
let Git = p[3].innerHTML;
percents[3].style.cssText = `width: ${Git}`;

//NPM
let NPM = p[4].innerHTML;
percents[4].style.cssText = `width: ${NPM}`;

//Node
let Node = p[5].innerHTML;
percents[5].style.cssText = `width: ${Node}`;

//React
let React = p[6].innerHTML;
percents[6].style.cssText = `width: ${React}`;

//Bootstrap
let Bootstrap = p[7].innerHTML;
percents[7].style.cssText = `width: ${Bootstrap}`;
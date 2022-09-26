const overlayWork = document.getElementsByClassName('overlay-work');
const tecUsed = document.getElementsByClassName('tec-used');
const descriptWork= document.getElementsByClassName('descript-work');

const imgWorks = document.querySelectorAll('.img-works');

const timeTrans = .2;
const scale = 1.2;

window.addEventListener('mouseover', (e) => {
    console.log(e.target);
    if (e.target === overlayWork[0] || e.target === tecUsed[0] || e.target === tecUsed[1] || e.target === descriptWork[0]) {
            imgWorks[0].style.cssText = `transition: all ${timeTrans}s ease; transform: scale(${scale})`;
    } 
    else if (e.target === overlayWork[1] || e.target === tecUsed[2] || e.target === tecUsed[3] || e.target === descriptWork[1]) {
        imgWorks[1].style.cssText = `transition: all ${timeTrans}s ease; transform: scale(${scale})`;
    } 
    else if (e.target === overlayWork[2] || e.target === tecUsed[4] || e.target === tecUsed[5] || e.target === descriptWork[2]) {
        imgWorks[2].style.cssText = `transition: all ${timeTrans}s ease; transform: scale(${scale})`;
    } 
    else if (e.target === overlayWork[3] || e.target === tecUsed[6] || e.target === tecUsed[7] || e.target === descriptWork[3]) {
        imgWorks[3].style.cssText = `transition: all ${timeTrans}s ease; transform: scale(${scale})`;
    } 
    else if (e.target === overlayWork[4] || e.target === tecUsed[8] || e.target === tecUsed[9] || e.target === descriptWork[4]) {
        imgWorks[4].style.cssText = `transition: all ${timeTrans}s ease; transform: scale(${scale})`;
    } 
    else if (e.target === overlayWork[5] || e.target === tecUsed[10] || e.target === tecUsed[11] || e.target === descriptWork[5]) {
        imgWorks[5].style.cssText = `transition: all ${timeTrans}s ease; transform: scale(${scale}`;
    } 
    else if (e.target === overlayWork[6] || e.target === tecUsed[12] || e.target === tecUsed[13] || e.target === descriptWork[6]) {
        imgWorks[6].style.cssText = `transition: all ${timeTrans}s ease; transform: scale(${scale}`;
    } 
    else {
        for (let i = 0; i < overlayWork.length; i++) {
            imgWorks[i].style.cssText = `transition: all ${timeTrans}s ease; transform: scale(1)`;
        }
    }
});
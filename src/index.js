
if (1 < 0) { // Para prevenir que se ejecute este codigo en producción | DEPRECATED
    /* Animations */
    const overlayWork = document.getElementsByClassName('overlay-work');
    const tecUsed = document.getElementsByClassName('tec-used');
    const descriptWork= document.getElementsByClassName('descript-work');

    const imgWorks = document.querySelectorAll('.img-works');

    /* Animations options */
    const timeTrans = .2;
    const scale = 1.2;

    window.addEventListener('mouseover', (e) => {
        
        if (e.target === overlayWork[0] || e.target === tecUsed[0] || e.target === tecUsed[1] || e.target === descriptWork[0]) {
            Animations(0);
        } 
        else if (e.target === overlayWork[1] || e.target === tecUsed[2] || e.target === tecUsed[3] || e.target === descriptWork[1]) {
            Animations(1);
        } 
        else if (e.target === overlayWork[2] || e.target === tecUsed[4] || e.target === tecUsed[5] || e.target === descriptWork[2]) {
            Animations(2);
        } else {
            for (let i = 0; i < overlayWork.length; i++) {
                imgWorks[i].style.cssText = `transition: all ${timeTrans}s ease; transform: scale(1)`;
            }
        }
    });

    function Animations(numOverWork) {
        imgWorks[numOverWork].style.cssText = `transition: all ${timeTrans}s ease; transform: scale(${scale}`;
    }
}
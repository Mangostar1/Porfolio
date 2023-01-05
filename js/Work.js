import { calendar, ejercicios, frontendRetos } from "./workDone.js";

export function Work(element) {
    const workContent = document.createElement('section')
    workContent.classList.add('sec-works');
    workContent.id = "sec-works";
    workContent.innerHTML = 
        `<article class="article" id="article">
            <h5 class="card-title title-other">Mis proyectos</h5> 
            <p class="card-text work-text">
                Aquí puedes ver algunos de los proyectos en los que he trabajado.
            </p>

            <div class="content-works">
                ${calendar}

                ${ejercicios}

                ${frontendRetos}
            </div>
        </article>`;

    element.appendChild(workContent);
    
    const overlayWork = document.getElementsByClassName('overlay-work');
    const tecUsed = document.getElementsByClassName('tec-used');
    const descriptWork= document.getElementsByClassName('descript-work');
    
    const imgWorks = document.querySelectorAll('.img-works');
    
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
        } 
        else {
            for (let i = 0; i < overlayWork.length; i++) {
                imgWorks[i].style.cssText = `transition: all ${timeTrans}s ease; transform: scale(1)`;
            }
        }
    });
    
    function Animations(numOverWork) {
        imgWorks[numOverWork].style.cssText = `transition: all ${timeTrans}s ease; transform: scale(${scale}`;
    }
}


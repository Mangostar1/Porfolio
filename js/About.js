import {htmlTec, cssTec, sassTec, jsTec, gitTec, reactTec, tailwindTec, mysqlTec, dockerTec, nodeTec, expressTec, FigmaTec} from './technologies.js';

export function About(element) {
    const aboutContent = document.createElement('section')
    aboutContent.classList.add('sec-about');
    aboutContent.id = "sec-about-id";
    aboutContent.innerHTML = 
        `<article class="article" id="about">
            <div>
                <h5 class="card-title title-other">Acerca de mí</h5>
                <p class="card-text">
                ¡Hola! Soy Omar Zavala Ugarte, un desarrollador web autodidacta apasionado por la tecnología y las últimas 
                tendencias en diseño y desarrollo web. Con una sólida formación autodidacta, he adquirido habilidades en HTML, 
                CSS, JavaScript y React, a través de cursos en línea y proyectos personales en mi perfil de GitHub. Mi objetivo 
                es seguir mejorando mis habilidades y aprender de los profesionales más experimentados en la industria, ¡y estoy 
                emocionado de formar parte de su equipo!
                </p>
            </div>
            <div class="content-about-and-tec">
                <div class="about-box" id="abot-me">

                    <h5 class="title-inner-about" id="mi-cv">Mi Curriculum</h5>
                    
                    <a class="btn-pdf-link btn-pdf"href="./pdf.html">
                        <img src="./icons/curriculum-resume-svgrepo-com.svg" alt="CV" class="cv-img">
                        Ve mi Curriculum
                    </a>

                    <div class="about-tec">
                        <h5 class="title-inner-about">Frontend</h5>

                        ${htmlTec}
                    
                        ${cssTec}

                        ${sassTec}

                        ${jsTec}

                        ${gitTec}

                        ${reactTec}

                        ${tailwindTec}
                    </div>

                    <div class="about-tec">
                        <h5 class="title-inner-about">Diseño</h5>

                        ${FigmaTec}

                    </div>

                    <div class="about-tec">
                        <h5 class="title-inner-about">Base de Datos</h5>

                        ${mysqlTec}

                    </div>

                    <div class="about-tec">
                        <h5 class="title-inner-about">Herramientas</h5>

                        ${gitTec}

                        ${dockerTec}
                        
                    </div>

                    <div class="about-tec">
                        <h5 class="title-inner-about">Backend</h5>

                        ${nodeTec}

                        ${expressTec}
                        
                    </div>
                </div>
            </div>
        </article>`;

    element.appendChild(aboutContent);
}
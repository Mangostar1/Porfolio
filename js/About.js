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
                    Hola, me llamo Omar Zavala Ugarte y me inicie en el mundo del desarrollo web en octubre del año 2021 como autodidacta.
                </p>
            </div>
            <div class="content-about-and-tec">
                <div class="about-box" id="abot-me">
                    <h5 class="title-inner-about">¿Quién soy?</h5>
                    <p class="p-about">
                        Hola, me llamo Omar Zavala, soy chileno y me inicie en el mundo 
                        de desarrollo web como un estudiante autodidacta 
                        y a la fecha lo sigo siendo.
                        <br>
                        <br>
                        Me caracterizó por mi
                        constante deseo de aprender nuevas
                        tecnologías y perfeccionarme en
                        ellas, me apasiona el mundo de la
                        programación y crear soluciones a
                        través del software.
                    </p>

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
/* const about = document.getElementById('about-link');
const work = document.getElementById('work-link');
const home = document.getElementById('home-link'); */

const $main = document.querySelector('main');

document.addEventListener('DOMContentLoaded', Home($main))

document.addEventListener('click', (e) => {
    
    if (e.target.matches('.logo')) {
        $main.lastChild.remove();
        Home($main);
    }

    if (e.target.matches('#about-link')) {
        $main.lastChild.remove();
        About($main);
    }

    if (e.target.matches('#work-link')) {
        $main.lastChild.remove();
        Work($main);
    }
})

/*----------------*/
/*-Elementos HTML-*/
/*----------------*/
function Home(element) {
    const homeContent = document.createElement('section')
    homeContent.classList.add('sec-welcom');
    homeContent.id = "sec-welcom-id"
    homeContent.innerHTML = 
        `<article class="article" id="welcome">
            <h5 class="card-title">Omar Zavala</h5>
            <p class="card-text">
                Frontend Developer
            </p>
            <div class="social-media-contaienr">
                <a class="social-media-link" href="https://www.instagram.com/omar.zavala0/" title="instagram">
                    <img class="social-media-icons" src="./icons/icons8-instagram.svg" alt="">
                </a>
                <a class="social-media-link" href="https://github.com/Mangostar1" title="github">
                    <img class="social-media-icons github-social-media" src="./icons/github.svg" alt="">
                </a>
                <a class="social-media-link" href="https://www.linkedin.com/in/omar-zavala-ugarte/" title="linkedin">
                    <img class="social-media-icons" src="./icons/LI-In-Bug.png" alt="">
                </a>
                <a class="social-media-link" href="mailto:influencia.x.94@gmail.com" title="gmail">
                    <img class="social-media-icons" src="./icons/gmail-color.png" alt="">
                </a>
            </div>
        </article>`;

    element.appendChild(homeContent);
}

function About(element) {
    const aboutContent = document.createElement('section')
    aboutContent.classList.add('sec-about');
    aboutContent.id = "sec-about-id";
    aboutContent.innerHTML = 
        `<article class="article" id="about">
            <div>
                <h5 class="card-title title-other">Acerca de mí</h5>
                <p class="card-text">
                    Me llamo Omar Zavala Ugarte y me inicie en el mundo del desarrollo web en octubre del año 2021 como autodidacta.
                </p>
            </div>
            <div class="content-about-and-tec">
                <div class="about-box" id="abot-me">
                    <h5 class="title-inner-about">¿Quién soy?</h5>
                    <p class="p-about">
                        Soy chileno y me inicie en el mundo 
                        de desarrollo web como un estudiante autodidacta 
                        y a la fecha lo sigo siendo.
                        <br>
                        <br>
                        Soy una persona apasionada por el desarrollo web, me gusta
                        aprender nuevas tecnologías y desarrollar proyectos.
                        Actualmente una de mis más grandes metas es algún día poder
                        convertirme en un desarrollador senior y liderar grandes
                        proyectos.
                    </p>

                    <h5 class="title-inner-about" id="mi-cv">Mi Curriculum</h5>
                    
                    <a class="btn-pdf-link btn-pdf"href="./pdf.html">
                        <img src="./icons/curriculum-resume-svgrepo-com.svg" alt="CV" class="cv-img">
                        Ve mi Curriculum
                    </a>
                </div>

                <div class="content-tec">
                    <div class="about-box about-box-1">
                        <h5 class="title-inner-about">Tecnologias que manejo</h5>

                        <div class="tec-div">
                            <a class="links-tec" href="https://developer.mozilla.org/es/docs/Glossary/HTML5">
                                <p>HTML 5</p>
                                <img src="./icons/logos_tecnologias/html5-svgrepo-com.svg" alt="html" id="img-html">
                                <div class="percent-tec">
                                    <p class="percent-p">
                                        80%
                                    </p>
                                </div>
                            </a>
                        </div>
                    
                        <div class="tec-div">
                            <a class="links-tec" href="https://developer.mozilla.org/es/docs/Web/CSS">
                                <p>CSS 3</p>
                                <img src="./icons/logos_tecnologias/css3-svgrepo-com.svg" alt="css" id="img-css">
                                <div class="percent-tec">
                                    <p class="percent-p">
                                        80%
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div class="tec-div">
                            <a class="links-tec" href="https://sass-lang.com/">
                                <p>SASS</p>
                                <img src="./icons/logos_tecnologias/sass-color.png" alt="sass" id="img-sass">
                                <div class="percent-tec">
                                    <p class="percent-p">
                                        75%
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div class="tec-div">
                            <a class="links-tec" href="https://developer.mozilla.org/es/docs/Web/JavaScript">
                                <P>Javascript</P>
                                <img src="./icons/logos_tecnologias/javascript-svgrepo-com.svg" alt="js" id="img-js">
                                <div class="percent-tec">
                                    <p class="percent-p">
                                        60%
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div class="tec-div">
                            <a class="links-tec" href="https://git-scm.com/">
                                <P id="git-p">Git</P>
                                <img src="./icons/logos_tecnologias/git-svgrepo-com.svg" alt="GIT" id="img-git">
                                <div class="percent-tec">
                                    <p class="percent-p">
                                        70%
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="about-box about-box-2">
                        <h5 class="title-inner-about">Tecnologias que estoy aprendiendo</h5>

                        <div class="tec-div">
                            <a class="links-tec" href="https://reactjs.org/">
                                <p>React JS</p>
                                <img src="./icons/logos_tecnologias/react-svgrepo-com.svg" alt="react" id="img-react">
                                <div class="percent-tec">
                                    <p class="percent-p">
                                        30%
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div class="tec-div">
                            <a class="links-tec" href="https://tailwindcss.com/">
                                <p>Tailwind</p>
                                <img src="./icons/logos_tecnologias/tailwindcss-color.svg" alt="tailwind" id="img-tailwind">
                                <div class="percent-tec">
                                    <p class="percent-p">
                                        20%
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </article>`;

    element.appendChild(aboutContent);
}

function Work(element) {
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
                <div class="content-works-1">
                    <div class="content-works-1 content-works-2">
                        <div class="content-img-works">
                            <div class="img-works" id="img-calendar"></div>
                        </div>
                        <div class="overlay-work">
                            <p class="texto-work">
                                Calendario Web
                            </p>
                            <p class="descript-work">
                                Calendario web creado para <a class="otros-links" href="https://rainmakers.cl/">rainmakers.cl</a>. Esta escrito únicamente 
                                con javascript vanilla con la finalidad de brindar mayor personalización al proyecto.
                            </p>
                            <a href="https://mangostar1.github.io/Calendar/" class="tec-used" target="_blank" rel="noopener">Website</a>
                            <a href="https://github.com/Mangostar1/Calendar" class="tec-used" target="_blank" rel="noopener">Repositorio</a>
                        </div>
                    </div>
                </div>
                <div class="content-works-1">
                    <div class="content-works-2">
                        <div class="content-img-works">
                            <div class="img-works" id="img-calc"></div>
                        </div>
                        <div class="overlay-work">
                            <p class="texto-work">
                                Calculadora
                            </p>
                            <p class="descript-work">
                                En esta página se encuentran todos los pequeños proyectos personales que he realizado a modo de ejercicio.
                            </p>
                            <a href="https://ejercicios-web.netlify.app/" class="tec-used" target="_blank" rel="noopener">Website</a>
                            <a href="https://github.com/Mangostar1/Mis-trabjos-peque-os" class="tec-used" target="_blank" rel="noopener">Repositorio</a>
                        </div>
                    </div>
                </div>
                <div class="content-works-1">
                    <div class="content-works-2">
                        <div class="content-img-works">
                            <div class="img-works" id="img-Frontend"></div>
                        </div>
                        <div class="overlay-work">
                            <p class="texto-work">
                                E-Commerce
                            </p>
                            <p class="descript-work">
                                Este proyecto fue una prueba de desarrollo de una tienda online. 
                            </p>
                            <a href="https://mangostar1.github.io/Frontend_mentor/ecommerce-product-page-main/index_e-commerce.html" class="tec-used" target="_blank" rel="noopener">Website</a>
                            <a href="https://github.com/Mangostar1/Frontend_mentor/tree/main/ecommerce-product-page-main" class="tec-used" target="_blank" rel="noopener">Repositorio</a>
                        </div>
                    </div>
                </div>

                <div class="content-works-1">
                    <div class="content-works-2">
                        <div class="content-img-works">
                            <div class="img-works" id="img-TimeTrack"></div>
                        </div>
                        <div class="overlay-work">
                            <p class="texto-work">
                                Time Track
                            </p>
                            <p class="descript-work">
                                Este proyecto fue una prueba de desarrollo de una aplicación web en la que se crea un registro 
                                de actividades de una persona, su registro es diario, semanal y mensual.
                            </p>
                            <a href="https://mangostar1.github.io/Frontend_mentor/time-tracking-dashboard-main/index-time_tracking.html" class="tec-used" target="_blank" rel="noopener">Website</a>
                            <a href="https://github.com/Mangostar1/Frontend_mentor/tree/main/time-tracking-dashboard-main" class="tec-used" target="_blank" rel="noopener">Repositorio</a>
                        </div>
                    </div>
                </div>

                <div class="content-works-1">
                    <div class="content-works-2">
                        <div class="content-img-works">
                            <div class="img-works" id="img-NFT"></div>
                        </div>
                        <div class="overlay-work">
                            <p class="texto-work">
                                NFT
                            </p>
                            <p class="descript-work">
                                Este proyecto fue una prueba de desarrollo de una aplicación web en la que se visualiza una imagen nft.
                            </p>
                            <a href="https://mangostar1.github.io/Frontend_mentor/nft-preview-card-component-main/proyect_1.html#" class="tec-used" target="_blank" rel="noopener">Website</a>
                            <a href="https://github.com/Mangostar1/Frontend_mentor/tree/main/nft-preview-card-component-main" class="tec-used" target="_blank" rel="noopener">Repositorio</a>
                        </div>
                    </div>
                </div>

                <div class="content-works-1">
                    <div class="content-works-2">
                        <div class="content-img-works">
                            <div class="img-works" id="img-ipAddress"></div>
                        </div>
                        <div class="overlay-work">
                            <p class="texto-work">
                                IP Address Tracker
                            </p>
                            <p class="descript-work">
                                Este IP Adrress Tracker fue un ejercicio de desarrollo web en la que se trabajo con 2 APIs externas para lograr el resultado
                            </p>
                            <a href="https://mangostar1.github.io/Frontend_mentor/ip-address-tracker-master/ip-index.html" class="tec-used" target="_blank" rel="noopener">Website</a>
                            <a href="https://github.com/Mangostar1/Frontend_mentor/tree/main/ip-address-tracker-master" class="tec-used" target="_blank" rel="noopener">Repositorio</a>
                        </div>
                    </div>
                </div>

                <div class="content-works-1">
                    <div class="content-works-2">
                        <div class="content-img-works">
                            <div class="img-works" id="img-shortening"></div>
                        </div>
                        <div class="overlay-work">
                            <p class="texto-work">
                                URL Shortening
                            </p>
                            <p class="descript-work">
                                Este URL Shortening es un ejercicio de desarrollo en la que a traves de un API disminuye la longitud de una url.
                            </p>
                            <a href="https://mangostar1.github.io/Frontend_mentor/url-shortening-api-master/index-url.html" class="tec-used" target="_blank" rel="noopener">Website</a>
                            <a href="https://github.com/Mangostar1/Frontend_mentor/tree/main/url-shortening-api-master" class="tec-used" target="_blank" rel="noopener">Repositorio</a>
                        </div>
                    </div>
                </div>
            </div>
        </article>`;

    element.appendChild(workContent);
}
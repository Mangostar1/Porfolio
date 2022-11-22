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
        else if (e.target === overlayWork[3] || e.target === tecUsed[6] || e.target === tecUsed[7] || e.target === descriptWork[3]) {
            Animations(3);
        } 
        else if (e.target === overlayWork[4] || e.target === tecUsed[8] || e.target === tecUsed[9] || e.target === descriptWork[4]) {
            Animations(4);
        } 
        else if (e.target === overlayWork[5] || e.target === tecUsed[10] || e.target === tecUsed[11] || e.target === descriptWork[5]) {
            Animations(5);
        } 
        else if (e.target === overlayWork[6] || e.target === tecUsed[12] || e.target === tecUsed[13] || e.target === descriptWork[6]) {
            Animations(6);
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


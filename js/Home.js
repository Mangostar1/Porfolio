export function Home(element) {
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
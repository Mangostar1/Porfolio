export function Home(element) {
    const homeContent = document.createElement('section')
    homeContent.classList.add('sec-welcom');
    homeContent.id = "sec-welcom-id"
    homeContent.innerHTML = 
        `<article class="article" id="welcome">
            <p class="card-text">
                Frontend Developer
            </p>
        </article>`;

    element.appendChild(homeContent);
}
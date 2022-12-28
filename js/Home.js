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
        </article>`;

    element.appendChild(homeContent);
}
export function Home(element) {
    const homeContent = document.createElement('section')
    homeContent.classList.add('sec-welcom');
    homeContent.id = "sec-welcom-id"
    homeContent.innerHTML = 
        `<article class="article" id="welcome">
            <div class="hello-content" id="content-hello">
                <p class="hello-words" id="p-hello">HOLA</p>
                <p class="hello-words" id="p-omar">OMAR</p>
            </div>
            <div class="hello-content" id="content-world">
                <p class="hello-words" id="p-world">MUNDO</p>
                <p class="hello-words" id="p-zavala">ZAVALA</p>
            </div>
            <p class="card-text">
                Frontend Developer
            </p>
        </article>`;

    element.appendChild(homeContent);
}
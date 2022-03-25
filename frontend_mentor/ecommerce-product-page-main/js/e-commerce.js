/* control image */
let bigImage = document.getElementById('main-image');
let smallImg1 = document.getElementById('sm-1');
let smallImg2 = document.getElementById('sm-2');
let smallImg3 = document.getElementById('sm-3');
let smallImg4 = document.getElementById('sm-4');
//filtros div
let filtro1 = document.getElementById('filtro-1');
let filtro2 = document.getElementById('filtro-2');
let filtro3 = document.getElementById('filtro-3');
let filtro4 = document.getElementById('filtro-4'); 

smallImg1.onclick = () => {
    bigImage.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-1.jpg';
    filtro1.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
    filtro2.style = null;
    filtro3.style = null;
    filtro4.style = null;
}

smallImg2.onclick = () => {
    bigImage.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-2.jpg';
    filtro2.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
    filtro1.style = null;
    filtro3.style = null;
    filtro4.style = null;
}

smallImg3.onclick = () => {
    bigImage.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-3.jpg';
    filtro3.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
    filtro1.style = null;
    filtro2.style = null;
    filtro4.style = null;
}

smallImg4.onclick = () => {
    bigImage.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-4.jpg';
    filtro4.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
    filtro1.style = null;
    filtro2.style = null;
    filtro3.style = null;
}

    /* big image control */
bigImage.onclick = () => {
    alert('imagen grande clickeada');
}

/* control count product */
let sumaBtn = document.getElementById('suma');
let restaBtn = document.getElementById('resta');
let countProduct = document.getElementById('countPro');

sumaBtn.onclick = () => {
    countProduct.value = parseInt(countProduct.value, 0) + 1;
}

restaBtn.onclick = () => {
    countProduct.value = parseInt(countProduct.value, 0) - 1;
    if (countProduct.value <= 0) {
        countProduct.value = 0
    }
}
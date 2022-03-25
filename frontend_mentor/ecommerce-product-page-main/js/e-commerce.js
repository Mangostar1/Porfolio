/* control image */
let bigImage = document.getElementById('main-image');
let smallImg1 = document.getElementById('sm-1');
let smallImg2 = document.getElementById('sm-2');
let smallImg3 = document.getElementById('sm-3');
let smallImg4 = document.getElementById('sm-4');

smallImg1.onclick = () => {
    bigImage.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-1.jpg';
}

smallImg2.onclick = () => {
    bigImage.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-2.jpg';
}

smallImg3.onclick = () => {
    bigImage.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-3.jpg';
}

smallImg4.onclick = () => {
    bigImage.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-4.jpg';
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
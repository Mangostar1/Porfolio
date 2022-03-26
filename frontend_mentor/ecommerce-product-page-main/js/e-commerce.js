//
// control image
//
let bigImage = document.getElementById('main-image');
let smallImg1 = document.getElementById('sm-1');
let smallImg2 = document.getElementById('sm-2');
let smallImg3 = document.getElementById('sm-3');
let smallImg4 = document.getElementById('sm-4');

//
//filtros img div
//
let filtro1 = document.getElementById('filtro-1');
let filtro2 = document.getElementById('filtro-2');
let filtro3 = document.getElementById('filtro-3');
let filtro4 = document.getElementById('filtro-4'); 

//
//selected 4 default
//
filtro1.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';

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

//
// control count product
//
let sumaBtn = document.getElementById('suma');
let restaBtn = document.getElementById('resta');
let countProduct = document.getElementById('countPro');

let btnAdd = document.getElementById('addCarts');

sumaBtn.onclick = () => {
    countProduct.value = parseInt(countProduct.value, 0) + 1;
}

restaBtn.onclick = () => {
    countProduct.value = parseInt(countProduct.value, 0) - 1;
    if (countProduct.value <= 0) {
        countProduct.value = 0
    }
}

//
//btn add to carts
//
let shopNumber = document.getElementById('shopNumber');

btnAdd.onclick = () => {
    if (countProduct.value > 0) {
        shopNumber.style.cssText = 'background-color: var(--Orange); width: 24px; height: 19px; border-radius: 8px; position: absolute; top: -10px; left: 5px; font-size: 15px; text-align: center; color: white; padding: 0px 0px;';
        shopNumber.innerHTML = countProduct.value;
    } else {
        shopNumber.style.cssText = null;
        shopNumber.innerHTML = null;
    }
}

//
//divs overlay
//
let overlay = document.getElementById('overlay');
let closePop = document.getElementById('close-pop');

//
//div pop image
//
let bigImagePop = document.getElementById('main-image-popup');
let smallImg1Pop = document.getElementById('sm-1-pop');
let smallImg2Pop = document.getElementById('sm-2-pop');
let smallImg3Pop = document.getElementById('sm-3-pop');
let smallImg4Pop = document.getElementById('sm-4-pop');

//
//filtros img div
//
let filtro1Pop = document.getElementById('filtro-1-pop');
let filtro2Pop = document.getElementById('filtro-2-pop');
let filtro3Pop = document.getElementById('filtro-3-pop');
let filtro4Pop = document.getElementById('filtro-4-pop');

//
// big image control
//
bigImage.onclick = () => {
    overlay.classList.add('active');
}

closePop.onclick = () => {
    overlay.classList.remove('active');
}

filtro1Pop.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';

smallImg1Pop.onclick = () => {
    bigImagePop.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-1.jpg';
    filtro1Pop.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
    filtro2Pop.style = null;
    filtro3Pop.style = null;
    filtro4Pop.style = null;
}

smallImg2Pop.onclick = () => {
    bigImagePop.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-2.jpg';
    filtro2Pop.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
    filtro1Pop.style = null;
    filtro3Pop.style = null;
    filtro4Pop.style = null;
}

smallImg3Pop.onclick = () => {
    bigImagePop.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-3.jpg';
    filtro3Pop.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
    filtro1Pop.style = null;
    filtro2Pop.style = null;
    filtro4Pop.style = null;
}

smallImg4Pop.onclick = () => {
    bigImagePop.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-4.jpg';
    filtro4Pop.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
    filtro1Pop.style = null;
    filtro2Pop.style = null;
    filtro3Pop.style = null;
}
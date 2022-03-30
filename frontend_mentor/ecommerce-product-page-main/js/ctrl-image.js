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
    if (document.body.clientWidth > 768) {
        overlay.classList.add('active');
    }
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

let prev = document.getElementById('prev-img');
let next = document.getElementById('next-img');

prev.onclick = () => {
    try {
        if (bigImagePop.src == "http://127.0.0.1:5500/frontend_mentor/ecommerce-product-page-main/images/image-product-1.jpg") {
        bigImagePop.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-4.jpg';
        filtro4Pop.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
        filtro1Pop.style = null;
        filtro2Pop.style = null;
        filtro3Pop.style = null;
    } else if(bigImagePop.src == "http://127.0.0.1:5500/frontend_mentor/ecommerce-product-page-main/images/image-product-4.jpg") {
        bigImagePop.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-3.jpg';
        filtro3Pop.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
        filtro1Pop.style = null;
        filtro2Pop.style = null;
        filtro4Pop.style = null;
    } else if(bigImagePop.src == "http://127.0.0.1:5500/frontend_mentor/ecommerce-product-page-main/images/image-product-3.jpg") {
        bigImagePop.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-2.jpg';
        filtro2Pop.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
        filtro1Pop.style = null;
        filtro3Pop.style = null;
        filtro4Pop.style = null;
    } else {
        bigImagePop.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-1.jpg';
        filtro1Pop.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
        filtro2Pop.style = null;
        filtro3Pop.style = null;
        filtro4Pop.style = null;
    }
    } catch (error) {
        console.error(error);
    }
}

next.onclick = () => {
    try {
        if (bigImagePop.src == "http://127.0.0.1:5500/frontend_mentor/ecommerce-product-page-main/images/image-product-1.jpg") {
        bigImagePop.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-2.jpg';
        filtro2Pop.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
        filtro1Pop.style = null;
        filtro3Pop.style = null;
        filtro4Pop.style = null;
    } else if(bigImagePop.src == "http://127.0.0.1:5500/frontend_mentor/ecommerce-product-page-main/images/image-product-2.jpg") {
        bigImagePop.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-3.jpg';
        filtro3Pop.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
        filtro1Pop.style = null;
        filtro2Pop.style = null;
        filtro4Pop.style = null;
    } else if(bigImagePop.src == "http://127.0.0.1:5500/frontend_mentor/ecommerce-product-page-main/images/image-product-3.jpg") {
        bigImagePop.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-4.jpg';
        filtro4Pop.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
        filtro1Pop.style = null;
        filtro2Pop.style = null;
        filtro3Pop.style = null;
    } else {
        bigImagePop.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-1.jpg';
        filtro1Pop.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
        filtro2Pop.style = null;
        filtro3Pop.style = null;
        filtro4Pop.style = null;
    }
    } catch (error) {
        console.log(error);
    }
}

/* prev y next mobile */
let prevMobile = document.getElementById('prev-img-mobile');
let nextMobile = document.getElementById('next-img-mobile');

prevMobile.onclick = () => {
    console.log('prev presionado');
        if (bigImage.src == "http://127.0.0.1:5500/frontend_mentor/ecommerce-product-page-main/images/image-product-1.jpg") {
        bigImage.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-4.jpg';
        filtro4.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
        filtro1.style = null;
        filtro2.style = null;
        filtro3.style = null;
    } else if(bigImage.src == "http://127.0.0.1:5500/frontend_mentor/ecommerce-product-page-main/images/image-product-4.jpg") {
        bigImage.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-3.jpg';
        filtro3.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
        filtro1.style = null;
        filtro2.style = null;
        filtro4.style = null;
    } else if(bigImage.src == "http://127.0.0.1:5500/frontend_mentor/ecommerce-product-page-main/images/image-product-3.jpg") {
        bigImage.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-2.jpg';
        filtro2.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
        filtro1.style = null;
        filtro3.style = null;
        filtro4.style = null;
    } else {
        bigImage.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-1.jpg';
        filtro1.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
        filtro2.style = null;
        filtro3.style = null;
        filtro4.style = null;
    }
}

nextMobile.onclick = () => {
    console.log('nex presionado');
        if (bigImagePop.src == "http://127.0.0.1:5500/frontend_mentor/ecommerce-product-page-main/images/image-product-1.jpg") {
        bigImagePop.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-2.jpg';
        filtro2Pop.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
        filtro1Pop.style = null;
        filtro3Pop.style = null;
        filtro4Pop.style = null;
    } else if(bigImagePop.src == "http://127.0.0.1:5500/frontend_mentor/ecommerce-product-page-main/images/image-product-2.jpg") {
        bigImagePop.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-3.jpg';
        filtro3Pop.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
        filtro1Pop.style = null;
        filtro2Pop.style = null;
        filtro4Pop.style = null;
    } else if(bigImagePop.src == "http://127.0.0.1:5500/frontend_mentor/ecommerce-product-page-main/images/image-product-3.jpg") {
        bigImagePop.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-4.jpg';
        filtro4Pop.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
        filtro1Pop.style = null;
        filtro2Pop.style = null;
        filtro3Pop.style = null;
    } else {
        bigImagePop.src = '/frontend_mentor/ecommerce-product-page-main/images/image-product-1.jpg';
        filtro1Pop.style.cssText = 'background-color: rgba(255, 255, 255, 0.336); border: 4px solid var(--Orange); width: 96px; height: 96px; border-radius: 16px;';
        filtro2Pop.style = null;
        filtro3Pop.style = null;
        filtro4Pop.style = null;
    }
}
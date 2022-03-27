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
    }
}

//
//ctrl cartShop
//
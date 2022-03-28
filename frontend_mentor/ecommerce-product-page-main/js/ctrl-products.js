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
let productCount = document.getElementById('product-count-shop');
let valueShop = document.getElementById('value-shop');
let productList = document.getElementById('product-list');

btnAdd.onclick = () => {
    if (countProduct.value > 0) {
        shopNumber.style.cssText = 'background-color: var(--Orange); width: 24px; height: 19px; border-radius: 8px; position: absolute; top: -10px; left: 5px; font-size: 15px; text-align: center; color: white; padding: 0px 0px;';
        shopNumber.innerHTML = countProduct.value;
        productCount.innerHTML = countProduct.value;
        valueShop.innerHTML = '$' + countProduct.value * 125 + '.00';
        cartEmpty.style = 'display: none;';
        productList.style = 'display: block;';
    }
}

//
//ctrl cartShop
//
let cartShop = document.getElementById('shop');
let popupProduct = document.getElementById('popup-product');
let cartEmpty = document.getElementById('cartEmpty');

cartShop.onclick = () => {
    if (popupProduct.classList.contains('activo') == false) {
        popupProduct.classList.add('activo');
    } else if (popupProduct.classList.contains('activo') == true) {
        popupProduct.classList.remove('activo');
    }
}

//
// delete product in cart
//
let deleteProduct = document.getElementById('delete-product');

deleteProduct.onclick = () => {
    productList.style = 'visibility: hidden;';
    shopNumber.style = null;
    shopNumber.innerHTML = null;
    cartEmpty.style = 'display: flex;';
}
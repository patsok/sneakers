const productMinusButton = document.querySelector('.product-amount__minus');
const productPlusButton = document.querySelector('.product-amount__plus');
const productAmount = document.querySelector('.product-amount__number');


let productPriceOld = document.querySelector('.product-price__old');
let productPriceDiscount = document.querySelector('.product-price__discount');
let productPriceCurrent = document.querySelector('.product-price__current');

const Product = (title,price) => {
    const product = {};
    product.title = title;
    product.price = price;
    return product;
}

const sneakers = Product('Fall Limited Edition Sneakers',productPriceOld.textContent);


productMinusButton.addEventListener('click',() => {
    let productAmountString = parseInt(productAmount.textContent);
    if (productAmountString == 0){
        productAmount.textContent = 0;
    }
    else{
        productAmount.textContent = `${productAmountString - 1}`
    }
    changePrice();
})

productPlusButton.addEventListener('click',() => {
    let productAmountString = parseInt(productAmount.textContent);
    if (productAmountString > 9){
        productAmount.textContent = 10;
    }
    else{
        productAmount.textContent = `${productAmountString + 1}`
    }
    changePrice();
})

const changePrice = () => {
    productPriceOld.textContent = (parseInt(productAmount.textContent) * sneakers.price).toFixed(2);
    productPriceCurrent.textContent = (parseInt(productPriceOld.textContent) - parseInt(productPriceOld.textContent) * parseInt(productPriceDiscount.textContent)/100).toFixed(2);
}

productPriceOld.textContent = (parseInt(productAmount.textContent) * sneakers.price).toFixed(2);
productPriceCurrent.textContent = (parseInt(productPriceOld.textContent) - parseInt(productPriceOld.textContent) * parseInt(productPriceDiscount.textContent)/100).toFixed(2);

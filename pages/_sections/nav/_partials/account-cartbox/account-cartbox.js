const cartButton = document.querySelector('.nav-account__cart');
const cartbox = document.querySelector('.account-cartbox');


const toggleBox = () => {
    if (cartbox.classList.contains('account-cartbox--is-visible')) {
        closeBox();
    }
    else {
        openBox();
    }
}

const openBox = () => {
    cartbox.classList.add('account-cartbox--is-visible');
    cartbox.classList.remove('account-cartbox--is-hidden');
}

const closeBox = () => {
    cartbox.classList.remove('account-cartbox--is-visible');
    cartbox.classList.add('account-cartbox--is-hidden');
}

cartButton.addEventListener('click', toggleBox);

const addToCartButton = document.querySelector('.product-controls__cart');
const cartItemPop = document.querySelector('.cart-items-number');
const emptyCartString = document.querySelector('.account-cartbox__empty');
const productList = document.querySelector('.products-single');
const checkoutButton = document.querySelector('.account-cartbox-btn')
const removeButton = document.querySelector('.products-single__delete');


const addToCart = () => {
    let cartProductAmount = document.querySelector('.products-single-prop__amount');
    let cartProductName = document.querySelector('.products-single__heading');
    let cartProductPrice = document.querySelector('.products-single-prop__price');
    let cartProductPriceAll = document.querySelector('.products-single-prop__all-price');

    let cartAmount = document.querySelector('.cart-items-number span');
    let cartAmountNumber = parseInt(cartAmount.textContent);

    let productAmount = document.querySelector('.product-amount__number').textContent;
    let productName = document.querySelector('.product__heading').textContent;
    let productPriceAll = document.querySelector('.product-price__current').textContent;


    cartAmount.textContent = 1;
    cartProductAmount.textContent = productAmount;


    cartProductName.textContent = productName;
    cartProductPrice.textContent = (productPriceAll / parseInt(cartProductAmount.textContent)).toFixed(2);
    cartProductPriceAll.textContent = productPriceAll;

    changeCartVisibility();

    removeButton.addEventListener('click', changeCartVisibility);
}

const changeCartVisibility = () => {
    cartItemPop.classList.toggle('cart-items-number--is-visible');
    cartItemPop.classList.toggle('cart-items-number--is-hidden');
    emptyCartString.classList.toggle('account-cartbox__empty--is-hidden');
    productList.classList.toggle('products-single--is-hidden');
    checkoutButton.classList.toggle('account-cartbox-btn--is-hidden');
}


addToCartButton.addEventListener('click', addToCart);

const displayController = (() => {
    const cartbox = document.querySelector('.account-cartbox');

    const openBox = () => {
        cartbox.classList.add('account-cartbox--is-visible');
        cartbox.classList.remove('account-cartbox--is-hidden');
    }

    const closeBox = () => {
        cartbox.classList.remove('account-cartbox--is-visible');
        cartbox.classList.add('account-cartbox--is-hidden');
    }

    const cartItemPop = document.querySelector('.cart-items-number');
    const emptyCartString = document.querySelector('.account-cartbox__empty');
    const productList = document.querySelector('.products-single');
    const checkoutButton = document.querySelector('.account-cartbox-btn')

    const changeCartVisibility = () => {
        cartItemPop.classList.toggle('cart-items-number--is-visible');
        cartItemPop.classList.toggle('cart-items-number--is-hidden');
        emptyCartString.classList.toggle('account-cartbox__empty--is-hidden');
        productList.classList.toggle('products-single--is-hidden');
        checkoutButton.classList.toggle('account-cartbox-btn--is-hidden');
    }

    return { openBox, closeBox, changeCartVisibility }
})()

const cartController = (() => {
    const cartbox = document.querySelector('.account-cartbox');

    const toggleBox = () => {
        if (cartbox.classList.contains('account-cartbox--is-visible')) {
            displayController.closeBox();
        }
        else {
            displayController.openBox();
        }
    }

    //show or hide cart box
    const cartButton = document.querySelector('.nav-account__cart');
    cartButton.addEventListener('click', toggleBox);

    let cartAmount = document.querySelector('.cart-items-number span');

    const addToCart = () => {
        let cartProductAmount = document.querySelector('.products-single-prop__amount');
        let cartProductName = document.querySelector('.products-single__heading');
        let cartProductPrice = document.querySelector('.products-single-prop__price');
        let cartProductPriceAll = document.querySelector('.products-single-prop__all-price');
        let productAmount = document.querySelector('.product-amount__number').textContent;
        let productName = document.querySelector('.product__heading').textContent;
        let productPriceAll = document.querySelector('.product-price__current').textContent;

        cartProductAmount.textContent = productAmount;
        cartProductName.textContent = productName;
        cartProductPrice.textContent = (productPriceAll / parseInt(cartProductAmount.textContent)).toFixed(2);
        cartProductPriceAll.textContent = productPriceAll;

        //don't remove item if there is item in cart
        if(cartAmount.textContent==0){
            displayController.changeCartVisibility();
        }

        cartAmount.textContent = 1;
    }

    //remove item from cart
    let removeButton = document.querySelector('.products-single__delete');
    removeButton.addEventListener('click', () => {
        displayController.changeCartVisibility();
        cartAmount.textContent = cartAmount.textContent -1;
    })

    //add item(-s) to cart
    const addToCartButton = document.querySelector('.product-controls__cart');
    addToCartButton.addEventListener('click', addToCart);

    //checkout button will remove item from cart and hide cart
    const checkoutButton = document.querySelector('.account-cartbox-btn');
    checkoutButton.addEventListener('click',() => {
        displayController.changeCartVisibility();
        cartAmount.textContent = cartAmount.textContent -1;
        toggleBox();
    })
})()













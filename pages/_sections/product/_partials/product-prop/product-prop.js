const productLibrary = (() => {
    let productsList = [];

    const Product = (title, price) => {
        const product = {};
        product.title = title;
        product.price = price;
        productsList.push(product);
        return product;
    }

    let productPriceOld = document.querySelector('.product-price__old');
    const sneakers = Product('Fall Limited Edition Sneakers', productPriceOld.textContent);
    const boots = Product('Winter Limited Edition Boots', 319.99);

    const getProduct = (index) => {
        return productsList[index];
    }
    
    return {getProduct};
})()

const displayController = (() => {
    let productPriceOld = document.querySelector('.product-price__old');
    let productPriceDiscount = document.querySelector('.product-price__discount');
    let productPriceCurrent = document.querySelector('.product-price__current');
    let productAmount = document.querySelector('.product-amount__number');

    const changePrice = () => {
        productPriceOld.textContent = (parseInt(productAmount.textContent) * productLibrary.getProduct(0).price).toFixed(2);
        productPriceCurrent.textContent = (parseInt(productPriceOld.textContent) - parseInt(productPriceOld.textContent) * parseInt(productPriceDiscount.textContent) / 100).toFixed(2);
    }

    changePrice();

    return { changePrice }
})()

const productController = (() => {
    const productMinusButton = document.querySelector('.product-amount__minus');
    const productPlusButton = document.querySelector('.product-amount__plus');
    let productAmount = document.querySelector('.product-amount__number');

    productMinusButton.addEventListener('click', () => {
        let productAmountNumber = parseInt(productAmount.textContent);
        if (productAmountNumber == 0) {
            productAmount.textContent = 0;
        }
        else {
            productAmount.textContent = `${productAmountNumber - 1}`
        }
        displayController.changePrice();
    })

    productPlusButton.addEventListener('click', () => {
        let productAmountNumber = parseInt(productAmount.textContent);
        if (productAmountNumber > 9) {
            productAmount.textContent = 10;
        }
        else {
            productAmount.textContent = `${productAmountNumber + 1}`
        }
        displayController.changePrice();
    })
})()





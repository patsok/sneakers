const displayController = (() => {
    const hamburgerButton = document.querySelector('.nav-hamburger > .font-icon-menu');
    const hamburgerCloseButton = document.querySelector('.nav-hamburger > .font-icon-close');
    const navMobile = document.querySelector('.nav__items--mobile');
    const navShadow = document.querySelector('.nav__shadow');

    //toggle visibility on mobile menu
    const toggleMenu = () => {
        hamburgerCloseButton.classList.toggle('nav-hamburger__btn--is-visible');
        hamburgerCloseButton.classList.toggle('nav-hamburger__btn--is-hidden');
        hamburgerButton.classList.toggle('nav-hamburger__btn--is-visible');
        hamburgerButton.classList.toggle('nav-hamburger__btn--is-hidden');
        navMobile.classList.toggle('nav__items--mobile--is-visible');
        navMobile.classList.toggle('nav__items--mobile--is-hidden');
        navShadow.classList.toggle('nav__shadow--is-visible');
        navShadow.classList.toggle('nav__shadow--is-hidden');
    }

    return {toggleMenu}
})()

const menuController = (()=>{
    const html = document.querySelector("html")

    const openMenu = () => {
        history.pushState(null, null, document.URL);
        displayController.toggleMenu()
        html.setAttribute('style', 'overflow: hidden');
    }

    const closeMenu = () => {
        displayController.toggleMenu()
        html.setAttribute('style', '');
    }

    //close menu on click outside of mobile menu
    const navShadow = document.querySelector('.nav__shadow');
    navShadow.addEventListener('click', closeMenu);

    //close menu on mobile after clicking menu item
    const navMobileItems = document.querySelectorAll('.nav__items--mobile ul li');
    navMobileItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });
    
    //mobile navigation buttons
    const hamburgerButton = document.querySelector('.nav-hamburger > .font-icon-menu');
    const hamburgerCloseButton = document.querySelector('.nav-hamburger > .font-icon-close');
    hamburgerButton.addEventListener('click', openMenu);
    hamburgerCloseButton.addEventListener('click', closeMenu);

    //back button (swipe back) on browsers closes menu
    window.addEventListener('popstate', () => {
        const state = document.querySelector('.nav__items--mobile--is-visible');
        if (state !== null) {
            closeMenu();
        }
    })
})()
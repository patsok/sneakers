const hamburgerButton = document.querySelector('.nav-hamburger > .icon-menu');
const hamburgerCloseButton = document.querySelector('.nav-hamburger > .icon-close');
const navMobile = document.querySelector('.nav__items--mobile');
const navShadow = document.querySelector('.nav__shadow');
const navMobileItems = document.querySelectorAll('.nav__items--mobile ul li');

const openMenu = () => {
    history.pushState(null, null, document.URL);

    hamburgerCloseButton.classList.add('nav-hamburger__btn--is-visible');
    hamburgerCloseButton.classList.remove('nav-hamburger__btn--is-hidden');
    hamburgerButton.classList.remove('nav-hamburger__btn--is-visible');
    hamburgerButton.classList.add('nav-hamburger__btn--is-hidden');
    navMobile.classList.remove('nav__items--mobile--is-hidden');
    navMobile.classList.add('nav__items--mobile--is-visible');
    navShadow.classList.add('nav__shadow--is-visible');
    navShadow.classList.remove('nav__shadow--is-hidden');
}

const closeMenu = () => {
    hamburgerCloseButton.classList.remove('nav-hamburger__btn--is-visible');
    hamburgerCloseButton.classList.add('nav-hamburger__btn--is-hidden');
    hamburgerButton.classList.add('nav-hamburger__btn--is-visible');
    hamburgerButton.classList.remove('nav-hamburger__btn--is-hidden');
    navMobile.classList.remove('nav__items--mobile--is-visible');
    navMobile.classList.add('nav__items--mobile--is-hidden');
    navShadow.classList.remove('nav__shadow--is-visible');
    navShadow.classList.add('nav__shadow--is-hidden');
}

navShadow.addEventListener('click',closeMenu);

window.addEventListener('popstate',()=>{
    const state = document.querySelector('.nav__items--mobile--is-visible');
    if (state !== null){
        closeMenu();
    }
})

navMobileItems.forEach(item => {
    item.addEventListener('click',closeMenu);
});


hamburgerButton.addEventListener('click',openMenu);
hamburgerCloseButton.addEventListener('click',closeMenu);




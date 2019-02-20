'use strict'


let toggleMenu = document.querySelector('.toggle-menu');
let navigation = document.querySelector('.header-nav');
let navigationItems = document.querySelectorAll('.header-nav .nav-item');
let width = document.documentElement.clientWidth;

const handler = () => {
    navigation.style.display = 'none';
}

const getWidth = () => {
    width = document.documentElement.clientWidth;
    return showToggleMenu();
}

const showToggleMenu = () => {
    if (width <= 992) {
        toggleMenu.style.display = 'block';
        navigationItems.forEach((item) => {
            item.addEventListener('click', handler);
        })
    } else {
        toggleMenu.style.display = 'none';
        navigation.style.display ='';
        navigationItems.forEach((item) => {
            item.removeEventListener('click', handler);
        })
    }
}

window.onload = () => {
    return getWidth();
}

window.addEventListener('resize', event => {
    return getWidth();
})

toggleMenu.addEventListener('click', event => {
    if (navigation.style.display == 'block') {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'block';
    }
})

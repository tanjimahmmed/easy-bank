const navLinks = document.querySelector('.nav_links');
const hamburgerBtn = document.querySelector('.hamburger_btn');
const toggleImage = document.querySelector('#toggle_img');

hamburgerBtn.addEventListener('click', () => {
    console.log('click');
    navLinks.classList.toggle('open');
    isOpen = navLinks.classList.contains('open');
    if (isOpen) {
        toggleImage.src = './img/icon-close.svg';
    }else {
        toggleImage.src = './img/icon-hamburger.svg';
    }

});
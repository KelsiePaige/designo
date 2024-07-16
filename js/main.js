const openMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-nav')

// Hides mobile menu
mobileMenu.classList.add('hide');
closeMenu.classList.add('hide');

// Toggles mobile menu
const openNav = function () {
    openMenu.addEventListener("click", () => {
        openMenu.classList.add('hide');
        closeMenu.classList.remove('hide');
        mobileMenu.classList.toggle('hide');
    });
};

const closeNav = function () {
    closeMenu.addEventListener("click", () => {
        closeMenu.classList.add('hide');
        openMenu.classList.remove('hide');
        mobileMenu.classList.toggle('hide');
    });
}

openNav();
closeNav();
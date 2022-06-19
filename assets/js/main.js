// Show menu
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}

navLink.forEach(navLinkElement => navLinkElement.addEventListener('click', linkAction))

// Change background header
function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 80){
        header.classList.add('scroll-header')
    }else{
        header.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader)
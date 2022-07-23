const btnMenuMobile = document.querySelector('.menu-mobile-icon');
const menuMobile = document.querySelector('.menu-mobile');
const back_to_top = document.querySelector('.back-to-top');
const arrow_down = document.querySelector('.arrow-down');

btnMenuMobile.addEventListener('click', () => {
    if(menuMobile.classList.contains('menu-closed')) {
            menuMobile.classList.remove('menu-closed');
            menuMobile.classList.add('menu-opened');
        } else {
            menuMobile.classList.add('menu-closed');
            menuMobile.classList.remove('menu-opened');
    }
})



back_to_top.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})


addEventListener('scroll', () => {
    if(window.scrollY == 0){
        back_to_top.style.display = 'none'
    } else {
        back_to_top.style.display = 'flex'
    }
})


arrow_down.addEventListener('click', () => {
    window.scrollTo({
        top: 750,
        left: 0,
        behavior: 'smooth'
    })
})

addEventListener('scroll', () => {
    if(window.scrollY == 750){
        arrow_down.style.display = 'none'
    } else {
        arrow_down.style.display = 'flex'
    }
})



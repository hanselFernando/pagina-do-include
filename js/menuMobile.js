const botaoMenu = document.querySelector('.botao__menu-mobile')
const menuMobile = document.querySelector('.menu-mobile')
var menuAberto = false

botaoMenu.addEventListener('click', function () {
    menuAberto ? menuMobile.classList.add('invisivel') : menuMobile.classList.remove('invisivel')
    menuAberto ? botaoMenu.children[0].setAttribute('src', '../assets/icons/menu.svg') : botaoMenu.children[0].setAttribute('src', '../assets/icons/menu-close.svg') 

    menuAberto = !menuAberto
})
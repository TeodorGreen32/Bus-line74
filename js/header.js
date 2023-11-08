// import { disablePageScroll, enablePageScroll } from 'scroll-lock';
function clickBurger(element){
    element.classList.toggle('header__burger-menu-active');
    let sidebar = document.querySelector('.side-bar');
    sidebar.classList.toggle('side-bar-active');
    if(sidebar.classList.contains('side-bar-active')){
        scrollLock.disablePageScroll();
    }else{
        scrollLock.enablePageScroll();
    }
    
}
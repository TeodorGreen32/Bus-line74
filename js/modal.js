function openModalWindow() {
    console.log('openModal')
    let modal = document.querySelector('.main-modal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.toggle('modal-open');
        if(modal.classList.contains('modal-open')){
            scrollLock.disablePageScroll();
        }else{
            console.log("123");
            scrollLock.enablePageScroll();
        }
        setTimeout(() => {
            modal.querySelector('.modal-content').classList.toggle('modal-active');
        }, 250);
    }, 100);
    
    

}

function closeModalWindow() {
    
    
    let modal = document.querySelector('.main-modal');
    modal.addEventListener('click', e => {
        scrollLock.enablePageScroll();
        console.log(e.target)
        if (e.target.classList.contains('modal-open') || (e.target.classList.contains('modal-btn-close'))) {
            modal.classList.remove('modal-open');
            
            setTimeout(() => {
                e.target.style.display = 'none';
            }, 100);

        }
    })
    
}

closeModalWindow();
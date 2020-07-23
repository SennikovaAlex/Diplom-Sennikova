const burgerMenu = () => {
    const menuBurger = document.querySelector('.menu-button');
    const popupMenu = document.querySelector('.popup-menu');
    menuBurger.addEventListener('click', () => {
        popupMenu.style.display = 'flex'
    });
    popupMenu.addEventListener('click', () => {
        let target = event.target;
        if (target.classList.contains('close-popup') || target.closest('.scroll')) {
            popupMenu.style.display = 'none'
         }
    })
}

export default burgerMenu;
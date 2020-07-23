const actionGift = () => {
    const gift = document.querySelector('.fixed-gift');
    const giftModalWindow = document.querySelector('#gift');
    if (gift !== null) {   
        gift.addEventListener('click', () => {
            console.log(giftModalWindow)
            giftModalWindow.style.display = 'inline';
            gift.parentNode.removeChild(gift);

        });
        giftModalWindow.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('close_icon') || target.classList.contains('close-btn')) {
            giftModalWindow.style.display = 'none'
        } else {
            target = target.closest('.form-content');
             
            if (!target) {
                giftModalWindow.style.display = 'none';
            }
        }

});}

};

export default actionGift;
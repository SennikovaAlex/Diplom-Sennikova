import { AST_StatementWithBody } from "terser";

const burgerMenu = () => {
    const clubSelectButton = document.querySelector('.club-select');
    const clubSelect = clubSelectButton.querySelector('ul');
    const menuButton = document.querySelector('.menu-button');
    const body = document.querySelector('body');
    let clientWidth = document.documentElement.clientWidth;
    
    clubSelectButton.addEventListener('click', () => {
        if (!clubSelect.style.display || clubSelect.style.display === 'none') {
            clubSelect.style.display = 'inline';
        } else {
            clubSelect.style.display = 'none';
        }       
    })

    body.addEventListener('click', (e) => {
        let target = event.target;
        if(!target.closest('.club-select')) {
            clubSelect.style.display = 'none';
        }
    })
};

export default burgerMenu;
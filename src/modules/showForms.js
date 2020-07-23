const showModalWindow = (button, moduleForm) => {
    const form = document.querySelector(`#${moduleForm}`);
    const body = document.querySelector('body');
    button.addEventListener('click', () => {               
            form.style.display = 'inline';       
    })

    form.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('close_icon')) {
            form.style.display = 'none'
        } else {
            target = target.closest('.form-content');
             
            if (!target) {
                form.style.display = 'none';
            }
        }
        
    }) 
};

export default showModalWindow;
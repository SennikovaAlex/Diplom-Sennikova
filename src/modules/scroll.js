const scrollAction = () => {
    let clientWidth = document.documentElement.clientWidth;
    const topMenu = document.querySelector('.top-menu');
    const arrow = document.getElementById('totop');
    console.log(arrow);
    arrow.style.display = 'none';

    
    window.addEventListener('scroll', () => {
        if(clientWidth < 768) {
            if(window.scrollY > 186) {
                topMenu.style.position = 'fixed'; 
            } else {
                topMenu.style.position = '';
            }
            };

        if(window.scrollY < 700) {
            arrow.style.display = 'none'; 
        } else {
            arrow.style.display = 'inline';
        }
      
    });

}

export default scrollAction;
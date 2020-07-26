const caruselSlider = () => {
    const container = document.querySelector('.services-slider');
    const slides = container.querySelectorAll('.slide');
    const slide = container.querySelector('.slide');
    const next = container.querySelector('#next');
    const prev = container.querySelector('#prev');

    let left = 0;
    
     slide.style.cssText = `transition: all 0.2s linear 0s; min-width: 210px; margin-left: ${left}px`;

    const nextSlider = () => {
        if (left < 1125) {
           left += 225;
        slide.style.cssText = `transition: all 0.2s linear 0s; margin-left: -${left}px`; 
        
        } else {
            left = 0;
            slide.style.cssText = `transition: all 0.2s linear 0s; margin-left: -${left}px`;
            
        }
                      
    }
    const prevSlider = () => {        
            left += -225;
            if (left > 0) {
                slide.style.cssText = `transition: all 0.2s linear 0s; min-width: 210px; margin-left: -${left}px`;
            } else {
                left = 900;
                slide.style.cssText = `transition: all 0.2s linear 0s; min-width: 210px; margin-left: -${left}px`;
            }
            
           
    }
    prev.addEventListener('click', prevSlider);
    next.addEventListener('click', nextSlider);
}

export default caruselSlider;


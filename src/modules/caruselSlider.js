const caruselSlider = () => {
    const container = document.querySelector('.services-slider');
    const slides = container.querySelectorAll('.slide');
    const slide = container.querySelector('.slide');
    const next = container.querySelector('#next');
    const prev = container.querySelector('#prev');

    let count = 0;
    let left = 0;
    
     slide.style.cssText = `transition: all 0.2s linear 0s; min-width: 210px; margin-left: ${left}px`;

    const nextSlider = () => {
        count++
        if (count < 6) {
           left += 225;
        slide.style.cssText = `transition: all 0.2s linear 0s; margin-left: -${left}px`; 
        
        } else {
            count = 0;
            left = 0;
            slide.style.cssText = `transition: all 0.2s linear 0s; margin-left: -${left}px`;
            
        }
                      
    }
    const prevSlider = () => {
        
        count--
        if(count > 0) {
            left += -225
            slide.style.cssText = `transition: all 0.2s linear 0s; min-width: 210px; margin-left: -${left}px`;
        }   
    }
    prev.addEventListener('click', prevSlider);
    next.addEventListener('click', nextSlider);
}

export default caruselSlider;


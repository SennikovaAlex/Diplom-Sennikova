const fotoGallary = () => {
    const slide = document.querySelectorAll('.slide-fg'),
        btn = document.querySelectorAll('.slider-arrow');
        // dot = document.querySelectorAll('.dot'),
    const slider = document.querySelector('.gallery-slider');

    function getDots() {
        const portfolioContent = document.querySelector('.wrapper');

        let dots = document.createElement('ul');
        dots.classList.add('slider-dots');
        slider.appendChild(dots);

        
        for (let i = 0; i < slide.length; i++) {
            let dot = document.createElement('li');
            let button = document.createElement('button');
            button.classList.add('dotBtn');
            dot.appendChild(button);
            
            dots.appendChild(dot);

        }
       
    };

    getDots();
    const dot = slider.querySelectorAll('li');
    dot[0].classList.add('slick-active');

    let currentSlide = 0;
    let interval;

    const prevSlide = (elem, index, visiable) => {
        elem[index].style.display = `${visiable}`;
   };

   const nextSlide = (elem, index, visiable) => {
       elem[index].style.display = `${visiable}`;
   };

   const prevSlideDot = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
    };

    const nextSlideDot = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'none');
        prevSlideDot(dot, currentSlide, 'slick-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'flex');
        nextSlideDot(dot, currentSlide, 'slick-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        
        // if (!target.closest('.dotBtn')) {
        //     console.log('return')
        //     return;
        // }
        prevSlide(slide, currentSlide, 'none');
        prevSlideDot(dot, currentSlide, 'slick-active');
        
        if (target.closest('.next')) {
            currentSlide++;
        } else if (target.closest('.prev')) {
            currentSlide--;

        } else if (target.closest('BUTTON') || target.closest('LI')) {
            const buttons = document.querySelectorAll('.dotBtn')
            buttons.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                    console.log(index)
                }
            });
        }
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'inline');
        nextSlideDot(dot, currentSlide, 'slick-active');

    });
    startSlide(3000);

    slider.addEventListener('mouseover', (event) => {
        if (event.target.closest('SPAN') || event.target.closest('.dotBtn')) {
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', (event) => {
        if (event.target.closest('SPAN') || event.target.closest('.dotBtn')) {
            startSlide();
        }
    });
}

export default fotoGallary;
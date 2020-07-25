const slider = () => {
    const slides = document.querySelectorAll('#slide-cont');
    let currentSlide = 0;
    const time = 3000;
    const prevSlide = (elem, index, visiable) => {
         elem[index].style.display = `${visiable}`;
    };

    const nextSlide = (elem, index, visiable) => {
        elem[index].style.display = `${visiable}`;
    };

    const changeSlide = () => {
        prevSlide(slides, currentSlide, 'none');
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'flex');
        
        
    }
    setInterval(changeSlide, time);
}

export default slider;
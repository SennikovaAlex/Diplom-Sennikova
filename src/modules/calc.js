const calc = () => {
    
    const cardMozaika = document.querySelector('#card_leto_mozaika');
    if (cardMozaika !== null) {    
    const cardSchelkovo = document.querySelector('#card_leto_schelkovo');
    const time = document.querySelector('.time');
    const priceTotal = document.querySelector('#price-total');
    const timeVariants = time.querySelectorAll('input');
    const block = document.querySelector('#card_order');
    const inputPromo = document.querySelector('.promocodeText');
    const mozaikaPrice = {
        1: 1999,
        6: 9900,
        9: 13900,
        12: 19900
    };
    const schelkovoPrice = {
        1: 2999,
        6: 14990,
        9: 21990,
        12: 24990
    };

     
    let chosenTime;

    priceTotal.textContent = 1999;
    
    block.addEventListener('change', () => {
        
        if(cardMozaika.checked) {
            timeVariants.forEach((elem) => {
                if (elem.checked) {
                    chosenTime = elem.value;
                    priceTotal.textContent = mozaikaPrice[chosenTime];
                    if (inputPromo.value === 'ТЕЛО2020') {
                        priceTotal.textContent = Math.ceil(priceTotal.textContent * 0.70);
                    };
                }                      
            });
        } else {
            timeVariants.forEach((elem) => {
                if (elem.checked) {
                    chosenTime = elem.value;
                    priceTotal.textContent = schelkovoPrice[chosenTime];
                    if (inputPromo.value === 'ТЕЛО2020') {
                        priceTotal.textContent = Math.ceil(priceTotal.textContent * 0.70);
                    };
                }
                     
            });
        }
                
        });
    }
    const form = document.querySelector('#card_order');
    form.addEventListener('submit', () => {
        calc()
    })
}

export default calc;
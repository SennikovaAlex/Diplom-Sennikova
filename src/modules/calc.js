const calc = () => {
    const cardMozaika = document.querySelector('#card_leto_mozaika');
    const cardSchelkovo = document.querySelector('#card_leto_schelkovo');
    const time = document.querySelector('.time');
    const priceTotal = document.querySelector('#price-total');
    const timeVariants = time.querySelectorAll('input');
    const block = document.querySelector('#card_order');
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
                }
                       
            });
        } else {
            timeVariants.forEach((elem) => {
                if (elem.checked) {
                    chosenTime = elem.value;
                    priceTotal.textContent = schelkovoPrice[chosenTime];
                }
                 
            });
        }
    });
    

    //     priceTotal.textContent = mozaikaPrice[1];  
    //     timeVariants.forEach((elem) => {
    //     elem.addEventListener('input', () => {
    //         if (elem.checked) {
    //         chosenTime = elem.value;
    //         priceTotal.textContent = mozaikaPrice[chosenTime];
    //         }
    //     }); 
    //     });

        
    // cardSchelkovo.addEventListener('input', () => {
    //     if(cardSchelkovo.checked) {
    //         timeVariants.forEach((elem) => {
    //             elem.addEventListener('input', () => {
    //                 if (elem.checked) {
    //                 chosenTime = elem.value;
    //                 priceTotal.textContent = schelkovoPrice[chosenTime];
    //                 }
    //             }); 
    //             });
    //     }
    // })
     
    


   
    

    
}

export default calc;
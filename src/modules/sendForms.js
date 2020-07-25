const sendForms = (formSelect) => {
    const errorMessage = 'Что-то пошло не так',
    loadMessage = 'Загрузка ...',
    successMesage = 'Спасибо! Мы скоро с Вами свяжемся';

const form = document.getElementById(formSelect);
const statusMessage = document.createElement('div');
statusMessage.style.cssText = 'font-size: 2rem; color: white';
;

const phoneInputs = form.querySelector('[type="tel"]');

phoneInputs.addEventListener('input', () =>{
    phoneInputs.value = phoneInputs.value.replace(/[^\d+]/g, '');
    //(/(?<!^)\+|[^\d+]/g, '');
});

const textInputs = form.querySelectorAll('[type="text"]');
console.log(textInputs);
textInputs.forEach((elem) => {
    if(elem !== null && !elem.classList.contains('promocodeText')) {
        elem.addEventListener('input', () =>{
            elem.value = elem.value.replace(/[^А-Яа-я\s]/g, '');
    });
}
})



// const messageInputs = document.querySelector('#form2-message');
// messageInputs.addEventListener('input', () =>{
//     messageInputs.value = messageInputs.value.replace(/[^А-Яа-я\s]/g, '');
// });

form.addEventListener('submit', (event) => {
    const dataPricessing = form.querySelector('.data-processing');
    
        if(dataPricessing === null || dataPricessing.checked) {
            if (phoneInputs.value.length >= 5 && phoneInputs.value.length <= 15) {
                event.preventDefault();
                form.appendChild(statusMessage);
                if (!statusMessage.textContent) {
                    statusMessage.style.cssText = 'font-size: 2rem; color: white';
                    statusMessage.textContent = 'Загрузка ...';
                    if (form.classList.contains('black')) {
                        statusMessage.style.cssText = 'font-size: 2rem; color: black';
                    }
                   
                } else {
                    statusMessage.textContent = '';
                    statusMessage.textContent = 'Загрузка ...';
                    statusMessage.style.cssText = 'font-size: 2rem; color: white';
                    if (form.classList.contains('black')) {
                        statusMessage.style.cssText = 'font-size: 2rem; color: black';
                    }
                }
        
                const formData = new FormData(form);
                let body = {};
                console.log(body)
        
                for (let val of formData.entries()) {
                    body[val[0]] = val[1];
        
                };
        
                postData(body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200');
                        }
        
                        const thanks = document.getElementById('thanks');
                        thanks.style.display = 'inline';
                        
                        thanks.addEventListener('click', (event) => {
                            let target = event.target;
                            if (target.classList.contains('close_icon') || target.classList.contains('close-btn')) {
                                thanks.style.display = 'none'
                            } else {
                                target = target.closest('.form-content');
                                 
                                if (!target) {
                                    thanks.style.display = 'none';
                                }
                            }
                            
                            if (dataPricessing !== null) {
                                dataPricessing.checked = false;
                            
                            }
                            
                            
                        }) 
                        
                        if (form.classList.contains('modal-form')) {
                            const modal = document.querySelectorAll('.popup-form');
                            modal.forEach((item) => {item.style.display = 'none'})
                        }
                        statusMessage.remove();
                        
                    })
                    .catch((error) => {
                        console.log(error);
                        const errorMassage = document.getElementById('thanks');
                        errorMassage.querySelector('h4').textContent = 'Извините';
                        errorMassage.querySelector('p').textContent = errorMessage;
                        statusMessage.remove();
        
                        errorMassage.style.display = 'inline';
                        errorMassage.addEventListener('click', (event) => {
                            let target = event.target;
                            if (target.classList.contains('close_icon') || target.classList.contains('close-btn')) {
                                errorMassage.style.display = 'none'
                            } else {
                                target = target.closest('.form-content');
                                 
                                if (!target) {
                                    errorMassage.style.display = 'none';
                                }
                            };
                            
                            if (dataPricessing !== null) {
                                dataPricessing.checked = false;
                            
                            }
                        });
        
                        
                        }); 
                    
        
                const inputs = form.querySelectorAll('input');
                inputs.forEach((elem) => {
                    if (elem.type !== "radio" && elem.type !== "hidden") {
                        elem.value = ''
                    }
                    
                });
            } else {
                event.preventDefault();
                form.appendChild(statusMessage);
                const phoneInput = form.querySelector('[type="tel"]');
                phoneInput.value = '';
                statusMessage.textContent = 'введите корректный номер телефона';

                if (form.classList.contains('black')) {
                    statusMessage.style.cssText = 'font-size: 2rem; color: black';
                } else { 
                    statusMessage.style.cssText = 'font-size: 2rem; color: black';
                }
                
            }
        } else {
            event.preventDefault();
            form.appendChild(statusMessage);
                if (!statusMessage.textContent) {
                    statusMessage.textContent = 'Необходимо дать согласие на обработку даных';
                    statusMessage.style.cssText = 'font-size: 1rem; color: white';
                    if (form.classList.contains('black')) {
                        statusMessage.style.cssText = 'font-size: 2rem; color: black';
                    } 
                    
                } else {
                    statusMessage.textContent = '';
                    statusMessage.textContent = 'Необходимо дать согласие на обработку даных';
                    statusMessage.style.cssText = 'font-size: 1rem; color: white';
                    if (form.classList.contains('black')) {
                        statusMessage.style.cssText = 'font-size: 2rem; color: black';
                    } 
                }
        }
    
   
    

});

const postData = (body) => { 
    return fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
};


}


export default sendForms;

// free-visit-form
// callback-form
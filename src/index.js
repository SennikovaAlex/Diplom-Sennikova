'use strict';
const freeVisit = document.querySelector('.open-popup');
const freeVisitForm = 'free_visit_form';
const callbackBtn = document.querySelector('.callback-btn');
const callBackForm = 'callback_form';




import burgerMenu from './modules/burgerMenu';
import scrollAction from './modules/scroll';
import showModalWindow from './modules/showForms';


burgerMenu();
scrollAction();
showModalWindow(freeVisit, freeVisitForm);
showModalWindow(callbackBtn, callBackForm);
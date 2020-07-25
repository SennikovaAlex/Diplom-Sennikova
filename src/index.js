'use strict';
const freeVisit = document.querySelector('.open-popup');
const freeVisitForm = 'free_visit_form';
const callbackBtn = document.querySelector('.callback-btn');
const callBackForm = 'callback_form';




import chooseClub from './modules/chooseClub';
import scrollAction from './modules/scroll';
import showModalWindow from './modules/showForms';
import actionGift from './modules/gift';
import burgerMenu from './modules/burgerMenu';
import calc from './modules/calc';
import sendForms from './modules/sendForms';
import slider from './modules/slider';

slider();
chooseClub();
calc();
burgerMenu();
scrollAction();
showModalWindow(freeVisit, freeVisitForm);
showModalWindow(callbackBtn, callBackForm);
actionGift();
sendForms('footer_form');
sendForms('card_order');
sendForms('banner-form');
sendForms('form2');
sendForms('form1');
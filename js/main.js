import Hamburger from './hamburger.js';
import PopupMessage from './popup-message.js';
import PopupForm from './popup-form.js';
import Query from './query.js';

const $hamburger = $('.hamburger');
const hamburger = new Hamburger($hamburger);


const errIcon = '';
const okIcon = '';
const errColor = '#790101';
const okColor = '#4ad11d';

const signUpLabels = {
    "First Name": 'text',
    "Last Name": 'text',
    "E-mail": 'e-mail',
}

const popupSignUp = new PopupForm(signUpLabels);

const url = 'https://httpbin.org/status/200';
const query = new Query(url);

$('.account-card__button').click(e => popupSignUp.appear(e));

popupSignUp.setHandler(() => {
    query.send().then(res => {
        const icon = res ? okIcon : errIcon;
        const color = res ? okColor : errColor;
        const msg = res ? 
            'Your personal data has been sent.' : 
            'An error occured while sending data';
        
        const popupAnswer = new PopupMessage(icon, color, msg);
        popupAnswer.appear();

        setTimeout(() => {
            if (popupAnswer.isOpen) {
                popupAnswer.disappear();
            }
        }, 2000);
    })
})

$('.image-block__likes').click(() => {
    const $count = $('.image-block__likes-count');
    if ($count.text() === '100') {
        $('.image-block__likes button').css('filter', 'brightness(1.8)');
        $count.css('text-shadow', '0px 0px 10px #ffffff');
        $count.text('101');

    } else {
        $('.image-block__likes button').css('filter', 'brightness(1)');
        $count.css('text-shadow', '');
        $count.text('100');
    }
})
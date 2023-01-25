const body = document.querySelector('body');

let unlock = true;
const timeoute = 800;

function popupOpen(currentPopup) {
    console.log(currentPopup);
    if (currentPopup) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', (e) => {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive) {
    if (unlock) {
        popupActive.classList.remove('open');
    }
}

function bodyLock() {

    const lockPaddingValue = 10;
    //const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    for (let index = 0; index < lockPaddingValue.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeoute);
}

export function cardmodal() {

    const cardbtn = document.querySelectorAll('.card_btn');
    let card_modal = document.querySelector('.card_modal');

    cardbtn.forEach((btnItem, idx) => {
        btnItem.addEventListener('click', () => {
            let itemClick = JSON.parse(localStorage.getItem('allMebel'));
            let name = itemClick.products[idx].name;
            let img = itemClick.products[idx].img;
            let price = itemClick.products[idx].price;
            console.log(card_modal.childNodes[3].childNodes);

            const curentPopup = document.getElementById('popup');
            console.log(curentPopup);
            popupOpen(curentPopup);

            card_modal.classList.remove('card_modal__hidden');

            card_modal.childNodes[1].childNodes[1].src = img;
            card_modal.childNodes[3].childNodes[1].innerText = name;
            card_modal.childNodes[3].childNodes[9].innerText = price + ' руб.';

            let myModalEl = document.getElementById('myModal');
            console.log(myModalEl);

        });
    });


}
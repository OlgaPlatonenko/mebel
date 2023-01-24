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

            card_modal.classList.remove('card_modal__hidden');

            card_modal.childNodes[1].childNodes[1].src = img;
            card_modal.childNodes[3].childNodes[1].innerText = name;
            card_modal.childNodes[3].childNodes[9].innerText = price + ' руб.';

            let myModalEl = document.getElementById('myModal');
            console.log(myModalEl);

        });
    });


}
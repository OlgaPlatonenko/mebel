
let mebelList = JSON.parse(localStorage.getItem('allMebel'));

export function renderCard(mebelList) {
    const templateCard = document.getElementById('card-template').content.querySelector('.card');
    let meblist = document.querySelector('.mebel-list');
//removeAllChildNodes();
console.log(meblist);
mebelList.forEach(element => {
    let cardNode = templateCard.cloneNode(true);
  
    let titleNode = cardNode.querySelector('.card_header__title');
    let posterNode = cardNode.querySelector('.card-header__image');
    console.dir(titleNode);
    let descr = cardNode.querySelector('.card_body__describe');
    let price = cardNode.querySelector('.card_body__price');
    

    titleNode.innerText = element.id;
    posterNode.src = element.img;
    descr.innerText = element.name;
    price.innerText = element.price+' руб.';
    meblist.append(cardNode);
});
}
//НЕ РИСУЕТ ПОСЛЕДНИЙ ЭЛЕМЕНТ!!!!!!!!
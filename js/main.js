import {getDataList} from './modules/getData.js';
import { renderCard } from './modules/render.js';
import { cardmodal } from './modules/carddescribe.js';


getDataList().then(() => {
    let mebelList = JSON.parse(localStorage.getItem('allMebel'));
  //  console.log(mebelList.products);
    renderCard(mebelList.products);
    cardmodal();
});
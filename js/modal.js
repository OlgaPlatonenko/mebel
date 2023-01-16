const btnLocation1 = document.querySelector('.location_left');
const btnLocation2 = document.querySelector('.header_location');
const modal = document.querySelector('.mymodal');
//const fr = document.querySelector('.my_map');
const fr = document.querySelector('.map_item');

btnLocation1.addEventListener('click', () => {
    modal.classList.remove('hidden');
    fr.classList.remove('hidden');
});

btnLocation2.addEventListener('click', () => {
    modal.classList.remove('hidden');
    fr.classList.remove('hidden');
});

modal.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('overlay') || target.classList.contains('mymodal__close')) {
        modal.classList.add('hidden');
    }
});
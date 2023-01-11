const btnLocation = document.querySelector('.location_wrapper');
const modal = document.querySelector('.modal');
const fr = document.querySelector('.my_map');

btnLocation.addEventListener('click', () => {
    modal.classList.remove('hidden');
    fr.classList.remove('hidden');


});

modal.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden');
    }
});
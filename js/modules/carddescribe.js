export  function cardmodal(){
    const cardbtn = document.querySelectorAll('.card_btn');
 
   cardbtn.forEach((btnItem,idx) => {
    btnItem.addEventListener('click',() => {
        console.log(localStorage.getItem(idx));
        //считать idx-ый элемент из localstorage
        //убрать из класса hidden
        //передать в innerText элемент
    });
   });

   
}


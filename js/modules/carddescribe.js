export  function cardmodal(){
    const cardbtn = document.querySelectorAll('.card_btn');
 
   cardbtn.forEach((btnItem,idx) => {
    btnItem.addEventListener('click',() => {
        console.log(idx);
    });
   });

   
}


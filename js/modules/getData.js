export async function getDataList(){
 
    const respMebelList = await fetch('http://localhost:5500/data.json');
   
    let mebelList = await respMebelList.json();
    //console.log(mebelList);
    if (localStorage.getItem('allMebel') === null) {
        localStorage.setItem('allMebel', JSON.stringify(mebelList));
    }
//записать в localstorage
//сделать добавление в localstorage

    return mebelList;
}

let total = document.getElementById("total");
let orignal = document.getElementById("orignal");

 
function getPrice(){
    orignal.value = (total.value * 70) / 100 ;
}
function getPriceor(){
    total.value = ((orignal.value * 10) / 7).toFixed(1)  ;
}
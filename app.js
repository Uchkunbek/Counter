
const counter =document.getElementById('counter');
const reset = document.getElementById('reset');

//What is going to happen, if clicked
counter.addEventListener('click', function(){
   let ekran = document.getElementById('ekran');
   parseInt(ekran.value);
   ekran.value = parseInt(ekran.value) + 1;
})
//Keyboard pressed
document.addEventListener('keydown', function(event){
    let ekran = document.getElementById('ekran');
    let keyboard = event.key;

switch(keyboard){
    case 'c':
    ekran.value = 0;
        break;
    case 'C':
    ekran.value = 0;
        break;
    case 'Enter':
        parseInt(ekran.value);
        ekran.value = parseInt(ekran.value) + 1;
        break;   
}
    // if(keyboard === 'Enter'){
    //     ekran.value = parseInt(ekran.value) + 1;
    // }else if( keyboard === 'C' || keyboard === 'c' ){
    //     ekran.value = 0;
    // }else{
    //     ekran.value ='NAN';
    // }
 });
 //What happen if reset pressed
reset.addEventListener('click', function(){
    let ekran = document.getElementById('ekran');
    ekran.value = 0;
 });
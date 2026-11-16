let increase = document.getElementById("increase");
let stop = document.getElementById("stop");
let decrease = document.getElementById("decrease");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let number = 0;
increase.addEventListener("click",()=>{
    increment.innerText = number
number++
decrease.disabled = false ;
});
decrease.addEventListener("click",()=>{
    if (number > 0){
        number--;
        increment.innerText = number
}   
    if(number === 0){
        decrease.disabled = true ;
    }
});
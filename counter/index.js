//document.getElementById("counter-el").innerText=5;

let count=0;
let prevValue='0';

function increment(){
    count+=1;
    document.getElementById("counter-el").innerText=count;
}
function decrement(){
    count-=1;
    document.getElementById("counter-el").innerText=count;
}
function save(){
    console.log(count);
    prevValue=prevValue+count + '-';
    document.getElementById("prev-value").innerText=prevValue;
}
let array= [];
let sum =0;
let result = document.getElementById("resultofnum");
   result.innerHTML = "";
let sumoftotal = document.getElementById("sumoftotal");


function onenumber(num){
    console.log(num)
    sum += num;
    result.innerHTML = sum;
    // console.log(sum);
}
// console.log(array);

let calculate = ()=>{
   let result = eval(sum);
   console.log(result);
  
   sumoftotal.innerHTML = eval(sum);
   console.log(result);
}
function clear(){
     window.localtion.reload();
}
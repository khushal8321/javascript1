// palindrome checker

let palindrome = "kadbasddak";
console.log(palindrome.length);
if(palindrome.length%2==0){
   console.log(palindrome);
   let str1 = palindrome.length/2;
   let string1 = palindrome.slice(0,str1);
   console.log(string1);
   let string2 = palindrome.slice(str1,palindrome.length);
   console.log("string2",string2.length);
   console.log(string2);
   
   console.log(string1.length);
   let reversed = string2.split('').reverse().join('');
   console.log(reversed);
   if(string1 == reversed){
    console.log("this is a palindrome string");
   }
   else{
    console.log("this is a not palindrome string");
   }

}
else if(palindrome.length%2!=0){
    let index = Math.round(palindrome.length/2)-1;
     console.log(palindrome[index]);
     
     
   console.log(palindrome);
   let str1 = palindrome.length/2;
   let string1 = palindrome.slice(0,index);
   console.log(string1);
   let string2 = palindrome.slice(index+1,palindrome.length);
   console.log("string2",string2.length);
   console.log(string2);
   
   console.log(string1.length);
   let reversed = string2.split('').reverse().join('');
   console.log(reversed);
   console.log(string1,index, reversed);
   if(string1 == reversed){
    console.log("this is a palindrome string");

   }
   else{
    console.log("this is a not palindrome string");
   }
}
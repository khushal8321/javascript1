function javascript(src,erorr){
   let Script = document.createElement('Script');
   Script.src = src;   
   Script.onload = function (){
    console.log("loaded script"+ src);
    erorr(src);
   }
   Script.onerror = function () {
    console.log("error occur");
   }
   erorr(src);
}
javascript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",namaste);

function hello(src){
    console.log("hello",src)
}
function namaste(src){
    console.log("namste",src)
}
// document.getElementsByTagName("body")	HTMLCollection (a list of elements)
// let str ="madam";
// console.log(str.length);
// let i=0;
// let j=str.length-1;

// while(i<j){
//     if(str.charAt(i) !== str.charAt(j)){
//         console.log("not palindrom");
//         break;
//     }
  
//     i++;
//     j--;
   
// }
// if(i===j){
//     console.log("str is palindrom");
// }


const body = document.getElementsByTagName("body")[0];
// body.style.backgroundColor="brown";

let pink = document.getElementById("btn1");
let green = document.getElementById("btn2");


function setColor(name){
    body.style.backgroundColor=name;
}
function randomColor(){
    const red = Math.round(Math.random()*255);    //convert to whole numbers
    const green = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);

    const color =`rgb(${red},${blue},${green})`;  //createin the color
    body.style.backgroundColor=color;
}

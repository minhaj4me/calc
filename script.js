let screen=document.querySelector("input");
// let C=document.querySelector(".C");
// let add=document.querySelector(".add");
// let sub=document.querySelector(".sub");
// let div=document.querySelector(".div");
// let mul=document.querySelector(".mul");
// let percent=document.querySelector(".percent");
// let one=document.querySelector(".one");
// let two=document.querySelector(".two");
// let three=document.querySelector(".three");
// let four=document.querySelector(".four");
// let five=document.querySelector(".five");
// let six=document.querySelector(".six");
// let seven=document.querySelector(".seven");
// let eight=document.querySelector(".eight");
// let nine=document.querySelector(".nine");
// let zero=document.querySelector(".zero");
// let decimal=document.querySelector("decimal");
// let equal=document.querySelector(".equal");


function display(num){
    screen.value+=num
}

function total(){
    screen.value=eval(screen.value)
}

function del()
{
    screen.value=""
}
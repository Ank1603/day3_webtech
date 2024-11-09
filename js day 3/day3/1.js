'use strict';
//Dom1

console.log(document);
console.log(typeof document);

//getElementById() is dom method to get element by id

console.log(document.getElementById('x1'));
console.log(document.getElementById("x2"));

//this is called dom event handling

document.getElementById('x1').onclick = function () {
    console.log(document.body);
    document.body.style.background = 'lightgrey';
    document.body.style.color='black';
}

document.getElementById("x2").onclick = function () {
  console.log(document.body);
  document.body.style.background = "black";
  document.body.style.color = "lightgrey";
};
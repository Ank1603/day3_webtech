"use strict";
document.getElementById("btn").onclick = function () {
  // alert('Hello World!');
  // confirm('Are you sure you want to process?');
  // prompt('Enter your name:');
  // console.log(document.getElementById('x'));
  var data = document.getElementById("x").value;
  console.log(data);
  var msg = "";
  // if (data == "") {
  //     msg="Please enter a pincode ";

  // } else if (data.length != 6) {
  //     msg="Please enter a 6-digit number ";
  // } else {
  //     msg="Valid pincode";
  // }

  var msg =
    data == ""
      ? "Please enter a pincode "
      : data.length != 6
      ? "Please enter a 6-digit number "
      : "Pincode is valid";
  //(condition) ? (true: statement) : (false:statement);
  console.log(document.getElementById("result"));
  document.getElementById("result").innerHTML = msg;
};

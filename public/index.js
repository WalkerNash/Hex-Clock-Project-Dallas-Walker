// Research javascript date class reference page
// setInterval syntax is as follows:
// var intervalID = scope.setInterval(func, delay(), param1, param2, etc...
// var numID = num.toString();

// BJ Example
// var time, hr, min, sec;

// time.getHours()
// // 10 = 10am
// time.getMinutes()
// // 38 = 10:38 when 'time = new Date() was called'
// time.getSeconds()
//
// function logTime() {
//   var time = new Date();
//   var hr = time.getHours() > 9 ? time.getHours() : '0' + time.getHours();
//   var min = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes();
//   var sec = time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds();
//   console.log(hr + ':' + min + ':' + sec);
// }
//
// setInterval(logtTime, 2000);

// =====PLAN=====---------* = Complete
// Generate accurate auto-updating time value (HH:MM:SS FORMAT) *
// -  Convert generated value to string every second
// -  -  Display generated string centered in page & update every second preceded by hash
// -  -
//
//
//




//----------VARIABLE DECLARATIONS----------
var klok, hrstring, minstring, seckstring;
var klok = document.querySelector('#klok');
var klokground = document.querySelector('#klokground')
//----------FUNCTION DECLARATIONS----------
function time() {
  var time, hr, min, secks;
  var time = new Date();
  var hr = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
  var min = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
  var secks = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
  console.log(hr + ':' + min + ':' + secks);
  klok.innerHTML = ('<h1>' + hr + ':' + min + ':' + secks + '</h1>');
  // var hexLog = "#" + hrs + min + sec;
  var hrstring = hr.toString();
  var minstring = min.toString();
  var seckstring = secks.toString();
  var hexstring = ((hrstring * 4) + (minstring * 4) + (seckstring * 4))
  klokground.style.backgroundColor = ('#' + hexstring);
}
// function toString(hr, min, secks){
//   var hrstring = hr.toString();
//   var minstring = min.toString();
//   var seckstring = secks.toString();
//   var hexstring = (hrstring + minstring + secksting)
//   function setColor(element, color){
//       klokground.style.backgroundColor = ('#' + hexstring);
//   }
// }
// function setColor(element, color)
// {
//     klokground.style.backgroundColor = ('#' + hexstring);
// }
//----------MEAT-'N-PO-TAY-TOES----------
setInterval(time, 1000)

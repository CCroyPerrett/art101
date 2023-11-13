// index.js - purpose and description here
// Author: Chase Croy-Perrett & Joey Longo
// Date: 11/06/2023 


// Functions
function Addbuttons() {
  $("#chal").after("<button onclick = 'chmsg()'>I dare you to click me! You can't do it!</button>");
  $("#prob").after("<button onclick = 'prmsg()'>Can you help me with an embarassing problem? I forgot how to click buttons...</button>");
  $("#refl").after("<button onclick = 'refmsg()'>Please leave me be, I am now reflecting on the meaning of life.</button>");
  $("#resu").after("<button onclick = 'resmsg()'>My siblings, all buttons, have spread throughout the page! Feel free to click on them if you want!</button>");
}

function hidetxt(){
  $("p").hide();
}

function chmsg(){
  $("#chmsg").toggleClass("unreadable");
}

function prmsg(){
  $("#prmsg").toggleClass("unreadable");
}

function refmsg(){
  $("#refmsg").toggleClass("unreadable");
}

function resmsg(){
  $("#resmsg").toggleClass("unreadable");
}


function main() {
  Addbuttons();
}


main();

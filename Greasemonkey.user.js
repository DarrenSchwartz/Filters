// ==UserScript==
// @name     tinker with icons
// @version  1
// @grant    none
// ==/UserScript==
document.body.style.border = "1px solid red";

var tits;
tits = document.querySelectorAll('.topnav-icons,.icons,.icon');
for (var i=0; i < tits.length; i++) {
  tits[i].innerHTML = tits[i].title;
  tits[i].style.border = "1px solid red";
  tits[i].style.fontSize = "10px !important";
  tits[i].style.fontColor = "blue !important";

  tits[i].style.padding = "1px !important";

  console.log("shitty Icons: " + i);
}

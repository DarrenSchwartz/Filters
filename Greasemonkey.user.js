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
  tits[i].style.fontSize = "12px !important";
  tits[i].style.padding = "1px !important";

  console.log("shitty Icons: " + i);
}

// for github
var ass;
ass = document.querySelectorAll('.details-overlay,.btn-link,.dropdown,.btn,button');
for (var i=0; i < ass.length; i++) {
  ass[i].style.border = "1px solid red";

}

var dick;
dick = document.querySelectorAll('.btn-octicon');
for (var i=0; i < dick.length; i++) {
  dick[i].innerHTML = dick[i].getAttribute("aria-label");
  dick[i].style.border = "1px solid red";

}

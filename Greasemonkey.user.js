// ==UserScript==
// @name     tinker with icons
// @version  1
// @grant    none
// ==/UserScript==

document.body.style.border = "1px solid red";

var tits;
tits = document.querySelectorAll('.topnav-icons, .w3-bar-item, .w3-button, .w3-btn, .btn-link, .btn, button, .HeaderNavlink');
for (var i=0; i < tits.length; i++) {
  
  if (tits[i].title != "") {
      tits[i].innerHTML = tits[i].title;
  }
  
  tits[i].style = "background-color: #ffffcc !important; color:black !important; padding:2px !important; font-size:12px !important; width:auto !important; border:1px solid red !important";
  console.log(tits[i].title);
}

var dick;
dick = document.querySelectorAll('.btn-octicon, button, .tooltipped');
for (var i=0; i < dick.length; i++) {
  dick[i].innerHTML = dick[i].getAttribute("aria-label");
  dick[i].style = "background-color: #ffffcc !important; color:black !important; padding:2px !important; font-size:12px !important; width:auto !important; border:1px solid red !important";
}

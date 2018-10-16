// ==UserScript==
// @name     tinker with icons
// @version  1
// @grant    none
// ==/UserScript==
document.body.style.border = "1px solid red";
var myButtonStyle = "background-color: #ffffcc !important; color:black !important; padding:2px !important; font-size:12px !important; \
    width:auto !important; border:1px solid red !important; background-image:none !important; \
    ";

var tits;
tits = document.querySelectorAll('.topnav-icons, .w3-bar-item, .w3-button, .w3-btn, .btn-link, .btn, button, .HeaderNavlink, .UnderlineNav-item, \
    .ms-Button--commandBar, ._2SvWF44TZgwj95spKJn8Za, ._2U98azIYc5PoF9YHJDwjwi \
    ');

for (var i=0; i < tits.length; i++) {
  
  tits[i].style = myButtonStyle;
  console.log(tits[i].title);
  
  if (tits[i].hasAttribute("aria-label"))                 { tits[i].innerHTML = tits[i].getAttribute("aria-label"); }
  if (tits[i].hasAttribute("title"))                             { tits[i].innerHTML = tits[i].getAttribute("title"); }
  if (tits[i].hasAttribute("name"))                             { tits[i].innerHTML = tits[i].getAttribute("name"); }
  if (tits[i].hasAttribute("data-automation-id")) { tits[i].innerHTML = tits[i].getAttribute("data-automation-id"); }
  
}

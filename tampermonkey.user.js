// ==UserScript==
// @name         github icons
// @namespace    https://github.com/
// @version      1.2
// @description  fix the crappy UI
// @author       notNotSure
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
'use strict';

document.body.style.border = "1px solid red";
var myButtonStyle = "background-color: #ffffcc !important; color:black !important; padding:2px !important; font-size:12px !important; \
  width:auto !important; border:1px solid red !important; background-image:none !important; \
  ";

var items;
items = document.querySelectorAll('.btn-link, .btn, button, .HeaderNavlink, .UnderlineNav-item, .pagehead-tabs-item \
  ');

for (var i=0; i < items.length; i++) {

  items[i].style = myButtonStyle;
  console.log(items[i].title);

  if (items[i].hasAttribute("aria-label")) { items[i].innerHTML = items[i].getAttribute("aria-label"); }
  if (items[i].hasAttribute("title")) { items[i].innerHTML = items[i].getAttribute("title"); }
  if (items[i].hasAttribute("name")) {
      if (items[i].getAttribute("name") != "button") {items[i].innerHTML = items[i].getAttribute("name"); }
  }
  if (items[i].hasAttribute("data-automation-id")) { items[i].innerHTML = items[i].getAttribute("data-automation-id"); }
}

})();

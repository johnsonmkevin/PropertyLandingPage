"use strict";

const navButtonEl = document.getElementById("navButton");
const menuNavCloseEl = document.querySelector(".main__nav--closeIcon");
const menuEl = document.querySelector(".main__nav--menu");
const menuNavItem = document.querySelectorAll(".main__nav--menuItem");

const openSideMenu = (open) => {
  menuEl.style.visibility = open ? "visible" : "hidden";
  menuEl.style.transform = open ? "translateX(0%)" : "translateX(100%)";
};

navButtonEl.addEventListener("click", () => openSideMenu(true));

menuNavCloseEl.addEventListener("click", () => openSideMenu(false));

menuNavItem.forEach((n) => n.addEventListener("click", () => openSideMenu(false)));

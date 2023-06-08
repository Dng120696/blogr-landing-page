"use strict";

const menu = document.querySelector(".hamburger-menu");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const box = document.querySelector(".box");
const menuLinks = document.querySelectorAll(".menu-links");
const links = document.querySelector(".links");
const overlay = document.querySelector(".overlay");

const toggle = () => {
  overlay.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  box.classList.toggle("show-box");
};

menu.addEventListener("click", toggle);
overlay.addEventListener("click", toggle);

menuLinks.forEach((links) => {
  links.addEventListener("click", () => {
    console.log(links);
    links.classList.toggle("show");

    menuLinks.forEach((otherlinks) => {
      // console.log(otherlinks);
      if (otherlinks !== links) {
        otherlinks.classList.remove("show");
      }
    });
  });
});

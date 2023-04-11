'use strict';

const menu = document.querySelector('.hamburger-menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const box = document.querySelector('.box');
const menuLinks = document.querySelectorAll('.menu-links');
const links = document.querySelector('.links');

console.log(menuLinks);
menu.addEventListener('click',() =>{

  openMenu.classList.toggle('hidden');
  closeMenu.classList.toggle('hidden');
  box.classList.toggle('show-box');
});

for(let i = 0 ; i < menuLinks.length;i++){
  menuLinks[i].addEventListener('click',() => {

    
    menuLinks[i].classList.toggle('show');
  })
}
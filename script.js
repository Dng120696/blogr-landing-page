'use strict';

const menu = document.querySelector('.hamburger-menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const box = document.querySelector('.box');
const menuLinks = document.querySelectorAll('.menu-links');
const links = document.querySelector('.links');


openMenu.addEventListener('click',() =>{

  openMenu.classList.add('hidden');
  closeMenu.classList.remove('hidden');
  box.classList.add('show-box');
  box.classList.remove('hide-box');
});

closeMenu.addEventListener('click',() =>{

  openMenu.classList.remove('hidden');
  closeMenu.classList.add('hidden');
  box.classList.add('hide-box');
  box.classList.remove('show-box');
})

for(let i = 0 ; i < menuLinks.length;i++){
  menuLinks[i].addEventListener('click',() => {

    
    menuLinks[i].classList.toggle('show');
  })
}
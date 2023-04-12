'use strict';

const menu = document.querySelector('.hamburger-menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const box = document.querySelector('.box');
const menuLinks = document.querySelectorAll('.menu-links');
const links = document.querySelector('.links');
const overlay = document.querySelector('.overlay');


const CloseBox = () =>{
  overlay.classList.add('hidden');
  closeMenu.classList.add('hidden');
  openMenu.classList.remove('hidden');
  box.classList.add('hide-box');
  box.classList.remove('show-box');
};

openMenu.addEventListener('click',() =>{

  openMenu.classList.add('hidden');
  closeMenu.classList.remove('hidden');
  box.classList.add('show-box');
  box.classList.remove('hide-box');
  overlay.classList.remove('hidden');
});


closeMenu.addEventListener('click',CloseBox);

overlay.addEventListener('click',CloseBox);


for(let i = 0 ; i < menuLinks.length;i++){
  menuLinks[i].addEventListener('click',() => {

    
    menuLinks[i].classList.toggle('show');
  })
}
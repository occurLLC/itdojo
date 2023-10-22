const toggler = document.querySelector('.header__toggler');
const header__list = document.querySelector('.header__list');
const menuLink01 = document.querySelector('.menuLink01');
const menuLink02 = document.querySelector('.menuLink02');
const menuLink03 = document.querySelector('.menuLink03');
const menuLink04 = document.querySelector('.menuLink04');
const menuLink05 = document.querySelector('.menuLink05');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  header__list.classList.toggle('active');
})

menuLink01.addEventListener('click', ()=>{
  toggler.classList.toggle('active');
  header__list.classList.toggle('active');
})

menuLink02.addEventListener('click', ()=>{
  toggler.classList.toggle('active');
  header__list.classList.toggle('active');
})

menuLink03.addEventListener('click', ()=>{
  toggler.classList.toggle('active');
  header__list.classList.toggle('active');
})

menuLink04.addEventListener('click', ()=>{
  toggler.classList.toggle('active');
  header__list.classList.toggle('active');
})

menuLink05.addEventListener('click', ()=>{
  toggler.classList.toggle('active');
  header__list.classList.toggle('active');
})
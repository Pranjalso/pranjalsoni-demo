var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.Login-link');
const registerLink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close')

registerLink.addEventListener ('click', ()=> {
  wrapper.classList.add('active');
})

loginLink.addEventListener ('click' , ()=> {
  wrapper.classList.remove('active');
})

btnpopup.addEventListener ('click',()=> {
  wrapper.classList.add('active-popup');
})

iconclose.addEventListener('click',()=>{
  wrapper.classList.remove('active-popup');
})
btnpopup.addEventListener('click',()=>{
  wrapper.style.display="flex";
})


iconclose.addEventListener('click',()=>{
  wrapper.style.display="none";
})


// haburger button access
let hamburger = document.querySelector('.hamburger-menu');
const gnb = document.querySelector('.gnb');

hamburger.addEventListener('click', function(){
  gnb.classList.toggle('active');
});
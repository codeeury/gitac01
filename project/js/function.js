// haburger button access
const hamburger = document.querySelector('.hamburger-menu');
const gnb = document.querySelector('.gnb');

hamburger.addEventListener('click', function(){
  gnb.classList.toggle('active');
});

// tab  menu
const tabMenu = document.querySelectorAll('.tab-menu-item');
const group = document.querySelectorAll('.section2 .group');
let activeIndex = 0;

for(let i=0;i<tabMenu.length;i++){
  tabMenu[i].addEventListener('click', function(){

    for(let j=0;j<tabMenu.length;j++){
      tabMenu[j].classList.remove('active');
      group[j].classList.remove('active');
    }

    this.classList.add('active');

    for(let j=0;j<tabMenu.length;j++){
      if(tabMenu[j] === this){
        activeIndex = j;
      }
    }

    group[activeIndex].classList.add('active');
  });
}


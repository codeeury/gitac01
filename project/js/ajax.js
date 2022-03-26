function loadHome() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.querySelector('.ajax').innerHTML = this.responseText;
  }
  xhttp.open("GET", "home_content.html");
  xhttp.send();
}

function loadAbout() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.querySelector('.ajax').innerHTML = this.responseText;
  }
  xhttp.open("GET", "about_content.html");
  xhttp.send();
}

// ajax.html이 처음 화면에 로드(렌더링)시
loadHome();

// gnb에서 home 메뉴를 클릭했을 때
// gnb에서 about 메뉴를 클릭했을 때

const gnbLink = document.querySelectorAll('.gnb-list-link');

for(let i=0; i<gnbLink.length;i++){

  gnbLink[i].addEventListener('click', function(){

    switch(i){
      case 0 : // home
        loadHome();
        break;
      case 1 : // about
        loadAbout();
        break;
      default:
        // loadContact();
    }
  })

}

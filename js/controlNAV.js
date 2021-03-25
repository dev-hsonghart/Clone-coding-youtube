const gnbCenter = document.querySelector(".gnb-column__center"),
  gnbRight = document.querySelector(".gnb-column__right"),
  rightMic = gnbRight.querySelector(".gnb-btn-mic"),
  rightSearch = gnbRight.querySelector(".gnb-btn-search"),
  rightNoti = gnbRight.querySelector(".gnb-btn-notification");

function mediaQueryNav(){
  // screen < 450px 일 때 gnbCenter에 display에 none 추가 , 우측 mic와 search에 display에 빈값을 준다.
  // 우측 mic와 search는 display 기본값이 none이다.
  const navWidth450 = window.matchMedia("(max-width: 450px)"),
    navWidth360 = window.matchMedia("(max-width: 400px)");

    if(navWidth360.matches === true){ // 최소값 400px미만일 때
      rightNoti.style.display = "none";
      rightMic.style.display = "none";
      gnbRight.style.minWidth= "160px";
    } else if(navWidth450.matches === true){ // 360px ~ 450px
    gnbCenter.style.display = "none";
    rightMic.style.display = "";
    rightSearch.style.display = "";
    rightNoti.style.display = "";
    gnbRight.style.minWidth= "240px";
  } else{ // 450px ~
    gnbCenter.style.display = "";
    rightMic.style.display = "none";
    rightSearch.style.display = "none";
    rightNoti.style.display = "";
    gnbRight.style.minWidth= "160px";
  }
}

function init(){
  const navWidth450 = window.matchMedia("(max-width: 450px)")
  if(navWidth450.matches === true){
    //450px 미만
    gnbCenter.style.display = "none";
    rightMic.style.display = "";
    rightSearch.style.display = "";
    rightNoti.style.display = "";
  } else{
    gnbCenter.style.display = "";
    rightMic.style.display = "none";
    rightSearch.style.display = "none";
    rightNoti.style.display = "";
  }
  window.addEventListener("resize", mediaQueryNav);
}

init();
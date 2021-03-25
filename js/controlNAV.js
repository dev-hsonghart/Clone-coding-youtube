const gnbCenter = document.querySelector(".gnb-column__center"),
  gnbRight = document.querySelector(".gnb-column__right"),
  rightMic = gnbRight.querySelector(".gnb-btn-mic"),
  rightSearch = gnbRight.querySelector(".gnb-btn-search"),
  rightNoti = gnbRight.querySelector(".gnb-btn-notification");

function mediaQueryNav(){
  // screen < 450px 일 때 gnbCenter에 display에 none 추가 , 우측 mic와 search에 display에 빈값을 준다.
  // 우측 mic와 search는 display 기본값이 none이다.
  const windowWidth648 = window.matchMedia("(max-width: 648px)"),
    windowWidth480 = window.matchMedia("(max-width: 480px)");

    if(windowWidth480.matches === true){ // 최소값 648px미만일 때
      rightNoti.style.display = "none";
      rightMic.style.display = "none";
      gnbRight.style.minWidth= "160px";
    } else if(windowWidth648.matches === true){ // 480px ~ 648px
    gnbCenter.style.display = "none";
    rightMic.style.display = "";
    rightSearch.style.display = "";
    rightNoti.style.display = "";
    gnbRight.style.minWidth= "270px";
  } else{ // 480px ~
    gnbCenter.style.display = "";
    rightMic.style.display = "none";
    rightSearch.style.display = "none";
    rightNoti.style.display = "";
    gnbRight.style.minWidth= "180px";
  }
}

function init(){
  const windowWidth648 = window.matchMedia("(max-width: 450px)")
  if(windowWidth648.matches === true){
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
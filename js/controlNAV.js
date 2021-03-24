const gnbCenter = document.querySelector(".gnb-column__center"),
  gnbRight = document.querySelector(".gnb-column__right"),
  rightMic = gnbRight.querySelector(".gnb-btn-mic"),
  rightSearch = gnbRight.querySelector(".gnb-btn-search");

function mediaQueryNav(){
  // screen < 656px 일 때 gnbCenter에 none 클래스를 추가 , 우측 mic와 search에 none클래스를 지운다.
  const branchWidth = window.matchMedia("(max-width: 450px")
  if(branchWidth.matches === true){
    //656px 미만
    gnbCenter.style.display = "none";
    rightMic.style.display = "";
    rightSearch.style.display = "";
  } else{
    gnbCenter.style.display = "";
    rightMic.style.display = "none";
    rightSearch.style.display = "none";
  }
}

function init(){
  const branchWidth = window.matchMedia("(max-width: 450px")
  if(branchWidth.matches === true){
    //656px 미만
    gnbCenter.style.display = "none";
    rightMic.style.display = "";
    rightSearch.style.display = "";
  } else{
    gnbCenter.style.display = "";
    rightMic.style.display = "none";
    rightSearch.style.display = "none";
  }
  window.addEventListener("resize", mediaQueryNav);
}

init();
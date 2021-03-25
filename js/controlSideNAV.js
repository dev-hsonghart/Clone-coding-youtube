const navList = document.querySelector(".side-nav__list"),
  navTab = document.querySelector(".side-nav__tab"),
  btnNavToggle = document.querySelectorAll(".gnb-btn-hamburder"),
  btnHiddenNav = document.querySelector(".side-nav__list--hidden"),
  hiddenDim = document.querySelector(".hidden-dim");

function navToggle(e){
  const windowWidth1280 = window.matchMedia("(min-width: 1280px)"),
    navTabDisplay = navTab.style.display;

  if(windowWidth1280.matches === true){ // 790px이상
    if(navTabDisplay === "none"){
      navTab.style.display = "";
      navList.style.display = "none";
    } else{
      navTab.style.display = "none";
      navList.style.display = "";
    }
  } else{
    const targetTopParent = e.target.parentNode.parentNode.parentNode,
      targetHiddenParent = e.target.parentNode.parentNode.parentNode.parentNode;

    if(targetTopParent.className === "gnb-container"){
      btnHiddenNav.style.left = "0px";
      btnHiddenNav.style.display = "";
      hiddenDim.style.display = "block";
      hiddenDim.style.opacity = "1";
    } else if(targetHiddenParent.className === "side-nav__list--hidden"){
      btnHiddenNav.style.left = "-300px";
      hiddenDim.style.display = "none";
      hiddenDim.style.opacity = "0";
    }
  }
}

function mediaQuerySideNav(){
  const windowWidth790 = window.matchMedia("(min-width: 790px)"),
    windowWidth1280 = window.matchMedia("(min-width: 1280px)");

   if(windowWidth1280.matches === true){// 1280px 이상
    if(btnHiddenNav.style.left === "0px"){
      btnHiddenNav.style.display = "none";
      navTab.style.display = "none";
      navList.style.display = "";
      hiddenDim.style.display = "none";
      hiddenDim.style.opacity = "0";
      btnHiddenNav.style.left = "-300px";
    } else{
      navTab.style.display = "none";
      navList.style.display = "";
      btnHiddenNav.style.display = "block";
      btnHiddenNav.style.left = "-300px";
    }
    
   }
    else if(windowWidth790.matches === true){ // 790px이상
      navTab.style.display = "";
      navList.style.display = "none";
    } else{
      navTab.style.display = "none";
      navList.style.display = "none";
    }
}

function init(){
  const windowWidth790 = window.matchMedia("(min-width: 790px)"),
  windowWidth1280 = window.matchMedia("(min-width: 1280px)");

  for(let i = 0; i < btnNavToggle.length ; i++){
    btnNavToggle[i].addEventListener("click", navToggle)
  }

 if(windowWidth1280.matches === true){// 1280px 이상
  navTab.style.display = "none";
  navList.style.display = "";
 }
  else if(windowWidth790.matches === true){ // 790px이상
    navTab.style.display = "";
    navList.style.display = "none";
  } else{
    navTab.style.display = "none";
    navList.style.display = "none";
  }

  window.addEventListener("resize", mediaQuerySideNav); // 화면 resize 이벤트

}

init();
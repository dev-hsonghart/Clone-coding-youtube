// 더보기를 누르면 감춰진 메뉴가 보이고 한번 더 누르면 보여진 메뉴가 숨겨진다.
const hiddenNav = document.querySelector(".side-nav__list--hidden"),
  hiddenMore = hiddenNav.querySelector(".normalMore"),
  hiddenSubMore = hiddenNav.querySelector(".subMore"),
  hiddenSubscribe = hiddenNav.querySelector(".subscribe"),
  defaultNav = document.querySelector(".side-nav__list"),
  defaultMore = defaultNav.querySelector(".normalMore"),
  subscribeMore = defaultNav.querySelector(".subMore"),
  subscribeList = defaultNav.querySelector(".subscribe");

function printCurrentSubscribe(){
  // 구독 카테고리에 숨겨진 구독채널 갯수 표시
  const subHidden = subscribeList.querySelectorAll(".hidden"),
  title = subscribeMore.querySelector(".side-menu__title"),
  subHidden2 = hiddenSubscribe.querySelectorAll(".hidden"),
  title2 = hiddenSubMore.querySelector(".side-menu__title");
  
  title.innerText = `${subHidden.length}개 더보기`;
  title2.innerText = `${subHidden2.length}개 더보기`;
}

function toggleMenu(e){
  const ul = e.target.parentNode.parentNode.parentNode,
    li = e.target.parentNode.parentNode,
    hidden = ul.querySelectorAll(".hidden"),
    icon = li.querySelector("i"),
    title = li.querySelector(".side-menu__title");
  
  for(let i = 0; i < hidden.length; i++){
    hidden[i].classList.toggle("none");
  }
  
  if(ul.className === "side-nav__ul subscribe"){
    if(icon.className === "fas fa-chevron-down"){
      icon.className = "fas fa-chevron-up"
      title.innerText = "간략히 보기"
    } else{
      icon.className = "fas fa-chevron-down"
      title.innerText = `${hidden.length}개 더보기`
    }
  } else{
    if(icon.className === "fas fa-chevron-down"){
      icon.className = "fas fa-chevron-up"
      title.innerText = "간략히 보기"
    } else{
      icon.className = "fas fa-chevron-down"
      title.innerText = "더보기"
    }
  
  }
}

function init(){
  printCurrentSubscribe();
  defaultMore.addEventListener("click", toggleMenu);
  hiddenMore.addEventListener("click", toggleMenu);
  subscribeMore.addEventListener("click", toggleMenu);
  hiddenSubMore.addEventListener("click", toggleMenu);
}

init();
// 더보기를 누르면 감춰진 메뉴가 보이고 한번 더 누르면 보여진 메뉴가 숨겨진다.
const subscribeList = document.querySelectorAll(".subscribe"),
  noarmlMore = document.querySelectorAll(".normalMore"),
  subscribeMore = document.querySelectorAll(".subMore");

function printCurrentSubscribe(){
  // 구독 카테고리에 숨겨진 구독채널 갯수 표시
  const subHiddenHidden = subscribeList[0],
  subHiddens0 = subHiddenHidden.querySelectorAll(".hidden"),
  title = subHiddenHidden.querySelector(".Nmore"),
  subHidden = subscribeList[1],
  subHiddens1 = subHidden.querySelectorAll(".hidden"),
  title2 = subHidden.querySelector(".Nmore");
  
  title.innerText = `${subHiddens0.length}개 더보기`;
  title2.innerText = `${subHiddens1.length}개 더보기`;
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
  
  if(icon.className === "fas fa-chevron-down"){
    icon.className = "fas fa-chevron-up"
    title.innerText = "간략히 보기"
  } else if(ul.className === "side-nav__ul subscribe"){
    icon.className = "fas fa-chevron-down"
    title.innerText = `${hidden.length}개 더보기`
  } else{
    icon.className = "fas fa-chevron-down"
    title.innerText = "더보기"
  }
}

function init(){
  printCurrentSubscribe();
  
  for(let i =0; i< noarmlMore.length; i++){
    noarmlMore[i].addEventListener("click", toggleMenu);
  }
  for(let i =0; i< subscribeMore.length; i++){
    subscribeMore[i].addEventListener("click", toggleMenu);
  }
}

init();
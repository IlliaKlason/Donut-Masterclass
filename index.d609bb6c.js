var btnToUp=document.querySelector(".btn-up");btnToUp.addEventListener("click",(function(){window.scrollTo(0,0)}));var btnScroll=document.querySelector(".btn-up");window.onscroll=function(){window.scrollY>700?btnScroll.classList.remove("btn-hidden"):window.scrollY<700&&btnScroll.classList.add("btn-hidden")};
//# sourceMappingURL=index.d609bb6c.js.map

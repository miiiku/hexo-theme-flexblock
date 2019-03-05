(function () {
  const navBtn = document.querySelector(".header-navbar-btn");
  const commentContainer = document.querySelector(".comment-container");
  navBtn.addEventListener("click", function () {
    this.classList.toggle("active");
  })
  commentContainer && initComment();
})();

function initComment () {
  new Valine({
    el: ".comment-container",
    appId: "oTmfgIaoB7PfPATvA9tsOwTu-gzGzoHsz",
    appKey: "PPbJycuezKD3BJlhHUy8zOnG",
    placeholder: "随便说点什么叭～",
    notify: true,
    visitor: true
  })
}
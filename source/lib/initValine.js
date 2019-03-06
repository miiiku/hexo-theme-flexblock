(function () {
  const selector = ".comment-container";
  const commentContainer = document.querySelector(selector);
  commentContainer && initValineComment(selector);

  function initValineComment (selector) {
    new Valine({
      el: selector,
      appId: "oTmfgIaoB7PfPATvA9tsOwTu-gzGzoHsz",
      appKey: "PPbJycuezKD3BJlhHUy8zOnG",
      placeholder: "随便说点什么叭～",
      notify: true,
      visitor: true
    });
  }
})();
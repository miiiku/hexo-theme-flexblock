window.addEventListener("load", function() {
  const navBar = document.querySelector(".navbar");
  const navBtn = document.querySelector(".navbar-btn");
  const navBarH = 54;

  const getScrollTop = () => {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  }

  let scroll = getScrollTop();

  // mobile nav click
  navBtn.addEventListener("click", function () {
    this.classList.toggle("active");
  });

  window.addEventListener("scroll", function (e) {
    let top = getScrollTop();
    let dir = top - scroll;
    
    if (top > navBarH && !navBar.classList.contains("fixed")) {
      navBar.classList.add("fixed");
    }

    if (top <= 0 && navBar.classList.contains("fixed")) {
      navBar.classList.remove("fixed");
      navBar.classList.remove("visible");
    }

    if (dir < 0 && navBar.classList.contains("fixed") && !navBar.classList.contains("visible")) {
      navBar.classList.add("visible");
    }

    if (dir > 0 && navBar.classList.contains("fixed") && navBar.classList.contains("visible")) {
      navBar.classList.remove("visible");
    }
    scroll = top;
  }, {
    passive: true
  });
});
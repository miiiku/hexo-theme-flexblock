window.addEventListener("DOMContentLoaded", function() {
  const html            = document.querySelector("html");
  const navBar          = document.querySelector(".navbar");
  const navBtn          = document.querySelector(".navbar-btn");
  const navList         = document.querySelector(".navbar-list");
  const backToTopFixed  = document.querySelector(".back-to-top-fixed");
  const images          = Array.from(document.images);
  const navBarH         = 54;

  let scroll            = getScrollTop();
  let lastTop           = 0;

  const goScrollTop = () => {
    let currentTop = getScrollTop()
    let speed = Math.floor(-currentTop / 10)
    if (currentTop > lastTop) {
      return lastTop = 0
    }
    let distance = currentTop + speed;
    lastTop = distance;
    document.documentElement.scrollTop = distance;
    distance > 0 && window.requestAnimationFrame(goScrollTop)
  }

  const toggleBackToTopBtn = (top) => {
    top = top || getScrollTop()
    if (top >= 100) {
      backToTopFixed.classList.add("show")
    } else {
      backToTopFixed.classList.remove("show")
    }
  }

  toggleBackToTopBtn()

  images.forEach(item => {
    item.addEventListener("error", function () {
      this.src = "/images/image-error.jpg";
    });
  });

  // mobile nav click
  navBtn.addEventListener("click", function () {
    html.classList.toggle("show-mobile-nav");
    this.classList.toggle("active");
  });

  // mobile nav link click
  navList.addEventListener("click", function (e) {
    if (e.target.nodeName == "A" && html.classList.contains("show-mobile-nav")) {
      navBtn.click()
    }
  })

  // click back to top
  backToTopFixed.addEventListener("click", function(e) {
    lastTop = getScrollTop()
    goScrollTop()
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

    toggleBackToTopBtn()

    scroll = top;
  }, { passive: true });
});

/**
 * 获取当前滚动条距离顶部高度
 *
 * @returns 距离高度
 */
function getScrollTop () {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}

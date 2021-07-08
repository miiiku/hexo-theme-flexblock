window.addEventListener("DOMContentLoaded", function() {
  const html            = document.querySelector("html");
  const navBtn          = document.querySelector(".navbar-btn");
  const navList         = document.querySelector(".navbar-list");
  const backToTopFixed  = document.querySelector(".back-to-top-fixed");
  let lastTop           = 0;
  let theme             = window.localStorage.getItem('theme') || '';

  theme && html.classList.add(theme)

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

  // theme light click
  document.querySelector('#theme-light').addEventListener('click', function () {
    html.classList.remove('theme-dark')
    html.classList.add('theme-light')
    window.localStorage.setItem('theme', 'theme-light')
  })

  // theme dark click
  document.querySelector('#theme-dark').addEventListener('click', function () {
    html.classList.remove('theme-light')
    html.classList.add('theme-dark')
    window.localStorage.setItem('theme', 'theme-dark')
  })

  // theme auto click
  document.querySelector('#theme-auto').addEventListener('click', function() {
    html.classList.remove('theme-light')
    html.classList.remove('theme-dark')
    window.localStorage.setItem('theme', '')
  })

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
  backToTopFixed.addEventListener("click", function () {
    lastTop = getScrollTop()
    goScrollTop()
  });

  window.addEventListener("scroll", function () {
    toggleBackToTopBtn()
  }, { passive: true });

  /** handle lazy bg iamge */
  handleLazyBG();
});

/**
 * 获取当前滚动条距离顶部高度
 *
 * @returns 距离高度
 */
function getScrollTop () {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}

function querySelectorArrs (selector) {
  return Array.from(document.querySelectorAll(selector))
}


function handleLazyBG () {
  const lazyBackgrounds = querySelectorArrs('[background-image-lazy]')
  let lazyBackgroundsCount = lazyBackgrounds.length
  if (lazyBackgroundsCount > 0) {
    let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function({ isIntersecting, target }) {
        if (isIntersecting) {
          let img = target.dataset.img
          if (img) {
            target.style.backgroundImage = `url(${img})`
          }
          lazyBackgroundObserver.unobserve(target)
          lazyBackgroundsCount --
        }
        if (lazyBackgroundsCount <= 0) {
          lazyBackgroundObserver.disconnect()
        }
      })
    })

    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground)
    })
  }
}
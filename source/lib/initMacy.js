(function () {
  const selector = ".waterfall-container";
  const macyContainer = document.querySelector(selector);
  macyContainer && initMacy(selector);

  function initMacy(selector) {
    initCss();
    new Macy({
      container: selector,
      trueOrder: false,
      waitForImages: false,
      useOwnImageLoader: false,
      mobileFirst: true,
      columns: 1,
      margin: {
          y: 16,
          x: '2%',
      },
      breakAt: {
          1200: {
            margin: {
              x: 20
            },
            columns: 4
          },
          940: {
            margin: {
              x: 20
            },
            columns: 3
          },
          520: {
            margin: {
              x: 10
            },
            columns: 2
          },
          400: {
            margin: {
              x: 0
            },
            columns: 1
          },
      }
    });
  }

  function initCss() {
    const cssStyle = document.createElement("style")
    cssStyle.innerText = `.waterfall-container p { display: block; border-radius: 4px; overflow: hidden; margin: 0; }`
    document.head.appendChild(cssStyle);
  }
})();
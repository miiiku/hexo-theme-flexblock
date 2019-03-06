(function () {
  const dplayer = document.querySelectorAll(".dplayer");
  dplayer && initDPlayer(dplayer);

  function initDPlayer(els) {
    let elsArr = Array.from(els);
    elsArr.forEach(el => {
      let url = el.dataset.url;
      let cover = el.dataset.cover;
      new DPlayer({
        container: el,
        video: { url: url, pic: cover }
      });
    });
  }
})();
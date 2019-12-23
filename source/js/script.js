window.addEventListener("load", function() {
  const navBtn = document.querySelector(".header-navbar-btn");

  // mobile nav click
  navBtn.addEventListener("click", function () {
    this.classList.toggle("active");
  });
})
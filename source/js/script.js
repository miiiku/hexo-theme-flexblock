window.addEventListener("load", function() {
  const navBtn = document.querySelector(".header-navbar-btn");

  // mobile nav click
  navBtn.addEventListener("click", function () {
    this.classList.toggle("active");
  });
  
  // Fancybox Caption
  // $('.article-entry').each(function(i){
  //   $(this).find('img').each(function(){
  //     if ($(this).parent().hasClass('fancybox')) return;

  //     var alt = this.alt;

  //     if (alt && $(this).parents(".waterfall-container").length < 1) $(this).after('<span class="caption">' + alt + '</span>');

  //     $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
  //   });

  //   $(this).find('.fancybox').each(function(){
  //     $(this).attr('rel', 'article' + i);
  //   });
  // });
})
/**
* dplayer tag
*
* Syntax:
*   {% dplayer url [cover] %}
*/
hexo.extend.tag.register("dplayer", function(args) {
  var url = args.shift(), cover = "";

  if (args.length) {
    cover = args.shift();
  }

  return `<div class="dplayer" data-url="${url}" data-cover="${cover}"></div>`
});
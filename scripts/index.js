/**
* dplayer tag
*
* Syntax:
*   {% dplayer <url> [cover] %}
*/
hexo.extend.tag.register("dplayer", function(args) {
  var url = args.shift(), cover = "";

  if (args.length) {
    cover = args.shift();
  }

  return `<div class="dplayer" data-url="${url}" data-cover="${cover}"></div>`
});

/** 
 * waterfall tag
 * 
 * Syntax:
 *  {% waterfall %}
 *  ![img](img)...
 *  {% endwaterfall %}
 */
hexo.extend.tag.register("waterfall", function(args, content) {
  const text = hexo.render.renderSync({ text: content, engine: 'markdown' });
  return `<div class="waterfall-container">${text}</div>`;
}, { ends: true });

hexo.extend.filter.register('before_post_render', function(data) {
  if (!hexo.theme.config.permalink) return data
  if (data.layout === "post") {
    // console.log(hexo.theme.config.permalink)
    // console.log(data.slug)
    data.slug = data.date.format("YYYY-MM-DD-HH-mm-ss")
    return data
  }
});
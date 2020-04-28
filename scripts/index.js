const buildDatas = (args) => {
  var datas = "";

  if (args.length > 0) {
    args.forEach(item => {
      let kv = item.split("=");
      if (!kv[1]) {
        datas += `data-${kv[0]} `
      } else {
        datas += `data-${kv[0]}='${kv[1]}' `;
      }
    });
  }

  return datas;
}

const buildDatasObj = (args, defaultObj) => {
  let params = {};

  if (args.length > 0) {
    args.forEach(item => {
      let kv = item.split("=");
      params[kv[0]] = kv[1];
    });
  }

  return Object.assign({}, defaultObj, params);
}

/**
 * image tag
 *
 * Syntax:
 *   {% image { url title? size? } %}
 */
hexo.extend.tag.register("image", function(args) {
  let datas = buildDatasObj(args, { size: "", title: "" });

  if (!datas.url) return "";

  return `
    <figure class="figure-image ${datas.size}">
      <img src="${datas.url}" alt="${datas.title}" />
      <figcaption>${datas.title}</figcaption>
    </figure>
  `;
});

/**
 * bookmark tag
 *
 * Syntax:
 *   {% bookmark { link title? cover? } %}
 */
hexo.extend.tag.register("bookmark", function(args) {
  let datas = buildDatasObj(args, { title: "", cover: "" });
  let cover = "";

  if (!datas.link) return "";

  if (datas.cover) {
    cover = `
      <div class="bookmark-cover">
        <img src="${datas.cover}" alt="${datas.title}" />
      </div>
    `;
  }

  return `
    <figure class="bookmark-card">
      <a class="bookmark-container" target="_blank" title="${datas.title}" href="${datas.link}">
        <div class="bookmark-content">
          <div class="bookmark-name">${datas.title}</div>
          <div class="bookmark-link">${datas.link}</div>
        </div>
        ${cover}
      </a>
    </figure>
  `;
});

/**
 * aplayer tag
 *
 * Syntax:
 *   {% aplayer %}
 */
hexo.extend.tag.register("aplayer", function(args) {
  let datas = buildDatas(args);
  return `<div class="aplayer" ${datas}></div>`;
});

/**
 * dplayer tag
 *
 * Syntax:
 *   {% dplayer {url cover? subtitle?} %}
 */
hexo.extend.tag.register("dplayer", function(args) {
  let datas = buildDatas(args);
  return `<div class="dplayer" ${datas}></div>`;
});

/** 
 * waterfall tag
 * 
 * Syntax:
 *  {% waterfall [size] %}
 *  ![img](img)...
 *  {% endwaterfall %}
 */
hexo.extend.tag.register("waterfall", function(args, content) {
  let datas = buildDatas(args);
  let datasObj = buildDatasObj(args, { size: "" });
  const text = hexo.render.renderSync({ text: content, engine: 'markdown' });
  return `<div class="waterfall-container ${datasObj.size}" ${datas}>${text}</div>`;
}, { ends: true });

/** 
 * center tag
 * 
 * Syntax:
 *  {% center %}
 * 
 *  {% endcenter %}
 */
hexo.extend.tag.register("center", function(args, content) {
  const text = hexo.render.renderSync({ text: content, engine: 'markdown' });
  return `<div class="flex-center">${text}</div>`;
}, { ends: true });

/** 
 * social-icon helper
 * 
 * build social icons
 */
hexo.extend.helper.register("icons", function(icons, args) {
  let validIcons = icons.filter(icon => icon.value)
  if (!validIcons.length) return ""
  let result = ""
  
  if (args.render && validIcons.length) {
    validIcons.forEach(icon => {
      result += args.render(icon.type, icon.value)
    })
  }
  return result
});
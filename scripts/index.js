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

const buildDatasObj = (args, defaultObj = {}) => {
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
      <img src="${datas.url}" alt="${datas.title}" onerror="this.src = '/images/image-error.jpg'" />
      <figcaption>${datas.title}</figcaption>
    </figure>
  `;
});

/** 
 * meme tag
 * 
 * Syntax:
 *  {% meme { src title? styles? } %}
 */
hexo.extend.tag.register("meme", function (args) {
  const datas = buildDatasObj(args);
  const fliter = ['src', 'title'];
  let style = "";
  if (!datas.src) return ""
  if (Object.keys(datas).length > 1) {
    for (key in datas) {
      if (fliter.includes(key)) continue
      style += `${key}: ${datas[key]};`
    }
  }
  return `<img off-zoom class="meme-img" style="${style}" src="${datas.src}" title="${datas.title || datas.src}" alt="${datas.title || datas.src}" />`
})

/**
 * bookmark tag
 *
 * Syntax:
 *   {% bookmark { link title? } %}
 */
hexo.extend.tag.register("bookmark", function(args) {
  let datas = buildDatasObj(args, { title: "" });

  if (!datas.link) return "";
  
  return `
    <figure class="bookmark-card">
      <a class="bookmark-container" target="_blank" title="${datas.title}" href="${datas.link}">
        <div class="bookmark-content">
          <div class="bookmark-name">${datas.title}</div>
          <div class="bookmark-link">${datas.link}</div>
        </div>
        <div class="bookmark-cover">
          <svg class="icon icon-link" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M306.05312 361.6768a61.44 61.44 0 0 1 4.21888 82.20672l-4.21888 4.66944-106.9056 106.9056a190.464 190.464 0 0 0 262.30784 276.15232l7.08608-6.7584 106.9056-106.9056a61.44 61.44 0 0 1 91.09504 82.24768l-4.21888 4.66944-106.9056 106.9056A313.344 313.344 0 0 1 104.448 476.61056l7.7824-8.11008 106.9056-106.9056a61.44 61.44 0 0 1 86.91712 0z m385.024-27.81184a61.44 61.44 0 0 1 4.21888 82.20672l-4.21888 4.66944-270.336 270.336a61.44 61.44 0 0 1-91.09504-82.20672l4.21888-4.66944 270.336-270.336a61.44 61.44 0 0 1 86.8352 0z m220.65152-221.5936a313.344 313.344 0 0 1 7.7824 435.07712l-7.7824 8.11008-106.9056 106.9056a61.44 61.44 0 0 1-91.09504-82.24768l4.21888-4.66944 106.9056-106.9056a190.464 190.464 0 0 0-262.30784-276.15232l-7.08608 6.7584-106.9056 106.9056a61.44 61.44 0 0 1-91.09504-82.24768l4.21888-4.66944 106.9056-106.9056a313.344 313.344 0 0 1 443.1872 0z" p-id="2361" fill="#8a8a8a"></path>
          </svg>
        </div>
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
  const datas = buildDatasObj(args);
  const text = hexo.render.renderSync({ text: content, engine: 'markdown' });
  let style = "";
  if (Object.keys(datas).length > 0) {
    for (key in datas) {
      style += `${key}: ${datas[key]};`
    }
  }
  return `<div style="${style}" class="flex-center">${text}</div>`;
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
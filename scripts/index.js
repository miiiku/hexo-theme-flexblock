const buildDatas = (args) => {
  var datas = "";

  if (args.length > 0) {
    args.forEach(item => {
    
      let index = item.indexOf("=")
      if(index==-1){
        datas += `data-${item} `
      }else {
        let key = item.substring(0,index)
        let value = item.substring(index + 1,item.length)
        datas += `data-${key}='${value}' `; 
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
 *   {% image { url title? } %}
 */
hexo.extend.tag.register("image", function(args) {
  let datas = buildDatasObj(args, { title: "" });

  if (!datas.url) return "";

  return `
    <figure class="figure-image">
      <img src="${datas.url}" alt="${datas.title}" loading="lazy" />
      <figcaption>${datas.title}</figcaption>
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
  return `<div class="aplayer-box" ${datas}></div>`;
});

/**
 * dplayer tag
 *
 * Syntax:
 *   {% dplayer {url cover? subtitle?} %}
 */
hexo.extend.tag.register("dplayer", function(args) {
  let datas = buildDatas(args);
  return `<div class="dplayer-box" ${datas}></div>`;
});
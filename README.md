# flex-block

一个基于`Hexo`的主题

模仿加瞎改`Ghost`里的一个主题`nurui`


### 问题
* 文章ID使用系统生成的还是使用20190301143002这样
* 资源文件CDN配置，如插件
* 自定义的分类和标签页是否需要从新设计样式，如云标签
* 评论去版本号


# 可自定义的相关页面

## 目前可以扩展的页面菜单有:

| layout     | value       | type   |
|------------|-------------|--------|
| categories | /categories | 分类   |
| tags       | /tags       | 标签   |
| links      | /links      | 友链   |
| messages   | /messages   | 留言板 |

## 如何添加:

🌰 添加友链页面


``` bash
hexo new page links
```

找到新建的页面并修改```Front-matter```，添加如下内容

``` markdown
layout: links
```

修改`_config.yml`配置菜单，找到`menu`选项添加如下内容

```
links: /links
```

## 添加其他自定义页面，如`关于`页面

``` bash
hexo new page about
```


# SEO优化相关

**查找并修改`Hexo`下的`_config.yml`**

``` yml
# Site

# <meta name="description" content=[config.description]>
description: 
# <meta name="keywords" content=[config.keywords]>
keywords: 
# <meta name="author" content=[config.author]>
author: 
# <meta name="copyright" content=[config.copyright]>
copyright:
```


# 配置项:

## 长标题

进入`flex-block`配置文件`_config.yml`找到`large_legnth`

``` yml
# large cover
# long: [article, link]
# short: [category, tag]
large_legnth:
  long: 20
  short: 5
```

**long:** 作用于`文章`和`友链`卡片

**short:** 作用于`分类`和`标签`卡片

设置Card封面的大小，如 `long: 20` 表示如果文章标题长度大于20，文章卡片显示为长文章

*如果启用了友链，则会判断`友链名称`和`友链描述`两个字段长度*

## dplayer

进入`flex-block`配置文件`_config.yml`找到`dplayer`

``` yml
# dplayer 视频播放
# docs: http://dplayer.js.org/
dplayer:
  enable: true
  theme: "#b7daff"
  autoplay: false
  loop: false
  mutex: true
```

详情查看[http://dplayer.js.org/](http://dplayer.js.org/)

## macy 瀑布流

进入`flex-block`配置文件`_config.yml`找到`macy`

``` yml
# macy 瀑布流
# docs: https://github.com/bigbite/macy.js
# Specific configuration information go to `layout/plug-in/macy.ejs`
macy: true
```

如果要进行详细的配置，请找到并编辑`layout/plug-in/macy.ejs`


详情查看[https://github.com/bigbite/macy.js](https://github.com/bigbite/macy.js)

## zoom 图片预览

进入`flex-block`配置文件`_config.yml`找到`zoom`

``` yml
# zoom 图片预览
# docs: https://github.com/miiiku/zoom
zoom:
  enable: true
  margin: 15
  padding: 15
  radius: 5
  specify:
  filter: "gallery" # filter Front-matter photos
```

详情查看[https://github.com/miiiku/zoom](https://github.com/miiiku/zoom)

## Valine评论

进入`flex-block`配置文件`_config.yml`找到`comment`

``` yml
# valine 评论
# docs: https://valine.js.org
# You can get your appid and appkey from https://leancloud.cn
valine:
  enable: true
  appId: # your appid
  appKey: # your appkey
  avatar: mm
  placeholder: 随便说点什么叭～
  notify: false
  visitor: false
  pageSize: 10
```

如果想给某一页面/文章取消评论，在`md`文件的`front-matter`中增加`comments: false`

详情查看[https://valine.js.org/configuration.html](https://valine.js.org/configuration.html)


## 一言

进入`flex-block`配置文件`_config.yml`找到`hitokoto`

``` yml
# 一言
# docs: https://hitokoto.cn/api
# type: [a, b, c, d, e, f, g]
hitokoto:
  enable: false
  type: a
```

详情查看[https://hitokoto.cn/api](https://hitokoto.cn/api)


# 内建标签

## 插入视频 dplayer

``` markdown
<!-- url 必填 cover 可选 -->
{% dplayer url [cover] %}
```

**注意: 需要开启`dplayer`插件才能正常使用本内置标签**

## 插入瀑布流

``` markdown
{% waterfall %}
![imgname](imgsrc)
![imgname](imgsrc)
![imgname](imgsrc)
{% endwaterfall %}
```

**注意: 需要开启`macy`插件才能正常使用本内置标签**

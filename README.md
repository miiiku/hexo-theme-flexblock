
# flex-block

一个基于`Hexo`的主题

模仿加瞎改`Ghost`里的一个主题`nurui`

# 预览

![cover1](https://cdn.jsdelivr.net/gh/miiiku/flex-block/img/blog1.png)

![cover2](https://cdn.jsdelivr.net/gh/miiiku/flex-block/img/blog2.png)

![cover3](https://cdn.jsdelivr.net/gh/miiiku/flex-block/img/blog3.png)

# 更新

#### 2020.04

* 添加[社交图标](#social-icon-社交图标)显示

* 局部小更新css样式

* 添加`返回到顶部`按钮

* 添加水平居中标签 [center](#水平居中-center)

#### 2020.01


* 修改顶部导航栏

* header添加栏波浪，来源 [https://github.com/dusign/hexo-theme-snail](https://github.com/dusign/hexo-theme-snail)

* 再次修改栏文章内容页面，效果比以前好些

#### 2019.12

* 优化了若干代码，结构更清晰，修复了几处CSS显示问题

* 修改文章内容显示宽度，和一些标签样式

* 更新了 **[waterfall](#waterfall-瀑布流)** (画廊)标签 可设置大小

* 新增 **[iamge](#插入图片-image)** (图片), **[bookmark](#插入书签-bookmark)** (书签), **[aplayer](#插入音频-aplayer)** 音频播放 标签

# 变动

关于 **[waterfall](#waterfall-瀑布流)** 标签，在更新主题后，会导致以前的视频不能正常播放，需要进行如下修改:

```markdown
<!-- 旧版写法 -->
{% dplayer https://qiniu.miiiku.xyz/video/%E7%BE%8E.mp4 https://qiniu.miiiku.xyz/video/%E7%BE%8E.mp4?vframe/jpg/offset/10 %} 

<!-- 新版写法 需要指定属性名 -->
{% dplayer url="https://qiniu.miiiku.xyz/video/%E7%BE%8E.mp4" cover="https://qiniu.miiiku.xyz/video/%E7%BE%8E.mp4?vframe/jpg/offset/10" %} 
```

# 可自定义的相关页面

## 目前可以扩展的页面菜单有:

| type       | value       | name   |
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

找到新建的页面并修改`Front-matter`，添加如下内容

``` markdown
type: links
```

修改`_config.yml`配置菜单，找到`menu`选项添加如下内容

```
links: /links
```

## 添加其他自定义页面，如`关于`页面

``` bash
hexo new page about
```

# `Front-matter`相关

## 除开以有的[字段](https://hexo.io/zh-cn/docs/front-matter)，目前有效的相关属性

| key        | layout          | desc                                                   |
|------------|-----------------|--------------------------------------------------------|
| subtitle   | post,page,draft | 小标题，文章或页面的小标题，文章缺省值为文章的发布时间 |
| categories | post,draft      | 分类，文章的分类                                       |
| cover      | post,page,draft | 封面，文章或页面的封面，banner图                       |
| type       | page            | 页面类型，取值详见**可自定义的相关页面**              |

建议复制以下代码替换`scaffolds/`下默认的模版

### post.md,draft.md
``` markdown
---
title: {{ title }}
subtitle:
date: {{ date }}
categories:
tags:
cover:
---
```

### page.md
``` markdown
---
title: {{ title }}
subtitle:
date: {{ date }}
cover:
type:
---
```

# 自定义数据

## 友链数据

在目录的`source/_data`下新建一个**links.yml**

一行一条数据，格式如下:

``` yml
- { "name" : "", "describe" : "", "link" : "", "cover" : "" }
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

## 代码高亮

hexo默认提供了highlightjs代码高亮，如何开启？

**查找并修改`Hexo`下的`_config.yml`**

``` yml
highlight:
  enable: true
  line_number: true
  auto_detect: true
  tab_replace:
  hljs: true
  theme: monokai
```

其中`enable`为开启代码高亮，`hljs`设置为hljs为class，`theme`为highlight代码高亮主题，不设置默认为default

具体的主题可以在[https://highlightjs.org/](https://highlightjs.org/)查看

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

## aplayer

进入`flex-block`配置文件`_config.yml`找到`aplayer`

**`aplayer`歌词模式默认使用第三种（文件格式）**

``` yml
# aplayer 视频播放
# docs: https://aplayer.js.org/#/
aplayer:
  enable: true
  theme: "#b7daff"
  autoplay: false
  loop: false
  mutex: true
  lrcType: 3
```

详情查看[https://aplayer.js.org/](https://aplayer.js.org/)

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

## zoom 图片预览

进入`flex-block`配置文件`_config.yml`找到`zoom`

``` yml
# zoom 图片预览
# docs: https://github.com/miiiku/zoom
# Specific configuration information go to `layout/plug-in/zoom.ejs`
zoom: true
```

详情查看[https://github.com/miiiku/zoom](https://github.com/miiiku/zoom)

## waterfall 瀑布流

进入`flex-block`配置文件`_config.yml`找到`waterfall`

``` yml
# waterfall 瀑布流
# docs: https://github.com/miiiku/waterfall
# Specific configuration information go to `layout/plug-in/waterfall.ejs`
waterfall: true
```

如果要进行详细的配置，请找到并编辑`layout/plug-in/waterfall.ejs`


详情查看[https://github.com/miiiku/waterfall](https://github.com/miiiku/waterfall)

## Valine评论

进入`flex-block`配置文件`_config.yml`找到`valine`

``` yml
# valine 评论
# docs: https://valine.js.org
# You can get your appid and appkey from https://leancloud.cn
# 这里appId和appKey一定一定要改成自己的，没有的话去https://leancloud.cn这个网站注册创建一个
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

## disqus评论

进入`flex-block`配置文件`_config.yml`找到`disqus`

``` yml
# disqus 评论
# docs: https://disqus.com/
# website 网站到昵称
# error 加载失败的提示语
disqus:
  enable: true
  website: # your website
  error: 如果你看不到评论，那么就真的看不到评论 w(゜Д゜)w
```

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

## 插入音频 aplayer

**更多参数可参考[https://aplayer.js.org/#/home?id=options](https://aplayer.js.org/#/home?id=options)中`audio`的属性**

``` markdown
<!-- url 必填  -->
{% aplayer name="アイロニ" artist="鹿乃" url="https://qiniu.miiiku.xyz/public/music/鹿乃 - アイロニ.mp3" lrc="https://qiniu.miiiku.xyz/public/music/鹿乃 - アイロニ.lrc" cover="https://qiniu.miiiku.xyz/public/music/鹿乃 - アイロニ.jpg" %}
```

**注意: 需要开启`aplayer`插件才能正常使用本内置标签**

## 插入视频 dplayer

``` markdown
<!-- url 必填 cover(封面) 可选 subtitle(字幕) 可选 -->
{% dplayer url="https://qiniu.miiiku.xyz/video/%E7%BE%8E.mp4" cover="https://qiniu.miiiku.xyz/video/%E7%BE%8E.mp4?vframe/jpg/offset/10" %} 
```

**注意: 需要开启`dplayer`插件才能正常使用本内置标签**

## 插入瀑布流 waterfall

如需要修改大小 添加参数`size="max"`

``` markdown
{% waterfall size="max" %}
![imgname](imgsrc)
...
{% endwaterfall %}
```

**更多参数可参考[https://github.com/miiiku/waterfall#options](https://github.com/miiiku/waterfall#options) 原参数的`驼峰命名`改为`横线连接`**

🌰: 如设置布局为`水平布局`，每个元素的类名为`item-image`

``` markdown
{% waterfall direction=h item-class=item-image %}
![imgname](imgsrc)
...
{% endwaterfall %}
```

**注意: 需要开启`waterfall`插件才能正常使用本内置标签**

## 水平居中 center

使center标签内的内容水平居中

``` markdown
{% center %}
...
{% endcenter %}
```

## 插入书签 bookmark

``` markdown
<!-- link 地址(必填) title? 标题 cover? 封面 -->
{% bookmark title="我在这里" link="https://miiiku.xyz" cover="https://qiniu.miiiku.xyz/attach/2019/03/15529735091219953_175322076_H800.jpg" %}
```

## 插入图片 image

如需要修改大小 添加参数`size="max"`

``` markdown
<!-- src 地址(必填) title? 描述 size? 大小 -->
{% image src="https://qiniu.miiiku.xyz/attach/2019/03/15529735091219953_175322076_H800.jpg" title="hello world" size="max" %}
```



# 其他

## favicon

替换掉主题文件下的`source/favicon.ico`

## logo

``` yml
logo:
```

高度不超过50，宽度不超过200为最佳

## banner

``` yml
banner:
```

宽图为最佳

## 统计

``` yml
google_analytics: 

gauges_analytics: 

baidu_analytics: 

tencent_analytics: 
```

接入常用网站统计第三方

## social icon 社交图标

添加常用到一些社交图标

`header_enable` 首页导航栏是否显示社交图标

`footer_enable` 底部导航栏是否显示社交图标

如需要修改图标显示顺序，只需要移动`icons`下的列表顺序即可

``` yml
social_icon:
  header_enable: false
  footer_enable: false
  icons:
    - { type: email,      value: }
    - { type: github,     value: }
    - { type: google+,    value: }
    - { type: ins,        value: }
    - { type: twitter,    value: }
    - { type: youtube,    value: }
    - { type: weibo,      value: }
    - { type: cloudmusic, value: }
    - { type: zhihu,      value: }
```
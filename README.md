# flex-block

一个基于`Hexo`的主题

模仿加瞎改`Ghost`里的一个主题`nurui`


### 问题
* ~~~本地文件管理优化~~~
* ~~~文章上一篇，下一篇添加封面~~~
* ~~~站点添加keyword，文章添加keyword，为SEO优化，添加了其他meta头~~~
* ~~~除开文章，其他采用card的targe是否有效~~~
* 文章ID使用系统生成的还是使用20190301143002这样
* 评论去版本号
* 自定义的分类和标签页是否需要从新设计样式，如云标签
* 资源文件CDN配置，如插件
* 新增一个可以自定义添加脚本的入口(配置)


# 可自定义的相关页面

## 添加`分类`页面

``` bash
hexo new page categories
```

找到新建的页面并修改```Front-matter```，添加如下内容

``` markdown
layout: categories
```

## 添加`标签`页面

``` bash
hexo new page tags
```

找到新建的页面并修改```Front-matter```，添加如下内容

``` markdown
layout: tags
```

## 添加`友链`页面

``` bash
hexo new page links
```

找到新建的页面并修改```Front-matter```，添加如下内容

``` markdown
layout: links
```

## 添加`留言`页面

``` bash
hexo new page messages
```

找到新建的页面并修改```Front-matter```，添加如下内容

``` markdown
layout: messages
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

*如果启用了友链，则会判断`友链名称`和`友链描述`两个字段*

## dplayer

进入`flex-block`配置文件`_config.yml`找到`dplayer` 表示是否启用`deployer`

``` yml
# dplayer 视频播放
# docs: http://dplayer.js.org/#/zh-Hans/
dplayer: true
```

详情查看[http://dplayer.js.org/#/zh-Hans/](http://dplayer.js.org/#/zh-Hans/)

## macy 瀑布流

进入`flex-block`配置文件`_config.yml`找到`macy` 表示是否启用`macy`

``` yml
# macy 瀑布流
# docs: https://github.com/bigbite/macy.js
macy: true
```

详情查看[https://github.com/bigbite/macy.js](https://github.com/bigbite/macy.js)

## zoom 图片预览

进入`flex-block`配置文件`_config.yml`找到`zoom` 表示是否启用`zoom`

``` yml
# zoom 图片预览
# docs: https://github.com/miiiku/zoom
zoom: true
```

详情查看[https://github.com/miiiku/zoom](https://github.com/miiiku/zoom)

## Valine评论

进入`flex-block`配置文件`_config.yml`找到`comment`

``` yml
# comment
# valine docs: https://valine.js.org/configuration.html
comment:
  valine: false
```

`valine`为是否启用

详情查看[https://valine.js.org/configuration.html](https://valine.js.org/configuration.html)


## 一言

进入`flex-block`配置文件`_config.yml`找到`hitokoto`

``` yml
# 一言
# docs: https://hitokoto.cn/api
# type: [a, b, c, d, e, f, g]
hitokoto:
  enable: false
  type:
```

`enable`为是否启用

`type`为一言返回的类型

详情查看[https://hitokoto.cn/api](https://hitokoto.cn/api)
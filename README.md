# hexo-theme-instapaper

仿 instapaper 的一款极简 Hexo 主题

## 主题预览

[Demo](https://duyu.page)

## Feature

- 支持切换 DarkMode
- 内置实现图片懒加载
- 适配移动端

## TODO

- 支持多语言

## 安装主题

进入到自己的 Hexo 博客目录，在博客目录下拉取主题代码

```
git clone https://github.com/techmovie/hexo-theme-instapaper.git themes/instapaper --depth=1
```

在 Hexo 目录的`_config.yml`中将`theme`的值改为`instapaper`

## 主题配置

将本主题目录下的的`_config.yaml`按以下提示进行配置

```
comment:
  gitalk:
    enable: true  // 是否开启gitalk评论
    owner: github username
    admin: github username
    repo: 博客仓库名称
    ClientID:
    ClientSecret:
    labels: 'gitalk'
    distractionFreeMode: true
socialList:
  - name: telegram
    url: https://t.me/YOURNAME
  - name: github
    url: https://github.com/YOURNAME
  - name: mail
    url: mailto:YOURNAME@xx.com
highlight: // highlight 主题文件地址 可以按自己的喜好自定义
  light: https://cdn.staticfile.org/highlight.js/11.5.0/styles/github.min.css
  dark: https://cdn.staticfile.org/highlight.js/11.5.0/styles/github-dark.min.css
copyright: // 版权声明
  enable: true
  license: '本文采用<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">知识共享署名-非商业性使用 4.0 国际许可协议</a>进行许可'

```

本主题支持 highlightjs ，由于引用了 highlightjs 的主题，所以在博客根目录的 `_config.yaml` 中要按如下配置

```
highlight:
  enable: true
  line_number: false
  wrap: false
  hljs: true
```

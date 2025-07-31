---
layout: page
title: Building Jekyll
category: jekyll
---

# 在创建Jekyll 站点之前所遇到的问题


### 1.Markdown 语法

与普通版的Markdown语法不同，网页上的Markdown换行需要<b>两个回车</b>。

读取Latex需要专门的js解析

``` html
<script>
  <script>
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],  // 支持 $...$ 和 \(...\)
        displayMath: [['$$', '$$'], ['\\[', '\\]']], // 支持 $$...$$ 和 \[...\]
        tags: 'ams'  // 使用 AMS 标签
      },
      svg: {
        fontCache: 'global'  // 字体缓存优化
      }
    };
  </script>

  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
  </script>
```

### 2. include上

需要在html、md(不是_layout和_include)文件最上边使用

``` html
---
layout: page
title: 页面标题
---
```

才能正常使用Liquid标签

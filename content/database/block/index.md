---
title: Block
date: 2021-05-21
active: false
---


**Pattern Type**: Strict Still Life

**Discovery Year**: 1970

**Compositon**: Axiom

**Source**: [Wiki](https://www.conwaylife.com/wiki/Block)
<!--more-->

<p>
<script type="text/javascript" src="https://www.conwaylife.com/js/lv-plugin.js"></script></p>
<script>
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');
  var wrapper = canvas.parentNode;
  canvas.setAttribute("width", window.getComputedStyle(wrapper).width);
  canvas.setAttribute("height", window.getComputedStyle(wrapper).height);
  var max = 5;
  var rectWidth = 30;
  var rectHeight = 30;
  canvas.setAttribute("width", (max) * rectWidth + "px");
  canvas.setAttribute("height", (max) * rectHeight + "px");
  for (i = 0; i < max; i++) {
    ctx.fillRect(i * rectWidth, i * rectHeight, rectWidth, rectHeight);
  }
  ctx.fill();
</script>                    
<div class="rle"><div class="codebox"><div style="display:none; position: relative; z-index: 1031;"><code>2o$2o!
#C [[ THEME 6 GRID GRIDMAJOR 0 ZOOM 8.0 ]]
</code></div></div>
  <div class="wrapper">
  <canvas width="760" height="560" style="margin-left:1px; position: relative; z-index: 1031;"><noscript> <a href="https://www.conwaylife.com/wiki/File:Glider.png" class="image" title="Glider image"><img alt="Glider image" src="https://www.conwaylife.com/w/images/7/79/Glider.png" decoding="async" width="81" height="81" /></a> </noscript></canvas>
   </div>
</div>

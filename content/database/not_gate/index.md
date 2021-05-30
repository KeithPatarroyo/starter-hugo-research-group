---
title: NOT Gate
date: 2021-05-21
active: false
---


**Pattern Type**: Logic Gate

**Discovery Year**: 2013

**Composition**: [Gosper Glider Gun](https://galapagos.netlify.app/database/gosper_glider_gun/)(+0t) & [Gosper Glider Gun](https://galapagos.netlify.app/database/gosper_glider_gun/)(+11t)  & [Eater 1](https://galapagos.netlify.app/database/eater_1/) & [P60 Glider Gun(alternative)](https://galapagos.netlify.app/database/p60_glider_gun/)(+3t)

**Input**: Glider P60 Stream(+0t)

**Output**: Glider P60 Stream

**Source**: [Nicholas Carlini](https://nicholas.carlini.com/writing/2020/digital-logic-game-of-life.html)
<!--more-->

<style type="text/css">
table.center  {display:contents;}
table.center td{border-color: #ddd;border-style:solid;border-width:1px;border-top: 2px solid #ddd;}
table.center th{border-color: #ddd;border-style:solid;border-width:1px;border-top: 1px solid #ddd !important;}
table.center .tg-c3ow{text-align:center;vertical-align:top}
</style>

 <br />

<center>
<table class="center">
<thead>
  <tr>
    <th class="tg-c3ow">A</th>
    <th class="tg-c3ow">NOT A</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-c3ow">False</td>
    <td class="tg-c3ow">True</td>
  </tr>
</tbody>
</table>
</center>

<p>
<script type="text/javascript" src="https://www.conwaylife.com/js/lv-plugin.js"></script></p>

<div class="rle"><div class="codebox"><div style="display:none; position: relative; z-index: 1031;"><code>103b2o$103bobo$90bobo13bo7b2o$89bo2bo2b2o6bo2bo7b2o$80b2o6b2o5bobo8bo 173b2o$80b2o4b2o3bo3bo3bo3bobo173bobo$88b2o5b3ob2o2b2o176bo$89bo2bo3b 2o$90bobo3$106bo$104bobo$105b2o5$113bo$114bo48bo101b2o$112b3o46b3o100b obo$160bo105bo$160b2o4$121bo$119bobo$120b2o4$149b2o$150b2o$149bo100b2o $249bobo$251bo3$142bo$142b2o$141bobo6$134b2o$135b2o$134bo100b2o$234bo bo$236bo3$127bo$127b2o$126bobo6$119b2o$120b2o$119bo100b2o$219bobo$221b o3$112bo$112b2o$111bobo6$104b2o$105b2o$104bo100b2o$204bobo$206bo3$97b o$97b2o$96bobo6$89b2o$90b2o$89bo100b2o$189bobo$191bo3$82bo$82b2o$81bo bo6$74b2o$75b2o$74bo100b2o$174bobo$176bo3$67bo$67b2o$66bobo6$59b2o$60b 2o$59bo100b2o$159bobo$161bo3$52bo$52b2o$51bobo2$30b2o$30bo2bo2$34bo$44b 2o$32b2o11b2o$31bo12bo100b2o$144bobo$146bo$28b2o3b2o$28b2o3b2o$29b5o3b o$30bobo4b2o$36bobo$30b3o5$33bo$32bobo$31bo3bo94b2o$32b3o94bobo$30b2o 3b2o94bo11$32b2o$32b2o$115b2o$114bobo$116bo13$100b2o$99bobo$101bo13$85b 2o$84bobo$86bo13$70b2o$69bobo$71bo13$55b2o$54bobo$56bo3$22bo$20b4o$11b 2o5b4ob2o9b2o$9bo2bo3bo3b2ob3o8b2o$2o6bo7bo3b2ob2o$2o6bo6bo3b5o$8bo7b 3o3bo$9bo2bo$11b2o2$24bo15b2o$25b2o12bobo$24b2o15bo$19b2o$19b2o$19b2o $20bo10b2o$19bobo7bo2bo$19bobo7b4o$20bo11bo$31bo$31b3o$17b2o3b2o$17bo bobobo$18b5o$19b3o3b2o$20bo3bobo$26bo7$21b3o$20b2ob2o$20b2ob2o$20b5o$ 19b2o3b2o5$23b2o4$21b2o$21b2o! 
#C [[ COLOR ARROW Orange ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 78 10 103 10 2.0  ]]
#C [[ COLOR ARROW Red ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 103 10 103 0 2.0  ]]
#C [[ COLOR ARROW Green ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 103 0 78 0 2.0  ]]
#C [[ COLOR ARROW Blue ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 78 0 78 10 2.0  ]]
#C [[ COLOR ARROW Orange ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 92 8 117 8 2.0  ]]
#C [[ COLOR ARROW Red ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 117 8 117 -2 2.0  ]]
#C [[ COLOR ARROW Green ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 117 -2 92 -2 2.0  ]]
#C [[ COLOR ARROW Blue ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 92 -2 92 8 2.0  ]]
#C [[ COLOR ARROW Orange ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 38 170 38 145 2.0  ]]
#C [[ COLOR ARROW Red ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 38 145 28 145 2.0  ]]
#C [[ COLOR ARROW Green ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 28 145 28 170 2.0  ]]
#C [[ COLOR ARROW Blue ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 28 170 38 170 2.0  ]]
#C [[ COLOR ARROW Orange ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 36 156 36 131 2.0  ]]
#C [[ COLOR ARROW Red ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 36 131 26 131 2.0  ]]
#C [[ COLOR ARROW Green ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 26 131 26 156 2.0  ]]
#C [[ COLOR ARROW Blue ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 26 156 36 156 2.0  ]]
#C [[ COLOR ARROW Gray ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW 37 284 37 232 2.0  ]]
#C [[ COLOR ARROW Fuchsia ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW 37 232 -2 232 2.0  ]]
#C [[ COLOR ARROW Lime ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW -2 284 37 284 2.0  ]]
#C [[ COLOR ARROW Salmon ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW -2 232 -2 284 2.0  ]]
#C [[ COLOR ARROW Fuchsia ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 165 24 165 17 2.0  ]]
#C [[ COLOR ARROW Lime ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 165 17 158 17 2.0  ]]
#C [[ COLOR ARROW Salmon ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 158 17 158 24 2.0  ]]
#C [[ COLOR ARROW Gray ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 158 24 165 24 2.0  ]]
#C [[ COLOR ARROW Cyan ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW -2 284 165 284 2.0  ]]
#C [[ COLOR ARROW Yellow ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW 165 284 165 -2 2.0  ]]
#C [[ COLOR ARROW Brown ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW 165 -2 -2 -2 2.0  ]]
#C [[ COLOR ARROW Purple ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW -2 -2 -2 284 2.0  ]]
#C [[ COLOR LABEL Green LABELSIZE 10 LABELALPHA 0.70 ]] 
#C [[ LABEL 20 228 2.0 "P60 Glider Gun(alternative)" ]]
#C [[ COLOR LABEL Green LABELSIZE 10 LABELALPHA 0.70 ]] 
#C [[ LABEL 20 128 2.0 "Gosper Glider Gun" ]]
#C [[ COLOR LABEL Green LABELSIZE 10 LABELALPHA 0.70 ]] 
#C [[ LABEL 100 18 2.0 "Gosper Glider Gun" ]]
#C [[ COLOR LABEL Green LABELSIZE 10 LABELALPHA 0.70 ]] 
#C [[ LABEL 160 14 2.0 "Eater 1" ]]
#C [[ COLOR LABEL Green LABELSIZE 40 LABELALPHA 0.70 ]] 
#C [[ LABEL 100 -15 2.0 "NOT Gate 1" ]]
#C [[ THEME 6 GRID GRIDMAJOR 0 ZOOM 1.0 ]]
</code></div></div><canvas width="760" height="560" style="margin-left:1px; position: relative; z-index: 1031;"><noscript> <a href="https://www.conwaylife.com/wiki/File:Glider.png" class="image" title="Glider image"><img alt="Glider image" src="https://www.conwaylife.com/w/images/7/79/Glider.png" decoding="async" width="81" height="81" /></a> </noscript></canvas></div>

 <br />
  <br />

<center>
<table class="center">
<thead>
  <tr>
    <th class="tg-c3ow">A</th>
    <th class="tg-c3ow">NOT A</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-c3ow">True</td>
    <td class="tg-c3ow">False</td>
  </tr>
</tbody>
</table>
</center>

  
<p>
<script type="text/javascript" src="https://www.conwaylife.com/js/lv-plugin.js"></script></p>

<div class="rle"><div class="codebox"><div style="display:none; position: relative; z-index: 1031;"><code>43b2o$42bobo$41b3o$41b2o$41b2o$42bobo$43bo$153b2o$152bo3bo$40b2o3b2o89b
2o13bo5bo3b2o$40b2o3b2o89b2o13bo3bob2o2b2o$127b2o3bo6b2o10bo5bo$42b3o
82bobo3bo5b3o10bo3bo$42b3o83b5o6b2o12b2o$43bo85b3o4b2o9bobo$136b2o10b
2o$148bo$23b2o$23bo2bo$9bobo15bo6b2o$7bo3bo2b3o10bo6b2o5bo$2o5bo19bo11b
2o114bo$2o4bo4bo7b2o2bo2bo13b2o114b2o$7bo7bobo2bo2b2o130b2o$7bo3bo5b3o
24b3o$9bobo31bo3bo$42bo5bo161bo$31b2o9bo5bo159b3o$26bo3b3o12bo161bo$27b
o15bo3bo114bobo42b2o$25b3o16b3o116b2o$45bo117bo3$45b2o$45b2o$170bo$171b
2o$170b2o5$41bo$42bo134bobo$40b3o135b2o$178bo5$184b3o$186bo$185bo5$56b
o$57bo$55b3o6$169b3o$171bo$170bo5$71bo$72bo134bobo$70b3o135b2o$208bo5$
154b3o$156bo$155bo5$86bo$87bo$85b3o6$139b3o$141bo$140bo96bo$237b2o$236b
o2bo$237b2o$237bo$101bo$102bo$100b3o6$124b3o$126bo$125bo99b2o$226b2o$
225bo3$112bo$112b2o$112b2o6$109b3o$111bo$110bo99b2o$211b2o$210bo3$102b
2o$101bobo$103bo5$77b2o$77b2o15b3o$96bo$95bo99b2o$196b2o$195bo3$77b3o
7b2o$76bo3bo5bobo$88bo$75bo5bo$75b2o3b2o3$80b2o$80bobo$82bo$81b2o97b2o
$78bo102b2o$78bo2bo98bo$78bo3$77b2obob2o2$77bo5bo2$78b2ob2o$80bo4$165b
2o$79b2o85b2o$79b2o84bo13$150b2o$151b2o$150bo13$135b2o$136b2o$135bo13$
120b2o$121b2o$120bo13$105b2o$106b2o$105bo6$74bo$73bobo$56b2o15b2obo4b
2o$56bobo14b2ob2o3b2o$47b2o2b2o6bo13b2obo$47b2obo2bo2bo2bo13bobo$51b2o
6bo8bo5bo$56bobo7bobo21b2o$56b2o9b2o22b2o$90bo4$66b2o6bobo$66b2o5bo2b
o$73bo$74bobob2o$75bo$78b2o4$67bo7b2o$66b3o7b2o$65b5o5bo$64b2o3b2o3$69b
2o$71bo$68bo$68bo2bo$67b2ob2o$68b2o3$66b2o3b2o$66b2o3b2o$67b5o$68bobo
2$68b3o6$68b2o$68b2o!
#C [[ THEME 6 GRID GRIDMAJOR 0 ZOOM 1.6 ]]
</code></div></div><canvas width="760" height="560" style="margin-left:1px; position: relative; z-index: 1031;"><noscript> <a href="https://www.conwaylife.com/wiki/File:Glider.png" class="image" title="Glider image"><img alt="Glider image" src="https://www.conwaylife.com/w/images/7/79/Glider.png" decoding="async" width="81" height="81" /></a> </noscript></canvas></div>



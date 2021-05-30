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

<div class="rle"><div class="codebox"><div style="display:none; position: relative; z-index: 1031;"><code>x = 284, y = 283, rule = Life
103bobo$103bo2bo$88bo6bo10b2o6b2o$87bobo5bo8bo3b2o4b2o165b2o$80b2o4bo
b2o6bo9b2o174b2o$80b2o3b2ob2o9b2o2bo2bo174bo$86bob2o5b3o2bo2bobo$87bo
bo7b4o$88bo9b2o4$106bo$107b2o$106b2o4$266b2o$163bo103b2o$113bobo45b3o
102bo$114b2o44bo$114bo45b2o5$121bo$122b2o$121b2o2$150b3o$152bo$151bo99b
2o$252b2o$251bo3$143b2o$142bobo$144bo6$135b3o$137bo$136bo99b2o$237b2o
$236bo3$128b2o$127bobo$129bo6$120b3o$122bo$121bo99b2o$222b2o$221bo3$113b
2o$112bobo$114bo6$105b3o$107bo$106bo99b2o$207b2o$206bo3$98b2o$97bobo$
99bo6$90b3o$92bo$91bo99b2o$192b2o$191bo3$83b2o$82bobo$84bo6$75b3o$77b
o$76bo99b2o$177b2o$176bo3$68b2o$67bobo$69bo6$60b3o$62bo$61bo99b2o$162b
2o$161bo3$53b2o$52bobo$54bo3$30b2o$30b2o2$45b3o$47bo$46bo99b2o$147b2o
$146bo3$38b2o$37bobo$28b2o3b2o4bo$30b3o$29bo3bo$30bobo$31bo2$32b3o$32b
3o$131b2o$132b2o$131bo$30b2o3b2o$31b5o$32b3o$33bo8$32b2o$32b2o82b2o$117b
2o$116bo13$101b2o$102b2o$101bo13$86b2o$87b2o$86bo13$71b2o$72b2o$71bo13$
56b2o$57b2o$56bo4$23b2o$23bo2bo$9bobo15bo6b2o$7bo3bo2b3o10bo6b2o$2o5b
o19bo$2o4bo4bo7b2o2bo2bo$7bo7bobo2bo2b2o$7bo3bo5b3o$9bobo$41b2o$42b2o
$26bo14bo$27bo$19b2o4b3o$19b2o3$29bo3b2o$21b2o5b3ob3o$29bo2b3o$30bo$32b
o$31bo$17b2o3b2o7bo$18b5o3b2o$18b2ob2o4b2o$18b2ob2o3bo$19b3o5$21b3o$21b
3o$20bo3bo$19bo5bo$20bo3bo$21b3o10$21b2o$21b2o!
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
#C [[  ARROW -2 284 196 284 2.0  ]]
#C [[ COLOR ARROW Yellow ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW 196 284 196 -2 2.0  ]]
#C [[ COLOR ARROW Brown ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW 196 -2 -2 -2 2.0  ]]
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
#C [[ COLOR ARROW Red ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW -39 1 66 106 2.0  ]]
#C [[ COLOR ARROW Red ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 113 168 278 3 2.0  ]]
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

<div class="rle"><div class="codebox"><div style="display:none; position: relative; z-index: 1031;"><code>x = 269, y = 322, rule = Life
43b2o$43b2o4$43bo$42b3o$41bo3bo$40bob3obo$41b5o6$42bo2b2o$42bobo$23bo
17b2o$21bobo16b2o$12bo7bobo11b2o4b2obo$11b2o6bo2bo11b2o5b3o$2o8b2o4b2o
2bobo$2o7b3o4b2o3bobo$10b2o4b2o5bo18b2o3b2o$11b2o32bo$12bo29bo5bo$24b
o9bobo6b2ob2o$25bo4b2o2b2o8bobo$23b3o3b3o3bo9bo$28b2o2bo12bo$27bob3o$
26bo4bo$30bo$27b2o$30bo14b2o$45b2o4$182bobo$182bo2bo$39bo127bo6bo10b2o
6b2o$40bo125bobo5bo8bo3b2o4b2o$38b3o118b2o4bob2o6bo9b2o$159b2o3b2ob2o
9b2o2bo2bo$165bob2o5b3o2bo2bobo$166bobo7b4o$167bo9b2o4$185bo$186b2o$185b
2o3$54bo$55bo$53b3o186bo$192bobo45b3o$193b2o44bo$193bo45b2o5$200bo$201b
2o$200b2o3$69bo$70bo$68b3o$207bobo$208b2o$208bo9$214b3o$84bo131bo$85b
o129bo$83b3o12$199b3o$99bo101bo$100bo99bo$98b3o$237bobo$238b2o$238bo9$
184b3o$114bo71bo$115bo69bo$113b3o12$169b3o94b2o$129bo41bo92b2o2bo$130b
o39bo92b2o$128b3o131bobobobo$262bo4b2o$263bo10$154b3o$144bo11bo$145bo
9bo99b2o$143b3o110b2o$255bo3$147b2o$146bobo$148bo6$139b3o$141bo$140bo
99b2o$241b2o$240bo3$132b2o$131bobo$133bo3$109b2o$109b2o2$124b3o$126bo
$125bo99b2o$226b2o$225bo3$117b2o$116bobo$107b2o3b2o4bo$109b3o$108bo3b
o$109bobo$110bo2$111b3o$111b3o$210b2o$211b2o$210bo$109b2o3b2o$110b5o$
111b3o$112bo8$111b2o$111b2o82b2o$196b2o$195bo13$180b2o$181b2o$180bo13$
165b2o$166b2o$165bo13$150b2o$151b2o$150bo13$135b2o$136b2o$135bo4$102b
2o$102bo2bo$88bobo15bo6b2o$86bo3bo2b3o10bo6b2o$79b2o5bo19bo$79b2o4bo4b
o7b2o2bo2bo$86bo7bobo2bo2b2o$86bo3bo5b3o$88bobo$120b2o$121b2o$105bo14b
o$106bo$98b2o4b3o$98b2o3$108bo3b2o$100b2o5b3ob3o$108bo2b3o$109bo$111b
o$110bo$96b2o3b2o7bo$97b5o3b2o$97b2ob2o4b2o$97b2ob2o3bo$98b3o5$100b3o
$100b3o$99bo3bo$98bo5bo$99bo3bo$100b3o10$100b2o$100b2o!
#C [[ COLOR ARROW Orange ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 157 49 182 49 2.0  ]]
#C [[ COLOR ARROW Red ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 182 49 182 39 2.0  ]]
#C [[ COLOR ARROW Green ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 182 39 157 39 2.0  ]]
#C [[ COLOR ARROW Blue ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 157 39 157 49 2.0  ]]
#C [[ COLOR ARROW Orange ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 171 47 196 47 2.0  ]]
#C [[ COLOR ARROW Red ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 196 47 196 37 2.0  ]]
#C [[ COLOR ARROW Green ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 196 37 171 37 2.0  ]]
#C [[ COLOR ARROW Blue ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 171 37 171 47 2.0  ]]
#C [[ COLOR ARROW Orange ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 117 209 117 184 2.0  ]]
#C [[ COLOR ARROW Red ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 117 184 107 184 2.0  ]]
#C [[ COLOR ARROW Green ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 107 184 107 209 2.0  ]]
#C [[ COLOR ARROW Blue ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 107 209 117 209 2.0  ]]
#C [[ COLOR ARROW Orange ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 115 195 115 170 2.0  ]]
#C [[ COLOR ARROW Red ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 115 170 105 170 2.0  ]]
#C [[ COLOR ARROW Green ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 105 170 105 195 2.0  ]]
#C [[ COLOR ARROW Blue ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 105 195 115 195 2.0  ]]
#C [[ COLOR ARROW Gray ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW 116 323 116 271 2.0  ]]
#C [[ COLOR ARROW Fuchsia ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW 116 271 77 271 2.0  ]]
#C [[ COLOR ARROW Lime ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW 77 323 116 323 2.0  ]]
#C [[ COLOR ARROW Salmon ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW 77 271 77 323 2.0  ]]
#C [[ COLOR ARROW Fuchsia ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 244 63 244 56 2.0  ]]
#C [[ COLOR ARROW Lime ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 244 56 237 56 2.0  ]]
#C [[ COLOR ARROW Salmon ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 237 56 237 63 2.0  ]]
#C [[ COLOR ARROW Gray ARROWSIZE 3 0.1 ARROWALPHA 0.70 ]]
#C [[  ARROW 237 63 244 63 2.0  ]]
#C [[ COLOR ARROW Cyan ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW 77 323 275 323 2.0  ]]
#C [[ COLOR ARROW Yellow ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW 275 323 275 37 2.0  ]]
#C [[ COLOR ARROW Brown ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW 275 37 77 37 2.0  ]]
#C [[ COLOR ARROW Purple ARROWSIZE 3 0.02 ARROWALPHA 0.70 ]]
#C [[  ARROW 77 37 77 323 2.0  ]]
#C [[ COLOR ARROW Red ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 41 41 146 146 2.0  ]]
#C [[ COLOR ARROW Red ARROWSIZE 3 0.05 ARROWALPHA 0.70 ]]
#C [[  ARROW 192 207 357 42 2.0  ]]
#C [[ COLOR LABEL Green LABELSIZE 10 LABELALPHA 0.70 ]]
#C [[ LABEL 98 264 2.0 "P60 Glider Gun(alternative)" ]]
#C [[ COLOR LABEL Green LABELSIZE 10 LABELALPHA 0.70 ]]
#C [[ LABEL 98 164 2.0 "Gosper Glider Gun" ]]
#C [[ COLOR LABEL Green LABELSIZE 10 LABELALPHA 0.70 ]]
#C [[ LABEL 178 56 2.0 "Gosper Glider Gun" ]]
#C [[ COLOR LABEL Green LABELSIZE 10 LABELALPHA 0.70 ]]
#C [[ LABEL 238 52 2.0 "Eater 1" ]]
#C [[ COLOR LABEL Green LABELSIZE 40 LABELALPHA 0.70 ]]
#C [[ LABEL 178 23 2.0 "NOT Gate 2" ]]
#C [[ THEME 6 GRID GRIDMAJOR 0 ZOOM 1.0 ]]
</code></div></div><canvas width="760" height="560" style="margin-left:1px; position: relative; z-index: 1031;"><noscript> <a href="https://www.conwaylife.com/wiki/File:Glider.png" class="image" title="Glider image"><img alt="Glider image" src="https://www.conwaylife.com/w/images/7/79/Glider.png" decoding="async" width="81" height="81" /></a> </noscript></canvas></div>



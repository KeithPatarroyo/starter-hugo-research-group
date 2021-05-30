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

<div class="rle"><div class="codebox"><div style="display:none; position: relative; z-index: 1031;"><code>x = 274, y = 322, rule = Life
43b2o$43b2o3$43bo$42bobo$41bo3bo$41b5o$40b2o3b2o$41b5o$42b3o$43bo4$44b
o$41b2o$22bo18b3o$21bobo18b2o$11b2o6b2o3bo9b2o6bo$10bobo4b2obo3bo9b2o
5bobo$2o7b3o4b3obo3bo16b2o$2o6b3o4bo2b2obobo$9b3o4b2o4bo$10bobo29b2ob
ob2o$11b2o$35bo6bo5bo$25bo8bo$23bobo5b2ob2o7b2ob2o$24b2o2bo3bo12bo$28b
o2b2o$31b2o$28bobo2$45b2o$45b2o4$183bobo$183bo3bo$167bo19bo5b2o$40bo124b
4o14bo4bo4b2o$38bobo118b2o3bobob2o4bo12bo$39b2o118b2o2bo2bob3o5b2obo3b
o3bo$164bobob2o5b4obo2bobo$165b4o6b2o2b2o$167bo5$185bobo$186b2o$186bo
3$55bo$53bobo186bo$54b2o137bo46b3o$194b2o43bo$193b2o44b2o6$200bobo$201b
2o$201bo28b2o$229bobo$231bo$70bo$68bobo$69b2o137bo$209b2o$208b2o5$215b
3o$215bo$215bobo4$85bo$83bobo$84b2o137bo$224b2o$223b2o8$200b2o$199bob
o$201bo$100bo$98bobo$99b2o10$185b2o$184bobo$186bo$115bo$113bobo$114b2o
137bo$254b2o$253b2o8$170b2o$169bobo98b3o$171bo97bo3bo$130bo138bo3bo$128b
obo139b3o$129b2o10$155b2o$154bobo$156bo99bo$145bo110b2o$143bobo109bob
o$144b2o3$147b3o$149bo$148bo5$140b2o$139bobo$141bo99bo$241b2o$240bobo
4$132b3o$134bo$133bo3$109b2o$109b2o$125b2o$124bobo$126bo99bo$226b2o$225b
obo4$117b3o$109b3o7bo$108bo3bo5bo$107bo5bo$108bo3bo$109b3o$109bo2bo$110b
3o$110b2obo$111bobo97bo$112bo98b2o$210bobo2$109b2o3b2o$109bobobobo$110b
5o$111b3o$112bo7$111b2o83bo$111b2o83b2o$195bobo13$181bo$181b2o$180bob
o13$166bo$166b2o$165bobo13$151bo$151b2o$150bobo13$136bo$136b2o$135bob
o5$102b2o$102b3o$88bo15b2obo5b2o$86bobo4b3o8bo2bo5b2o$79b2o4bobo16b2o
bo$79b2o3bo2bo7bo2b2o2b3o$85bobo7bo3bo2b2o$86bobo6bo2bo$88bo8b2o22bo$
121b2o$120bobo2$106bo$98b2o4bobo$98b2o5b2o2$108bo$107bobo$106b2obobob
2o$108b2ob2o$110b3o$109bo$110b2o$106bo$96b2o3b2o3b2o$105bobo$97bo3bo$
98b3o$98b3o3$101bo$100b3o$99bo3bo$101bo$98bo5bo$98bo5bo$99bo3bo$100b3o
9$100b2o$100b2o!
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



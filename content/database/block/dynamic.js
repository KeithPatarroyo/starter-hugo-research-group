function init() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');
  var wrapper = canvas.parentNode;
  canvas.setAttribute("width", window.getComputedStyle(wrapper).width);
  canvas.setAttribute("height", window.getComputedStyle(wrapper).height);

  var max = 5;
  var rectWidth = 300;
  var rectHeight = 300;
  canvas.setAttribute("width", (max) * rectWidth + "px");
  canvas.setAttribute("height", (max) * rectHeight + "px");

  for (i = 0; i < max; i++) {
    ctx.fillRect(i * rectWidth, i * rectHeight, rectWidth, rectHeight);
  }
  ctx.fill();
}

var w = $(window).width();
var h = $(window).height();
var scale = 1;

function zoom(x) {
  if (x === -1) {
    scale = scale * 1.1;
  } else {
    scale = scale * 0.9;
  }

  $('#myiframe').css('transform', `scale(${scale})`);
}

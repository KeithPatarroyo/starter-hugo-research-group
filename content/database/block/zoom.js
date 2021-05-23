var w = document.getElementById("myiframe").width
var h = document.getElementById("myiframe").height
var div = document.getElementById("myiframe");
var scale = 1;
div.onload = function() {
        div.style.height = div.contentWindow.document.body.scrollHeight + 100 + 'px';
        div.style.width = div.contentWindow.document.body.scrollHeight + 90 + 'px';
        if ($(window).width() < 770){
          scale = $(window).width()/ 770;
        }
        $('#myiframe').css('transform', `scale(${scale})`);
      }


function zoom(x) {
  if (x === -1) {
    scale = scale * 1.1;
    w = w * 1.03;
    h = h * 1.1;
    //$("#myiframe").width(w + "px");
    //$("#myiframe").height(h + "px");
  } else {
    scale = scale * 0.9;
    w = w * 0.97;
    h = h * 0.9;
    //$("#myiframe").width(w + "px");
    //$("#myiframe").height(h + "px");
  }

  $('#myiframe').css('transform', `scale(${scale})`);
}

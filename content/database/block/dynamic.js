//get the elements
const canvas = document.getElementById("canvas");
const myDiv = document.getElementById("my-div");

//set the width and height attributes to the div width and height
function resize(){
  canvas.width = myDiv.clientWidth;
  canvas.height =myDiv.clientWidth*(560/760);
}
//on page resize, call resize()
window.addEventListener("resize", resize, false);

//call resize() initially to set the canvas size correctly
resize();

//you can call resize() when your div changes size, dynamically resizing the canvas to the div

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var mode = "fill"; //By default clicking will fill the blocks
var h = c.height;
var w = c.width;
var brush = [5, 5, "#ace600"];
//Setting the background color of the Canvas
ctx.fillStyle = "#f2f2f2";
ctx.fillRect(0, 0, w, h);

//Function for drawing/erasing
function modGrid(event) {
  x = event.offsetX;
  y = event.offsetY;
  if (event.shiftKey) {
    if (mode == "fill") {
      ctx.fillStyle = brush[2];
      ctx.fillRect(x, y, brush[0], brush[1]);
    } else if (mode == "clear") {
      ctx.clearRect(x, y, brush[0], brush[1]);
      ctx.fillStyle = "#f2f2f2";
      ctx.fillRect(x, y, brush[0], brush[1])
    }
  }
}

// Generating the grid lines
function generateGrid() {
  for (var i = 0; i <= h; i += 25) {
    ctx.moveTo(0, i);
    ctx.lineTo(w, i);
    ctx.stroke();
  }
  for (var i = 0; i <= w; i += 25) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, h);
    ctx.stroke();
  }
}

//Adding the various event listeners for buttons
document.getElementById("btn-1").addEventListener("click", function() {
  brush[2] = "#ff5050";
})
document.getElementById("btn-2").addEventListener("click", function() {
  brush[2] = "#ace600";
})
document.getElementById("btn-3").addEventListener("click", function() {
  brush[2] = "#4da6ff";
})
document.getElementById("btn-4").addEventListener("click", function() {
  brush[2] = "#ffff4d";
})
document.getElementById("btn-5").addEventListener("click", function() {
  mode = "fill";
})
document.getElementById("btn-6").addEventListener("click", function() {
  mode = "clear";
})
document.getElementById("btn-7").addEventListener("click", function() {
  brush[0] = 3;
  brush[1] = 3;
})
document.getElementById("btn-8").addEventListener("click", function() {
  brush[0] = 5;
  brush[1] = 5;
})
document.getElementById("btn-9").addEventListener("click", function() {
  brush[0] = 8;
  brush[1] = 8;
})
document.getElementById("btn-10").addEventListener("click", function() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#f2f2f2";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = brush[2];
})
//Adding the event listener to the Canvas itself
c.addEventListener("mousemove", modGrid);

myCanvas = document.getElementById("canvas");
ctx = myCanvas.getContext("2d");

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

var arr = [];
var colorArr = ["#ff7b54", "#ffb26b", "#ffd56b", "#939b62"];
var bgColor = "white";
const maxradius = 25;
const minradius = 5;
var circleCount = 500;

class Circle {
    xpos = 0;
    ypos = 0;
    radius = 0;
    color = "";
    dx = 0;
    dy = 0;
    constructor(x, y, r, c, dx, dy) {
        this.xpos = x;
        this.ypos = y;
        this.radius = r;
        this.color = c;
        this.dx = dx;
        this.dy = dy;
    }
    drawCircle() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
    }
    update() {
        if (this.xpos + this.radius > myCanvas.width || this.xpos - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.ypos + this.radius > myCanvas.height || this.ypos - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.xpos += this.dx;
        this.ypos += this.dy;
        this.drawCircle();
    }
}

function init(n){
  myCanvas.style.backgroundColor = bgColor;
  arr.length=0;
  for (var i = 1; i <= n; i++) {
      var x = Math.random() * 200 + 20;
      var y = Math.random() * 200 + 20;
      var r = Math.random() * 10 + 5;
      var dx = Math.random() * 4 + 1;
      var dy = Math.random() * 4 + 1;
      var c = colorArr[Math.floor(Math.random() * 4)];
      var myCircle = new Circle(x, y, r, c, dx, dy);
      arr.push(myCircle);
  }
}

function animate() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    for (var i = 0; i < arr.length; i++) {
        arr[i].update();
    }
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

init(circleCount);

document.getElementById('btn-1').addEventListener("click",function(){
  colorArr = ["#ff7b54", "#ffb26b", "#ffd56b", "#939b62"];
  bgColor = "white";
  init(circleCount);
  document.getElementById('btn-1').classList = "btn btn-light";
  document.getElementById('btn-2').classList = "btn btn-light";
  document.getElementById('btn-3').classList = "btn btn-light";
  document.getElementById('counter').classList = "text-light";
});
document.getElementById('btn-2').addEventListener("click",function(){
  bgColor = "#252627";
  colorArr = ["#4B88A2","#BB0A21","#FFF9FB","#99cc00"];
  init(circleCount);
  document.getElementById('btn-1').classList = "btn btn-dark";
  document.getElementById('btn-2').classList = "btn btn-dark";
  document.getElementById('btn-3').classList = "btn btn-dark";
  document.getElementById('counter').classList = "text-dark";
});
document.getElementById('btn-3').addEventListener("click",function(){
  circleCount = document.getElementById('counter').value;
  init(circleCount);
});

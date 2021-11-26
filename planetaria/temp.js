var can = document.getElementById("myCanvas2");
var ctx = can.getContext("2d");


var xcenter = can.width / 2;
var ycenter = can.height / 2;
var flag = false;


var barlength=0;
var mybar = setInterval(function(){
    if(barlength>200){
        clearInterval(mybar);
        ctx.clearRect(0,0,can.width,can.height);
        window.flag=true;
        console.log(window.flag);
        if(window.flag){
          alert("F");
        }
    }
    ctx.beginPath();
    ctx.fillStyle="green";
    ctx.fillRect(200+barlength,400,1,25);
    ctx.closePath();
    barlength+=1;
},25);

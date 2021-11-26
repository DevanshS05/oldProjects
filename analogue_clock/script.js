const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
var radius = 250;

//Setting the size of the canvas according to the size of the window
if(window.innerWidth<=600){
  canvas.width=400;
  radius = 180;
}

//Declaring an array to store the angles for hours, minutes and seconds
var angles = [0,0,0];

const pieby2 = Math.PI/2;
const xcenter = canvas.width/2;
const ycenter = canvas.height/2;

function updateAngle(){
  var d = new Date();
  //Updating angle for hours
  if(d<=12){
    angles[0] = ((2*Math.PI)/12)*d.getHours();
   }
   else if(d>=12){
     angles[0] = ((2*Math.PI)/12)*(d.getHours()-12);
   }
   angles[0] = angles[0]-pieby2;
   //Updating angle for minutes
   angles[1] = (((2*Math.PI)/60)*d.getMinutes())-pieby2;
   //Updating angle for seconds
   angles[2] = (((2*Math.PI)/60)*d.getSeconds())-pieby2;

   //Debugging
   //console.log(angles[0]+" "+angles[1]+" "+angles[2]);
}

function drawClock(){
  ctx.beginPath();
  ctx.fillStyle = "#f2f2f2";
  ctx.clearRect(0,0,canvas.height,canvas.width);
  ctx.arc(xcenter,ycenter,radius,0,2*Math.PI,false);
  ctx.fill();
  ctx.strokeStyle="black";
  ctx.lineWidth="10";
  ctx.arc(xcenter,ycenter,radius-10,0,2*Math.PI,false);
  ctx.stroke();
  ctx.closePath();

  //Drawing the hour hand
  ctx.beginPath();
  ctx.strokeStyle="#ff3333";
  ctx.lineWidth=8;
  ctx.moveTo(xcenter,ycenter);
  ctx.lineTo(xcenter+Math.cos(angles[0])*(radius*0.4),ycenter+Math.sin(angles[0])*(radius*0.4));
  ctx.stroke();
  ctx.closePath();

  //Drawing the minute hand
  ctx.beginPath();
  ctx.strokeStyle="#0088cc";
  ctx.lineWidth=5;
  ctx.moveTo(xcenter,ycenter);
  ctx.lineTo(xcenter+Math.cos(angles[1])*(radius*0.7),ycenter+Math.sin(angles[1])*(radius*0.7));
  ctx.stroke();
  ctx.closePath();

  //Drawing the seconds hand
  ctx.beginPath();
  ctx.strokeStyle="#59b300";
  ctx.lineWidth=3;
  ctx.moveTo(xcenter,ycenter);
  ctx.lineTo(xcenter+Math.cos(angles[2])*(radius*0.9),ycenter+Math.sin(angles[2])*(radius*0.9));
  ctx.stroke();
  ctx.closePath();

}

setInterval(function(){
  updateAngle();
  drawClock();
},1000);

 const can = document.getElementById("myCanvas");
 const ctx = can.getContext("2d");

 const scale = 3;
 const color = "blue";
 var arr = [];
 var counter1 = 0;
 var counter2 = 0;
 var counter3 = 0;
 const intervalSize = 100;

 function generate() {
   arr.length = document.getElementById('arr-length').value;
   for (var x = 0; x < arr.length; x++) {
     arr[x] = Math.floor(Math.random() * 100) + 1;
   }
 }

 function drawText(s,x,y,color){
   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.font="12px verdana";
   ctx.strokeText(s,x,y);
   ctx.closePath();

 }

 function draw() {
   const scalex = 3;
   ctx.clearRect(0, 0, can.width, can.height);
   ctx.beginPath();
   ctx.fillStyle="white";
   for (var i = 0; i < arr.length; i++) {
     var xpos = 10 + i * 6;
     var ypos = 400 - (arr[i] * scale);
     var h = arr[i] * scale;
     //console.log(xpos + " " + ypos + "  Height:" + h);
     ctx.fillRect(xpos, ypos, scalex, h);
   }
   ctx.closePath();
 }

 function selectionsortArray() {
   counter1 = 0;
   var n = arr.length;
   for (var i = 0; i < n - 1; i++) {
     for (var j = i + 1; j < n; j++) {
       if (arr[i] > arr[j]) {
         var temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
       }
       counter1++;
     }
   }
 }

 function bubblesortArray(){
   //Creating a new indepentdent copy of the array
   var arrTemp = [];
   arrTemp.length = arr.length;
   for(var a=0;a<arrTemp.length;a++){arrTemp[a]=arr[a];}

   counter2=0;//Resetting the counter

   for(var a=0;a<arrTemp.length-1;a++){
     for(var b=0;b<arrTemp.length-a;b++){
       if(arrTemp[b]>arrTemp[b+1]){
         var temp = arr[b+1];
         arrTemp[b+1] = arrTemp[b];
         arrTemp[b] = temp;
       }
       counter2++;
     }
   }
 }

 function insertionsortArray(){
   //Creating a new independent copy of the array
   var arrTemp = [];
   arrTemp.length = arr.length;
   for(var a=0;a<arrTemp.length;a++){arrTemp[a]=arr[a];}

   counter3=0;//Resetting the counter;

   for(var a=1;a<arrTemp.length;a++){
     var cTemp = arrTemp[a];
     var b=a-1;
     while(arrTemp[b]>cTemp && b>=0){arrTemp[b+1]=arrTemp[b];counter3++;b--;}
     arrTemp[b]=cTemp;
   }
 }

function passCount(){
  console.log("Been Here!")
  drawText("Passes::",20,20,"white");
  drawText("Selection-Sort: "+counter1,20,40,"#ffc34d");
  drawText("Bubble-Sort: "+counter2,20,60,"#ff6666");
  drawText("Insertion-Sort:"+counter3,20,80,"#99cc00");
}

 function init() {
   generate();
   draw();
   drawText("Program started!",500,20,"white");
 }

//Adding the various event listeners for the buttons
 document.getElementById('btn-sort').addEventListener("click", function(){
   insertionsortArray();
   bubblesortArray();
   selectionsortArray();
   draw();
   passCount();
   drawText("Array Sorted!",550,20,"white");
 });

 document.getElementById('btn-generate').addEventListener("click", function() {
   generate();
   draw();
   drawText("Array Generated!",540,20,"white");
 });


 init();

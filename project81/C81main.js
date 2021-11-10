canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

var color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(100,100,45,0,2*Math.PI);
ctx.stroke();

var color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(210,100,45,0,2*Math.PI);
ctx.stroke();

var color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(320,100,45,0,2*Math.PI);
ctx.stroke();

var color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(150,150,45,0,2*Math.PI);
ctx.stroke();


var color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(265,150,45,0,2*Math.PI);
ctx.stroke();




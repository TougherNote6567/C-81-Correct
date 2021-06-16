canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=1;
ctx.rect(180,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#2d8eb5";
ctx.lineWidth=7;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=7;
ctx.arc(400,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=7;
ctx.arc(500,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=7;
ctx.arc(350,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=7;
ctx.arc(450,250,40,0,2*Math.PI);
ctx.stroke();
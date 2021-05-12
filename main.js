var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=2;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouse_y = e.clientY - canvas.offsetTop;
    mouse_x = e.clientX - canvas.offsetLeft;
    circle();
}
function circle() 
{
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.lineWidth=3;
    ctx.arc(250, 210, 40, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth=3;
    ctx.arc(350, 210, 40, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=3;
    ctx.arc(450, 210, 40, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle="#fcba03";
    ctx.lineWidth=3;
    ctx.arc(290, 260, 40, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.lineWidth=3;
    ctx.arc(400, 260, 40, 0, 2*Math.PI);
    ctx.stroke();
}

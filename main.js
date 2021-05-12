var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var color = "red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouse_y = e.clientY - canvas.offsetTop;
    mouse_x = e.clientX - canvas.offsetLeft;
    console.log("Y= "+mouse_y, "X= "+mouse_x);
    circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y) 
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
}
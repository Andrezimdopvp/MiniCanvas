var Canvas = document.getElementById("myCanvas");

var ctx = Canvas.getContext("2d");

var mouseEvent = "empty";

var utimaPosiçãoX, utimaPosiçãoY;

var cor = "blue";

var LarguraDaLinha = 3;

/*adicionando um evento a Canvas*/
Canvas.addEventListener("mousedown" ,  myMouseDown);
function myMouseDown(e)
{
    mouseEvent = "mouseDown";
}
Canvas.addEventListener("mouseup" ,  myMouseUp);
function myMouseUp(e)
{
    mouseEvent = "mouseUP";
}
Canvas.addEventListener("mouseleave" ,  myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent = "mouseleave";
}
Canvas.addEventListener("mousemove" ,  myMouseMove);
function myMouseMove(e)
{
  var PositionMouseX = e.clientX - Canvas.offsetLeft;
  var PositionMouseY = e.clientY - Canvas.offsetTop;

if (mouseEvent == "mouseDown"){
ctx.beginPath();
ctx.strokeStyle = cor;
ctx.LineWidth = LarguraDaLinha; 

console.log("Last position of x and y coordinates = ");
console.log("x = " + utimaPosiçãoX + "y = " + utimaPosiçãoY);
/*a função moveTo move o ponto para um ponto especificado no canvas, sem cria uma linha*/
ctx.moveTo(utimaPosiçãoX, utimaPosiçãoY);

console.log("Current position of x and y coordinates = ");
console.log("x = " + PositionMouseX   + "y = " +  PositionMouseY);
/*a função lineTo acrecenta um  novo ponto e cria uma linha para esse ponto a partir do último ponto especificado*/
ctx.lineTo(PositionMouseX, PositionMouseY);

ctx.stroke();



}
utimaPosiçãoX =  PositionMouseX;
utimaPosiçãoY =  PositionMouseY;
}
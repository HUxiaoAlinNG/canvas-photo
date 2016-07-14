var canvasWidth=700,canvasHeight=600;
var Round={x: 200,y: 200,r:40}
var canvas=document.getElementById("canvas");
var context=canvas.getContext("2d");

canvas.width=canvasWidth,canvas.height=canvasHeight;

var image=new Image();

image.src="img/test2.jpg";

//设置剪辑区域(圆形)
function clipRound(Round){
	context.beginPath();
	context.arc(Round.x,Round.y,Round.r,0,2*Math.PI);
	context.clip();
}

//canvas绘制图形函数
function draw(){
	context.clearRect(0,0,canvas.width,canvas.height); //每次调用时清空区域
	context.save(); //保存状态
	clipRound(Round); 
	context.drawImage(image,0,0,700,600); //绘制图形区域
	context.restore();  //返回之前的状态
}
image.onload=draw;
//show函数展示清晰全图
function show(){
	var showphoto=setInterval(
		function(){
			Round.r+=20;
			if(Round.r>1.5*Math.max(canvas.width,canvas.height)){
				clearInterval(showphoto);
			}
			draw();
		}, 80);

}
//reset函数重置canvas
function reset(){
	Round={x: Math.random()*(canvas.width-80)+40,
			y:Math.random()*(canvas.height-80)+40,r:40};
	draw();
}
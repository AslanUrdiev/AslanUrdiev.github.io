

////


  //



















var x = $('.start').width();

//var y = x/4;
//window.scrollTo(y, 0);
//console.log(y);
//window.scrollTo(750, 0);

$('urdi__link').click(function () {
	$('.start').load('../urdu.html ');
});

$('#canvas5').mousemove(function(e){
	var pos = $(this).offset();
	var elem_left = pos.left;
	var elem_top = pos.top;


	var Xinner = e.pageX - elem_left;
	var Yinner = e.pageY - elem_top;
	
	var Xinput = document.getElementById('X_cordinate');
	var Yinput = document.getElementById('Y_cordinate');
	
	Xinput.value = Xinner;
	Yinput.value = Yinner;
});


var	
	canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d');
	ctx.strokeStyle = '#9b0000';
	ctx.lineWidth = 3;
	ctx.lineJoin = 'round';
	ctx.shadowOffsetX=3;
	ctx.shadowOffsetY=3;
	ctx.shadowBlur = 5;
	ctx.shadowColor = 'black';


ctx.beginPath();
ctx.moveTo(200, 10);
ctx.lineTo(128.5, 10);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(200, 10);
ctx.lineTo(271.5, 10);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(130, 10);
ctx.lineTo(130, 0);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(270, 10);
ctx.lineTo(270, 0);
ctx.stroke();
//вертикальная линия


ctx.beginPath();
ctx.moveTo(200, 10);
ctx.lineTo(200, 50);
ctx.stroke();



ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(365, 50);
ctx.stroke();

//черточкаи вниз




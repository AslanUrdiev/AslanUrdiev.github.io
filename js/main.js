




window.onload = function() {

var x = $('.start').width();

// var y = x/4;
// window.scrollTo(y, 0);
// console.log(y);
// window.scrollTo(2250, 0);





	let clientWidth = document.documentElement.clientWidth;
	if(clientWidth < 480) {
		window.scrollTo(1350, 0);
		console.log(window.scroll)
	}

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

ctx.beginPath();
ctx.moveTo(365, 50);
ctx.lineTo(365, 60);
ctx.stroke();
//////////////////////
ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(30, 50);
ctx.stroke();

//черточкаи вниз

ctx.beginPath();
ctx.moveTo(30, 50);
ctx.lineTo(30, 60);
ctx.stroke();



///ВТОРОЕ ПОКОЛЕНИЕ


var	
	canvas = document.getElementById('canvas2'),
	ctx = canvas.getContext('2d');
	ctx.strokeStyle = '#9b0000';
	ctx.lineWidth = 3;
	ctx.lineJoin = 'round';
	ctx.shadowOffsetX=3;
	ctx.shadowOffsetY=3;
	ctx.shadowBlur = 5;
	ctx.shadowColor = 'black';
	


//От Рамазана к Урди

ctx.beginPath();
ctx.moveTo(2829, 0);
ctx.lineTo(2829, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(2829, 50);
ctx.lineTo(1486, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1486, 50);
ctx.lineTo(1486, 105);
ctx.stroke();

//От рамазана к Угъланагьа

ctx.beginPath();
ctx.moveTo(2620, 50);
ctx.lineTo(2620, 100);
ctx.stroke();

// От рамазан к Гьяжирамазан

ctx.beginPath();
ctx.moveTo(2829, 50);
ctx.lineTo(2872, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(2872, 50);
ctx.lineTo(2872, 100);
ctx.stroke();

// От рамазан к Герек

ctx.beginPath();
ctx.moveTo(2872, 50);
ctx.lineTo(3125, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(3125, 50);
ctx.lineTo(3125, 100);
ctx.stroke();

// От рамазан к Аьбдурагьман

ctx.beginPath();
ctx.moveTo(3125, 50);
ctx.lineTo(3375, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(3375, 50);
ctx.lineTo(3375, 100);
ctx.stroke();

// От Магьмуда к ыва

ctx.beginPath();
ctx.moveTo(3162, 0);
ctx.lineTo(3162, 10);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(3162, 10);
ctx.lineTo(4249, 10);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(4249, 10);
ctx.lineTo(4249, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(4249, 50);
ctx.lineTo(4050, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(4050, 50);
ctx.lineTo(4050, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(4249, 50);
ctx.lineTo(4249, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(4249, 50);
ctx.lineTo(4445, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(4445, 50);
ctx.lineTo(4445, 100);
ctx.stroke();


// От урди

var	
	canvas = document.getElementById('canvas3'),
	ctx = canvas.getContext('2d');
	ctx.strokeStyle = '#f00';
	ctx.lineWidth = 4;
	ctx.lineJoin = 'round';
	ctx.shadowOffsetX=3;
	ctx.shadowOffsetY=3;
	ctx.shadowBlur = 5;
	ctx.shadowColor = 'black';


//От урди к Аслану

ctx.beginPath();
ctx.moveTo(1486, 0);
ctx.lineTo(1486, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1486, 50);
ctx.lineTo(1422, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1422, 50);
ctx.lineTo(1422, 88);
ctx.stroke();

//От урди к Щабан

ctx.beginPath();
ctx.moveTo(1486, 50);
ctx.lineTo(1545, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1545, 50);
ctx.lineTo(1545, 100);
ctx.stroke();

// От Аьбдурагьман 
var	
	canvas = document.getElementById('canvas3'),
	ctx = canvas.getContext('2d');
	ctx.strokeStyle = '#9b0000';
	ctx.lineWidth = 3;
	ctx.lineJoin = 'round';
	ctx.shadowOffsetX=3;
	ctx.shadowOffsetY=3;
	ctx.shadowBlur = 5;
	ctx.shadowColor = 'black';

// От Аьбдурагьман к Аьбдулгамид

ctx.beginPath();
ctx.moveTo(3125, 0);
ctx.lineTo(3125, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(3125, 50);
ctx.lineTo(2754, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(2754, 50);
ctx.lineTo(2754, 100);
ctx.stroke();

// От Аьбдурагьман к Аьбдулмажид

ctx.beginPath();
ctx.moveTo(2986, 50);
ctx.lineTo(2986, 100);
ctx.stroke();

// От Аьбдурагьман Айнаханум

ctx.beginPath();
ctx.moveTo(3125, 50);
ctx.lineTo(3206, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(3206, 50);
ctx.lineTo(3206, 100);
ctx.stroke();


// От Аьбдурагьман к Зюгьре

ctx.beginPath();
ctx.moveTo(3206, 50);
ctx.lineTo(3426, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(3426, 50);
ctx.lineTo(3426, 100);
ctx.stroke();

// От Аьбдурагьман к Эмне

ctx.beginPath();
ctx.moveTo(3426, 50);
ctx.lineTo(3647, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(3647, 50);
ctx.lineTo(3647, 100);
ctx.stroke();

// От Аьбдурагьман к Аьбдулжамал

ctx.beginPath();
ctx.moveTo(3647, 50);
ctx.lineTo(4651, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(4651, 50);
ctx.lineTo(4651, 100);
ctx.stroke();

//От Аслана

var	
	canvas = document.getElementById('canvas4'),
	ctx = canvas.getContext('2d');
	ctx.strokeStyle = '#f00';
	ctx.lineWidth = 3;
	ctx.lineJoin = 'round';
	ctx.shadowOffsetX=3;
	ctx.shadowOffsetY=3;
	ctx.shadowBlur = 5;
	ctx.shadowColor = 'black';


//От Аслана к Урдихан

ctx.beginPath();
ctx.moveTo(1422, 0);
ctx.lineTo(1422, 80);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1422, 80);
ctx.lineTo(1195, 80);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(1195, 80);
ctx.lineTo(1195, 175);
ctx.stroke();

// От Аслан к Шябан

ctx.beginPath();
ctx.moveTo(1347, 80);
ctx.lineTo(1347, 175);
ctx.stroke();

// От Аслан к Райганат

ctx.beginPath();
ctx.moveTo(1422, 80);
ctx.lineTo(1492, 80);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1492, 80);
ctx.lineTo(1492, 200);
ctx.stroke();

// От Аслан к Рамазан

ctx.beginPath();
ctx.moveTo(1492, 80);
ctx.lineTo(1646, 80);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1646, 80);
ctx.lineTo(1646, 175);
ctx.stroke();

var	canvas = document.getElementById('canvas4'),
	ctx = canvas.getContext('2d');
	ctx.strokeStyle = '#9b0000';
	ctx.lineWidth = 3;
	ctx.lineJoin = 'round';
	ctx.shadowOffsetX=3;
	ctx.shadowOffsetY=3;
	ctx.shadowBlur = 5;
	ctx.shadowColor = 'black';

// От  Аьбдулмажид к Аьбдурагьман

ctx.beginPath();
ctx.moveTo(2986, 9);
ctx.lineTo(2986, 80);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(2976, 80);
ctx.lineTo(2600, 80);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(2600, 80);
ctx.lineTo(2600, 177);
ctx.stroke();


// От  Аьбдулмажид k Аьбдулвагьаб

ctx.beginPath();
ctx.moveTo(2750, 80);
ctx.lineTo(2750, 177);
ctx.stroke();

// От  Аьбдулмажид k Аьбдулгьямид

ctx.beginPath();
ctx.moveTo(2900, 80);
ctx.lineTo(2900, 177);
ctx.stroke();

//

ctx.beginPath();
ctx.moveTo(2976, 80);
ctx.lineTo(3057, 80);
ctx.stroke();

//

// От  Аьбдулмажид k  Аьбдулкьадир

ctx.beginPath();
ctx.moveTo(3049, 80);
ctx.lineTo(3049, 177);
ctx.stroke();

// От  Аьбдулмажид k Мерзият

ctx.beginPath();
ctx.moveTo(3057, 80);
ctx.lineTo(3201, 80);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(3201, 80);
ctx.lineTo(3201, 177);
ctx.stroke();

// От  Аьбдулмажид k Секинат

ctx.beginPath();
ctx.moveTo(3201, 80);
ctx.lineTo(3350, 80);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(3350, 80);
ctx.lineTo(3350, 177);
ctx.stroke();

//Аьбдулжамал

ctx.beginPath();
ctx.moveTo(4651, 8);
ctx.lineTo(4651, 80);
ctx.stroke();

// от Аьбдулжамал к Тажудин

ctx.beginPath();
ctx.moveTo(4651, 80);
ctx.lineTo(4320, 80);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(4320, 80);
ctx.lineTo(4320, 200);
ctx.stroke();


//от Аьбдулжамал к Багьадин

ctx.beginPath();
ctx.moveTo(4469, 80);
ctx.lineTo(4469, 200);
ctx.stroke();


//от Аьбдулжамал к Расим
ctx.beginPath();
ctx.moveTo(4623, 80);
ctx.lineTo(4623, 200);
ctx.stroke();

//
ctx.beginPath();
ctx.moveTo(4651, 80);
ctx.lineTo(4769, 80);
ctx.stroke();
//

//от Аьбдулжамал к Индира

ctx.beginPath();
ctx.moveTo(4769, 80);
ctx.lineTo(4769, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(4769, 80);
ctx.lineTo(4919, 80);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(4919, 80);
ctx.lineTo(4919, 200);
ctx.stroke();



var	
	canvas = document.getElementById('canvas5'),
	ctx = canvas.getContext('2d');
	ctx.strokeStyle = '#ff0000';
	ctx.lineWidth = 3;
	ctx.lineJoin = 'round';
	ctx.shadowOffsetX=3;
	ctx.shadowOffsetY=3;
	ctx.shadowBlur = 5;
	ctx.shadowColor = 'black';


//От Урдихана

ctx.beginPath();
ctx.moveTo(1195, 7  );
ctx.lineTo(1195, 100);
ctx.stroke();

// От Урдихана к Гурият

//
ctx.beginPath();
ctx.moveTo(1195, 100  );
ctx.lineTo(665, 100);
ctx.stroke();
//

ctx.beginPath();
ctx.moveTo(665, 100);
ctx.lineTo(665, 299	);
ctx.stroke();

// От Урдихана к Камиль

ctx.beginPath();
ctx.moveTo(790, 100  );
ctx.lineTo(790, 278);
ctx.stroke();

// От Урдихана к Шамиль

ctx.beginPath();
ctx.moveTo(916, 100  );
ctx.lineTo(916, 299);
ctx.stroke();

// От Урдихана к Шамиль

ctx.beginPath();
ctx.moveTo(1047, 100  );
ctx.lineTo(1047, 278);
ctx.stroke();

// От Урдихана к Шамиль

ctx.beginPath();
ctx.moveTo(1195, 100  );
ctx.lineTo(1195, 278);
ctx.stroke();

// 
ctx.beginPath();
ctx.moveTo(1195, 100  );
ctx.lineTo(1480, 100);
ctx.stroke();
//




// От Урдихана к Ахмед

ctx.beginPath();
ctx.moveTo(1480, 100  );
ctx.lineTo(1480, 278);
ctx.stroke();

// От Урдихана к Ахмед

ctx.beginPath();
ctx.moveTo(1338, 100  );
ctx.lineTo(1338, 278);
ctx.stroke();


// От Рамазана


//
ctx.beginPath();
ctx.moveTo(1646, 7  );
ctx.lineTo(1646, 100);
ctx.stroke();
//

// От Рамазана к Фатима

ctx.beginPath();
ctx.moveTo(1646, 100  );
ctx.lineTo(1943, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1943, 100  );
ctx.lineTo(1943, 299);
ctx.stroke();

// От Рамазана к Сабир

ctx.beginPath();
ctx.moveTo(1679, 100  );
ctx.lineTo(1679, 278);
ctx.stroke();

// От Рамазана к Садир

ctx.beginPath();
ctx.moveTo(1813, 100  );
ctx.lineTo(1813, 299);
ctx.stroke();



// От  Аьбдурагьман

var	
	canvas = document.getElementById('canvas5'),
	ctx = canvas.getContext('2d');
	ctx.strokeStyle = '#9b0000';
	ctx.lineWidth = 3;
	ctx.lineJoin = 'round';
	ctx.shadowOffsetX=3;
	ctx.shadowOffsetY=3;
	ctx.shadowBlur = 5;
	ctx.shadowColor = 'black';

ctx.beginPath();
ctx.moveTo(2601, 9  );
ctx.lineTo(2601, 200);
ctx.stroke();

// От  Аьбдурагьман к Бикаханум

ctx.beginPath();
ctx.moveTo(2601, 200  );
ctx.lineTo(2179, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(2179, 200  );
ctx.lineTo(2179, 299);
ctx.stroke();

// От  Аьбдурагьман Гульбагар

ctx.beginPath();
ctx.moveTo(2320, 200  );
ctx.lineTo(2320, 277);
ctx.stroke();

// От  Аьбдурагьман Зарифа

ctx.beginPath();
ctx.moveTo(2465, 200  );
ctx.lineTo(2465, 277);
ctx.stroke();

// От  Аьбдурагьман Тимур

ctx.beginPath();
ctx.moveTo(2601, 200  );
ctx.lineTo(2601, 277);
ctx.stroke();

// От  Аьбдурагьман Эльвира

ctx.beginPath();
ctx.moveTo(2601, 200  );
ctx.lineTo(2876, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(2876, 200  );
ctx.lineTo(2876, 277);
ctx.stroke();

// От  Аьбдурагьман Артур

ctx.beginPath();
ctx.moveTo(2739, 200  );
ctx.lineTo(2739, 299);
ctx.stroke();



// От  Аьбдулвагьаб

ctx.beginPath();
ctx.moveTo(2750, 9  );
ctx.lineTo(2750, 170);
ctx.stroke();


//
ctx.beginPath();
ctx.moveTo(2750, 170  );
ctx.lineTo(3565, 170);
ctx.stroke();
//

// От  Аьбдулвагьаб К Низам

ctx.beginPath();
ctx.moveTo(3565, 170  );
ctx.lineTo(3565, 277);
ctx.stroke();

// От  Аьбдулвагьаб К Руслан

ctx.beginPath();
ctx.moveTo(3425, 170  );
ctx.lineTo(3425, 277);
ctx.stroke();

// От  Аьбдулвагьаб К Мадина

ctx.beginPath();
ctx.moveTo(3281, 170  );
ctx.lineTo(3281, 277);
ctx.stroke();

// От  Аьбдулвагьаб К Рамис

ctx.beginPath();
ctx.moveTo(3141, 170  );
ctx.lineTo(3141, 277);
ctx.stroke();


// От Аьбдулгьямид

ctx.beginPath();
ctx.moveTo(2900, 9  );
ctx.lineTo(2900, 140);
ctx.stroke();

// От Аьбдулгьямид Загирбег

ctx.beginPath();
ctx.moveTo(2900, 140);
ctx.lineTo(4197, 140);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(4197, 140);
ctx.lineTo(4197, 299);
ctx.stroke();

// От Аьбдулгьямид Казим

ctx.beginPath();
ctx.moveTo(4070, 140);
ctx.lineTo(4070, 299);
ctx.stroke();

// От Аьбдулгьямид Румина

ctx.beginPath();
ctx.moveTo(3940, 140);
ctx.lineTo(3940, 299);
ctx.stroke();

// От Аьбдулгьямид Рафик

ctx.beginPath();
ctx.moveTo(3815, 140);
ctx.lineTo(3815, 299);
ctx.stroke();


// От Аьбдулкьадир 

ctx.beginPath();
ctx.moveTo(3049, 9);
ctx.lineTo(3049, 110);
ctx.stroke();

// От Аьбдулкьадир к Гульнара

ctx.beginPath();
ctx.moveTo(3049, 110);
ctx.lineTo(4590, 110);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(4590, 110);
ctx.lineTo(4590, 299);
ctx.stroke();

// От Аьбдулкьадир к Альберт

ctx.beginPath();
ctx.moveTo(4456, 110);
ctx.lineTo(4456, 277);
ctx.stroke();


//Мерзият

ctx.beginPath();
ctx.moveTo(3198, 9);
ctx.lineTo(3198, 80);
ctx.stroke();

//Мерзият К Марат

ctx.beginPath();
ctx.moveTo(3198, 80);
ctx.lineTo(5096, 80);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(5096, 80);
ctx.lineTo(5096, 299);
ctx.stroke();

//Мерзият К Елена

ctx.beginPath();
ctx.moveTo(4967, 80);
ctx.lineTo(4967, 299);
ctx.stroke();

//Мерзият К Эллада

ctx.beginPath();
ctx.moveTo(4839, 80);
ctx.lineTo(4839, 299);
ctx.stroke();


//Секинат

ctx.beginPath();
ctx.moveTo(3350, 9);
ctx.lineTo(3350, 50);
ctx.stroke();

//Секинат к Рома

ctx.beginPath();
ctx.moveTo(3350, 50);
ctx.lineTo(5488, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(5488, 50);
ctx.lineTo(5488, 299);
ctx.stroke();

//Секинат к Магомед

ctx.beginPath();
ctx.moveTo(5351, 50);
ctx.lineTo(5351, 277);
ctx.stroke();



var	
	canvas = document.getElementById('canvas5'),
	ctx = canvas.getContext('2d');
	ctx.strokeStyle = '#f2f2f2';
	ctx.lineWidth = 3;
	ctx.lineJoin = 'round';
	ctx.shadowOffsetX=3;
	ctx.shadowOffsetY=3;
	ctx.shadowBlur = 5;
	ctx.shadowColor = 'black';

//Ахмед Бикаханум


ctx.beginPath();
ctx.moveTo(2179, 240);
ctx.lineTo(2179, 299);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(2179, 240);
ctx.lineTo(1480, 240);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1480, 240);
ctx.lineTo(1480, 277);
ctx.stroke();

}


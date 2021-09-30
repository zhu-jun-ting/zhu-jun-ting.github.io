window.onload = function() {
	canvas.width = 1920;
	canvas.height = 780;
	settimefornowtime();
	settimeforcountdown();
	//startcountdown();
}

var flag = 1;

document.onkeypress = function(event) {
	if (event.keyCode == 110 && flag == 1) {
		startcountnow();
		var alltitle = document.getElementById('allname');
		alltitle.style.display = "block";
		flag = 0;
		clearDesc()
	}
	if (event.keyCode == 100 && flag == 1) {
		this.clienttime = parseInt(window.prompt('please write the count down time')) * 1000
		alert(this.clienttime)
		startcountdown();
		var alltitle = document.getElementById('allname');
		alltitle.style.display = "block";
		flag = 0;
		clearDesc()
	}
}


var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


var balls = [];
var digitColor = '';// HAHAHA This is random color if you remain it blank! ( Select from the color list! )
// var color=['red','yellow','green','purple','pink','blue','	#4B0082','	#7CFC00','	#8B4513','	#9370D8'];

function clearDesc() {
	document.getElementById("desc").innerHTML = " ";
}

function settimefornowtime() {
	var time = new Date();
	var sec = time.getSeconds() + '';
	var min = time.getMinutes() + '';
	var hou = time.getHours() + '';
	sec = sec.split('');
	min = min.split('');
	hou = hou.split('');
	if (sec.length == 1) {
		sec = [0, sec[0]];
	}
	if (min.length == 1) {
		min = [0, min[0]];
	}
	if (hou.length == 1) {
		hou = [0, hou[0]];
	}

	window.index = [hou[0], hou[1], min[0], min[1], sec[0], sec[1]];
}

function settimeforcountdown() {
	var target = new Date().getTime() + document.clienttime;
	var curtime = new Date();
	var nowtime = curtime.getTime();
	var diff = target - nowtime;

	var lefthou = Math.floor(diff / (60 * 60 * 1000)) + '';
	var leftmin = Math.floor((diff - lefthou * 60 * 60 * 1000) / (60 * 1000)) + '';
	var leftsec = Math.floor((diff - lefthou * 60 * 60 * 1000 - leftmin * 60 * 1000) / (1000)) + '';

	var lefttime = new Date();
	leftsec = leftsec.split('');
	leftmin = leftmin.split('');
	lefthou = lefthou.split('');
	if (leftsec.length == 1) {
		leftsec = ['0', leftsec[0]];
	}
	if (leftmin.length == 1) {
		leftmin = ['0', leftmin[0]];
	}
	if (lefthou.length == 1) {
		lefthou = ['0', lefthou[0]];
	}
	window.index = [lefthou[0], lefthou[1], leftmin[0], leftmin[1], leftsec[0], leftsec[1]]
	//console.log(window.index)
}

function drawball(m, x, y) {
	for (var n = 0; n < a[m].length; n++) {
		for (var k = 0; k < a[m][n].length; k++) {
			if (a[m][n][k] == 1) {
				ctx.beginPath()
				ctx.arc(x + 24 * k + 12, y + 24 * n + 12, 10, 0, 2 * Math.PI, true)
				ctx.fillStyle = digitColor
				ctx.closePath()
				ctx.fill()
			}
		}
	}
}


function moveball(m, x, y) {
	for (var n = 0; n < a[m].length; n++) {
		for (var k = 0; k < a[m][n].length; k++) {
			if (a[m][n][k] == 1) {
				if (Math.floor(Math.random() * 2) == 0) {
					var vx1 = Math.floor(Math.random() * 12) + 12;
				} else {
					var vx1 = -Math.floor(Math.random() * 12) - 12;
				}
				var ball = {
					x: x + 24 * k + 12,
					y: y + 24 * n + 12,
					r: 10,
					vx: vx1,
					vy: -Math.floor(Math.random() * 50) + 10,
					g: -5,
					c: color[Math.floor(Math.random() * color.length)]
				}
				balls.push(ball);
				//console.log(balls[m].vx)
			}
		}
	}
}

function fallballs(balls) {
	for (var m = 0; m < balls.length; m++) {
		balls[m].x = balls[m].x + balls[m].vx;
		balls[m].y = balls[m].y + balls[m].vy;
		balls[m].vy = balls[m].vy - balls[m].g;
		if (balls[m].y >= 780) {
			balls[m].y = 770;
			balls[m].vy = -balls[m].vy * 0.4;
		}

		ctx.beginPath()
		ctx.arc(balls[m].x, balls[m].y, balls[m].r, 0, 2 * Math.PI, true)
		ctx.fillStyle = balls[m].c
		ctx.closePath()
		ctx.fill()
	}
}


function startcountnow() {
	var endtime = new Date(0, 0, 0, 0, 0, 0);
	var timer = setInterval(function() {
		ctx.clearRect(0, 0, 1920, 1080);

		var curtime = new Date();
		var cursec = curtime.getSeconds() + '';
		var curmin = curtime.getMinutes() + '';
		var curhou = curtime.getHours() + '';
		cursec = cursec.split('');
		curmin = curmin.split('');
		curhou = curhou.split('');
		if (cursec.length == 1) {
			cursec = [0, cursec[0]];
		}
		if (curmin.length == 1) {
			curmin = [0, curmin[0]];
		}
		if (curhou.length == 1) {
			curhou = [0, curhou[0]];
		}
		var curindex = [curhou[0], curhou[1], curmin[0], curmin[1], cursec[0], cursec[1]];

		if (window.index[0] !== curindex[0]) {
			moveball(curindex[0], 30, 50);
		}
		if (window.index[1] !== curindex[1]) {
			moveball(curindex[1], 30 + 1 * 56 * 3 + 1 * 30, 50);
		}
		if (window.index[2] !== curindex[2]) {
			moveball(curindex[2], 30 + 2 * 56 * 3 + 1 * 32 * 3 + 3 * 10 * 3, 50);
		}
		if (window.index[3] !== curindex[3]) {
			moveball(curindex[3], 30 + 3 * 56 * 3 + 1 * 32 * 3 + 4 * 10 * 3, 50);
		}
		if (window.index[4] !== curindex[4]) {
			moveball(curindex[4], 30 + 4 * 56 * 3 + 2 * 32 * 3 + 6 * 10 * 3, 50);
		}
		if (window.index[5] !== curindex[5]) {
			moveball(curindex[5], 30 + 5 * 56 * 3 + 2 * 32 * 3 + 7 * 10 * 3, 50);
		}


		fallballs(balls);
		var c = 0;
		/*for(var m=0;m<balls.length;m++){
			if(balls[m].x<=1920&&balls[m].x>=0){
				balls[c++]=balls[m];
			}
		}
		while(balls.length>=c){
			balls.pop();
		}*/
		if (balls.length >= 300) {
			for (var m = 0; m <= 100; m++) {
				balls.shift();
			}
		}
		//console.log(balls.length)
		//console.log(balls.length)
		window.index = curindex;

		drawball(curindex[0], 30, 50);
		drawball(curindex[1], 30 + 1 * 56 * 3 + 1 * 30, 50);
		drawball(10, 30 + 2 * 56 * 3 + 2 * 30, 50);
		drawball(curindex[2], 30 + 2 * 56 * 3 + 1 * 32 * 3 + 3 * 10 * 3, 50);
		drawball(curindex[3], 30 + 3 * 56 * 3 + 1 * 32 * 3 + 4 * 10 * 3, 50);
		drawball(10, 30 + 4 * 56 * 3 + 1 * 32 * 3 + 5 * 10 * 3, 50);
		drawball(curindex[4], 30 + 4 * 56 * 3 + 2 * 32 * 3 + 6 * 10 * 3, 50);
		drawball(curindex[5], 30 + 5 * 56 * 3 + 2 * 32 * 3 + 7 * 10 * 3, 50);
	}, 50)
}

function startcountdown() {
	//alert(window.clienttime)
	var target = new Date().getTime() + document.clienttime;
	var timer = setInterval(function() {
		ctx.clearRect(0, 0, 1920, 1080);

		var curtime = new Date();
		var nowtime = curtime.getTime();
		var diff = target - nowtime;

		var lefthou = Math.floor(diff / (60 * 60 * 1000)) + '';
		var leftmin = Math.floor((diff - lefthou * 60 * 60 * 1000) / (60 * 1000)) + '';
		var leftsec = Math.floor((diff - lefthou * 60 * 60 * 1000 - leftmin * 60 * 1000) / (1000)) + '';

		var lefttime = new Date();
		leftsec = leftsec.split('');
		leftmin = leftmin.split('');
		lefthou = lefthou.split('');
		if (leftsec.length == 1) {
			leftsec = [0, leftsec[0]];
		}
		if (leftmin.length == 1) {
			leftmin = [0, leftmin[0]];
		}
		if (lefthou.length == 1) {
			lefthou = [0, lefthou[0]];
		}
		var leftindex = [lefthou[0], lefthou[1], leftmin[0], leftmin[1], leftsec[0], leftsec[1]]

		//console.log(leftsec[1])
		//console.log(window.index,leftindex)
		var cursec = curtime.getSeconds() + '';
		var curmin = curtime.getMinutes() + '';
		var curhou = curtime.getHours() + '';
		cursec = cursec.split('');
		curmin = curmin.split('');
		curhou = curhou.split('');
		if (cursec.length == 1) {
			cursec = [0, cursec[0]];
		}
		if (curmin.length == 1) {
			curmin = [0, curmin[0]];
		}
		if (curhou.length == 1) {
			curhou = [0, curhou[0]];
		}
		var curindex = [curhou[0], curhou[1], curmin[0], curmin[1], cursec[0], cursec[1]];



		if (window.index[0] !== leftindex[0]) {
			moveball(leftindex[0], 30, 50);
		}
		if (window.index[1] !== leftindex[1]) {
			moveball(leftindex[1], 30 + 1 * 56 * 3 + 1 * 30, 50);
		}
		if (window.index[2] !== leftindex[2]) {
			moveball(leftindex[2], 30 + 2 * 56 * 3 + 1 * 32 * 3 + 3 * 10 * 3, 50);
		}
		if (window.index[3] !== leftindex[3]) {
			moveball(leftindex[3], 30 + 3 * 56 * 3 + 1 * 32 * 3 + 4 * 10 * 3, 50);
		}
		if (window.index[4] !== leftindex[4]) {
			moveball(leftindex[4], 30 + 4 * 56 * 3 + 2 * 32 * 3 + 6 * 10 * 3, 50);
		}
		if (window.index[5] !== leftindex[5]) {
			moveball(leftindex[5], 30 + 5 * 56 * 3 + 2 * 32 * 3 + 7 * 10 * 3, 50);
		}


		fallballs(balls);
		var c = 0;
		if (balls.length >= 300) {
			for (var m = 0; m <= 100; m++) {
				balls.shift();
			}
		}
		//console.log(balls.length)
		//console.log(balls.length)
		window.index = leftindex;

		drawball(leftindex[0], 30, 50);
		drawball(leftindex[1], 30 + 1 * 56 * 3 + 1 * 30, 50);
		drawball(10, 30 + 2 * 56 * 3 + 2 * 30, 50);
		drawball(leftindex[2], 30 + 2 * 56 * 3 + 1 * 32 * 3 + 3 * 10 * 3, 50);
		drawball(leftindex[3], 30 + 3 * 56 * 3 + 1 * 32 * 3 + 4 * 10 * 3, 50);
		drawball(10, 30 + 4 * 56 * 3 + 1 * 32 * 3 + 5 * 10 * 3, 50);
		drawball(leftindex[4], 30 + 4 * 56 * 3 + 2 * 32 * 3 + 6 * 10 * 3, 50);
		drawball(leftindex[5], 30 + 5 * 56 * 3 + 2 * 32 * 3 + 7 * 10 * 3, 50);

		if (leftindex[0] == 0 && leftindex[1] == 0 && leftindex[2] == 0 && leftindex[3] == 0 && leftindex[4] == 0 &&
			leftindex[5] == 0) {
			startsetfirework();
			clearInterval(timer)
		}
	}, 50)
}

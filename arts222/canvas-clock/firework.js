var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var balls = [],
	blasted = [],
	color = ['#FF8FA0', '#FFA7B4', '#FFCBD2', '#FFB972', '#FFA447', '#997285', '#9CBF9D' , '#E6EDC9', '#F9B5AC', '#ED7674'],
	gravity = -5,
	radius = 10,
	count = 1,
	cnt = 2,
	createBallSpeed = 0 // 0=fastest, the bigger the slower. 

function startsetfirework() {
	
	var timer = setInterval(function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		if (count <= createBallSpeed ) {
			count += 1;
		} else {
			createball();
			count = 1;
			//cnt+=1;
		}
		for (var i = 0; i < balls.length; i++) {
			if (balls[i].vy >= 0) {
				createbalst(balls[i]);
				//console.log(i)
				balls.splice(i, 1)
			}
		}
		for (var i = 0; i < blasted.length; i++) {
			if (blasted[i].y >= canvas.height) {
				blasted.splice(i, 1)
			}
		}
		setfirework();
		setblastedfirework();
	}, 50)
	
}

function createbalst(ball) {
	var posx = ball.x,
		posy = ball.y;
	//console.log(x,y)
	for (var m = 0; m <= 30; m++) {
		var ball = {
			x: posx,
			y: posy,
			r: radius - 5,
			vx: Math.random() * 20 - 10,
			vy: Math.random() * 20 - 20,
			c: color[Math.floor(Math.random() * color.length)],
			g: gravity
		}
		blasted.push(ball)
	}
}

function createball() {
	var ball = {
		x: 1000,
		y: canvas.height - 10,
		r: radius - 7,
		vx: Math.random() * 120 - 60,
		vy: -Math.random() * 10 - 70,
		c: 'black',
		g: gravity
	}
	balls.push(ball)
	//console.log(balls)
}

function setfirework() {
	for (var m = 0; m < balls.length; m++) {
		balls[m].x = balls[m].x + balls[m].vx;
		balls[m].y = balls[m].y + balls[m].vy;
		balls[m].vy = balls[m].vy - balls[m].g;

		ctx.beginPath()
		ctx.arc(balls[m].x, balls[m].y, balls[m].r, 0, 2 * Math.PI, true)
		ctx.fillStyle = balls[m].c
		ctx.closePath()
		ctx.fill()
	}
}

function setblastedfirework() {
	for (var m = 0; m < blasted.length; m++) {
		blasted[m].x = blasted[m].x + blasted[m].vx;
		blasted[m].y = blasted[m].y + blasted[m].vy;
		blasted[m].vy = blasted[m].vy - blasted[m].g;

		ctx.beginPath()
		ctx.arc(blasted[m].x, blasted[m].y, blasted[m].r, 0, 2 * Math.PI, true)
		ctx.fillStyle = blasted[m].c
		ctx.closePath()
		ctx.fill()
	}
}

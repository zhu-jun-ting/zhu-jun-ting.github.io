function setup() {

	createCanvas(400, 400)

	noStroke()

}

function draw() {

	background(220)

	balls.push(createBall(mouseX, mouseY))

	updateBalls()

	drawBalls()

}

var maxWidth = 10
var minWidth = 5

var maxSpeed = 3
var minSpeed = -3

var maxFadeSpeed = -10
var minFadeSpeed = -20

var balls = []

function createBall(x, y) {

	// [x,y,a,width,vx,vy,va,r,g,b]
	var ball = new Object()

	ball.x = x
	ball.y = y
	ball.a = 255
	ball.width = random(minWidth, maxWidth)
	ball.vx = random(minSpeed, maxSpeed)
	ball.vy = random(minSpeed, maxSpeed)
	ball.va = random(minFadeSpeed, maxFadeSpeed)
	ball.r = random(0, 255)
	ball.g = random(0, 255)
	ball.b = random(0, 255)

	return ball

}

function updateBalls() {

	for (m = 0; m < balls.length; m++) {

		ball = balls[m]

		// update position + alpha

		ball.x += ball.vx
		ball.y += ball.vy
		ball.a += ball.va

		if (ball.a < 0) {

			balls.splice(m, 1)

		}

	}

}

function drawBalls() {

	for (m = 0; m < balls.length; m++) {

		ball = balls[m]

		fill(ball.r, ball.g, ball.b, ball.a)

		circle(ball.x, ball.y, ball.width)

	}

}

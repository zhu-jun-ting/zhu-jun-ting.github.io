var balls = []

var GRAVITY = 1,
	BLAST_SIZE = 30,
	X_VELOCITY_RANGE = [-5, 5],
	Y_VELOCITY_RANGE = [-20, 0],
	ORIGIN, // = (width / 2, height)
	RADIUS,
	BULLET_COLOR = "black",
	MAGNITUDE_MULTIPLIER = 0.05, // the magnitude of vector speed (smaller -> slower)
	FRICTION = 0.99, // nultiplier of driction (smaller -> more friction)
	VECTOR_FRICTION = new Vector(0.998, 0.996) // x and y friction separately

var IS_BOUNCING = true,
	IS_FIREWORK = true

var bounceButton

function renderButtons() {

	bounceButton = createP5Button(new Vector(10, 10), "bounce", 100).mousePressed(toggleBouce)
	fireworkButton = createP5Button(new Vector(10, 40), "firework", 100).mousePressed(toggleFirework)

	textSize(18)
	fill("black")
	text("make balls bounce inside the canvas -> " + IS_BOUNCING.toString(), 120, 30)
	text("start set fireworks! -> " + IS_FIREWORK.toString(), 120, 60)

}

function toggleFirework() {
	IS_FIREWORK = !IS_FIREWORK
}

function toggleBouce() {
	IS_BOUNCING = !IS_BOUNCING
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
	ORIGIN = new Vector(width / 2, height)
}

function setup() {

	createCanvas(windowWidth, windowHeight)

	RADIUS = 10
	ORIGIN = new Vector(width / 2, height)

	noStroke()

}

function draw() {

	background(220)

	updateBalls()

	renderButtons()

}

function mouseClicked() {

	console.log(new Vector(mouseX, mouseY))
	createFirework(new Vector(mouseX, mouseY))

}

function createFirework(destination) {

	console.log(ORIGIN.subtract(destination))
	balls.push(new Ball(ORIGIN, ORIGIN.subtract(destination).multiply(MAGNITUDE_MULTIPLIER), RADIUS, BULLET_COLOR))

}

function updateBalls() {

	for (i = 0; i < balls.length; i++) {

		balls[i].update()
		balls[i].updateVelocityWithGravity(GRAVITY)
		// balls[i].updateVelocityWithFriction(FRICTION)
		balls[i].updateVelocityWithVectorFriction(VECTOR_FRICTION)

		if (IS_BOUNCING) {
			// set the mode to bounce balls
			bounceBallsInsideCanvas(balls[i])
		}

		if (IS_FIREWORK) {
			// set the mode to set firework
			if (balls[i].velocity.y > 0 && balls[i].color == "black") {
				position = balls[i].position
				balls.splice(i, 1)
				setFirework(position)
				i--
			}
		}

		renderBall(balls[i])

		if (!IS_BOUNCING && (balls[i].position.x < 0 || balls[i].position.x > width || balls[i].position.y > height)) {
			balls.splice(i, 1)
			i--
		}

	}

}

function renderBall(ball) {

	fill(ball.color)
	circle(ball.position.x, ball.position.y, ball.radius)

}

function bounceBallsInsideCanvas(ball) {

	if (ball.position.x < 0 || ball.position.x > width) {
		ball.velocity.x = -ball.velocity.x
	}
	if (ball.position.y > height) {
		ball.velocity.y = -ball.velocity.y
	}

}

function setFirework(position) {

	for (i = 0; i < BLAST_SIZE; i++) {
		balls.push(new Ball(position,
			new Vector(randomFloat(X_VELOCITY_RANGE[0], X_VELOCITY_RANGE[1]), randomFloat(Y_VELOCITY_RANGE[0],
				Y_VELOCITY_RANGE[1])),
			RADIUS,
			randomColor()))
	}

}

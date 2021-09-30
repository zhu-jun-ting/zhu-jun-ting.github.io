// params
var speedParameter = 1, // 1 = normal speed; bigger = faster [0,100]
	sizeParameter = 1, // 1 = normal size; bigger = larger [0,10]
	ballsCount = 100, // 100= normal; [0,1000]
	canvasWidth = window.innerWidth,
	canvasHeight = window.innerHeight

// varibles
var balls = [],
	maxRadius = window.innerWidth / (15 / sizeParameter),
	minRadius = window.innerWidth / (30 / sizeParameter),
	maxVelocity = window.innerWidth / (200 / speedParameter),
	minVelocity = -window.innerHeight / (200 / speedParameter),
	colorArr = ['#5E59BA', '#7D7ABC', '#A7BBEC', '#F7A5C2', '#FE64A3', '#C4DFD4', '#E7BEDD', '#E46AA8', '#D644B5',
		'#AD70B5'
	]
	
balls.size = 1000;

// the canvas onload function
function setup() {

	// create the canvas
	createCanvas(canvasWidth, canvasHeight)

	// create balls for the canvas
	createballs()

	// no stroke lines
	noStroke()

}

// the draw function refreshes each frame. 
function draw() {

	// set the colour of the background.
	background(240);

	// update the position of each ball.
	update();

	// draw the balls. 
	drawBalls()

}

function random(min, max) {

	// @params
	// min: minimum value,
	// max: maximun value,
	// @return: the random number between min and max. 

	return Math.floor(Math.random() * (max - min) + min)

}

function randomColor(colorArr) {

	// @params
	// colorArr: the array of color,
	// @return: a random color from the array

	return colorArr[Math.floor(Math.random() * colorArr.length)]

}

function createballs() {

	for (x = 0; x < ballsCount; x++) {
		var ball = {
			radius: random(maxRadius, minRadius),
			positionX: random(maxRadius, canvasWidth),
			positionY: random(maxRadius, canvasHeight), // (X,Y) = center of the ball. 
			color: randomColor(colorArr),
			velocityX: random(minVelocity, maxVelocity),
			velocityY: random(minVelocity, maxVelocity) // (X,Y) = vector of the velocity.
		}
		balls.push(ball)
	}

}

function createball() {

	var ball = {

		radius: random(maxRadius, minRadius),
		positionX: random(maxRadius, canvasWidth),
		positionY: random(maxRadius, canvasHeight), // (X,Y) = center of the ball. 
		color: randomColor(colorArr),
		velocityX: random(minVelocity, maxVelocity),
		velocityY: random(minVelocity, maxVelocity) // (X,Y) = vector of the velocity.

	}

	balls.push(ball)
	
}

function update() {

	for (x = 0; x < ballsCount; x++) {

		ball = balls[x]

		ball.positionX += ball.velocityX
		ball.positionY += ball.velocityY

		if ((ball.positionX) < 0 || (ball.positionX) > canvasWidth) {

			ball.velocityX = -ball.velocityX

		}

		if ((ball.positionY) < 0 || (ball.positionY) > canvasHeight) {

			ball.velocityY = -ball.velocityY

		}

	}

}

function drawBalls() {

	for (x = 0; x < ballsCount; x++) {

		ball = balls[x]

		fill(ball.color)
		circle(ball.positionX, ball.positionY, ball.radius)

	}

}

function openBar() {

	document.getElementById("popup").style.display = "block"

	document.getElementById("speedBar").defaultValue = speedParameter * 10;
	document.getElementById("sizeBar").defaultValue = sizeParameter * 10;
	document.getElementById("countBar").defaultValue = ballsCount / 10;

}

function change() {

	// get the params
	var speedValue = document.getElementById("speedBar").value // [0,10] float
	var sizeValue = document.getElementById("sizeBar").value // [0,10] float
	var countValue = document.getElementById("countBar").value // [0,1000] int

	// update the params
	speedParameter = speedValue / 10, // 1 = normal speed; bigger = faster [0,100]
	sizeParameter = sizeValue / 10, // 1 = normal size; bigger = larger [0,10]
	ballsCount = countValue * 10 // 100= normal; [0,1000]

	// create new variables
	maxRadius = window.innerWidth / (15 / sizeParameter),
	minRadius = window.innerWidth / (30 / sizeParameter),
	maxVelocity = window.innerWidth / (200 / speedParameter),
	minVelocity = -window.innerHeight / (200 / speedParameter),
	ballsCount = countValue * 10

	// clear the array
	balls = [];

	// refill the array
	createballs()

	document.getElementById("popup").style.display = "none"

}

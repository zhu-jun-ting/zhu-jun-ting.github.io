var outerPoint,
	horizontalPoint,
	verticalPoint,
	currentRadius

var VERTICAL_STEP = 5,
	HORIZONTAL_STEP = 5,
	RADICAL_STEP = 5,
	CIRCLE_RADIUS,
	CIRCLE_ORIGIN

var slider,
	val

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {

	slider = createSlider(0, 1000, 200);
	slider.position(10, 10);
	slider.style('width', '80px');

	createCanvas(windowWidth, windowHeight)

	outerPoint = new Vector(width / 2, 0)
	horizontalPoint = new Vector(0, height / 2)
	verticalPoint = new Vector(width / 2, 0)
	currentRadius = 0 // we assume the top point is the origin

	CIRCLE_RADIUS = height / 2
	CIRCLE_ORIGIN = [width / 2, height / 2]

}

function sliderOnChange() {
	val = slider.value() / 500
	VERTICAL_STEP *= val
	HORIZONTAL_STEP *= val
	RADICAL_STEP *= val
}

function draw() {

	

	slider.input(sliderOnChange)



	background(220, 5)

	update()

	stroke(color(map(outerPoint.x, 0, height, 0, 255), map(outerPoint.y, 0, height, 0, 255), map(horizontalPoint.x, 0,
		height, 0, 255)))
	noFill()


	triangle(outerPoint.x, outerPoint.y, horizontalPoint.x, horizontalPoint.y, verticalPoint.x, verticalPoint.y)

}


function update() {

	if (arguments.length != 0) {
		verticalStep = arguments[0]
		horizontalStep = arguments[1]
		radicalStep = arguments[2]
	} else {
		verticalStep = VERTICAL_STEP
		horizontalStep = HORIZONTAL_STEP
		radicalStep = RADICAL_STEP
	}
	
	horizontalPoint.update(horizontalStep, 0)
	verticalPoint.update(0, verticalStep)

	currentRadius += radicalStep
	outerPoint.overwrite(CIRCLE_ORIGIN[0] + CIRCLE_RADIUS * (sin(currentRadius * PI / 180)), CIRCLE_ORIGIN[1] +
		CIRCLE_RADIUS * (cos(currentRadius * PI / 180)))

	if (horizontalPoint.x > width) {
		HORIZONTAL_STEP = -horizontalStep
	}

	if (horizontalPoint.x < 0) {
		HORIZONTAL_STEP = -horizontalStep
	}

	if (verticalPoint.y > height) {
		VERTICAL_STEP = -verticalStep
	}

	if (verticalPoint.y < 0) {
		VERTICAL_STEP = -verticalStep
	}

}

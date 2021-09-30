var verticalBoundary,
	upperBoundary,
	lowerBoundary;
	
var verticalStatus,
	horizontalStatus;
	
var verticalColor,
	horizontalColor;


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	
	createCanvas(windowWidth, windowHeight)
	
	verticalColor = randomColor(30)
	horizontalColor = randomColor(30)
	
}

function draw() {

	background(220)
	
	verticalBoundary = width / 2;
	upperBoundary = height / 3;
	lowerBoundary = 2 * (height / 3);
	
	stroke(0)
	line(verticalBoundary, 0, verticalBoundary, height)
	line(0, upperBoundary, width, upperBoundary)
	line(0, lowerBoundary, width, lowerBoundary)
	
	if (mouseX <= verticalBoundary) {
		verticalStatus = 'LEFT'
	} else {
		verticalStatus = 'RIGHT'
	}
	
	if (mouseY <= upperBoundary) {
		horizontalStatus = 'UPPER'
	} else if (mouseY <= lowerBoundary) {
		horizontalStatus = 'MIDDLE'
	} else {
		horizontalStatus = 'LOWER'
	}
	
	highlight(verticalStatus, horizontalStatus)
	
	textFont('Helvetica')
	textSize(width * height/30000)
	fill(0)
	text(horizontalStatus + ', ' + verticalStatus, mouseX + 10, mouseY - 10)
	
}

function highlight(verticalStatus, horizontalStatus) {
	
	noStroke()
	fill(verticalColor)
	if (verticalStatus == 'LEFT') {
		drawBlock(new Block(0, 0, verticalBoundary, height))
	} else {
		drawBlock(new Block(verticalBoundary, 0, width, height))
	}
	
	fill(horizontalColor)
	if (horizontalStatus == 'UPPER') {
		drawBlock(new Block(0, 0, width, upperBoundary))
	} else if (horizontalStatus == 'MIDDLE') {
		drawBlock(new Block(0, upperBoundary, width, lowerBoundary))
	} else {
		drawBlock(new Block(0, lowerBoundary, width, height))
	}
	
}

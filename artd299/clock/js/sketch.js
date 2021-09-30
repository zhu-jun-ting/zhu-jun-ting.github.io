var CENTER,
	RADIUS
	
var hourLength = 0.5,
	minuteLength = 0.65,
	secondLength = 0.8,
	signStart = 0.9,
	signEnd = 1.0
	
var chour,
	cminute,
	csecond

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	
	createCanvas(windowWidth, windowHeight)
	
	chour  = new Vector(0, 0)
	cminute = new Vector(0, 0)
	csecond = new Vector(0, 0)
	
}

function draw() {
	
	background(220)
	
	CENTER = new Vector(width/2, height/2)
	RADIUS = 0.4 * min(width, height)
	
	hourProgress = (hour() / 12) * 1 + (minute() / 60) * (1/12) + (second() / 60) * (1/12) * (1/60)
	minuteProgress = (minute() / 60) * 1 + (second() / 60) * (1/60)
	secondProgress = (second() / 60) * 1
	
	chour.overwriteByVector(getPositionByProgress(CENTER, hourLength * RADIUS, hourProgress))
	cminute.overwriteByVector(getPositionByProgress(CENTER, minuteLength * RADIUS, minuteProgress))
	csecond.overwriteByVector(getPositionByProgress(CENTER, secondLength * RADIUS, secondProgress))
	
	drawClock(60, color(150), 1)
	drawClock(12, color(100), 5)
	
	drawHandles()
	
	// test = getPositionByProgress(CENTER, RADIUS, secondProgress)
	// line(CENTER.x, CENTER.y, test.x, test.y)
	
}

function drawHandles() {
	
	noFill()
	
	// hour
	strokeWeight(10)
	stroke("red")
	line(CENTER.x, CENTER.y, chour.x, chour.y)
	
	// minute
	strokeWeight(8)
	stroke("green")
	line(CENTER.x, CENTER.y, cminute.x, cminute.y)
	
	// second
	strokeWeight(5)
	stroke("black")
	line(CENTER.x, CENTER.y, csecond.x, csecond.y)
	
}

function drawClock(segements, color, weight) {
	
	strokeWeight(weight)
	stroke(color)
	
	for (i = 0; i < segements; i++) {
		
		start = getPositionByProgress(CENTER, signStart * RADIUS, i / segements)
		end = getPositionByProgress(CENTER, signEnd * RADIUS, i / segements)
		
		line(start.x, start.y, end.x, end.y)
		
	}
	
}
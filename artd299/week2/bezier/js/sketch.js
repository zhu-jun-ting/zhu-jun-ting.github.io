var allPoints = []
var vertexPoints = []
	
function preload() {
	
	sign = loadImage('img/sign.png')
	
}

function setup() {
	
  createCanvas(300, 255);
  
  allPoints.push(new points(66, 101, 98, 100))
  allPoints.push(new points(102, 65, 98, 105))
  allPoints.push(new points(66, 36, 66, 36))
  allPoints.push(new points(94, 23, 68, 23))
  allPoints.push(new points(147, 106, 151, 51))
  allPoints.push(new points(37, 242, 127, 198))
  allPoints.push(new points(37, 242, 37, 242))
  allPoints.push(new points(181, 102, 181, 231))
  allPoints.push(new points(30, 54, 40, 0))
  allPoints.push(new points(66, 101, 80, 99))
  
  vertexPoints.push(new points(66, 101))
  vertexPoints.push(new points(66, 101))
  vertexPoints.push(new points(100, 64))
  vertexPoints.push(new points(65, 36))
  vertexPoints.push(new points(93, 23))
  vertexPoints.push(new points(148, 106))
  vertexPoints.push(new points(36, 241))
  vertexPoints.push(new points(180, 101))
  vertexPoints.push(new points(106, 8))
  vertexPoints.push(new points(31, 55))
  vertexPoints.push(new points(66, 101))
  vertexPoints.push(new points(66, 101))
  
}

class points {
	
	constructor(x, y) {
		
		if(arguments.length == 4) {
			
			this.x = arguments[0]
			this.y = arguments[1]
			this.cx = arguments[2]
			this.cy = arguments[3]
			
		} else {
			
			this.x = arguments[0]
			this.y = arguments[1]
			
		}

	}
	
}

function drawBezier() {
	
	for(i = 1; i < allPoints.length; i++) {
		
		previousCX = allPoints[i - 1].x * 2 - allPoints[i - 1].cx
		previousCY = allPoints[i - 1].y * 2 - allPoints[i - 1].cy
		bezier(allPoints[i - 1].x, allPoints[i - 1].y, previousCX, previousCY, allPoints[i].cx, allPoints[i].cy, allPoints[i].x, allPoints[i].y)
		
	}
	
	ellipse(211, 52, 19, 19)
	ellipse(211, 122, 19, 19)
	
}

function drawVertex() {
	
	beginShape()
	
	for(i = 0; i < vertexPoints.length; i++) {
		
		curveVertex(vertexPoints[i].x, vertexPoints[i].y)
		
	} 
	
	endShape()
	
	ellipse(211, 52, 19, 19)
	ellipse(211, 122, 19, 19)
	
}

function draw() {
	
	// image(sign, 0, 0)
	
	noFill()
	stroke(0)
	// drawBezier(allPoints)
	// drawVertex(vertexPoints)
	
	
	bezierButton = createButton('bezier')
	bezierButton.position(250, 10)
	bezierButton.mousePressed(drawBezier)
	
	vertexButton = createButton('vertex')
	vertexButton.position(250, 50)
	vertexButton.mousePressed(drawVertex)
	
	imageButton = createButton('image')
	imageButton.position(250, 90)
	imageButton.mousePressed(drawImage)
	
	reloadButton = createButton('reload')
	reloadButton.position(250, 130)
	reloadButton.mousePressed(reloadPage)

}

function drawImage() {
	
	image(sign, 0, 0)
	
}

function reloadPage() {
	
	location.reload()
	
}
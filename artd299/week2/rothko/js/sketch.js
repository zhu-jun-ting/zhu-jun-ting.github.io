var posX,
	posY,
	scale;
	

function setup() {
	
  createCanvas(400, 600);
  
}

function drawRectWithScale(a, b, c, d, scale) {
	
	rect(a * scale, b * scale, c * scale, d * scale)
	
}

function drawQuadWithScale(a, b, c, d, e, f, g, h, scale) {
	
	quad(a * scale, b * scale, c * scale, d * scale, e * scale, f * scale, g * scale, h * scale)
	
}

function drawVertexWithScale(x, y, dx, dy, scale) {
	
	noStroke();
	beginShape();
	vertex((x + dx) * scale, (y - dy) * scale);
	vertex((x + dy) * scale, (y + dx) * scale);
	vertex((x - dx) * scale, (y + dy) * scale);
	vertex((x - dy) * scale, (y - dx) * scale);
	endShape();
	
}

function draw() {
	
	background(220)
	
	posX = mouseX
	posY = mouseY
	
	scale = map(posX, 0, width, 0.1, 1.5, true)
	// posX / width
	
	fill(46, 44, 29)
	drawRectWithScale(50 + posX, 150 + posY, 100, 100, scale)
	
	fill(175, 64, 77)
	drawVertexWithScale(160 + posX, 300 + posY, 30, -20, scale)
}
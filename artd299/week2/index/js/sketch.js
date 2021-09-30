function setup() {
	
  createCanvas(1000, 600);
  
}


class Block {
	
	constructor(start, stop) {
		
		if (arguments.length == 2){
			// the coordinate is represented as [x, y]
			this.start = start
			this.stop = stop
		} else if (arguments.length == 4){
			this.start = [arguments[0], arguments[1]]
			this.stop = [arguments[2], arguments[3]]
		} else {
			this.start = [arguments[0][0], arguments[0][1]]
			this.stop = [arguments[0][2], arguments[0][3]]
		}
	    
	}
	
	getWidthAndHeight = function() {
		return [Math.abs(this.stop[0] - this.start[0]), Math.abs(this.stop[1] - this.start[1])]
	}
	
}

function drawBlock(block) {
	
	rect(block.start[0], block.start[1], block.getWidthAndHeight()[0], block.getWidthAndHeight()[1])
	
}

var blueBlocks = [
	[-30, -30, 370, 124],
	[278, 355, 436, 539],
	[727, 494, 1030, 630]
	]
	
var redBlocks = [
	[370, -30, 840, 56],
	[438, 358, 841, 493]
	]

var yellowBlocks = [
	[-30, 542, 436, -30],
	[372, 56, 685, 355]
	]

var whiteBlocks = [
	[-30, 124, 278, 542],
	[278, 124, 369, 355],
	[842, -30, 1030, 493]
	]

function draw() {
	
	background(255)
	
	strokeWeight(20)
	stroke('Black')
	
	// starting blue
	fill(60, 70, 129)
	
	for(x = 0; x < blueBlocks.length; x++) {
		drawBlock(new Block(blueBlocks[x]))
	}
	
	// starting red
	fill(212, 38, 39)
	
	for(x = 0; x < redBlocks.length; x++) {
		drawBlock(new Block(redBlocks[x]))
	}
	
	// starting yellow
	fill(252, 210, 2)
	
	for(x = 0; x < yellowBlocks.length; x++) {
		drawBlock(new Block(yellowBlocks[x]))
	}
	
	// starting white
	fill(255, 255, 255)
	
	for(x = 0; x < whiteBlocks.length; x++) {
		drawBlock(new Block(whiteBlocks[x]))
	}
	
}
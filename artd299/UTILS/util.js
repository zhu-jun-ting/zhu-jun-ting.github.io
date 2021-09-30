function randomInt(min, max) {
	return Math.floor(random(max - min + 1)) + min
}

function randomFloat(min, max) {
	return random(max - min + 1) + min
}

function randomColor() {
	if(arguments.length == 1) {
		return color(random(225), random(225), random(225), arguments[0])
	}
	return color(random(225), random(225), random(225))
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

class Vector {
	
	constructor(x, y) {
		if (arguments.length == 1) {
			this.x = arguments[0].x
			this.y = arguments[0].y
			this.originalX = arguments[0].x
			this.originalY = arguments[0].y
		} else {
			this.x = x
			this.y = y
			this.originalX = x
			this.originalY = y
		}
	}
	
	update(x, y) {
		this.x += x
		this.y += y
		return this
	}
	
	overwrite(x, y) {
		this.x = x
		this.y = y
		return this
	}
	
	overwriteByVector(v) {
		this.x = v.x
		this.y = v.y
		return this
	}
	
	reset() {
		this.x = this.originalX
		this.y = this.originalY
		return this
	}
	
	copy() {
		return new Vector(this)
	}
	
	multiply(m) {
		this.x *= m
		this.y *= m
		return this
	}
	
	subtract(v) {
		// return the vector start from 'this' to 'v'
		return new Vector(v.x - this.x, v.y - this.y)
	}
	
	multiplyByVector(v) {
		this.x *= v.x
		this.y *= v.y
		return this
	}
	
}

class Ball {
	
	constructor(vectorPosition, vectorVelocity, radius, color) {
	    if (arguments.length == 4) {
			this.position = vectorPosition.copy()
			this.velocity = vectorVelocity.copy()
			this.radius = radius
			this.color = color
		} else if (arguments.length == 6) {
			this.position = new Vector(arguments[0], arguments[1])
			this.velocity = new Vector(arguments[2], arguments[3])
			this.radius = arguments[4]
			this.color = arguments[5]
		} else {
			console.error("Ball Constructor only take 4 or 6 parameters.")
		}
	}
	
	update() {
		this.position.update(this.velocity.x, this.velocity.y)
	}
	
	updateVelocityWithGravity(gravity) {
		this.velocity.update(0, gravity)
	}
	
	updateVelocityWithFriction(friction) {
		this.velocity.multiply(friction)
	}
	
	updateVelocityWithVectorFriction(vectorFriction) {
		this.velocity.multiplyByVector(vectorFriction)
	}
	
}

function drawBlock(block) {
	
	rect(block.start[0], block.start[1], block.getWidthAndHeight()[0], block.getWidthAndHeight()[1])
	
}

// @params {currentMousePosition}[xPosition, yPosition], {currentTargetPosition}[xPosition, yPosition], {speedFactor}number -> what percentage of each move
// @return {movingDeltas}[deltaX, deltaY]
function getEasingDelta(currentMousePosition, currentTargetPosition, speedFactor) {
	
	return [(currentMousePosition[0] - currentTargetPosition[0]) * speedFactor, (currentMousePosition[1] - currentTargetPosition[1]) * speedFactor]
	
}

// @params {img}image, {position}[x, y], {size}number -> scale factor
function drawImg(img, position, size) {
	
	image(img, position[0] - img.width / 2, position[1] - img.height / 2, size * img.width, size * img.height);
	
}

// @params {center}vector[x, y], {radius}number, {progress}float between 0 and 1(0 is the top, 0.5 is bottom)
// @return {position}vector[x, y]
function getPositionByProgress(center, radius, progress) {
	angleMode(DEGREES)
	dx = cos(360 * progress - 90) * radius
	dy = sin(360 * progress - 90) * radius
	return new Vector(center.x + dx, center.y + dy)
}

function createP5Button(position, text, size) {
	theButton = createButton(text)
	theButton.position(position.x, position.y)
	theButton.size(size)
	return theButton
}

// @params {min} {max}numbers, {entries}number of generating numbers, {current}array -> initialized database, {callback}function
// @return {current}array 
function createNoRepeatNumbers(min, max, entries, current, callback){
	temp = randomInt(min, max)
	isRepeated = false
	for(i = 0; i < current.length; i++) {
		if(temp == current[i]) {
			isRepeated = true
		}
	}
	if(entries == 0 && callback != undefined) {
		return callback(current)
	} else if(entries == 0) {
		return current
	}
	if(isRepeated) {
		return createNoRepeatNumbers(min, max, entries, current, callback)
	}else {
		current.push(temp)
		return createNoRepeatNumbers(min, max, entries - 1, current, callback)
	}
}
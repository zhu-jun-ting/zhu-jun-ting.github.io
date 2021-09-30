var characters = [],
	maxLength = 10;

var initX,
	initY,
	horizontalLength,
	vertialLength,
	wordRanges,
	fontSize,
	chraracterRange

function randomInt(min, max) {
	return Math.floor(random(max - min + 1)) + min
}

function randomColor() {
	return color(random(225), random(225), random(225))
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {

	initX = windowWidth * 0.2
	initY = windowHeight * 0.4
	horizontalLength = windowWidth * 0.6
	vertialLength = windowHeight * 0.2
	wordRanges = [-windowHeight, windowHeight]
	fontSizes = [windowWidth * 0.05, windowWidth * 0.1]
	chraracterRange = [0, 128]

	createCanvas(windowWidth, windowHeight)

	maxLength = window.prompt('how many characters you wish to put here?')
	if(maxLength == undefined) {
		maxLength = 10
	}

	for (i = 0; i < maxLength; i++) {
		
		thisCharacter = new Character(
			String.fromCharCode(randomInt(chraracterRange[0], chraracterRange[1])),
			randomInt(initX, initX + horizontalLength),
			randomInt(initY, initY + vertialLength),
			randomInt(wordRanges[0], wordRanges[1]),
			randomInt(fontSizes[0], fontSizes[1]),
			randomColor()
		)
		
		characters.push(thisCharacter)
		
	}

}

function draw() {

	background(240, 50)
	
	currentPositionX = map(mouseX, 0, width, -1, 1)
	currentPositionY = map(mouseY, 0, width, -1, 1)

	drawCharacters(currentPositionX, currentPositionY)

}

function drawCharacters(currentPositionX, currentPositionY) {
	
	for (i = 0; i < maxLength; i++) {
		
		thisCharacter = characters[i]
		
		textSize(thisCharacter.fontSize)
		fill(thisCharacter.color)
		
		text(
			thisCharacter.value,
			thisCharacter.originalX + thisCharacter.range * currentPositionX,
			thisCharacter.originalY + thisCharacter.range * currentPositionY
		)
		
	}
	
}

class Character {
	
	constructor(value, originalX, originalY, range, fontSize, theColor) {
	    this.value = value
		this.originalX = originalX
		this.originalY = originalY
		this.range = range
		this.fontSize = fontSize
		this.color = theColor
	}
	
}

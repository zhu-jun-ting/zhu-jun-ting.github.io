var quotes = [
	'to be, or not to be: that is the question',
	'though this be madness, yet there is method int',
	'there is nothing either good or bad, but thinking makes it so',
	'the lady doth protest too much, methinks',
	'brevity is the soul of wit'
]

var string1,
	string2

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	
	createCanvas(windowWidth, windowHeight)
	
	// split the quotes
	
	for (i = 0; i < quotes.length; i++) {
		quotes[i] = quotes[i].split(' ')
	}
	
	string1 = random(quotes)
	string2 = random(quotes)
	
}

function draw() {
	
	background(220)
	
	controlX = map(mouseX, 0, width, 0, string1.length * 0.9)
	controlY = map(mouseY, 0, height, 0, string2.length * 0.9)
	
	writeText = concat(string1.slice(0, controlX), string2.slice(0, controlY)).join(' ')
	// console.log(writeText)
	
	textSize(width / 14)
	fill(20)
	text(writeText, width * 0.1, height * 0.1, width * 0.8)
	
	textSize(width / 50)
	fill(200)
	text('move cursor horizontal and vertial to reveal two quotes', width * 0.1, height * 0.05)
	
}
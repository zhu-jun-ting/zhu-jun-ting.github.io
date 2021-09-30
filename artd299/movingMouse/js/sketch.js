var bee,
	garden
	
var targetPosition,
	targetScale

var speed = 0.03,
	flowerSize = 10,
	flowerColor = 'yellow',
	defaultFlowerNumber = 5,
	generatingAreas = [0.2, 0.8],
	targetGrowthRate = 0.5,
	beeProximity = 20
	
	
var flowers = []

function preload() {

	bee = loadImage("img/bee.png");
	garden = loadImage("img/garden.jpg");

}

function setup() {

	createCanvas(700, 490)
	
	targetPosition = [width / 2, height / 2]
	targetScale = 1
	
	for (i = 0; i < defaultFlowerNumber; i++) {
		
		flowers.push([randomInt(width * generatingAreas[0], width * generatingAreas[1]), randomInt(height * generatingAreas[0], height * generatingAreas[1])])
		
	}

}

function draw() {
	
	background(220)
	
	// update section
	targetPosition[0] += getEasingDelta([mouseX, mouseY], targetPosition, speed)[0]
	targetPosition[1] += getEasingDelta([mouseX, mouseY], targetPosition, speed)[1]
	
	// render section
	drawImg(garden, [width / 2, height / 2], 1)
	drawImg(bee, targetPosition, targetScale)
	
	fill(flowerColor)
	for (i = 0; i < flowers.length; i++) {
		circle(flowers[i][0], flowers[i][1], flowerSize)
	}
	
	addFlowerButton = createButton('ADD FLOWER')
	addFlowerButton.position(width * generatingAreas[1], height * generatingAreas[0] / 4)
	addFlowerButton.mousePressed(addFlower)
	
}

function mouseClicked() {
	
	hasReachAFlower()
	
}

function addFlower() {
	
	flowers.push([randomInt(width * generatingAreas[0], width * generatingAreas[1]), randomInt(height * generatingAreas[0], height * generatingAreas[1])])
	
}

function hasReachAFlower() {
	
	for (i = 0; i < flowers.length; i++) {
		if (dist(mouseX, mouseY, flowers[i][0], flowers[i][1]) < flowerSize && dist(targetPosition[0], targetPosition[1], flowers[i][0], flowers[i][1]) < flowerSize + beeProximity) {
			beeGrow()
			flowers.splice(i, 1)
			return true
		}
	}
	
	return false
	
}

function beeGrow() {
	targetScale += targetGrowthRate
}
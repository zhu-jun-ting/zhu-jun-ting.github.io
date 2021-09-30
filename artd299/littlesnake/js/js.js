/* 
	@name js.js
	@location littlesnake/js/js.js
	@version 1.0 (last updated 11.5.19)
	@website junting6@bengrosser.com/game/littlesnake
	@author Davids Y. Z. 
	
	@include jQuery jquery.com
	@include P5.JS p5js.com
	
	! this file is the core javascript file of the game
	
 */

/* 
	the logic of accompolishing this game: 
	
	there is an array of "snake" and an array of "theMap". for each frame, update the "snake" to the mapping location on "theMap". 
	Then, create spots called "fruit" for the player to prolong her "snake". 
	Consideing to add functions to ckeck if the snake is out-of-boundary or self-bit. If so, then GG! 
	Update the array of "snake" each frame before redering by remove the last element and add a new element according to the "currentDirection". 
	Then, render "theMap" on the camvas by draw() function. 
 */

/* 
	@var {string}currentDirection 
	@default "right"
	@possibleValues "up" , "right" , "down" , "left"
	@desc the current running direction of the snake
*/

var currentDirection = "right"

/* 
	@var {2dArray}snake
	@default [[0,0],[0,1],[0,2],[0,3],[0,4]]
	@elementsDesc [x,y] y = vertical position; x = horizontal position
	@defaultLength 5
	@desc the body of the snake, updates each frame. Increase the length after eats a fruit. 
*/

// the color of the fruits

var fruitColor = "red"

// the total of fruits

var fruitNumber = 20

var snake = new Array(
	[0, 0],
	[0, 1],
	[0, 2],
	[0, 3],
	[0, 4]
)

/* 
	@var {array2D}fruit
	@default -
	@elementsDesc [x,y] y = vertical position; x = horizontal position
	@desc the location of the fruit 
*/

var fruit = []
for(i = 0; i < fruitNumber; i++) {
	fruit.push([1, 1])
}

/* 
	@var {int}score
	@default 0
	@elementsDesc score
	@desc the score you get on top of the game board
*/

var score = 0

/* 
	@var {boolean}isGamePaused
	@default true
	@desc false = game is running ; true = game is paused
*/

var isGamePaused = true

function setup() {

	createCanvas(canvasWidth + 100 + infoAreaWidth, canvasHeight + 100)

	createMap()

	createAllFruits()

	frameRate(10)

	createStartButton()

	noLoop()

}

function draw() {

	background("#eeeeee")

	updateSnake()

	setUpTheMap()

	if (ckeckGameOver()) {

		confirm("Game Over!")
		noLoop()
		isGamePaused = true

	}

	eatFruit()

	drawFruit()
	
	drawSnake()
	

	showScore()

	if (isGamePaused) {

		drawPause()

	}
	
	drawInstructions()

}

function renderTheMap() {

}

function updateSnake() {

	snake.shift()

	lastElement = new Array(
		snake[snake.length - 1][0],
		snake[snake.length - 1][1]
	)

	if (currentDirection == "left") {
		lastElement[0]--
	} else if (currentDirection == "right") {
		lastElement[0]++
	} else if (currentDirection == "up") {
		lastElement[1]--
	} else if (currentDirection == "down") {
		lastElement[1]++
	} else {
		alert("interal error, cannot find recongnized value of 'currentDirection'")
	}

	snake.push(lastElement)

}

/* 
	@method setUpTheMap()
	@desc create the boundaries and grid lines of the map
	@for js
	@param -
	@return -
*/
function setUpTheMap() {

	/* 	to outline the map
	 */
	strokeWeight(5)
	noFill()
	stroke("#000000")
	square(45, 45, canvasWidth + 5)

	/* 	to add assisting lines 
	 */
	strokeWeight(2)
	stroke("#aaaaaa")
	for (x = 0; x <= theMap.size; x++) {
		line(49 + x * pixelWidth, 49, 49 + x * pixelWidth, 1049)
		line(49, 49 + x * pixelWidth, 1049, 49 + x * pixelWidth)
	}

}

/* 
	@method drawSnake()
	@desc draw the snake according to the snake[bodyNumber][position]
	@for js
	@param -
	@return -
	@WARNING this function should be added inside the draw() function
*/
function drawSnake() {

	fill("#000000")
	strokeWeight(0)

	for (m = 0; m < snake.length; m++) {

		x = snake[m][0]
		y = snake[m][1]

		console.log(x, y)

		rect(50 + x * pixelWidth, 50 + y * pixelWidth, pixelWidth, pixelWidth)

	}

}

/* 
	@OVERWRITE ckeckGameOver()
	@desc ckeck each frame before drawSnake() of there are self-confliction or out-of-boundary
	@for js
	@param -
	@return {boolean}isGameOver ( true=gameOver ; false=stillAlive )
*/
function ckeckGameOver() {

	head = snake[snake.length - 1]

	if (head[0] < 0 || head[0] > (theMap.size - 1)) {
		return true
	}

	if (head[1] < 0 || head[1] > (theMap.size - 1)) {
		return true
	}

	for (m = 0; m < snake.length - 1; m++) {

		if (head[0] == snake[m][0] && head[1] == snake[m][1]) {
			return true
		}

	}

	return false

}

/* 
	@OVERWRITE keyTyped()
	@desc to listen to the keyboard of arrows pressed
	@for js
	@param -
	@return -
*/
function keyPressed() {

	if (keyCode === UP_ARROW) {
		if (currentDirection != "down") {
			currentDirection = "up"
		}
	} else if (keyCode === DOWN_ARROW) {
		if (currentDirection != "up") {
			currentDirection = "down"
		}
	} else if (keyCode === LEFT_ARROW) {
		if (currentDirection != "right") {
			currentDirection = "left"
		}
	} else if (keyCode === RIGHT_ARROW) {
		if (currentDirection != "left") {
			currentDirection = "right"
		}
	} else if (keyCode == 32) {
		if (isGamePaused) {
			gameResume()
			isGamePaused = false
		} else if (!isGamePaused) {
			gamePause()
			isGamePaused = true
		}
	}
	return false

}

/* 
	@function createFruit()
	@desc create a fruit at a random place on map
	@for js
	@param x {int}the index of the fruit want to create
	@return -
*/
function createFruit(x) {

	fruit[x] = [Math.floor(random(0, theMap.size - 1)), Math.floor(random(0, theMap.size - 1))]

}

function createAllFruits() {

	for (m = 0; m < fruit.length - 1; m++) {
		createFruit(m)
	}

}

/* 
	@function drawFruit()
	@desc draw the fruit
	@for js
	@param -
	@return -
*/
function drawFruit() {

	fill(fruitColor)
	strokeWeight(0)

	for (m = 0; m < fruit.length - 1; m++) {

		x = fruit[m][0]
		y = fruit[m][1]

		rect(50 + x * pixelWidth, 50 + y * pixelWidth, pixelWidth, pixelWidth)
	}

}

/* 
	@function eatFruit()
	@desc check if the snake eats the fruit
	@for js
	@param -
	@return -
*/
function eatFruit() {

	head = snake[snake.length - 1]

	for (m = 0; m < fruit.length - 1; m++) {

		if (head[0] == fruit[m][0] && head[1] == fruit[m][1]) {

			createFruit(m)

			DertaX = snake[1][0] - snake[0][0]
			DertaY = snake[1][1] - snake[0][1]

			newEnd = [snake[0][0] - DertaX, snake[0][1] - DertaY]

			snake.unshift(newEnd)

			score += 1
			
			// fruitColor = randomColor()

		}

	}

}

/* 
	@function showScore()
	@desc show score on the top
	@for js
	@param -
	@return -
*/
function showScore() {

	fill("#000000")
	textSize(20)
	text("SCORE : " + score.toString(), 75, 30)

	fill("#cccccc")
	text("CODES BY DAVIDS Y. Z. COPYRIGHT 2019", 650, 30)

}

/* 
	@function gamePause()
	@desc pause the game
	@for js
	@param -
	@return -
*/
function gamePause() {

	noLoop()
	isGamePaused = true

}

/* 
	@function gameResume()
	@desc resume the game 
	@for js
	@param -
	@return -
*/
function gameResume() {

	loop()
	isGamePaused = false

}

function drawPause() {

	fill("#000000")
	textSize(30)
	text("GAME PAUSED", INFO_X_CENTER - 100, INFO_Y + 500)

}

function drawInstructions() {
	
	fill("#cccccc")
	textSize(20)
	text("ARROWS - control the snake", INFO_X_CENTER - 200, INFO_Y + 200)
	text("SPACE - pause", INFO_X_CENTER - 200, INFO_Y + 300)
	
	
}
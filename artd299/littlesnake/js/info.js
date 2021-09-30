/* 
	@name info.js
	@location littlesnake/js/info.js
	@version 1.1 (last updated 11.6.19)
	@website junting6@bengrosser.com/game/littlesnake
	@author Davids Y. Z. 
	
	@include jQuery jquery.com
	@include P5.JS p5js.com
	
	! this file is the control panel for player information
	
 */

/* 
	@var {int}infoAreaWidth
	@default 500
	@desc the width of the information area
	@NOTICE the information panel is at pixels from ( 1100 , 50 ) to ( 1550 , 1050 ) while there are 50 pixels on each side
*/
var infoAreaWidth = 500

/* 
	@var {int}INFO_X, {int}INFO_Y
	@default 1100 , 50
	@desc the left top corner X and Y of the information panel
*/
var INFO_X = 1100
var INFO_Y = 50

/* 
	@var {int}INFO_X_CENTER
	@default 1350
	@desc the center of the X align
*/
var INFO_X_CENTER = 1100 + 250

function createStartButton() {

	button = createButton('START');
	button.position(INFO_X_CENTER - 30, INFO_Y + 900);
	button.mousePressed(startGame);

}

/* 
	@method startGame()
	@desc to start a new game
	@for info
	@param -
	@return -
*/
function startGame () {
	
	createAllFruits()
	
	resetSnake()
	
	loop()
	
	isGamePaused = false
	
}

function resetSnake () {
	
	snake = [
		[0, 0],
		[0, 1],
		[0, 2],
		[0, 3],
		[0, 4]
	]
	
	currentDirection = "right"
	
}

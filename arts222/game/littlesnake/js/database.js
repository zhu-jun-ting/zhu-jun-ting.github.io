/* 
	@name database.js
	@location littlesnake/js/database.js
	@version 1.0 (last updated 10.11.19)
	@website junting6@bengrosser.com/game/littlesnake
	@author Davids Y. Z. 
	
	@include jQuery jquery.com
	@include P5.JS p5js.com
	
	! this file is to put static variables and functions
	
 */

/* 
	this is the map for the game. the size of the map is 50 * 50
	the map is a 2-dimensional array that map[y][x]:
	   y is the y-position according to the screen
	   x is the x-position according to the screen
	for each grid on the canvas the width and the height is 20px
	so the total canvas is 1000px * 1000px
 */

var theMap = []
theMap.size = 50

/* 
	the row of the theMap that length is 50
 */

var row = []
row.size = 50

/* 
	@method createMap()
	@desc fill the map
	@for database
	@param -
	@return - 
 */

function createMap() {
	for (x = 0; x < map.size; x++) {
		theMap.push(row)
	}
}

/* 
	the intended width of the square of the pixels for theMap
 */

var pixelWidth = 20

/* 
	the width and the height of the canvas ( pixelWidth * totalColums )
 */

var canvasWidth = row.size * pixelWidth,
	canvasHeight = theMap.size * pixelWidth

/* 
	@method random()
	@desc get a random integer number from min to max
	@for database
	@param {int}min the minimum number
	@param {int}max the maximum number
	@return {int} the random number
*/

function random(min, max) {

	return Math.floor(Math.random() * (max - min) + min)

}

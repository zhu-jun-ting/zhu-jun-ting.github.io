var images = []

var pieces = [[], [], []],
	initialOrder = []

var puzzleRow = 3,
	puzzleCol = 3
	
var IMAGE_WIDTH = 900,
	IMAGE_HEIGHT = 600,
	PIECE_WIDTH = 300,
	PIECE_HEIGHT = 200
	
var placeHolder,
	placeHolderRow,
	placeHolderCol

function preload() {
	images.push(loadImage('img/1.png'))
	images.push(loadImage('img/2.png'))
	images.push(loadImage('img/3.png'))
	images.push(loadImage('img/4.png'))
	images.push(loadImage('img/5.png'))
	images.push(loadImage('img/6.png'))
	images.push(loadImage('img/7.png'))
	images.push(loadImage('img/8.png'))
	images.push(loadImage('img/9.png'))
	
	initialOrder = createNoRepeatNumbers(0, 8, 9, [])
}

/* 
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
 */

function setup() {
	createCanvas(IMAGE_WIDTH, IMAGE_HEIGHT)
	
	for (i = 0; i < puzzleRow; i++){
		for (j = 0; j < puzzleCol; j++){
			index = initialOrder.pop()
			pieces[i][j] = images[index]
		}
	}
	
	console.log(pieces)
}

function draw() {
	
	background(220)
	
	for(i = 0; i < puzzleRow; i++) {
		for(j = 0; j < puzzleCol; j++) {
			if(pieces[i][j] != undefined) {
				image(pieces[i][j], j * PIECE_WIDTH, i * PIECE_HEIGHT)
			}
		}
	}
	
	if(placeHolder != undefined) {
		image(placeHolder, mouseX, mouseY)
	}
	
}

function mousePressed() {
	
	currentMouseRow = (int)(mouseY / PIECE_HEIGHT)
	currentMouseCol = (int)(mouseX / PIECE_WIDTH)
	// console.log(currentMouseRow)
	
	if(0 <= currentMouseCol <= 2 && 0 <= currentMouseRow <= 2) {
		if(placeHolder == undefined) {
			placeHolder = pieces[currentMouseRow][currentMouseCol]
			placeHolderRow = currentMouseRow
			placeHolderCol = currentMouseCol
			pieces[currentMouseRow][currentMouseCol] = undefined
		} else {
			temp = pieces[currentMouseRow][currentMouseCol]
			pieces[currentMouseRow][currentMouseCol] = placeHolder
			pieces[placeHolderRow][placeHolderCol] = temp
			placeHolder = undefined
			placeHolderCol = undefined
			placeHolderRow = undefined
		}
	}
	
}
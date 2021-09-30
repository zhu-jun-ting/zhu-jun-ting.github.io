let w = 20;
let step = 40;
let x, y;
let dials = []
let colors = []

function setup() {
	createCanvas(1000, 1000);

	img = loadImage("img/A.png")

	
	for(i = 0; i < w; i++) {
		for(j = 0; j < w; j++) {
			x = map(i, 0, w, 0, img.width)
			y = map(j, 0, w, 0, img.height)
			imageColor = get(x, y)
			colors.push(imageColor)
		}
	}



	for (let i = 0; i < pow(w, 2); i++) {
		dials[i] = new Particle(i);
	}

	// initialize the x and y coordinates of the
	x = 0;
	y = 0;
}

function draw() {
	background(320);
	image(img, 0, 0, 20, 20) 

	for (let i = 0; i < dials.length; i++) {

		// for every value of i different than 0
		if (i != 0) {
			// do this when the counter reaches the width value...
			if (i % w == 0) {
				// reset the horizontal coordinate and...
				x = 0;
				// increase the vertical counter
				y++;
			} else {
				// set the next x position  
				x++;
			}
		}

		dials[i].setPos(100 + x * step, 50 + y * step);
		dials[i].calcTarget();
		// dials[i].show();

		/** This function draws the dynamic net using the x and y values calculated above. See the function definition at the end of the code. Go over the comments, it is explained in detail.
		 */
		showNet(x, y)

	}

	// re-initialize y for the next draw loop
	x = 0;
	y = 0;
}


/**Class definition*/
class Particle {
	constructor(factor) {
		this.pos = createVector();
		this.radius = 15;
		this.angle = 0; //random(TWO_PI);
		this.target = createVector();
		this.speed = 0.001 * factor
		this.color = 'white'
	}
	
	setColor(color) {
		this.color = color
	}

	setPos(x, y) {
		this.pos.x = x;
		this.pos.y = y;
	}

	show() {
		// show elements
		stroke(140);
		fill(140)
		circle(this.pos.x, this.pos.y, 5)
		line(this.pos.x, this.pos.y, this.target.x, this.target.y);
	}

	calcTarget() {
		// find the target
		let xCom = cos(this.angle) * this.radius;
		let yCom = sin(this.angle) * this.radius;
		this.target = createVector(this.pos.x + xCom, this.pos.y + yCom);

		// spin the needle
		this.angle += this.speed;
		if (this.angle > TWO_PI) {
			this.angle = 0;
		}
	}
}

/** Show net function definition*/

function showNet(x, y) {

	let currentIndex = (w * y) + x;

	/** 
	I am reaching here the current position and the next position in the array. To prevent retrieving a position beyond the length of the array I am checking the 'for' counter does not exceed the length of the array
	*/
	if (currentIndex < dials.length - 1) {

		// Retrieve the current and next dials from the array
		let dial = dials[currentIndex].target;
		let nextDial = dials[currentIndex + 1].target;

		// set stroke color
		stroke(30)
		fill(30)

		/** Drawing horizontal lines
		The doraws lines from one dial to the next, but skips the line between the last dial in a row and the first one in the following row. This line is tricky. I am comparing the current index with the higher index of the row. But i am shifting the index 1 value and the row index 1 width step because I have issues comparing the index and the row with when both have values of 0.
		There might be a better way to do this.
		*/
		if (currentIndex + 1 < (w * y) + w) {
			
			
			/**Drawing vertical lines
			In order to get the index of the dial below the current dial I increase the current index by the width. But to prevent exceeding the value of dials.length, the boolean condition sets a restriction: only retrieve dials when dialIndexBelow is less than the array length.
			*/
			let dialIndexBelow = currentIndex + w;
			if (dialIndexBelow < dials.length) {
				// line(dial.x, dial.y, nextDial.x, nextDial.y);
				let lowerDial = dials[dialIndexBelow].target;
				let lowerLeftDail = dials[dialIndexBelow + 1].target;
				// line(dial.x, dial.y, lowerDial.x, lowerDial.y);
				
				// console.log(x, y)
				posX = map(x, 0, w-2, 0, 18)
				posY = map(y, 0, w-2, 0, 18)
				imageColor = get(posX, posY)
				// console.log(imageColor)
				noStroke()
				fill(imageColor)
				
				quad(dial.x, dial.y, nextDial.x, nextDial.y, lowerLeftDail.x, lowerLeftDail.y, lowerDial.x, lowerDial.y)
			}
			
		}

		
	}
}

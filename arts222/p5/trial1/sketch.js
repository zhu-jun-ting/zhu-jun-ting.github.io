function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(220);

  fill("white")
  noStroke()
  rect(20, 20, 100, 50)

  noStroke()
  fill("white")
  square(300, 300, 90)

  stroke("black")
  noFill()
  strokeWeight(5)
  line(20, 20, 380, 380)

  stroke("purple")
  fill("black")
  strokeWeight(10)
  ellipse(100, 250, 100, 200)

  stroke("white")
  fill("white")
  strokeWeight(10)
  ellipse(70, 250, 30, 40)

  stroke("green")
  noFill()
  strokeWeight(20)
  line(130, 350, 300, 30)

  stroke("yellow")
  fill("blue")
  strokeWeight(15)
  circle(300, 100, 90)

  noStroke()
  fill("white")
  circle(300, 130, 20)

  stroke("blue")
  noFill()
  strokeWeight(10)
  square(270, 270, 100)

  noStroke()
  fill("red")
  square(330, 330, 40)

}
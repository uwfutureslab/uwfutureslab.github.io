let heroHeader, heroCaption, heroButton
let mobile
let heightMod

let stickies, stickySize, activeSticky
const stickyColours = ['#4796E3', '#9177C7', '#CA6673']
const stickyText = [':)', 'hello world!', '~(o_o)~', '<(-_-)>']

function setup() {
  heightMod = 2/3

  c = createCanvas(windowWidth, windowHeight * heightMod);
  c.parent("p5sketch");

  mobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent)
  if (mobile) {
    scheduleItems = document.getElementsByClassName('schedule-item')
    scheduleItems.forEach(e => e.style.flexDirection = 'column')
  }

  heroHeader = createElement('h1', '<span class="gradient-text">Futures Lab:</span> An AI+UX Prototyping Workshop Series')
  heroHeader.parent("p5sketch")
  //heroCaption = createP('Fall 2025: "Learning Re-Imagined"')
  //heroCaption.parent("p5sketch")
  heroButton = createButton('add note')
  heroButton.parent("p5sketch")

  stickySize = min(height, width) / 8
  stickies = []
  stickies.push(new Sticky(stickyColours[0], random(stickyText)))
  stickies.push(new Sticky(stickyColours[1], random(stickyText)))
  stickies.push(new Sticky(stickyColours[2], random(stickyText)))
  activeSticky = false

  heroButton.mousePressed(() => stickies.push(new Sticky(random(stickyColours), random(stickyText))))
}

function draw() {
  // do background things
  background('#FFFFFF');
  push()
  noStroke()
  fill('#E9ECEF')
  for (let y = 10; y < height; y += 20) {
    for (let x = 10; x < width; x += 20) {
      circle(x, y, 5)
    }
  }
  pop()

  // sticky notes
  stickies.forEach(e => {
    e.update()
    e.draw()
  })

  // text and button
  heroHeader.style('padding-left', `${width / 6}px`)
  heroHeader.style('padding-right', `${width / 6}px`)
  heroHeader.style('font-family', '"Playwrite US Modern", cursive')
  heroHeader.style('font-optical-sizing', 'auto')
  heroHeader.style('font-weight', '400')
  heroHeader.style('font-size', mobile ? '2em' : '3em')
  heroHeader.style('background-clip', 'content-box')
  heroHeader.style('background-color', '#DEE2E666')
  heroHeader.position(0, (height / 2) - (heroHeader.size()['height'] * 2/3))
  /*
  heroCaption.style('padding-left', `${width / 6}px`)
  heroCaption.style('padding-right', `${width / 6}px`)
  heroCaption.style('font-family', '"Noto Sans", sans-serif')
  heroCaption.style('font-size', mobile ? '1.5em' : '2em')
  heroCaption.style('background-clip', 'content-box')
  heroCaption.style('background-color', '#DEE2E666')
  heroCaption.position(1, (height / 2) + (heroHeader.size()['height'] / 2))
  */
  heroButton.style('padding', mobile ? '1em' : '1.5em')
  heroButton.style('font-family', '"Noto Sans", sans-serif')
  heroButton.style('font-size', mobile ? '0.5em' : '0.75em')
  heroButton.style('border', 'none')
  heroButton.style('border-radius', '1em')
  heroButton.position(width - heroButton.size()['width'] - 5, height - heroButton.size()['height'] - 5)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * heightMod)
  stickySize = min(height, width) / 8
}

function mouseReleased () {
  activeSticky = undefined
}

function touchEnded () {
  activeSticky = undefined
}

// sticky note
class Sticky {
  colour;
  text;
  x;
  y;
  rotate;
  active;

  constructor(colour, text) {
    this.colour = colour
    this.text = text
    this.x = random(0 + stickySize, width - stickySize)
    this.y = random(0 + stickySize, height - stickySize)
    this.rotate = -1
    this.active = false
  }

  update() {
    if ((!activeSticky || this.active) && mouseIsPressed && abs(mouseX - this.x) < stickySize && abs(mouseY - this.y) < stickySize) {
      activeSticky = true
      this.active = true
      this.x = mouseX
      this.y = mouseY
    } else {
      this.active = false
      if (frameCount % 120 == 0) {
        gsap.to(this, { x: this.x + randomGaussian(), y: this.y + randomGaussian(), duration: 0.5, ease: "circ.out" });
      }
    }
  }

  draw() {
    push()
    noStroke()
    rectMode(CENTER)
    fill(this.colour)
    angleMode(DEGREES)
    rotate(-1)
    square(this.x, this.y, stickySize)
    fill(0)
    textSize(stickySize/7)
    textAlign(CENTER, CENTER)
    mobile && textStyle(BOLD)
    text(this.text, this.x, this.y)
    pop()
  }
}
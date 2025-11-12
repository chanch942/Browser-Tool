// Poster Generator - 2400x3600
// Click "NEW" to generate new poster
// Click "SAVE" to save current poster

let posterWidth = 2400;
let posterHeight = 3600;
let scale = 0.25; // Display scale for screen viewing

// Visual System
let habitasFont;
let gridSize;
let margin;

// UI Elements
let newButton;
let saveButton;
let textInput;
let posterGraphics;

// User text
let userText = "type";

function preload() {
  // Load Habitas font
  habitasFont = loadFont('Habitas-Trial-Regular.otf');
}

function setup() {
  let canvasWidth = posterWidth * scale;
  let canvasHeight = posterHeight * scale;
  createCanvas(canvasWidth, canvasHeight);
  posterGraphics = createGraphics(posterWidth, posterHeight);
  posterGraphics.pixelDensity(1);
  generateElement('block');
  
  
}

function updateText() {
  userText = textInput.value();
}

function draw() {
  background(240);
  
  // Draw poster preview (no sidebar offset)
  image(posterGraphics, 0, 0, posterWidth * scale, posterHeight * scale);
  
  // Draw border around poster
  noFill();
  stroke(100);
  strokeWeight(2);
  rect(0, 0, posterWidth * scale, posterHeight * scale);
}


function generateElement(type) {
  if(type == 'circle') {
    let x = random(posterWidth);
    let y = random(posterHeight);
    let size = random(100, 1000);
    posterGraphics.fill(random(255), random(255), random(255), 150);
    posterGraphics.noStroke();
    posterGraphics.ellipse(x, y, size, size/2);
    posterGraphics.textAlign(CENTER, CENTER);
    posterGraphics.fill(0);
    posterGraphics.textSize(32);
    posterGraphics.text(userText, x, y);
  }  else if (type == 'rectangle') {
    let x = random(posterWidth);
    let y = random(posterHeight);
    let w = random(100, 500);
    let h = random(100, 300);
    posterGraphics.fill(random(255), random(255), random(255), 150);
    posterGraphics.noStroke();
    posterGraphics.rect(x, y, w, h);
    posterGraphics.textAlign(LEFT, BASELINE);
    posterGraphics.fill(0);
    posterGraphics.textSize(32);
    posterGraphics.text(userText, x+5, y+h-10);
  } else if (type == 'block') {
    let x = random(posterWidth);
    let y = random(posterHeight);
    let w = random(100, 500);
    let h = random(100, 300);
    posterGraphics.fill(random(255), random(255), random(255), 150);
    posterGraphics.noStroke();
    posterGraphics.rect(x, y, w, h);
    posterGraphics.textAlign(LEFT, BASELINE);
    posterGraphics.fill(0);
    posterGraphics.textSize(32);

    let letters = userText.split('');
    let spacing = (w-textWidth(letters[0])* (letters.length+1) ) / (letters.length-1);
    for(let i = 0; i < letters.length; i++) {
      posterGraphics.text(letters[i], x + i * spacing, y + h - 10);
    }

  }
  
}

function savePoster() {
  // Save the full resolution poster
  save(posterGraphics, 'poster_' + year() + month() + day() + '_' + hour() + minute() + second() + '.png');
}

function keyPressed() {
  // Keep keyboard shortcuts as backup
  if (key === ' ') {
    generatePoster();
  }
}

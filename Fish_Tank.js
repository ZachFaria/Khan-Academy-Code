// function to draw fish
var drawFish = function(x, y, l, h, c, tw, e, tc) {
    noStroke();
    fill(c);
    // body
    ellipse(x, y, l, h);
    // tail
    fill(tc);
    var tailHeight = h/2;
    triangle(x-l/2, y, x-l/2-tw, y-tailHeight, x-l/2-tw, y+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(x+l/4, y, e, e);
};

// background
background(89, 216, 255);

// function to draw bubbles
var drawBubble = function() {
    noStroke();
    fill(0, 102, 255);
    ellipse(random(10, 360), random(10, 360), 10, 10);
};

// bubbles
drawBubble();
drawBubble();
drawBubble();
drawBubble();
drawBubble();
drawBubble();

// function to add a fish to the screen when the mouse is clicked
mouseClicked = function() {
    drawFish(mouseX, mouseY, random(10, 200), random(10, 200), color(random(0, 255), random(0, 255), random(0, 255)), random(10, 75), random(5.00, 40.00), color(random(0, 255), random(0, 255), random(0, 255)));
};

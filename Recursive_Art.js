// Recursive function to draw shape
var drawShape = function(x, y, radius) {
    // Centers rectangle 
    rectMode(CENTER);
    // Drawing rectangle
    rect(x, y, radius, radius);
    // Drawing ellipse
    ellipse(x, y, radius, radius);
    
    // Oppacity of lines around shapes
    stroke(0, 0, 0, radius/3);
    //noStroke();
    
    // Colour of shapes
    fill(radius/4+5, 50, 20, radius/5);
    
    // Sizes of shapes
    var newRadius = radius/1.2;
    
    // Only creates shapes that are greater than or equall to a radius of 4
    if (newRadius >= 4) {
        drawShape(x + 10, y, newRadius);
    }
};

// Calling function
drawShape(width/3, height/2, 900);

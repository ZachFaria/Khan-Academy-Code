/* Program that makes colorful raindrops
fall down the screen forever and allows 
user to make more raindrops by clicking 
thier mouse*/

// Arrays that contain the positions and colors of each rain drop
var xPositions = [random(400), random(400), random(400)];
var yPositions = [random(400), random(400), random(400)];
var colors = [color(random(255), random(255), random(255)), color(random(255), random(255), random(255)), color(random(255), random(255), random(255))];

// Function that draws the raindrops on the screen
draw = function() {
    
    background(204, 247, 255);
    
    // Loop that creates the raindrops and thier movement
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(colors[i]);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        
        // Conditional statement to send the raindrops back to the top of the screen once they've reached the bottom
        if (yPositions[i] > 400) {
            yPositions[i] = 0;
        }
    }
    
    // Funtion that allows the user to click on the canvas and create a raindrop where they click
    mouseClicked = function() {
        xPositions.push(mouseX);
        yPositions.push(mouseY);
        colors.push(color(random(0, 255), random(0, 255), random(0, 255)));
    };
    
};

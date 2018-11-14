/*To create a mountain range using perlin noise*/

var sky = function () {
    // Sky
    for (var i = 0; i < 100; i++){
        fill(255, i*1.7 + 30, i/30, 255);
        noStroke();
        rect(0, i*2, 400, 2);
    }
    
    for (var i = 0; i < 100; i++){
        noStroke();
        fill(255 - i*1.4, 30 - i, i*1.4, i*2);
        rect(i*4, 0, 4, 200);
    }
    
    // Clouds
    var cloudHeight = 175;
    
    var colorX = 0; // Starting colour for x
    for (var i = 0; i < 200; i++){
        var colorY = 0; // Starting colour for y
        for (var j = 0; j < cloudHeight/3; j++) {
            noStroke();
            var column = map(noise(colorX, colorY), 0, 1, 0, 260);
            fill(255, 220, 240, column - 100);
            rect(i*3, j*3, 3, 3);
            
            colorY += 0.2;
        }
        colorX += -0.08;
    }
};

// Mountain
var drawRange = function(length, shape, yPos, red) {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t*shape + yPos);
        var y = map(n, 0, 1, 0, height/2);
        stroke(255, y, red);
        rect(t*length, yPos - y, 1, y + 30);
    }
};

// Birds
var x1 = random (-25, 0);
var x2 = random (-25, 0);
var y1 = random(100, 300);
var y2 = random(100, 300);

draw = function() {
    sky();
    drawRange(127, 1.23, 255, 84);
    drawRange(196, 1.94, 320, 119);
    drawRange(200, 1.89, 372, 183);
    drawRange(198, 2.64, 421, 236);
    
    // Birds
    var speed1 = random(5);
    var speed2 = random(5);
    strokeWeight(2.5);
    stroke(0, 0, 0);
    point(x1, y1);
    point(x2, y2);
    x1 += speed1;
    x2 += speed2;
    y1 += random(-3, 3);
    y2 += random(-3, 3);
    
    if (x1 > 450) {
        x1 = random(-25, 0);
    }
    else if (x2 > 450) {
        x2 = random(-25, 0);
    }
};

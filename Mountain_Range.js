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
    var cloudHeight = 260;
    
    var colorX = 0;
    for (var i = 0; i < 200; i++){
        var colorY = 0;
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
var drawRange = function(length, shape, posY, red) {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t*shape + posY);
        var y = map(n, 0, 1, 0, height/2);
        stroke(255, y, red);
        rect(t*length, posY - y, 1, y + 30);
    }
};

var generator = new Random(1);
var standardDeviation = 2;
var mean = 0;

var Bird = function(h) {
    this.x = 0;
    this.y = h;
};

Bird.prototype.display = function() {
    strokeWeight(3);
    stroke(0, 0, 0);
    point(this.x, this.y);
};

Bird.prototype.fly = function() {
    var y = generator.nextGaussian();
    
    var yFlightDistance = standardDeviation * y + mean;
    
    this.x += 20;
    this.y += y;
    
    if (this.x > 400) {
        this.x = -100;
    }
};

var bird = new Bird();

draw = function() {
    sky();
    drawRange(127, 1.23, 255, 84);
    drawRange(196, 1.94, 320, 119);
    drawRange(200, 1.89, 372, 183);
    drawRange(198, 2.64, 421, 236);
    for (var i = 0; i < 10; i++) {
        bird.fly(random(height/1.5));
    }
    bird.display();
};

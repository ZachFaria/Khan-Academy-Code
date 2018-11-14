/*Simulates predators (yellow/angry packman)
chasing prey (blue flies) using vectors*/

// Sets the starting position of the prey to random values
var Prey = function() {
    this.position = new PVector(random(width), random(height));
    
    this.tx = random(width);
    this.ty = random(height);
};

// Updates and returns position of the prey
Prey.prototype.update = function() {
    // Utilizes the map function and perlin noise to determine the movement of the prey
    this.position.x = map(noise(this.tx), 0, 1, -width, width*2);
    this.position.y = map(noise(this.ty), 0, 1, -height, height*2);
    
    // Increasesby increments of 0.001 for slower movements
    this.tx += 0.001;
    this.ty += 0.001;

    return this.position;
};

// Displays the prey on the canvas
Prey.prototype.display = function() {
    stroke(0);
    strokeWeight(1);
    fill(23, 159, 232);
    image(getImage("space/collisioncircle"), this.position.x, this.position.y -
    8, 48, 16);
    image(getImage("space/collisioncircle"), this.position.x - 48, this.position.y -
    8, 48, 16);
    
    line(this.position.x, this.position.y, this.position.x + 32, this.position.y - 6);
    line(this.position.x, this.position.y, this.position.x + 43, this.position.y - 3);
    line(this.position.x, this.position.y, this.position.x + 43, this.position.y + 3);
    line(this.position.x, this.position.y, this.position.x + 32, this.position.y + 6);
    
    line(this.position.x, this.position.y, this.position.x - 32, this.position.y - 6);
    line(this.position.x, this.position.y, this.position.x - 43, this.position.y - 3);
    line(this.position.x, this.position.y, this.position.x - 43, this.position.y + 3);
    line(this.position.x, this.position.y, this.position.x - 32, this.position.y + 6);


    ellipse(this.position.x, this.position.y, 30, 30);
};

// Keeps the prey on the screen at all times
Prey.prototype.checkEdges = function() {

  if (this.position.x > width) {
    this.position.x = 0;
  } else if (this.position.x < 0) {
    this.position.x = width;
  }

  if (this.position.y > height) {
    this.position.y = 0;
  } else if (this.position.y < 0) {
    this.position.y = height;
  }
}; 

// Sets the starting position of the predator to random values
var Predator = function() {
    this.position = new PVector(random(width), random(height));
    
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};

// Updates the position of the predator
Predator.prototype.update = function(preyPos) {
    // Biggest possible PVector that fits in the canvas
    var maxDir = new PVector(width, height);
    // Magnitude of that vector
    var maxMag = maxDir.mag();
    // Determines the direction based on the position of the designated prey
    var dir = PVector.sub(preyPos, this.position);
    var closeness = (maxMag - dir.mag())/maxMag;
    dir.normalize();
    dir.mult(closeness);
    
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    // Max velocity set to 1 for easier movement behaviour tracking
    this.velocity.limit(1);
    this.position.add(this.velocity);
};

// Displays the predator on the canvas
Predator.prototype.display = function() {
    noStroke();
    fill(232, 232, 0);
    arc(this.position.x, this.position.y, 48, 48, 32, 343);
    fill(255, 0, 0);
    arc(this.position.x, this.position.y - 15, 10, 10, 16, 197);
    stroke(0);
    strokeWeight(3);
    line(this.position.x + 5, this.position.y -15, this.position.x - 6, this.position.y - 17);
};

// Keeps the prey on the screen at all times
Predator.prototype.checkEdges = function() {

  if (this.position.x > width) {
    this.position.x = 0;
  } else if (this.position.x < 0) {
    this.position.x = width;
  }

  if (this.position.y > height) {
    this.position.y = 0;
  } else if (this.position.y < 0) {
    this.position.y = height;
  }
};

// Array to create 'x' amount of prey
var prey = [];
for (var i = 0; i < 3; i++)
{
    prey[i] = new Prey(); 
}

// Array to create 'x' amount of predators
var predator = [];
for (var i = 0; i < 3; i++)
{
    predator[i] = new Predator(); 
}

// Calls all functions repeatedly
draw = function() {
    // Sets canvas background to white
    background(255, 255, 255);

    // Calls functions for all prey
    for (var i = 0; i < prey.length; i++)
    {
        prey[i].update();
        prey[i].checkEdges();
        prey[i].display(); 
    }
    
    // Calls functions for all predators
    for (var i = 0; i < predator.length; i++) {
        // Uses the direction of the prey to determine the direction of the predator
        predator[i].update(prey[i].update());
        predator[i].checkEdges();
        predator[i].display(); 
    }
    
};


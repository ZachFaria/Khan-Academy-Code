/* Program to display slightly
transperent paint splaters which 
eventually create a paint pallet 
of red*/

// Generates a random numbers in the object generator
var generator = new Random(1);

var standardDeviation = 100;
var mean = 200;
    
draw = function() {
    
    // Sets values to the next proterty of the object
    var numX = generator.nextGaussian();
    var numY = generator.nextGaussian();
    
    // Calculates the positions
    var x = standardDeviation * numX + mean;
    var y = standardDeviation * numY + mean;
    
    noStroke();
    // Fills the ellipse with a red depending on the value of the remainder of x divided by 2550
    fill(x%2550, 0, 0, 75);
    ellipse(x, y, 36, 36);
};

var xPos1 = 1;
var yPos1 = 405;
var xPos2 = 0;
var yPos2 = 0;
var wid = 50;
var len = 83;

draw = function() {
    // stary sky background
    image(getImage("space/background"), 0, 0);
    image(getImage("cute/Star"), 30, 30, wid, len);
    image(getImage("cute/Star"), 207, -17, wid, len);
    image(getImage("cute/Star"), 233, 198, wid, len);
    image(getImage("cute/Star"), 250, 92, wid, len);
    image(getImage("cute/Star"), 146, 108, wid, len);
    image(getImage("cute/Star"), 5, 240, wid, len);
    image(getImage("cute/Star"), 105, 319, wid, len);
    image(getImage("cute/Star"), 273, 304, wid, len);
    image(getImage("cute/Star"), 18, 137, wid, len);
    image(getImage("cute/Star"), 116, 195, wid, len);
    image(getImage("cute/Star"), 338, 40, wid, len);
    image(getImage("cute/Star"), 305, 174, wid, len);
    image(getImage("cute/Star"), 103, 17, wid, len);
    image(getImage("cute/Star"), 157, 250, wid, len);
    
    // shooting stars
    image(getImage("cute/Star"), xPos1, yPos1, wid, len);

    xPos1 += 20;
    yPos1 -= 20;

    image(getImage("cute/Star"), xPos2, yPos2, wid, len);
    
    xPos2 += 20;
    yPos2 += 20;
};

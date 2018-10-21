background(219, 255, 255);

// sun
fill(255, 255, 61);
ellipse(378, 25, 100, 100);

// bricks
for (var j = 345; j > 144; j -= 20) {
    for (var i = 60; i < 321; i += 20) {
        rect(60, j, 20, 10);
        rect(i, j, 20, 10);
        fill(random(150, 210), 73, 20);
    }
}
for (var j = 335; j > 149; j -= 20) {
    fill(random(150, 210), 73, 20);
    rect(60, j, 20, 10);
    rect(320, j, 20, 10);
    for (var i = 70; i < 321; i += 20) {
        rect(i, j, 20, 10);
    }
}

//roof
fill(108, 124, 204);
triangle(200, 28, 350, 150, 50, 150);

// door
fill(120, 80, 19);
rect(180, 281, 40, 77);
// door nob
fill(209, 199, 19);
ellipse(188, 319, 7, 10);

// path
fill(122, 122, 122);
rect(177, 355, 45, 47);

// windows
for (i = 79; i < 340; i += 165) {
    fill(65, 196, 219);
    stroke(247, 244, 244);
    strokeWeight(5);
    rect(i, 206, 75, 75);
    line(i+1, 244, i+73, 244);
    line(i+36.5, 210, i+36.5, 280);
}

// grass and shrubs
for (i = -3; i < 405; i += 224) {
image(getImage("cute/GrassBlock"), i, 328, 182, 94);
image(getImage("cute/TreeShort"), i+39, 255);
}

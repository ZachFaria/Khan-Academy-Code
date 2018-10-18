fill(0, 0, 0);
ellipse(200, 200, 375, 375);

var answer = floor(random(1, 5));
if (answer === 1) {
    fill(18, 214, 0);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("IT IS", 186, 200);
    text("CERTAIN", 174, 229); 
}
else if (answer === 2) {
    fill(255, 38, 0);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("DON'T ", 181, 200);
    text("COUNT ON IT", 159, 229); 
}
else if (answer === 3) {
    fill(223, 230, 18);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("BETTER NOT", 162, 200);
    text("TELL YOU NOW", 154, 229); 
}
else if (answer === 4) {
    fill(18, 214, 0);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("SIGNS", 181, 200);
    text("POINTS TO YES", 155, 229); 

var bodyX = 200;
var bodyY = 220;
var bodyW = 129;
var bodyH = bodyW/2;
var eyeX1 = bodyX - 16;
var eyeX2 = bodyX + 16;

draw = function() {
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 106); // body
    ellipse(bodyX, bodyY-70, bodyH, 47); // face
    
    // eyes
    fill(255, 255, 255);
    ellipse(bodyX - 16, bodyY - 74, 30, 20);
    ellipse(bodyX + 16, bodyY - 74, 30, 20);
    
    fill(199, 24, 24);
    ellipse(eyeX1, bodyY - 74, 16, 16);
    ellipse(eyeX2, bodyY - 74, 16, 16);
    
    fill(0, 0, 0);
    ellipse(eyeX1, bodyY - 74, 10, 10);
    ellipse(eyeX2, bodyY - 74, 10, 10);
    
    // eye movement
    eyeX1 += 0.75;
    eyeX2 += 0.75;
        
    if(eyeX1 > bodyX - 10) {
        eyeX1 -= 14;
    }
    
    if(eyeX2 > bodyX + 22) {
        eyeX2 -= 14;
    }
    
    // beak
    stroke(255, 0, 0);
    fill(255, 51, 0);
    bezier(bodyX + 3, bodyY - 57, bodyX + 52, bodyY - 67, bodyX - 190, bodyY - 72, bodyX - 150, bodyY - 20);
    
    // left leg
    line(bodyX - 36, bodyY + 44, bodyX - 37, bodyY + 86);  
    line(bodyX - 57, bodyY + 101, bodyX - 37, bodyY + 86);  
    line(bodyX - 20, bodyY + 101, bodyX - 37, bodyY + 86); 
    line(bodyX - 40, bodyY + 101, bodyX - 37, bodyY + 86);  
    
    // right leg
    line(bodyX + 28, bodyY + 47, bodyX + 27, bodyY + 86); 
    line(bodyX + 7, bodyY + 104, bodyX + 27, bodyY + 86);  
    line(bodyX + 44, bodyY + 104, bodyX + 27, bodyY + 86);  
    line(bodyX + 24, bodyY + 104, bodyX + 27, bodyY + 86);  
};

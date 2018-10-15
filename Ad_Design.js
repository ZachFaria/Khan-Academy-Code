var move = 400;

draw = function() {
    background(3, 255, 238);
    fill(185, 35, 235);
    textSize(100);
    text("ROBOTS", move, 95);
    text("ROBOTS", move + 792, 95);
    image(getImage("avatars/robot_male_1"), move, 89, 200, 200);
    image(getImage("avatars/robot_female_2"), move + 600, 89, 200, 200);
    image(getImage("avatars/robot_male_3"), move + 1150, 89, 200, 200);
    fill(255, 0, 0);
    textSize(74);
    text("SO REAL YOU'D THINK THEY'RE FAKE!", move, 357);
    
    // moving across screen
    move -= 2;
    
    if (move < -1379) {
        move = 400;
    }
};

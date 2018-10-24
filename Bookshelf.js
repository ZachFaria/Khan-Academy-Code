/* Program to display an array of
objects on the screen*/

var t;
var book = [
    {
    title: "Beyond Good and Evil / On the Genealogy of Morals",
    author: "By Friedrich Nietzsche",
    stars: 4,
    color: color(random(255), random(255), random(255))
    },
    {
    title: "Meditations on First Philosophy",
    author: "By René Descartes",
    stars: 4,
    color: color(random(255), random(255), random(255))
    },
    {
    title: "Tao Te Ching",
    author: "By Laozi",
    stars: 3,
    color: color(random(255), random(255), random(255))
    },
    {
    title: "The Itty-Bitty Kitty Rescue (Paw Party)",
    author: "By Golden Books",
    stars: 5,
    color: color(random(255), random(255), random(255))
    }
];

for (var e = 0; e < 2; e++) {

    // draw shelf
    fill(173, 117, 33);
    rect(0, 142 + e * 140, width, 10);
    
    // draw books
    if (e === 0) {
        for (var j = 0; j < book.length; j++) {
            fill(book[j].color);
            rect(10 + j * 98, 25 + e * 140, 90, 117);
            fill(255, 255, 255);
            text(book[j].title, 15 + j * 98, 29 + e * 140, 70, 100);
            text(book[j].author, 15 + j * 98, 102 + e * 140, 70, 100);
            
            for (var i = 0; i < book[j].stars; i++) {
                image(getImage("cute/Star"), 13 + i * 16 + 97 * j, 116 + e * 140, 20, 30);
            }
        }
    }
    else if (e === 1) {
        for (var q = book.length - 1; q >= 0; q--) {
            
            if (q === 0) {
                t = 3;
            }
            else if (q === 1) {
                t = 2;
            }
            else if (q === 2) {
                t = 1;
            }
            else if (q === 3) {
                t = 0;
            }
            
            fill(book[q].color);
            
            rect(10 + t * 98, 25 + e * 140, 90, 117);
            fill(255, 255, 255);
            text(book[q].title, 15 + t * 98, 29 + e * 140, 70, 100);
            text(book[q].author, 15 + t * 98, 102 + e * 140, 70, 100);
            
            for (var i = 0; i < book[q].stars; i++) {
                image(getImage("cute/Star"), 13 + i * 16 + 97 * t, 116 + e * 140, 20, 30);
            }
        }
    }
}

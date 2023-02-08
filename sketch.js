/*
Ping Pong Game
You vs Your Device

Creator:
  Saifullah Khan
  saifullahkhan72437@gmail.com
  https://github.com/saifullah72437

Credits:
  Daniel Shiffman(The Coding Train)
  p5-js community

Note: All functions and classes are created in another file called dump.js
*/

function setup() {
    createOnce(); //creates some DOM elements
    initialize(); //initializes some variables
    createPads(); //creates Touch Pads for android users
  }
  
  function draw() {
    if (imgloaded) {
      image(back, 0, 0, width, height); //displays a background image for canvas. Comment this to see an amazing history of the Objects
    } else {
      background(bg); //sets a solid backgropund
    }
    show(); //displays Puck and Puddles
    update(); //Updates the Puck and Puddles
    if (puck.boundaryOut()) {
      if(failloaded){
        fail.play()
      }
      leftScore++; //increases bot's score
  
      leftP.html(leftScore); //Displays that score
      puck = new Puck(); //resets the puck as it is out out our Canvas
    }
    if (puck.boundary()) {
      puck.pos.y -= 2 * puck.speed.y;
      puck.bounce("y"); //Bounces the puck in the y axis if it hits the up or down side of the Canvas
    }
    if (left.hit(puck)) {
      puck.reflectAngle(left); //Calculates the angle of puck after it hits the left Puddle
      if (soundloaded) {
        hitSound.play(); //Plays an annoying sound when it hits
      }
    } else if (right.hit(puck)) {
      puck.reflectAngle(right); //Calculates the angle of puck after it hits the right Puddle
      if (soundloaded) {
        hitSound.play(); //Plays an annoying sound when it hits
      }
    }
  }
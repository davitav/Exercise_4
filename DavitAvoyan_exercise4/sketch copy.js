var theFont;

var input = prompt("Please enter your text");

//var [] fontSizes = new var[input.length()];
var minFontSize = 1;
var maxFontSize = 7;
var newFontSize = 0;


var fontSizes = new Array(input.length);

var coefficient; //variable that we use to map a value for the fontSizes in the array


function preload(){
	
	theFont = loadFont('data/font1.otf');
}

function setup(){
	createCanvas(800, 600);
    background(255);

    stroke(100);
    noFill();
	textFont(theFont);
    
    
     // initializing the fontSizes array where we store the font sizes
    for (var i = 0; i < input.length; i++){
        fontSizes[i] = minFontSize;
  }
	
}

function draw(){
    action();
    //text(input, width/2, height/2);
    
	}


function action(){
    
  //translate(0, 250+distance);

  var x = 0;
  var y = 0;
  var fontSize = 10;
    
  for (var i = 0; i < fontSizes.length; i++) {
      //modify the fontsizes using the y coordinate of the mouse
      coefficient = Math.random();
      fontSizes[i] = map(coefficient, 0, 1, minFontSize, maxFontSize);
  }
    

      

  for (var i = 0; i < input.length; i++) {
    // get fontsize for the actual letter from the modified fontSizes array
    fontSize = fontSizes[i];
    string.fontsize(6)
    var letter = input.charAt(i);
    var letterWidth = fontSize;
  }
    
    if (x+letterWidth > width) {
      // start new line starting from the highest font size possible
      x = 0;
      y += maxFontSize; 
    }
      
    // draw letter
    text(letter, x, y);
    // update x-coordinate for next letter
    x += letterWidth;
    
    //text(input, width/2, height/2);
    text(fontSizes, 300, 400);
    text(fontSize, 150, 200)

	
}



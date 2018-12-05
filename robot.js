// Type "Hello World" then press enter.
var robot = require("robotjs");

// Type "I AM A FELLOW HUMAN AND NOT A ROBOT".
robot.typeString("I AM A FELLOW HUMAN AND NOT A ROBOT\n");


//move mouse across the screen
robot.setMouseDelay(2);
 
var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;
 
for (var x = 0; x < width; x++)
{
    y = height / 2 ;
    robot.moveMouse(x,y);
}
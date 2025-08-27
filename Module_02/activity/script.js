// Ask the user for their first name and store it in Fname
let Fname = prompt("Please enter your first name:");

// Create the constant piValue to store Pi (7 significant digits)
const piValue = 3.1415926;

// Ask the user for their favorite number and store it in myFavNum
let myFavNum = prompt("Please enter your favorite number (this will be used as a radius):");

// Convert the favorite number from text to a number
myFavNum = Number(myFavNum);

// Calculate the area of a circle using the favorite number as the radius
// Formula: A = π r^2
let myArea = piValue * (myFavNum * myFavNum);

// Build a message that includes each variable and a description
let message = "Hello " + Fname + ", you entered " + myFavNum +
              " as your favorite number. If that was the radius of a circle, " +
              "the circle’s area would be " + myArea.toFixed(6) + ".";

// Display the message on the web page
document.getElementById("output").innerHTML = message;

// Also log values to the console
console.log("Name (Fname):", Fname);
console.log("Pi (piValue):", piValue);
console.log("Favorite number (myFavNum):", myFavNum);
console.log("Area (myArea):", myArea);

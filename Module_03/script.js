// Helper function to write messages to the page
function writeMessage(msg) {
  document.getElementById("output").innerHTML += msg + "<br>";
}

// 1) For loop from 0 to 10, check odd/even
for (let count = 0; count <= 10; count++) {
  if (count % 2 === 0) {
    writeMessage("Count " + count + " is even");
  } else {
    writeMessage("Count " + count + " is odd");
  }
}

writeMessage("<br>"); // blank line

// 2) Do While loop with user input
let myNum = prompt("Please enter a number between 5 and 20:");
myNum = Number(myNum);  // convert input to number

let counter = 1;
do {
  writeMessage("Counter is " + counter);
  counter++;
} while (counter <= myNum);

writeMessage("<br>"); // blank line

// 3) Arrays with foreach() and join()
let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

// Display subjects using foreach
writeMessage("Subjects (using foreach):");
subjects.forEach(function(subject) {
  writeMessage(subject);
});

writeMessage("<br>");

// Display subjects in one line, separated by commas
writeMessage("Subjects (comma-separated): " + subjects.join(", "));

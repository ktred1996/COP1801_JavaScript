/* Helper to write messages to the page */

function writeMessage(msg) {
  document.getElementById("output").innerHTML += msg + "<br>";
}

/* Constructor function (replaces literal object)
   Properties match Module 05 (myDogConst), plus method
   myGreeting must say whether the dog can talk */
   
function Dog(name, showTitle, breed, role, setting, mySound, canTalk) {
  this.name = name;
  this.showTitle = showTitle;
  this.breed = breed;
  this.role = role;
  this.setting = setting;
  this.mySound = mySound;
  this.canTalk = canTalk;

  // myGreeting: include conditional "I can talk!" or "I cannot talk."
  this.myGreeting = function () {
    let talkText = this.canTalk ? "I can talk!" : "I cannot talk.";
    return "Hello, my name is " + this.name + ". I starred in the TV show " +
           this.showTitle + ". My character was a " + this.breed + ". I was a " +
           this.role + " in " + this.setting + ". When I bark " + this.mySound +
           " " + talkText;
  };
}

/*  Create multiple dog objects (using constructor)
   - Keep Scooby-Doo from last module
   - Add a second dog from the Wikipedia list  */
   
let scooby = new Dog(
  "Scooby-Doo",
  "Scooby-Doo, Where Are You!",
  "Great Dane",
  "member of Mystery Inc.",
  "a cartoon where a group of friends solves spooky mysteries",
  "Ruh-roh! I’m not scary—just hungry.",
  true // Scooby talks
);

let brian = new Dog(
  "Brian",
  "Family Guy",
  "Labrador Retriever",
  "family pet and friend",
  "an animated sitcom set in Quahog",
  "I’m more into witty remarks than barking.",
  true // Brian talks
);

/* Call myGreeting to display if each dog can talk
   (instruction: call the method to show talk status) */
   
writeMessage("<strong>Greetings:</strong>");
writeMessage(scooby.myGreeting());
writeMessage(brian.myGreeting());
writeMessage("<br>");

/* Use a for...in loop to display properties. 
   I'll show both dogs’ properties so it’s obvious 
   we used for...in. Skip function properties (methods). */
   
function showPropertiesWithForIn(dogObj, label) {
  writeMessage("<strong>Properties for " + label + ":</strong>");
  for (let prop in dogObj) {
    if (typeof dogObj[prop] !== "function") {
      writeMessage(prop + ": " + dogObj[prop]);
    }
  }
  writeMessage("<br>");
}

showPropertiesWithForIn(scooby, scooby.name);
showPropertiesWithForIn(brian, brian.name);

/* Let the user select a dog by name (prompt)
   If found, display all info and use myGreeting()
   If not found, show an error message */
   
let dogsByName = {
  "scooby-doo": scooby,
  "brian": brian
};

// Show available choices before the prompt
writeMessage("<strong>Available dogs:</strong> Scooby-Doo, Brian");
let choice = prompt("Type the dog's name (Scooby-Doo or Brian):");

if (choice) {
  let key = choice.trim().toLowerCase();
  let selected = dogsByName[key];

  if (selected) {
    // Display selected dog’s properties with for...in
    showPropertiesWithForIn(selected, selected.name);

    // Display the greeting (includes canTalk message)
    writeMessage("<strong>Greeting for " + selected.name + ":</strong>");
    writeMessage(selected.myGreeting());
  } else {
    writeMessage("Error: The dog \"" + choice + "\" is not in the list.");
  }
} else {
  writeMessage("No selection made.");
}
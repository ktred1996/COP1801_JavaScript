/* Helper to write to the page */
function writeMessage(msg) {
  document.getElementById("output").innerHTML += msg + "<br>";
}

/* Object literal (myDog) – Scooby-Doo */
let myDog = {
  name: "Scooby-Doo",
  showTitle: "Scooby-Doo, Where Are You!",
  breed: "Great Dane",
  role: "member of Mystery Inc.",
  setting: "a cartoon where a group of friends solves spooky mysteries",
  mySound: "Ruh-roh! I’m not scary, just hungry."
};

// Display a sentence using every property
writeMessage(
  "Hello, my name is " + myDog.name + ", when I bark " + myDog.mySound +
  " I starred in the TV show " + myDog.showTitle + ". My character was a " +
  myDog.breed + ". I was a " + myDog.role + " in " + myDog.setting + "."
);

writeMessage("<br>");

/* Constructor + method (myDogConst) */
function Dog(name, showTitle, breed, role, setting, mySound, canTalk) {
  this.name = name;
  this.showTitle = showTitle;
  this.breed = breed;
  this.role = role;
  this.setting = setting;
  this.mySound = mySound;
  this.canTalk = canTalk;

  this.myGreeting = function () {
    let talkText = this.canTalk ? "I can talk." : "I cannot talk.";
    return "Hello, my name is " + this.name + ". I starred in the TV show " +
           this.showTitle + ". My character was a " + this.breed + ". I was a " +
           this.role + " in " + this.setting + ". When I bark " + this.mySound +
           " " + talkText;
  };
}

// Build Scooby-Doo using the constructor
let myDogConst = new Dog(
  "Scooby-Doo",
  "Scooby-Doo, Where Are You!",
  "Great Dane",
  "member of Mystery Inc.",
  "a cartoon where a group of friends solves spooky mysteries",
  "Ruh-roh! I’m not scary, just hungry.",
  true // Scooby talks
);

// Call the method and show the message
writeMessage(myDogConst.myGreeting());

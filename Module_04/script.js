// Helper function to write to the page
function writeMessage(msg) {
  document.getElementById("output").innerHTML += msg + "<br>";
}

// Function to verify service quality
function verifyQuality(quality) {
  quality = quality.toLowerCase();
  if (quality === "great" || quality === "ok" || quality === "poor") {
    return quality;
  } else {
    writeMessage("Invalid service quality entered. Please refresh and try again.");
    return null;
  }
}

// Function to verify service amount
function verifyAmount(amount) {
  if (amount >= 5 && amount <= 500) {
    return amount;
  } else {
    writeMessage("Invalid service amount. Must be between $5.00 and $500.00.");
    return null;
  }
}

// Function to calculate tip
function calculateTip(amount, quality) {
  let tipPercent = 0;

  if (quality === "great") {
    tipPercent = 0.20;
  } else if (quality === "ok") {
    tipPercent = 0.15;
  } else if (quality === "poor") {
    tipPercent = 0.10;
  }

  return amount * tipPercent;
}

// ------------------- Main Program -------------------

// Prompt user for inputs
let serviceAmount = prompt("Enter the dollar amount of the service:");
serviceAmount = Number(serviceAmount);

let serviceQuality = prompt("Was the service quality great, ok, or poor?");

// Validate inputs
let validAmount = verifyAmount(serviceAmount);
let validQuality = verifyQuality(serviceQuality);

// If both are valid, calculate and display tip
if (validAmount !== null && validQuality !== null) {
  let tip = calculateTip(validAmount, validQuality);

  writeMessage("Service amount: $" + validAmount.toFixed(2));
  writeMessage("Service quality: " + validQuality);
  writeMessage("Recommended tip: $" + tip.toFixed(2));
}

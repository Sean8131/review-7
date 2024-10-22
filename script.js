// Access 'alert-button' from the DOM.
const alertButton = document.getElementById("alert-button");

// Add listener to 'alert-button' so browser runs alert when user presses the alert button.
alertButton.addEventListener("click", function () {
  alert("Stop clicking the button");
});

// Create vaiables to access the time from the machine.
const time = new Date();
const hours = time.getHours();

// Add a zero to the start of the minutes string
mins = time.getMinutes().toString().padStart(2, "0");

// Access time display from the DOM.
let timeDisplay = document.getElementById("show-time");

// Display the current time.
timeDisplay.innerText = `The time is ${hours}:${mins}`;

// Access log button from the DOM.
const logButton = document.getElementById("log-button");

// Log time to the console when user clicks the log button.
logButton.addEventListener("click", function () {
  console.log(timeDisplay.innerText);
});

// Access blue button from the DOM.
const blueButton = document.getElementById("blue-button");

// Access white button from the DOM.
const whiteButton = document.getElementById("white-button");

// Bring elements into JS so their style can be changed.
const alertChangeBlue = document.getElementById("alert-button");
const logChangeBlue = document.getElementById("log-button");
const blueChangeBlue = document.getElementById("blue-button");
const whiteChangeBlue = document.getElementById("white-button");

// When the user clicks the blue button, all the buttons turn blue.
// blueButton.addEventListener("click", function () {
//   alertChangeBlue.style.backgroundColor = "blue";
//   logChangeBlue.style.backgroundColor = "blue";
//   blueChangeBlue.style.backgroundColor = "blue";
//   whiteChangeBlue.style.backgroundColor = "blue";
// });

// Writing the above code using an array and an arrow function.

const buttons = [
  document.getElementById("alert-button"),
  document.getElementById("log-button"),
  document.getElementById("blue-button"),
  document.getElementById("white-button"),
];

blueButton.addEventListener("click", function () {
    buttons.forEach(button => button.style.backgroundColor = "blue");
    buttons.forEach(button => button.style.color = "white");
});

// When the user clicks the white button, all the buttons turn white.
whiteButton.addEventListener("click", function () {
  alertChangeBlue.style.backgroundColor = "white";
  logChangeBlue.style.backgroundColor = "white";
  blueChangeBlue.style.backgroundColor = "white";
  whiteChangeBlue.style.backgroundColor = "white";
});

// Access 'alert-button' from the DOM.
const alertButton = document.getElementById("alert-button");

// Add listener to 'alert-button' so browser runs alert when user presses the alert button.
alertButton.addEventListener("click", function () {
  alert("You just clicked the alert button");
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

// Bring elements into JS so their style can be changed. Commented out because I created an array below.

// const alertChangeBlue = document.getElementById("alert-button");
// const logChangeBlue = document.getElementById("log-button");
// const blueChangeBlue = document.getElementById("blue-button");
// const whiteChangeBlue = document.getElementById("white-button");

// Created buttons array to bring elements into JS and enable iteration over buttons.
const buttons = [
  document.getElementById("alert-button"),
  document.getElementById("log-button"),
  document.getElementById("blue-button"),
  document.getElementById("white-button"),
];

// When the user clicks the blue button, all the buttons turn blue and the text turns white.

blueButton.addEventListener("click", function () {
  // How I had refactored the forEach method as an arrow function (best option).
  buttons.forEach((button) => {
    button.style.backgroundColor = "blue";
    button.style.color = "white";
  });
  // How I refactored the forEach method into an anonymous function with Josh (2nd best option).
  buttons.forEach(function (button) {
    button.style.backgroundColor = "blue";
    button.style.color = "white";
  });
  // How I refactored the forEach method back into an arrow function with Josh (3rd best option).
  buttons.forEach((button) => {
    button.style.backgroundColor = "blue";
    button.style.color = "white";
  });
});

// When the user clicks the white button, all the buttons turn white and the text turns black.
whiteButton.addEventListener("click", function () {

  // Initial refactoring using forEach method.
  buttons.forEach((button) => (button.style.backgroundColor = "white"));
  buttons.forEach((button) => (button.style = "black"));
  // Second refactoring using forEach method.
  buttons.forEach((button) => {
    button.style.backgroundColor = "white";
    button.style = "black"
  })
});

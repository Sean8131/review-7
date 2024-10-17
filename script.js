const alertButton = document.getElementById('alert-button');

alertButton.addEventListener('click', function() {
    alert("Stop clicking the button");
});

const time = new Date();
const hours = time.getHours();
const mins = time.getMinutes();

let timeDisplay = document.getElementById('show-time');

timeDisplay.innerText = `The time is ${hours}:${mins}`;

const logButton = document.getElementById('log-button');

logButton.addEventListener('click', function() {
    console.log(timeDisplay.innerText);
});

const blueButton = document.getElementById('blue-button');

const alertChangeBlue = document.getElementById('alert-button');
const logChangeBlue = document.getElementById('log-button');
const blueChangeBlue = document.getElementById('blue-button');
const whiteChangeBlue = document.getElementById('white-button');


blueButton.addEventListener('click', function() {
    alertChangeBlue.style.backgroundColor = 'blue';
    logChangeBlue.style.backgroundColor = 'blue';
    blueChangeBlue.style.backgroundColor = 'blue';
    whiteChangeBlue.style.backgroundColor = 'blue';
});
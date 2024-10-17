const alertButton = document.getElementById('alert-button');

alertButton.addEventListener('click', function() {
    alert("Stop clicking the button");
});

const time = new Date();
const hours = time.getHours();
const mins = time.getMinutes();

let timeDisplay = document.getElementById('show-time');

timeDisplay.innerText = `The time is ${hours}:${mins}`;
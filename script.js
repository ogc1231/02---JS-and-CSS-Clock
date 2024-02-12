const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
  const currentDate = new Date();

  const seconds = currentDate.getSeconds();
  const minutes = currentDate.getMinutes();
  const hours = currentDate.getHours();

  const secDegrees = (seconds / 60) * 360 + 90;
  const minDegrees = (minutes / 60) * 360 + 90;
  const hourDegrees = (hours / 12) * 360 + 90;

  secHand.style.transform = `rotate(${secDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  if (seconds === 0) {
    secHand.style.transitionDuration = "0s";
    minHand.style.transitionDuration = "0s";
    hourHand.style.transitionDuration = "0s";
  } else {
    secHand.style.transitionDuration = "0.05s";
    minHand.style.transitionDuration = "0.05s";
    hourHand.style.transitionDuration = "0.05s";
  }
}

setInterval(setTime, 1000);

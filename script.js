const secHand = document.getElementsByClassName("second-hand");
const minHand = document.getElementsByClassName("min-hand");
const hourHand = document.getElementsByClassName("hour-hand");

// const currentDate = new Date();
// const seconds = currentDate.getSeconds();
// const minutes = currentDate.getMinutes();
// const hours = currentDate.getHours();

function setTime() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds();
  const secDegrees = (seconds / 60) * 360 + 90;
  console.log(seconds);
}

setInterval(setTime, 1000);

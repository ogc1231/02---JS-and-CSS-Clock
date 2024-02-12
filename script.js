const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

// const currentDate = new Date();
// const seconds = currentDate.getSeconds();
// const minutes = currentDate.getMinutes();
// const hours = currentDate.getHours();

function setTime() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds();
  const minutes = currentDate.getMinutes();
  const secDegrees = (seconds / 60) * 360 + 90;
  const minDegrees = (minutes / 60) * 360 + 90;

  secHand.style.transform = `rotate(${secDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  console.log(seconds);
}

setInterval(setTime, 1000);

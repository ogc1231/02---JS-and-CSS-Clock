const secHand = document.getElementsByClassName("second-hand");
const minHand = document.getElementsByClassName("min-hand");
const hourHand = document.getElementsByClassName("hour-hand");

const currentDate = new Date();
const seconds = currentDate.getSeconds();
const minutes = currentDate.getMinutes();
const hours = currentDate.getHours();

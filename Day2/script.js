// Selecting the DOM element with the class
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const updateHand = (handElement, value, totalSegements) => {
  const degrees = (value / totalSegements) * 360 + 90;
  handElement.style.transform = `rotate(${degrees}deg)`;
};

// Function to update the clock's position
function setDate() {
  // Creating a new Date object to get the current time
  const now = new Date();

  // Getting the current time slot from the Date object
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  updateHand(secondHand, seconds, 60);
  updateHand(minHand, minutes, 60);
  updateHand(hourHand, hours, 12);

  // Outputting the current position to the console for debugging purposes
  console.log(seconds);
}

// Calling the setDate function every 1000 milliseconds (1 second) to update the clock
setInterval(setDate, 1000);

setDate();

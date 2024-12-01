// Set the date you're counting down to (27th January 2025)
const targetDate = new Date("2025-01-27T00:00:00").getTime();

// Update the countdown every 1 second
const interval = setInterval(function() {
  // Get the current time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = targetDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "The event has arrived!";
  }
}, 1000);

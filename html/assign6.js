
function countdownToDiwali(){
    // Diwali date and time
    const diwaliDate = new Date("2023-11-12T00:00:00");
  
    // Calculate the time remaining in milliseconds
    const currentTime = new Date();
    const timeRemaining = diwaliDate - currentTime;
  
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60) / 1000));
  
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining.`;
  }
  
  // Calculate the countdown to Diwali
  countdownToDiwali();
  
  // Update the countdown every second
  setInterval(countdownToDiwali, 1000);
  
  
  
  
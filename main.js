(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 25);
  
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = targetDate - now;
      const days = Math.floor(difference / day);
      const hours = Math.floor((difference % day) / hour);
      const minutes = Math.floor((difference % hour) / minute);
      const seconds = Math.floor((difference % minute) / second);
  
      return { days, hours, minutes, seconds };
    };
  
    const updateCountdown = () => {
      const timeRemaining = calculateTimeRemaining();
  
      document.getElementById("days").innerText = timeRemaining.days;
      document.getElementById("hours").innerText = timeRemaining.hours;
      document.getElementById("minutes").innerText = timeRemaining.minutes;
      document.getElementById("seconds").innerText = timeRemaining.seconds;
    };
  
    const intervalId = setInterval(updateCountdown, 1000);
  
    // Optional: Uncomment this block if you want to stop the countdown after 20 days
    /*
    setTimeout(() => {
      clearInterval(intervalId);
      document.getElementById("countdown").innerHTML = "<p>Countdown expired!</p>";
    }, 20 * day);
    */
  })();
  
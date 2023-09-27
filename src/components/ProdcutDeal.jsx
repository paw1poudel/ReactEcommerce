import React, { useEffect, useState } from 'react';

function ProductDeal() {
  const calculateTimeLeft = () => {
    const targetDate = new Date(); // Get the current date and time
    targetDate.setDate(targetDate.getDate() + 5); // Set the target date to 5 days from now
    targetDate.setHours(12, 5, 12); // Set the target time to 12:05:12 PM

    const currentDate = new Date();
    const difference = targetDate - currentDate;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (Object.keys(newTimeLeft).length === 0) {
        clearInterval(timerInterval); // Stop the timer when the target date has passed
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearInterval(timerInterval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="deal-of-day">
      <div className="div-container">
        <div className="deal-left-part">
          <h2>Deal Of The Day</h2>
          <p className='deal-left-part-title'>We are providing the best deal of the day for our lucky customer once in a week. Hurry up! This chance comes only once.</p>
          <div className="timer">
            <div className="box1">
              <h3>{timeLeft.days || 0}</h3>
              <p>Days</p>
            </div>
            <div className="box2">
              <h3>{timeLeft.hours || 0}</h3>
              <p>Hours</p>
            </div>
            <div className="box3">
              <h3>{timeLeft.minutes || 0}</h3>
              <p>Minutes</p>
            </div>
            <div className="box4">
              <h3>{timeLeft.seconds || 0}</h3>
              <p>Seconds</p>
            </div>
          </div>
          <a href="#products">SHOP NOW</a>
        </div>
        <div className="deal-right-part">
          <img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fashion-product" />
        </div>
      </div>
    </div>
  );
}

export default ProductDeal;

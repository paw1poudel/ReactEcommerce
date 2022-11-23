import React, { useEffect, useState } from 'react'

function ProdcutDeal() {
    const calculateTimeLeft = () => {
        const difference = new Date(`11/${new Date().getDate()+5}/2022, 12:${new Date().getMinutes()+5}:12 PM`) -new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
     hours: Math.floor((difference%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)),
     minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
     seconds: Math.floor((difference % (1000 * 60)) / 1000)
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });



    return (
        <div className="deal-of-day">
            <div className="div-container">
                <div className="deal-left-part">
                    <h2>Deal Of The Day</h2>
                    <p className='deal-left-part-title'>We are providing the best deal of the day for our lucky customer once in a week. Hurry up! This chance come only once </p>
                    <div className="timer">
                    
                        <div className="box1">
                            <h3>{timeLeft.days||0}</h3>
                            <p>Days</p>
                        </div>
                        <div className="box2">
                            <h3>{timeLeft.hours ||0}</h3>
                            <p>Hours</p>
                        </div>
                        <div className="box3">
                            <h3>{timeLeft.minutes||0}</h3>
                            <p>Minutes</p>
                        </div>
                        <div className="box4">
                            <h3>{timeLeft.seconds||0}</h3>
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
    )
}

export default ProdcutDeal
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";

function About() {
  const data = [
    {
      title: "Try and Buy for Real",
      description: "Excellent service of Try and Buy option unheard of this amazing new facility to try 3 mobiles at a time at our residence.",
      name: "Vishal Reddy"
    },
    {
      title: "Nice packing of products",
      description: "tryitfirst Quality of items are good. No damaged items or damaged packing. Must and should use the app thank you for your service",
      name: "Bhanu Prasad"
    },
    {

      title: "Superb service",
      description: "This app is superb. Go for it. They'll always serve you better. No delays must go with try and buy option i thoughly enjoyed . thank you tryitfirst",
      name: "Prudhiv Kumar"

    },
    {
      title: "Great platform",
      description: "Great platform to buy almost every thing with variety of choice, product delivery is also in time. Overall good. try and buy is the best one to utilise",
      name: "Naresh Kumar"
    },
    {
      title: "Impressed",
      description: "I like this app, app is very user friendly. I would like to say delivery should be fast in urgnet need, there should be a option available and try and buy option is best oe for this app.",
      name: "Vinay vadapally"
    },


  ]
  return (<section id="about" className='about'>
    <div className="div-container">
      <div className="title">
        <h2>What People Say About Us </h2>
        <p>We are providing services since 2018. And we have meet With lots of people,

          Let's aee ahat they say about us </p>
      </div>

      <Swiper
        rewind={true}
        navigation={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
          
        }}
        
        modules={[Pagination,Navigation]}
        className="mySwiper "
      >
        {
          data.map((elem, id) => {
            return <SwiperSlide key={id}>
              <div className='people-says'>
                <h3>{elem.title}</h3>
                <p>{elem.description}</p>
                <h5 >{elem.name}
                <br />
                <small>
                -----Customer-----
                  </small>
                </h5>
                
              </div>
            </SwiperSlide>
          })
        }

      </Swiper>
    </div>
  </section>
  )
}

export default About
import React from 'react'
import './HomeReview.css'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function HomeReview() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const reviewData = [
    {
      name: 'Aarav Kumar',
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
      review: 'Absolutely delighted with the Indian wedding photoshoot! The attention to detail and the ability to capture every emotion is truly commendable. Aarav, the photographer, has a keen eye for the perfect shot and made our special day even more memorable.',
    },
    {
      name: 'Aditi Patel',
      img: 'https://randomuser.me/api/portraits/women/2.jpg',
      review: 'Aditi is an amazing portrait photographer! She knows how to bring out the best in every individual. The portfolio shoot was a breeze, and the results were beyond expectations. Highly recommend for anyone looking for a professional and friendly photographer.',
    },
    {
      name: 'Rahul Singh',
      img: 'https://randomuser.me/api/portraits/men/3.jpg',
      review: 'Exceptional work by Rahul during our portfolio shoot. His creativity and professionalism were evident throughout the session. The Indian touch he adds to his photography is what sets him apart. Very satisfied with the final results!',
    },
    {
      name: 'Priya Verma',
      img: 'https://randomuser.me/api/portraits/women/4.jpg',
      review: 'Had an outstanding experience with Priya for our family photoshoot. She has a natural talent for capturing candid moments. The warmth and joy in her photographs truly reflect the essence of our family. Highly recommended for capturing precious family memories.',
    },
    {
      name: 'Vikram Sharma',
      img: 'https://randomuser.me/api/portraits/men/5.jpg',
      review: 'Vikram is a skilled photographer with an eye for detail. The Indian wedding photoshoot he did for us was nothing short of spectacular. The colors, emotions, and traditions were beautifully captured. Truly grateful for the stunning memories he created.',
    },
    {
      name: 'Ananya Das',
      img: 'https://randomuser.me/api/portraits/women/6.jpg',
      review: 'Ananya has a unique talent for storytelling through her lens. The portrait session was a delightful experience, and the results were breathtaking. She knows how to make every frame tell a story. Will definitely be returning for more photo sessions!',
    },
    {
      name: 'Raj Kapoor',
      img: 'https://randomuser.me/api/portraits/men/7.jpg',
      review: 'Rajs creativity knows no bounds. His expertise in capturing moments is unparalleled. We hired him for our Indian wedding photoshoot, and the results were magical. The attention to cultural details and emotions was truly commendable. Highly recommend!',
    },
    {
      name: 'Kavita Mishra',
      img: 'https://randomuser.me/api/portraits/women/8.jpg',
      review: 'Kavita is a talented photographer who made our pre-wedding photoshoot a memorable experience. Her friendly demeanor and creative ideas resulted in stunning pictures. She perfectly captured the chemistry between us. Couldn\'t be happier!',
    },
    {
      name: 'Sanjay Gupta',
      img: 'https://randomuser.me/api/portraits/men/9.jpg',
      review: 'Sanjay has a gift for capturing emotions and turning them into timeless memories. The Indian portfolio shoot he did for me exceeded all expectations. His attention to detail and dedication to perfection truly shine through in his work.',
    },
    {
      name: 'Neha Reddy',
      img: 'https://randomuser.me/api/portraits/women/10.jpg',
      review: 'Nehas expertise in portrait photography is outstanding. The photoshoot experience was enjoyable, and the results were phenomenal. She knows how to make you feel comfortable in front of the camera, resulting in natural and stunning photographs. Highly recommended!',
    },
  ];
  
      
  return (
    <div className='section'>
      <div className='container'>
        <div className='reviewBox'>
        <Slider {...settings}>
          {
            reviewData.map((data) => (
              <div className='box'>
                <div className='reviewimg'>
                  <img src={data.img} alt=""/>
                </div>
                <div className=' reviewData'>
                  <h2>{data.name}</h2>
                  <p>{data.review}</p>
                  </div>
                </div>
            ))
            }
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default HomeReview
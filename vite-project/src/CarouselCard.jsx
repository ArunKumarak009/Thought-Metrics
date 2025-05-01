


import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slidesData = [
  {
    imageUrl: '/images/carosel3.jpg',
    title: 'Title 1',
    description: 'A Fresh Approach to Market Research.',
  },
  {
    imageUrl: '/images/carosel2.png',
    title: 'Title 2',
    description: 'From Data to Decisions: Tailored research as unique as your brand.',
  },
  {
    imageUrl: '/images/carosel1.png',
    title: 'Title 3',
    description: "Your customers don't fit in a box, and neither does our approach.",
  },
];

const CarouselCard = () => {
  const [delayedTextIndex, setDelayedTextIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;

    // Immediately hide text
    setIsTextVisible(false);

    // After delay, show new text
    setTimeout(() => {
      setDelayedTextIndex(newIndex);
      setIsTextVisible(true);
    }, 1000); // Wait for image fade to complete
  };

  return (
    <div className="w-full  bg-[#FBEEEE] py-10">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        speed={1500}
        allowTouchMove={false}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => setDelayedTextIndex(swiper.realIndex)} // Initial text
        className="w-[1000px] mx-auto"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex gap-10 items-center justify-between px-4">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-[400px] h-[500px]"
              />
              <p
                className={`text-[48px] font-bold text-[#333] max-w-[500px] leading-tight transition-opacity duration-700 ease-in-out ${
                  index === delayedTextIndex && isTextVisible
                    ? 'opacity-100'
                    : 'opacity-0'
                }`}
              >
                {slide.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots */}
      <style jsx>{`
        .swiper-pagination {
          margin-top: 60px;
          position: relative !important;
          text-align: center;
          pointer-events: none;
        }
        .swiper-pagination-bullet {
          width: 20px;
          height: 20px;
          background-color: #c1c1c1;
          opacity: 1;
          margin: 0 10px;
        }
        .swiper-pagination-bullet-active {
          background-color: #e8505e;
        }
      `}</style>
    </div>
  );
};

export default CarouselCard;

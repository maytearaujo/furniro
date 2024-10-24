// import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import axios from 'axios';
import * as S from './CarouselStyles'
import 'swiper/css';


const Carousel = () => {

  const furnitures = [
    {
      "id": "1",
      "imgUrl": "/assets/img/home/BrowseTheRange/image-1.png"
    },
    {
      "id": "2",
      "imgUrl": "/assets/img/home/BrowseTheRange/image-2.png"
    },
    {
      "id": "3",
      "imgUrl": "/assets/img/home/BrowseTheRange/image-3.png"
    },
    {
      "id": "4",
      "imgUrl": "/assets/img/home/BrowseTheRange/image-4.png"
    },
    {
      "id": "5",
      "imgUrl": "/assets/img/home/BrowseTheRange/image-5.png"
    },
    {
      "id": "6",
      "imgUrl": "/assets/img/home/BrowseTheRange/image-6.png"
    }
  ]

  return (
    <div>
      <h2>1º Carousel</h2>
      <S.SlideItem>
        <Swiper
         spaceBetween={50}
         slidesPerView={3.8}
         draggable={true}
         breakpoints={{
           1600: { slidesPerView: 3.8 },
           1400: { slidesPerView: 3.25 },
           1200: { slidesPerView: 3 },
           1024: { slidesPerView: 2.5 },
           768: { slidesPerView: 2, spaceBetween: 30 },
           576: { slidesPerView: 1.5, spaceBetween: 20 },
           375: { slidesPerView: 1.25, spaceBetween: 15 },
           320: { slidesPerView: 1, spaceBetween: 10 },
         }}
        >
          {furnitures.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.imgUrl}
                alt="Furniture"
              />
            </SwiperSlide>
          ))

          }
        </Swiper>
      </S.SlideItem>
    </div>
  )
}

export default Carousel

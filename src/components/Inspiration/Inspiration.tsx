import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

import * as S from './InspirationStyles'
import 'swiper/css';

const Inspiration = () => {
  // const api = 'https://run.mocky.io/v3/1a94c050-c3de-46e1-955f-49f240af046c'; 
  const api = 'http://localhost:3000/Inspiration'

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(api);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts()
  }, [])


  return (
 
      <S.MainInspiration>
        <S.TitleInspiration>
          <h2>50+Beautiful Rooms Inspiration</h2>
          <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        </S.TitleInspiration>

        <img src="https://myfurniros.s3.us-west-1.amazonaws.com/img/home/Beautiful-rooms-inspiration/image-1.png" alt="Inspiration" />

        <S.SlideItem>
          <Swiper
            // spaceBetween={50}
            slidesPerView={1}
          // draggable={true}
          // breakpoints={{
          //   1600: { slidesPerView: 3.8 },
          //   1400: { slidesPerView: 3.25 },
          //   1200: { slidesPerView: 3 },
          //   1024: { slidesPerView: 2.5 },
          //   768: { slidesPerView: 2, spaceBetween: 30 },
          //   576: { slidesPerView: 1.5, spaceBetween: 20 },
          //   375: { slidesPerView: 1.25, spaceBetween: 15 },
          //   320: { slidesPerView: 1, spaceBetween: 10 },
          // }}
          >
            {products.map((item) => (
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
    </S.MainInspiration>        
  )
}

export default Inspiration
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

import * as S from './OurProductsStyles'
import 'swiper/css';

const OurProducts = () => {
  const api = 'https://run.mocky.io/v3/81cd49ec-d8ab-48d0-af9f-85e826ada56c'; //api com vários grupos de produtos

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(api);
        setAllProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchAllProducts()
  }, [])

  return (
    <S.MainOurProducts>
      <h2>Our Products</h2>

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
                   {allProducts.map((item) => (
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
    </S.MainOurProducts>
  )
}

export default OurProducts



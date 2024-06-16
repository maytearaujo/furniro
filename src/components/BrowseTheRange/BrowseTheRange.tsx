import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

import * as S from './BrowseTheRangeStyles'
import 'swiper/css';


const BrowseTheRange = () => {
  // const api = 'https://run.mocky.io/v3/a4bcc170-742a-4e70-a563-0775266c9e38'; está funcionando
  const api = 'https://run.mocky.io/v3/a4bcc170-742a-4e70-a563-0775266c9e38'; //api com vários grupos de produtos

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(api);
        setAllProducts(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchAllProducts()
  }, [])

  return (
    <S.MainBrowseTheRange>
      <h2>Browse The Range</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
    </S.MainBrowseTheRange>
  )
}

export default BrowseTheRange

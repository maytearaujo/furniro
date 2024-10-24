import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

import * as S from './BrowseTheRangeStyles'
import 'swiper/css';


const BrowseTheRange = () => {
  // const api = 'https://run.mocky.io/v3/a4bcc170-742a-4e70-a563-0775266c9e38';
const api = 'https://furniro-lake.vercel.app/BrowseTheRange';
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
    <S.MainBrowseTheRange>
      <h2>Browse The Range</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <S.SlideItem>
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          draggable={true}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.imgUrl}
                alt="Furniture"
              />
              <p>{item.rooms}</p>
            </SwiperSlide>
          ))

          }
        </Swiper>
      </S.SlideItem>
    </S.MainBrowseTheRange>
  )
}

export default BrowseTheRange

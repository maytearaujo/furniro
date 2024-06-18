import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import 'swiper/css';
import * as S from './FuniroFurnitureStyles'

const FuniroFurniture = () => {
  // const api = 'https://run.mocky.io/v3/a8188661-b7a1-43d5-ab77-12cadb8f9976'
  const api = 'http://localhost:3000/FuniroFurniture'

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
    <S.FuniroFurniture>
      <h2>Funiro Furniture</h2>

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
    </S.FuniroFurniture>
  )
}

export default FuniroFurniture

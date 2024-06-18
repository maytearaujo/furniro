
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

import 'swiper/css';
import * as S from './BrowseTheRangeStyles'

const BrowseTheRange = () => {

  // const api = 'https://run.mocky.io/v3/a4bcc170-742a-4e70-a563-0775266c9e38';
  const api = 'http://localhost:3000/BrowseTheRange'

  // type Furniture = {
  //   id: string;
  //   imgUrl: string;
  // };

  const [products, setProducts] = useState([]);
  // const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(api);
        setProducts(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchAllProducts();
  }, []);



  return (
    <>
      <S.MainBrowseTheRange>
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
 
        <S.SlideItem>
          <Swiper
            spaceBetween={50}
            slidesPerView={2.5}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {products.length > 0 ? (
              products.map((item) => (
                <SwiperSlide key={item.id}>

                  <img
                    src={item.imgUrl}
                    alt="Furniture"
                  />
                </SwiperSlide>
              ))
            ) : (
              <div>
                <span>Nenhuma consulta encontrada</span>
              </div>
            )}
          </Swiper>
        </S.SlideItem>
      </S.MainBrowseTheRange>
    </>
  )
}

export default BrowseTheRange


import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

import 'swiper/css';

import * as S from './BrowseTheRange/BrowseTheRangeStyles';

const BrowseTheRange = () => {
  // const api = 'https://run.mocky.io/v3/8d1f6480-7ae1-4135-8e50-e572d7b0778e/';
  const api = 'http://localhost:3000/BrowseTheRange'

  type Furniture = {
    id: string;
    imgUrl: string;
  };

  const [furnitures, setFurnitures] = useState<Furniture[]>([]);

  useEffect(() => {
    const fetchFurnitures = async () => {
      try {
        const response = await axios.get(`${api}`);
        // Mapear os dados recebidos para garantir que id e imgUrl são strings
        const mappedData = response.data.map((item: string) => ({

        }));
        setFurnitures(mappedData);
        console.log('Fetched furnitures:', mappedData); // Verificar os dados mapeados
      } catch (error) {
        console.error('Error fetching furnitures:', error);
      }
    };

    fetchFurnitures();
  }, []);

  useEffect(() => {
    console.log('furnitures state:', furnitures); // Log do estado atual de furnitures
  }, [furnitures]);

  return (
    <S.MainBrowseTheRange>
      <h2>Browse The Range</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

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
        {furnitures.length > 0 ? (
          furnitures.map((item) => (
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
    </S.MainBrowseTheRange>
  );
};

export default BrowseTheRange;


import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

import 'swiper/css';

import * as S from './BrowseTheRangeStyles'

const BrowseTheRange = () => {

  const api = 'https://run.mocky.io/v3/43c27de1-cc9b-4293-8cfd-6497edcd8f43/BrowseTheRange';

  type Furniture = {
    id: string;
    imgUrl: string;
  };

  const [furnitures, setFurnitures] = useState<Furniture[]>([]);
  // const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    const fetchFurnitures = async () => {
      try {
        const response = await axios.get(api);
        setFurnitures(response.data);
        console.log(response.data)
        console.log(typeof (response.data))
      } catch (error) {
        console.error(error);
      }
    };

    fetchFurnitures();
  }, []);



  return (
    <>
      <S.MainBrowseTheRange>
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <S.SlideItem>
          <p>Slide1</p>
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <img src="https://myfurniros.s3.us-west-1.amazonaws.com/img/home/Hero.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://myfurniros.s3.us-west-1.amazonaws.com/img/home/Hero.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://myfurniros.s3.us-west-1.amazonaws.com/img/home/Hero.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://myfurniros.s3.us-west-1.amazonaws.com/img/home/Hero.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </S.SlideItem>

        <p>slide2</p>
        <S.SlideItem>
        <Swiper
          spaceBetween={50}
          slidesPerView={2.5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
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
        </S.SlideItem>
      </S.MainBrowseTheRange>
    </>
  )
}

export default BrowseTheRange


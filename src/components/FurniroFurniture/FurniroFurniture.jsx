import { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
// import 'swiper/css';
import * as S from './FurniroFurnitureStyles'

const FuniroFurniture = () => {

  const api = 'https://furniro-lake.vercel.app/FuniroFurniture'

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(api);
        console.log(response.data)
        setProducts(response.data.item);
        // setProducts(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts()
  }, [])

  return (
    <S.FuniroFurniture>
      <h2>Funiro Furniture</h2>

      <S.Mosaic>
        <S.Group1>
          {products.slice(0, 4).map((item) => (
              <img key={item.id}
                src={item.imgUrl}
                alt="Furniture"
                className={`item-${item.id}`}
              />
          
          ))
          }
        </S.Group1>
        {/* <S.Group2> */}
          {products.slice(4,5).map((item) => (
            <div key={item.id}>
              <img
                src={item.imgUrl}
                alt="Furniture"
                className={`item-${item.id}`}
              />
            </div>
          ))
          }
        {/* </S.Group2> */}
        <S.Group3>
          {products.slice(5, 9).map((item) => (
            <div key={item.id}>
              <img
                src={item.imgUrl}
                alt="Furniture"
                className={`item-${item.id}`}
              />
            </div>
          ))
          }
        </S.Group3>
      </S.Mosaic>
    </S.FuniroFurniture>
  )
}

export default FuniroFurniture

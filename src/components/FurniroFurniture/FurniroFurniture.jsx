import { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './FurniroFurnitureStyles';

const FurniroFurniture = () => {
  const api = 'https://furniro-json-git-main-mayte-araujos-projects.vercel.app/FurniroFurniture';
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
    fetchProducts();
  }, []);

  return (
    <S.FurniroFurniture>
      <h2>#FurniroFurniture</h2>
      <S.Mosaic>
        <S.MosaicColumn>
          {products.slice(0, 4).map((item) => (
            <img key={item.id} src={item.imgUrl} alt={`Furniture ${item.id}`} />
          ))}
        </S.MosaicColumn>
        <S.MosaicColumnCenter>
          {products.slice(4, 5).map((item) => (
            <img key={item.id} src={item.imgUrl} alt={`Furniture ${item.id}`} />
          ))}
        </S.MosaicColumnCenter>
        <S.MosaicColumn>
          {products.slice(5, 9).map((item) => (
            <img key={item.id} src={item.imgUrl} alt={`Furniture ${item.id}`} />
          ))}
        </S.MosaicColumn>
      </S.Mosaic>
    </S.FurniroFurniture>
  );
};

export default FurniroFurniture;
import { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './OurProductsStyles'

const OurProducts = ({ api }) => {

  const [products, setProducts] = useState([]);

  const [visible, setVisible] = useState(8);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData()
  }, [])

  return (
    <S.MainOurProducts>
      <h2>Our Products</h2>
      <S.DivProducts>
        {products.length > 0 ? (
          products.slice(0, visible).map((product) => (
            <div key={product.id}>
              <S.DivAvatar>
                <img src={product.imgUrl} alt="Furniture" />
                <h4>{product.produtcName}</h4>
                <p>{product.sortDescription}</p>
                <S.DivPrice>
                  <p>{product.discountPrice}</p>
                  <p>{product.fixPrice}</p>
                </S.DivPrice>
              </S.DivAvatar>
            </div>
          ))
        ) : (
          <div>
            <span>Nenhuma consulta encontrada</span>
          </div>
        )}
      </S.DivProducts>
      <button onClick={showMoreItems}>See More...</button>

    </S.MainOurProducts>
  )
}

export default OurProducts



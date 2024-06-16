import { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

import Products from '../../components/Products/Products'
import SearchInput from '../../components/SearchInput/SearchInput'

import 'swiper/css';
import * as S from './Shoptyles'

const Shop = ({api}) => {


  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchText.length > 2) {
        fetchSearchProducts(searchText);
      } else {
        setProducts([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);



  const fetchSearchProducts = async (value:string) => {
    try {
      const response = await axios.get(`${api}?id=${value}|imgUrl=${value}`);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    
    <S.Main>
      <SearchInput value={searchText} 
      onChange={setSearchText} />
      {searchText.length > 2 ? (
        <Products products={products} />
      ) : (
        <Products products={allProducts} />
      )}
    </S.Main>
  )
}

export default Shop


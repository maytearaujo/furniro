import { useState, useEffect } from 'react';
import axios from 'axios';

import Products from '../../components/Products/Products'
import PaginationSelector from '../../components/PaginationSelector/PaginationSelector';
import PaginationComponent from '../../components/paginationComponent/PaginationComponent';
// import teste from '../../../src/assets/img/Shop/produtcs/image-1.png'
import * as S from './ShopStyles'

const Shop = ({ api }) => {

  const [itens, setItens] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(16);
  const [curentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(itens.length / itensPerPage);
  const startIndex = curentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const curretItens = itens.slice(startIndex, endIndex)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setItens(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData()
  }, [])

  useEffect(() => {
    setCurrentPage(0)
  }, [itensPerPage]);


  return (

    <S.Main>
      {/* <img src={teste} alt="" /> */}
      <PaginationSelector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />

      <PaginationComponent pages={pages} setCurrentPage={setCurrentPage} />

      <Products products={curretItens} />
    </S.Main>
  )
}

export default Shop


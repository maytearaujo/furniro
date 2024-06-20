// import { useState } from "react";
// import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";

import * as S from './ProdutcsStyles'


const Products = ({ products }) => {

    return (
        <S.DivProducts>
            <S.DivProduct>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id}>
                            <S.DivAvatar>
                                <img src={product.imgUrl} alt="Furniture" />
                            </S.DivAvatar>
                        </div>
                    ))
                ) : (
                    <div>
                        <span>Nenhuma consulta encontrada</span>
                    </div>
                )}
            </S.DivProduct>

        </S.DivProducts>
    )
}
export default Products

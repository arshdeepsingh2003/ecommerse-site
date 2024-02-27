import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Breadcrums } from '../components/Breadcrum/Breadcrums';
import { ShopContext } from '../components/Context/ShopContext';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../components/RelatedProducts/RelatedProducts';
export const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=> e.id===Number(productId))
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox></DescriptionBox>
      <RelatedProducts></RelatedProducts>
    </div>
  )
}
export default Product;
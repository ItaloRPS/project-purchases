import './styles.scss'
import React from "react";
import { PaginationControlled } from '@/components/PaginationControlled';
import { FiltersProducts } from '@/components/FiltersProducts';
import { ItensProps } from '@/common/Types/ItemType';
import { CardItem } from '@/components/CardItem';



type ProductsProps = {
  category:string,
  amount:number,
  products:ItensProps[]
};  



export const ProductsPage = ({category, amount, products}:ProductsProps)=>{
 
    return (
      <section className="products-wapper">
        <div className="products-title">
          <h1>{category}</h1>
          <h5> {products.length} Produtos exibidos</h5>
        </div>
        <div className="list-container">
            <FiltersProducts/>
            <div className="items-by-category">
                {products?.map((item=>(<CardItem item={item}/> )))}
            </div>
        </div>
        <div className="options-page">
          <PaginationControlled length={amount} />
        </div>
      </section>
        );
}
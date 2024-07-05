import './styles.scss'
import React, {useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardBuy } from "@/components/CartItem/CardBuy";
import { SwiperSlide } from '@/components/SwiperSlide';


interface InputTextProps  {
  onLogin?: (email: string, password: string) => Promise<void>;
  error?: string;
}
export const ProductPage= ()=>{

const imgs =[{
  img:"https://images.tcdn.com.br/img/img_prod/891360/camisa_jeans_883_1_4ddc30ed65322ff548363c433753a01e.jpg",
  alt:'teste'
},{
  img:"https://hering.vtexassets.com/arquivos/ids/721125-800-auto/H2P3-1ASN-C1.jpg?v=638495427958100000",
  alt:'teste'
},{
  img:"https://caedu.vtexassets.com/arquivos/ids/493862-800-auto?v=638217686492770000&width=800&height=auto&aspect=true",
  alt:'teste'
},{
  img:"https://static.netshoes.com.br/produtos/camisa-jeans-feminina-western-azul-claro/08/MMA-0504-008/MMA-0504-008_zoom1.jpg?ts=1653430225?ims=1088x",
  alt:'teste'
}]



    return (
        <div className="product-template">
          <div className="item-template gallery-product">
          <SwiperSlide data={imgs}/>
          </div>
          <div className="item-template">
            <CardBuy/>
          </div>
        </div>
        );
}
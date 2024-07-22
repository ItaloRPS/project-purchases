import './styles.scss'
import React, {useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardBuy } from "@/components/CardBuy";
import { SwiperSlide } from '@/components/SwiperSlide';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardItem } from '@/components/CardItem';



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

const item = {
  id:"1",
  name: "Camiseta Preta Manga Longa Com Capuz",
  image: "https://images.tcdn.com.br/img/img_prod/891360/camisa_jeans_883_1_4ddc30ed65322ff548363c433753a01e.jpg",
  rating:4.5,
  price: 150.50,
  amount: 1,
  category: "Esportes",
}

const items = [{
  id:"1",
  name: "Teste",
  image: "https://caedu.vtexassets.com/arquivos/ids/493862-800-auto?v=638217686492770000&width=800&height=auto&aspect=true",
  rating:4.5,
  price: 150.50,
  amount: 1,
  category: "Esportes",
},
{
  id:"2",
  name: "Teste 1",
  image: "https://static.netshoes.com.br/produtos/camisa-jeans-feminina-western-azul-claro/08/MMA-0504-008/MMA-0504-008_zoom1.jpg?ts=1653430225?ims=1088x",
  rating:4.5,
  price: 170.50,
  amount: 1,
  category: "Esportes",
},{
  id:"3",
  name: "Teste 2",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
  category: "Esportes",
},{
  id:"4",
  name: "Coman Frutas - camisas fit para mim e todaa dsfsfgdrgdfgdfgdgfdgfgf",
  image: "https://www.mithoficial.com.br/upload/banner/d58d40e4c72d4f7c97de1b9ed8eb3601.webp",
  rating:4.5,
  price: 110.50,
  amount: 1,
  category: "Esportes",
 },{
  id:"5",
  name: "Teste 4",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
  category: "Esportes",
 },{
  id:"6",
  name: "Teste 5",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
  category: "Esportes",
 },{
  id:"7",
  name: "Teste 6 Teste xefer",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
  category: "Esportes",
 },{
  id:"8",
  name: "Teste 7Teste xefer",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
  category: "Esportes",
 }]

    return (
        <div className="product-template">
          <div className="item-template gallery-product">
          <SwiperSlide data={imgs}/>
          </div>
          <div className="item-template">
            <CardBuy item={item}/>
            <Accordion>
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                DESCRIÇÃO DO PRODUTO
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                DÚVIDAS FREQUENTES
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                AVALIAÇÕES
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="related-items item-template">
            <h2>PRODUTOS RELACIONADOS</h2>
              <div className="cards-related">
                <div className="cards-related-items">
                      {items.map((item=>(
                        <CardItem item={item}/>
                      )))}
                </div>
              </div>
          </div>
        </div>
        );
}
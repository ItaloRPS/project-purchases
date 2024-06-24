import {FC } from "react";
import './styles.scss'
import { CardItem } from "@/components/CardItem";
import { FeaturedPost } from "@/components/FeaturedPost";
import { CarrosselBanner } from "@/components/CarouselBanner";
import { ListRow } from "@/components/ListRow";
import Link from "next/link";

interface InputTextProps  {
  onLogin?: (email: string, password: string) => Promise<void>;
  error?: string;
}
export const HomePage:FC<InputTextProps>= ({onLogin, error})=>{

  const items = [{
    id:"1",
    name: "Teste",
    image: "https://source.unsplash.com/random?wallpapers",
    rating:4.5,
    price: 150.50,
    amount: 1,
    category: "Esportes",
},
  {
    id:"2",
    name: "Teste 1",
    image: "https://source.unsplash.com/random?wallpapers",
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
},{
  id:"9",
  name: "Teste 8Teste xefer",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
  category: "Esportes",
},{
  id:"10",
  name: "Teste 9Teste xefer",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
  category: "Esportes",
},{
  id:"11",
  name: "Teste 9Teste xefer",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
  category: "Esportes",
},{
  id:"12",
  name: "Teste 10Teste xefer",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
  category: "Esportes",
}]

const post = {
  description: "descrição de campos de img",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "string",
  link: "/login",
  title: "da campos",
  price: "da campos",
  amount: 1,
};


    return (
      <div className="wrapper-home">
        <CarrosselBanner>
          <Link href={'/'}>
              <img className="img-banner" src="https://www.mithoficial.com.br/upload/banner/d58d40e4c72d4f7c97de1b9ed8eb3601.webp" alt="Imagem 1" />
          </Link>
          <Link href={'/'}>
              <img className="img-banner" src="https://www.mithoficial.com.br/upload/banner/d58d40e4c72d4f7c97de1b9ed8eb3601.webp" alt="Imagem 2" />
          </Link>
          <Link href={'/'}>
              <img className="img-banner" src="https://www.mithoficial.com.br/upload/banner/d58d40e4c72d4f7c97de1b9ed8eb3601.webp" alt="Imagem 3" />
          </Link>
        </CarrosselBanner>
        <div className="emphasis">
          <ListRow>
              {items.map((item)=><CardItem item={item} key={item.id}></CardItem>)}
          </ListRow>
        </div >
        <div className="post-category">
          <FeaturedPost post={post} ></FeaturedPost>
          <FeaturedPost post={post} ></FeaturedPost>
        </div>
        <div className="post-category">
          <FeaturedPost post={post} ></FeaturedPost>
          <FeaturedPost post={post} ></FeaturedPost>
        </div>
    </div>
      );
}
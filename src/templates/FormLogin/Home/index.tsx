import {FC, useState } from "react";
import * as S from './styles'
import { CardItem } from "@/src/components/CardItem";

import { FeaturedPost } from "@/src/components/FeaturedPost";
import { Carousel } from "@/src/components/Carousel";
import { ListRow } from "@/src/components/ListRow";

interface InputTextProps  {
  onLogin?: (email: string, password: string) => Promise<void>;
  error?: string;
}
export const HomePage:FC<InputTextProps>= ({onLogin, error})=>{
  const [scrollx,setScrollx] = useState(-400)

  const items = [{
    id:"2",
    name: "Teste",
    image: "https://source.unsplash.com/random?wallpapers",
    rating:4.5,
    price: 150.50,
    amount: 1,
},
  {
    id:"3",
    name: "Teste 1",
    image: "https://source.unsplash.com/random?wallpapers",
    rating:4.5,
    price: 170.50,
    amount: 1,
},{
  id:"3",
  name: "Teste 2",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
},{
  id:"4",
  name: "Teste 3",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
},{
  id:"5",
  name: "Teste 4",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
},{
  id:"6",
  name: "Teste 5",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
},{
  id:"8",
  name: "Teste 6 Teste xefer",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
},{
  id:"8",
  name: "Teste 7Teste xefer",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
},{
  id:"8",
  name: "Teste 8Teste xefer",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
},{
  id:"8",
  name: "Teste 9Teste xefer",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
},{
  id:"8",
  name: "Teste 9Teste xefer",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
},{
  id:"8",
  name: "Teste 10Teste xefer",
  image: "https://source.unsplash.com/random?wallpapers",
  rating:4.5,
  price: 170.50,
  amount: 1,
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
      <S.Wrapper >
        <S.Posts>
          <FeaturedPost post={post} ></FeaturedPost>
          <FeaturedPost post={post} ></FeaturedPost>
        </S.Posts>
        <S.Emphasis>
          <ListRow>
              {items.map((item)=><CardItem item={item} key={item.id}></CardItem>)}
          </ListRow>
        </S.Emphasis>
        <S.PostFooter>
     
        </S.PostFooter>
    </S.Wrapper>
      );
}
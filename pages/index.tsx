import {CardItem} from "../src/components/CardItem";
import { FeaturedPost } from "@/src/components/FeaturedPost";
import Header from "@/src/components/Header";
import { Box } from "@mui/material";
import {Cart} from "@/src/components/Cart";

export default function Home() {
  // const { sections, title } = props;
  const { sections, title } = {
    sections:[{title:"esportes",url:'/teste'},{title:"outros",url:'/testes'}],
    title:"teste"
  };
  
  const post = {
    description: "descrição de campos de img",
    image: "https://source.unsplash.com/random?wallpapers",
    imageText: "string",
    link: "/login",
    title: "da campos",
    price: "da campos",
    amount: 1,
  };

  

 const item = {
    id:"2",
    name: "Teste",
    image: "https://source.unsplash.com/random?wallpapers",
    rating:4.5,
    price: 150.50,
    amount: 1,
}
 const item2 = {
    id:"3",
    name: "Teste 2",
    image: "https://source.unsplash.com/random?wallpapers",
    rating:4.5,
    price: 170.50,
    amount: 1,
}
  return (
<>
<Header></Header>
    <CardItem item={item}></CardItem>
    <CardItem item={item2}></CardItem>
    <Cart/>

</>
  );
}

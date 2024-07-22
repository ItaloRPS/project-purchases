import { ProductsPage } from "@/templates/Products";
import { type NextRequest } from 'next/server'
export default function Products(request:NextRequest) {
  const dataUrl = request
  const  {params, searchParams}:any = dataUrl
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
    <>
    <ProductsPage category={params.codcategory} amount={Math.round((items.length/10))} products={items}/>
    </>
    )
    
}
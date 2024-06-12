import { Cart } from "@/src/components/Cart";
import { Footer } from "@/src/components/Footer";
import Header from "@/src/components/Header";
import { HomePage } from "@/src/templates/Home";
import { useSession } from "next-auth/react";


export default function Home() {
 
 
  return (
  <>
    <Header/>
    <HomePage/>
    <Cart/>
    <Footer/>
  </>
  );
}

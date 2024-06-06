import { Cart } from "@/src/components/Cart";
import { Footer } from "@/src/components/Footer";
import Header from "@/src/components/Header";
import { HomePage } from "@/src/templates/FormLogin/Home";


export default function Home() {
  // const { sections, title } = props;

  
  

 
  return (
<>
<Header></Header>

 <HomePage></HomePage>
  <Cart/>
  <Footer/>
</>
  );
}

import "../../styles/global.scss";
import Header from '../../components/Header'
import { AppProvider } from "@/context/AppProvider";
import { Cart } from "@/components/Cart";
import Footer from "@/components/Footer";
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body  suppressHydrationWarning={true}>
          <AppProvider>
            {/* @ts-expect-error Server Component */}
              <Header/>
              <Cart/>
            {children}
          </AppProvider>
          <Footer/>
        </body>
    </html>
  );
}

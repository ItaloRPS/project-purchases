import "../../../styles/global.scss";
import Header from '@/components/Header'
import { AppProvider } from "@/context/AppProvider";
import { Cart } from "@/components/Cart";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body  suppressHydrationWarning={true}>
          <AppProvider>
          <Suspense fallback={<LoadingSpinner color="black"/>}>
            {/* @ts-expect-error Server Component */}
              <Header/>
              <Cart/>
            {children}
          </Suspense>
          </AppProvider>
          <Footer/>
        </body>
    </html>
  );
}

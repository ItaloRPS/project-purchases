import "../../../../styles/global.scss";
import Footer from "@/components/Footer";
import './styles.scss'
import { Box, Toolbar } from "@mui/material";
import Link from "next/link";
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body  suppressHydrationWarning={true}>
          <header className="header">
            <Toolbar sx={{ justifyContent: 'space-between', borderBottom: 1, borderColor: 'divider' ,background:"black", gap:'5px', minHeight:'50px'}}>
              <Link href={"/"}><img src='/images/logo.png' alt='Logo do site' className="logo" /></Link>
              <Box sx={{ display: { xs: 'flex' }, gap:'13px' }} alignItems="center">
               <h2>Cadastro</h2>
              </Box>
            </Toolbar>
            <Toolbar
              component="nav"
              variant="dense"
              sx={{ justifyContent: 'space-around', overflowX: 'auto' , background:"#fbfdff"}}
            >
            </Toolbar>
          </header>
            {children}
          <Footer/>
        </body>
    </html>
  );
}

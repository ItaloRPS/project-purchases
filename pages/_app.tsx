import { AppProvider } from "@/src/context/AppProvider";
import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import {GlobalStyles} from "../src/styles/global-styles";
import {theme} from "../src/styles/theme";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ThemeProvider>
    </>
  );
}

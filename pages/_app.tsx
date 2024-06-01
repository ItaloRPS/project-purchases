import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import {GlobalStyles} from "../src/styles/global-styles";
import {theme} from "../src/styles/theme";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

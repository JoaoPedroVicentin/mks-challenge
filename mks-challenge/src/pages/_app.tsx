import type { AppProps } from 'next/app'

import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/themes'
import { ThemeProvider } from 'styled-components'
import { Container } from '@/styles/pages/app'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CartContextProvider } from '../context/CartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <CartContextProvider>
        <Container>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </CartContextProvider>
    </ThemeProvider>
  )
}

import { Html, Head, Main, NextScript } from 'next/document'
import Footer from './components/footer'
import Header from './components/header'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}

import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <Script src='https://js.pusher.com/7.2/pusher.min.js' strategy="beforeInteractive"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
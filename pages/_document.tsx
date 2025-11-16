import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta name="keywords" content="podcast, technology, programming, tech insights, developer stories" />
        <meta name="author" content="Cardio Effect" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
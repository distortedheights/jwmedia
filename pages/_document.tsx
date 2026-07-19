import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Fotografen Portfolio - Professionelle Fotografie" />
      </Head>
      <body className="bg-dark text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

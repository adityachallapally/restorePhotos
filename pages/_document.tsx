import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Transform images into SVGs."
          />
          <meta property="og:site_name" content="svgcake.com" />
          <meta
            property="og:description"
            content="Transform images into SVGs."
          />
          <meta property="og:title" content="SVGCake" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="SVGCake" />
          <meta
            name="twitter:description"
            content="v"
          />
          <meta
            property="og:image"
            content="TO DO"
          />
          <meta
            name="twitter:image"
            content="TO DO"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

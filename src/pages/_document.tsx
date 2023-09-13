import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          data-purpose="Layout StyleSheet"
          title="Web Awesome"
          href="/css/app-wa-02670e9412103b5852dcbe140d278c49.css?vsn=d"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-solid.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-regular.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-light.css"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

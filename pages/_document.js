import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import { metaStrings } from "../utils/strings";
import cssnano from "cssnano";
import postcss from "postcss";
import autoprefixer from "autoprefixer";

const prefixer = postcss([autoprefixer]);
const minifier = postcss([cssnano]);

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="title" content={metaStrings.title} />
          <meta name="description" content={metaStrings.description} />
          <meta name="keywords" content={metaStrings.keywords} />
          <meta name="author" content={metaStrings.author} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href={metaStrings.url}></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content={metaStrings.twitterSite} />
          <meta name="twitter:title" content={metaStrings.title} />
          <meta name="twitter:description" content={metaStrings.description} />
          <meta
            name="twitter:image:src"
            content={`${metaStrings.url}/static/assets/images/about_meta.png`}
          />
          <meta
            name="twitter:image"
            content={`${metaStrings.url}/static/assets/images/about_meta.png`}
          />
          <meta name="twitter:image:width" content="300" />
          <meta name="twitter:image:height" content="349" />
          {/* Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={metaStrings.title} />
          <meta property="og:site_name" content={metaStrings.title} />
          <meta property="og:description" content={metaStrings.description} />
          <meta
            property="og:image"
            content={`${metaStrings.url}/static/assets/images/about_meta.png`}
          />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="349" />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:url" content={metaStrings.url}></meta>
        </Head>
        <body>
          <Main />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GA_ID}');
              `
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);
  const css = sheets.toString();
  const prefixedCss = await prefixer.process(css);
  const minifiedCss = await minifier.process(prefixedCss.css);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <style
        id="jss-server-side"
        dangerouslySetInnerHTML={{ __html: minifiedCss.css }}
      />
    )
  };
};

export default MyDocument;

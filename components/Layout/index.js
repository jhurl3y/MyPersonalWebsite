import React from "react";
import Head from "next/head";

export default ({ children, title, className }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />`
    </Head>
    <div className={className}>{children}</div>
    <style jsx global>{`
      html {
        height: 100%;
        scroll-behavior: smooth;
      }
      body {
        min-height: 100%;
      }
    `}</style>
  </div>
);

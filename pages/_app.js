import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faHeartbeat,
  faTrain,
  faUsers,
  faEnvelope,
  faPhone,
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import "react-vertical-timeline-component/style.min.css";
import { metaStrings } from "../utils/strings";
import config from "react-reveal/globals";

export default class MyApp extends App {
  constructor(props) {
    super(props);
    library.add(
      faCode,
      faHeartbeat,
      faTrain,
      faUsers,
      faEnvelope,
      faPhone,
      faArrowLeft,
      faArrowRight
    );
    config({ ssrFadeout: true });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{metaStrings.title}</title>
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}`}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon_io/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon_io/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon_io/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon_io/site.webmanifest" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

import React, { forwardRef, useRef, useEffect, useState } from "react";
import Layout from "../components/layout";
import { makeStyles } from "@material-ui/core/styles";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PAGES } from "../utils/constants";
import Typography from "@material-ui/core/Typography";
import { metaStrings } from "../utils/strings";
import CookieConsent from "react-cookie-consent";
import "../src/styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: theme.colors.black,
  },
}));

const Section = forwardRef(({ children, id, offset }, ref) => {
  let styles = offset
    ? {
        marginTop: `-${offset}px`,
        paddingTop: `${offset}px`,
      }
    : {};

  return (
    <div ref={ref} id={id} style={styles}>
      {children}
    </div>
  );
});

export default () => {
  const classes = useStyles();
  const navRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    setNavHeight(navRef.current.clientHeight);

    // disable radio button keydown event
    window.addEventListener("keydown", () => null);

    return () => {
      window.removeEventListener("keydown", () => null);
    };
  }, []);

  return (
    <Layout className={classes.root} title={metaStrings.title}>
      <Navbar
        dark={false}
        pages={PAGES}
        navRef={navRef}
        stickyRefs={[homeRef, aboutRef, experienceRef, contactRef]}
      />
      <CookieConsent
        cookieName="jh_cookie_consent"
        containerClasses="cookie-banner-container"
        contentClasses="cookie-banner-content"
        buttonClasses="cookie-banner-button"
        location="bottom"
        buttonText="X"
      >
        {metaStrings.cookies}
      </CookieConsent>
      <Section id="home" ref={homeRef}>
        {/* Add dummy h1 for SEO */}
        <Typography variant="h1" align="center" style={{ display: "none" }}>
          {metaStrings.title}
        </Typography>
        <Home />
      </Section>
      <Section id="about" ref={aboutRef} offset={navHeight}>
        <About />
      </Section>
      <Section id="experience" ref={experienceRef} offset={navHeight}>
        <Experience />
      </Section>
      <Section id="contact" ref={contactRef} offset={navHeight}>
        <Contact />
      </Section>
      <Footer />
    </Layout>
  );
};

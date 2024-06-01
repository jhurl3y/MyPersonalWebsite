import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import RightRail from "./rightRail";
import { getFadeDuration, getSpotifyPlaylist } from "../../utils/helpers";
import { aboutStrings } from "../../utils/strings";
import Styles from "./styles";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { WIDGET_HEIGHT } from "../../utils/constants";
import GarminSummary from "./garminSummary";
import GarminLastActivity from "./garminLastActivity";

const SpotifyWidget = () => (
  <iframe
    src={getSpotifyPlaylist()}
    width="100%"
    height={WIDGET_HEIGHT}
    frameBorder="0"
    allowtransparency="true"
    allow="encrypted-media"
  />
);

const TwitterWidget = () => (
  <TwitterTimelineEmbed
    sourceType="profile"
    screenName="hurley_19"
    options={{
      height: WIDGET_HEIGHT,
    }}
    theme="dark"
    noBorders
    noFooter
  />
);

export default () => {
  const classes = Styles();

  // disable radio button keydown event
  useEffect(() => {
    window.addEventListener("keydown", () => null);

    return () => {
      window.removeEventListener("keydown", () => null);
    };
  }, []);

  return (
    <Container className={classes.container} maxWidth={false}>
      <Fade duration={getFadeDuration()} right>
        <Typography variant="h2" align="center" className={classes.heading}>
          {aboutStrings.about}
        </Typography>
      </Fade>
      <Container className={classes.aboutContent}>
        <Grid container>
          <Grid item sm={12} md={6}>
            <Fade duration={getFadeDuration()} left>
              <Container maxWidth={false} className={classes.imageContainer}>
                <img
                  width={450}
                  alt="about"
                  src="/static/assets/images/about.png"
                />
              </Container>
            </Fade>
          </Grid>
          <Grid item sm={12} md={6}>
            <Fade duration={getFadeDuration()} right>
              <RightRail />
            </Fade>
          </Grid>
        </Grid>
      </Container>
      <Fade duration={getFadeDuration()} left>
        <Typography variant="h2" align="center" className={classes.subHeading}>
          {aboutStrings.music}
        </Typography>
      </Fade>
      <Container className={classes.musicContent}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={12} className={classes.musicItem}>
            <Fade duration={getFadeDuration()} left>
              <SpotifyWidget />
            </Fade>
          </Grid>
          {/* <Grid item xs={12} sm={12} md={6} className={classes.musicItem}>
            <Fade duration={getFadeDuration()} right>
              <TwitterWidget />
            </Fade>
          </Grid> */}
        </Grid>
      </Container>
      {/* <Container className={classes.garminContent}>
        <Fade duration={getFadeDuration()} left>
          <GarminSummary />
        </Fade>
        <Fade duration={getFadeDuration()} right>
          <GarminLastActivity />
        </Fade>
      </Container> */}
    </Container>
  );
};

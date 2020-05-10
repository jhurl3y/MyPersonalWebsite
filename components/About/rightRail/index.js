import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { aboutStrings } from "../../../utils/strings";
import { getAge } from "../../../utils/helpers";
import Styles from "./styles";

const Icon = ({ icon, text, classes }) => (
  <div>
    <FontAwesomeIcon icon={icon} size="2x" className="highlight" />
    <p className={classes.skillText}>{text}</p>
  </div>
);

export default () => {
  const classes = Styles();
  const { me, intro, iLike, code, sport, travel, friends } = aboutStrings;

  return (
    <Grid container direction="column" className={classes.rightRail}>
      <Grid item xs={12}>
        <Container maxWidth={false} className={classes.rightRailContent}>
          <Typography variant="h4">{me}</Typography>
          <p>{intro.replace("{age}", getAge("1994/07/14"))}</p>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth={false} className={classes.rightRailContent}>
          <Typography variant="h4">{iLike}</Typography>
          <Grid container spacing={2} className={classes.icons}>
            <Grid item xs={12} sm={6}>
              <Icon icon="code" text={code} classes={classes} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Icon icon="heartbeat" text={sport} classes={classes} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Icon icon="train" text={travel} classes={classes} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Icon icon="users" text={friends} classes={classes} />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

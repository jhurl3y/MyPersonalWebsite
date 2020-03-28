import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import Styles from "./styles";
import Map from "./map";
import { LOCATIONS } from "../../utils/constants";
import Details from "./details";
import Button from "@material-ui/core/Button";
import Form from "./form";
import { getFadeDuration } from "../../utils/helpers";
import { contactStrings } from "../../utils/strings";
import { withStyles } from "@material-ui/core/styles";

const StyledButton = withStyles(theme => ({
  root: {
    color: "#46bcec",
    background: "transparent",
    textTransform: "none"
  }
}))(Button);

export default () => {
  const classes = Styles();
  const [location, setLocation] = useState(LOCATIONS[1]);
  const [showDetails, setShowDetails] = useState(false);

  // disable radio button keydown event
  useEffect(() => {
    window.addEventListener("keydown", () => null);

    return () => {
      window.removeEventListener("keydown", () => null);
    };
  }, []);

  const handleGalway = () => {
    setLocation(LOCATIONS.find(location => location.name === "galway"));
  };

  const handleDublin = () => {
    setLocation(LOCATIONS.find(location => location.name === "dublin"));
  };

  return (
    <Container className={classes.container} maxWidth={false}>
      <Fade duration={getFadeDuration()} bottom>
        <Typography variant="h2" align="center" className={classes.heading}>
          {contactStrings.contact}
        </Typography>
        <Container className={classes.textSection} maxWidth="xs">
          <p dangerouslySetInnerHTML={{ __html: contactStrings.intro }} />
          <p dangerouslySetInnerHTML={{ __html: contactStrings.questions }} />
          <StyledButton
            href={`#${contactStrings.map}`}
            className={classes.button}
            onClick={handleGalway}
            title={contactStrings.galway}
          >
            {contactStrings.galway}
          </StyledButton>
          {contactStrings.or}
          <StyledButton
            href={`#${contactStrings.map}`}
            className={classes.button}
            onClick={handleDublin}
            title={contactStrings.dublin}
          >
            {contactStrings.dublin}
          </StyledButton>
        </Container>
        <Container className={classes.formContainer} maxWidth={false}>
          <Form />
        </Container>
        <Container maxWidth="xs">
          <div className={classes.orDivider}>
            <div className={classes.orBubble}>{contactStrings.or}</div>
          </div>
        </Container>
        <Container className={classes.detailsContainer} maxWidth={false}>
          {!showDetails && (
            <Button
              color="primary"
              disableRipple
              className={classes.showButton}
              onClick={() => setShowDetails(true)}
            >
              {contactStrings.showDetails}
            </Button>
          )}
          {showDetails && <Details />}
        </Container>
      </Fade>
      <Map location={location} />
    </Container>
  );
};

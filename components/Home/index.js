import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "@material-ui/core/Container";
import Navbar from "../Navbar";
import Dot from "./dot";
import Slider from "./slider";
import {
  PAGES,
  LEFT_KEY,
  RIGHT_KEY,
  FIRST_IMAGE_PATH,
} from "../../utils/constants";
import { getBackground, getBackgroundUrls } from "../../utils/helpers";
import Styles from "./styles";
import chunk from "lodash.chunk";

const LeftButton = ({ onClick }) => {
  return (
    <Button color="inherit" onClick={onClick}>
      <FontAwesomeIcon icon="arrow-left" size="3x" className="highlight" />
    </Button>
  );
};

const RightButton = ({ onClick }) => {
  return (
    <Button color="inherit" onClick={onClick}>
      <FontAwesomeIcon icon="arrow-right" size="3x" className="highlight" />
    </Button>
  );
};

export default () => {
  const classes = Styles();
  const backgroundUrls = getBackgroundUrls();
  const [index, setIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const [shouldTransition, setSouldTransition] = useState(true);
  const [backgrounds, setBackgrounds] = useState([FIRST_IMAGE_PATH]);

  const [refs] = useState(
    new Array([FIRST_IMAGE_PATH, ...backgroundUrls].length).fill(
      React.createRef()
    )
  );

  const slideWidth = () => {
    if (refs[index] && refs[index].current != undefined) {
      return refs[index].current.clientWidth;
    }
    return 0;
  };

  const goToPrevSlide = () => {
    if (index === 0) {
      return;
    }

    setIndex(index - 1);
    setSouldTransition(true);
    setTranslateValue(translateValue + slideWidth());
  };

  const goToNextSlide = () => {
    if (index === backgrounds.length - 1) {
      return;
    }

    setIndex(index + 1);
    setSouldTransition(true);
    setTranslateValue(translateValue - slideWidth());
  };

  const onResize = () => {
    setSouldTransition(false);
    setTranslateValue(index * -1 * slideWidth());
  };

  const onDotClick = (index) => {
    setIndex(index);
    setSouldTransition(true);
    setTranslateValue(index * -1 * slideWidth());
  };

  const onKeyDown = ({ keyCode }) => {
    if (keyCode === LEFT_KEY) {
      goToPrevSlide();
    } else if (keyCode === RIGHT_KEY) {
      goToNextSlide();
    }
  };

  async function loadBackgrounds() {
    // Backgrounds already fetched
    if (backgrounds.length >= backgroundUrls.length) {
      return;
    }

    // Split the backgrounds into chunks
    const chunkedBackgroundUrls = chunk(backgroundUrls, 3);
    chunkedBackgroundUrls.map((chunkOfBackgroundUrls) => {
      // Fetch all backgrounds in a chunk at once
      Promise.all(chunkOfBackgroundUrls.map((url) => getBackground(url))).then(
        (fetchedBackgrounds) => {
          setBackgrounds((backgrounds) => [
            ...backgrounds,
            ...fetchedBackgrounds,
          ]);
        }
      );
    });
  }

  // Same as componentDidMount; only execute on the first render
  useEffect(() => {
    if (process.browser) {
      loadBackgrounds();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index, translateValue]);

  return (
    <div className={classes.outer}>
      <Slider
        classes={classes}
        translateValue={translateValue}
        shouldTransition={shouldTransition}
        refs={refs}
        backgrounds={backgrounds}
      />
      <div className={classes.content}>
        <Navbar pages={PAGES} />
        <Container className={classes.home} maxWidth={false}>
          <LeftButton onClick={goToPrevSlide} />
          <Container maxWidth="lg" fixed>
            {" "}
          </Container>
          <RightButton onClick={goToNextSlide} />
        </Container>
        {process.browser && (
          <div className={classes.dots}>
            {backgrounds.map((_, i) => (
              <Dot
                i={i}
                highlight={i === index}
                onDotClick={onDotClick}
                classes={classes}
                key={i}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

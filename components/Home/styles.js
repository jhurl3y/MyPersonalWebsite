import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  // background image
  outer: {
    height: "100vh",
    backgroundRepeat: "no-repeat",
    position: "relative",
    width: "100%",
    margin: `${theme.spacing(0)} auto`,
    overflow: "hidden",
    whiteSpace: "nowrap"
  },
  "@media (max-aspect-ratio: 3/2)": {
    outer: {
      backgroundPosition: "center top",
      backgroundSize: "auto 100%"
    }
  },
  "@media (min-aspect-ratio: 3/2)": {
    outer: {
      backgroundPosition: "center top",
      backgroundSize: "auto 120%"
    }
  },
  "@media (min-aspect-ratio: 2/1)": {
    outer: {
      backgroundPosition: "center center",
      backgroundSize: "auto 150%"
    }
  },
  "@media (min-aspect-ratio: 5/2)": {
    outer: {
      backgroundPosition: "center center",
      backgroundSize: "auto 200%"
    }
  },
  "@media (min-aspect-ratio: 3/1)": {
    outer: {
      backgroundPosition: "center center",
      backgroundSize: "auto 250%"
    }
  },
  "@media (min-aspect-ratio: 7/2)": {
    outer: {
      backgroundPosition: "center center",
      backgroundSize: "auto 300%"
    }
  },
  slider: {
    position: "relative",
    height: "100%",
    width: "100%"
  },
  image: {
    display: "inline-block",
    height: "100%",
    width: "100%"
  },
  content: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0"
  },
  home: {
    height: "100%",
    color: theme.colors.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    filter: "unset",
    paddingBottom: "10%"
  },
  dots: {
    position: "absolute",
    left: "50%",
    bottom: theme.spacing(6),
    transform: "translate(-50%, -50%)",
    margin: "0 auto",
    fontSize: "1.125rem"
  },
  dotContainer: {
    minWidth: "0px"
  },
  dot: {
    height: "15px",
    width: "15px",
    borderRadius: "50%",
    display: "inline-block"
  }
}));

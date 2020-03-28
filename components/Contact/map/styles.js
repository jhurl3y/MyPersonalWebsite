import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: { height: `100%` },
  mapEl: { height: `100%` },
  map: {
    height: "30vh",
    width: "100%"
  },
  [theme.breakpoints.down("lg")]: {
    map: {
      height: "50vh",
      width: "100%"
    }
  }
}));

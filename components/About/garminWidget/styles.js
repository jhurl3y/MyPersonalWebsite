import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  garmin: {
    padding: theme.spacing(6, 6, 6, 8),
  },
  container: { height: `100%` },
  map: {
    height: "30vh",
    width: "100%",
  },
  [theme.breakpoints.down("lg")]: {
    map: {
      height: "50vh",
      width: "100%",
    },
  },
}));

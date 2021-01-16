import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  garmin: {
    padding: theme.spacing(6, 6, 6, 8),
  },
  container: { height: "100%" },
  negMargin: {
    marginBottom: -theme.spacing(8),
  },
  subHeading: { fontSize: "2rem" },
  spacingBottom: { marginBottom: theme.spacing(7) },
  map: {
    height: "57vh",
    width: "100%",
  },
  [theme.breakpoints.down("lg")]: {
    map: {
      height: "57vh",
      width: "100%",
    },
  },
}));

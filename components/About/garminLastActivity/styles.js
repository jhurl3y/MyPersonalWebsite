import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  garmin: {
    padding: theme.spacing(6, 6, 6, 8),
  },
  spacingBottom: { marginBottom: theme.spacing(7) },
  mostRecent: {
    fontSize: "2rem",
    marginBottom: theme.spacing(7),
  },
  map: {
    height: "74vh",
    width: "100%",
  },
  charts: {
    padding: theme.spacing(7, 2, 7, 7),
  },
  axisLabel: {
    fontSize: "1.075rem",
  },
  [theme.breakpoints.down("md")]: {
    map: {
      height: "79vh",
    },
  },
  [theme.breakpoints.down("sm")]: {
    map: {
      height: "50vh",
    },
    mostRecent: { marginTop: -theme.spacing(9) },
  },
}));

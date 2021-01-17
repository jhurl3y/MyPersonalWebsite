import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    height: "100%",
    color: theme.colors.black,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.grey,
    flexDirection: "column",
  },
  heading: {
    margin: theme.spacing(9, 0, 7, 0),
    fontSize: "5rem",
  },
  subHeading: {
    margin: theme.spacing(0, 0, 7, 0),
  },
  aboutContent: {
    padding: theme.spacing(6, 0),
  },
  musicContent: {
    margin: theme.spacing(6, 8, 10),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    "& > .react-reveal": {
      padding: theme.spacing(3, 2),
    },
  },
  garminContent: {
    padding: theme.spacing(6, 0),
  },
  musicItem: {
    margin: "0 auto",
  },
  imageContainer: {
    paddingTop: theme.spacing(6),
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    musicContent: {
      flexDirection: "column",
      margin: theme.spacing(6, 8, 7),
    },
  },
  [theme.breakpoints.down("xs")]: {
    imageContainer: {
      display: "none",
    },
  },
}));

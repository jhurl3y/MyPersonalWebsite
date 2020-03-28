import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    height: "100%",
    color: theme.colors.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.colors.blue,
    padding: theme.spacing(11)
  },
  social: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    "& > a": {
      padding: theme.spacing(0, 5)
    },
    marginBottom: theme.spacing(6)
  },
  disclaimer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  [theme.breakpoints.down("lg")]: {
    container: {
      padding: theme.spacing(10)
    }
  },
  [theme.breakpoints.down("md")]: {
    container: {
      padding: theme.spacing(9)
    }
  },
  [theme.breakpoints.down("sm")]: {
    container: {
      padding: theme.spacing(8)
    }
  }
}));

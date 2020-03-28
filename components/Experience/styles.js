import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    height: "100%",
    color: theme.colors.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.darkBlue,
    flexDirection: "column"
  },
  heading: {
    margin: theme.spacing(9, 0, 8, 0)
  },
  skills: {
    paddingBottom: theme.spacing(9)
  },
  cv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.colors.black,
    "& > span": {
      marginLeft: theme.spacing(3)
    }
  }
}));

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  rightRail: {
    padding: theme.spacing(6, 6, 6, 8)
  },
  rightRailContent: {
    paddingBottom: theme.spacing(6)
  },
  icons: {
    padding: theme.spacing(6, 0)
  },
  skillText: {
    paddingRight: theme.spacing(4)
  },
  [theme.breakpoints.down("xs")]: {
    rightRailContent: {
      textAlign: "center"
    }
  }
}));

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  titleSection: { marginBottom: theme.spacing(7) },
  date: { fontSize: "1.075rem" },
  garminImage: { marginTop: theme.spacing(5), textAlign: "center" },
  garminText: { fontSize: "1.075rem" },
  content: { padding: theme.spacing(3, 5) },
  leftPadding: { paddingLeft: theme.spacing(4) },
  rightPadding: { paddingRight: theme.spacing(4) },
  [theme.breakpoints.down("md")]: {
    leftPadding: { paddingLeft: theme.spacing(0) },
    rightPadding: { paddingRight: theme.spacing(0) },
  },
}));

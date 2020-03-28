import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: theme.spacing(6, 0)
  },
  textField: {
    padding: theme.spacing(0, 3)
  },
  input: {
    overflow: "hidden",
    color: theme.colors.black,
    backgroundColor: `${theme.colors.white} !important`
  },
  button: {
    margin: `${theme.spacing(6)} auto`,
    padding: theme.spacing(3, 8)
  },
  submit: {
    paddingTop: theme.spacing(6)
  }
}));

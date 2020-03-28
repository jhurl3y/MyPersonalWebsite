import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  contactDetails: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  emailPhoneContainer: {
    padding: theme.spacing(2, 8, 8, 8)
  },
  emailPhone: {
    paddingTop: theme.spacing(4)
  },
  mailto: {
    color: theme.colors.white,
    textDecoration: "none"
  },
  tel: {
    color: theme.colors.white,
    textDecoration: "none"
  },
  [theme.breakpoints.down("xs")]: {
    contactDetails: {
      flexDirection: "column"
    },
    emailPhoneContainer: {
      paddingBottom: theme.spacing(6)
    }
  }
}));

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    height: "100%",
    color: theme.colors.white,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.colors.purple,
    padding: theme.spacing(0),
  },
  heading: {
    margin: theme.spacing(9, 0, 7, 0),
  },
  textSection: {
    padding: theme.spacing(0, 4, 3, 4),
    textAlign: "center",
  },
  detailsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(6),
  },
  formContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(4),
  },
  showButton: {
    marginBottom: theme.spacing(8),
    color: theme.colors.white,
    padding: theme.spacing(3, 5),
    "&:hover": {
      backgroundColor: "#760eed",
    },
  },
  orDivider: {
    borderTop: "0px",
    borderBottom: "1px solid #fff",
    height: "20px",
    marginBottom: "50px",
  },
  orBubble: {
    backgroundColor: theme.colors.purple,
    color: "#fff",
    width: "100px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    height: "40px",
    lineHeight: "40px",
    paddingBottom: "50px",
  },
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

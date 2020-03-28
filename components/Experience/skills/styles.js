import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  cards: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: theme.spacing(7)
  },
  cardContainer: {
    height: "100%",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
  card: {
    margin: theme.spacing(0, 6),
    height: "100%"
  },
  cardTitle: {
    fontWeight: 600
  },
  cardContent: {
    padding: theme.spacing(0, 6),
    listStyleType: "none",
    color: theme.colors.darkGrey,
    paddingBottom: theme.spacing(4)
  }
}));

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  garmin: {
    padding: theme.spacing(6, 6, 6, 8),
  },
  summary: { fontSize: "2rem" },
  date: { fontSize: "1.5rem" },
  spacingBottom: { marginBottom: theme.spacing(7) },
}));

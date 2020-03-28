import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => {
  const commonStyles = {
    marginRight: theme.spacing(7),
    fontSize: "1.375rem"
  };

  return {
    lightLink: {
      ...commonStyles,
      color: theme.colors.black
    },
    darkLink: {
      ...commonStyles,
      color: theme.colors.white
    }
  };
});

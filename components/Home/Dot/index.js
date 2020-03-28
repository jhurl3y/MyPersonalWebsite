import Button from "@material-ui/core/Button";
import { COLORS } from "../../../utils/constants";

export default ({ i, highlight, onDotClick, classes }) => (
  <Button
    onClick={() => onDotClick(i)}
    className={classes.dotContainer}
    key={i}
  >
    <span
      className={classes.dot}
      style={{
        backgroundColor: `${highlight ? COLORS.white : COLORS.mediumGrey}`
      }}
    >
      {""}
    </span>
  </Button>
);

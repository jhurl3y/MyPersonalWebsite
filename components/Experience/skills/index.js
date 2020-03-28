import Fade from "react-reveal/Fade";
import Grid from "@material-ui/core/Grid";
import Card from "./card";
import Styles from "./styles";
import { SKILLS } from "../../../utils/constants";
import { getFadeDuration } from "../../../utils/helpers";

export default () => {
  const classes = Styles();

  return (
    <Grid container direction="row" className={classes.cards}>
      {SKILLS.map(({ title, content, icon }, i) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Fade duration={getFadeDuration()} right>
              <div className={classes.cardContainer}>
                <Card title={title} content={content} icon={icon} />
              </div>
            </Fade>
          </Grid>
        );
      })}
    </Grid>
  );
};

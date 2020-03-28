import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Linkedin from "../../static/assets/icons/linkedin.svg";
import Github from "../../static/assets/icons/github.svg";
import Twitter from "../../static/assets/icons/twitter.svg";
import { footerStrings } from "../../utils/strings";
import Styles from "./styles";

export default () => {
  const classes = Styles();

  return (
    <div>
      <Container className={classes.container} maxWidth={false}>
        <div className={classes.social}>
          <a
            href="https://www.linkedin.com/in/jhurley1/"
            title="linkedin"
            target="_blank"
          >
            <Linkedin width="40px" height="40px" />
          </a>
          <a href="https://github.com/jhurl3y" title="github" target="_blank">
            <Github width="40px" height="40px" />
          </a>
          <a
            href="https://twitter.com/hurley_19"
            title="twitter"
            target="_blank"
          >
            <Twitter width="40px" height="40px" />
          </a>
        </div>
        <div className={classes.disclaimer}>
          <Typography component="subtitle1" align="center">
            {footerStrings.copyright}
          </Typography>
          <Typography component="subtitle1" align="center">
            {footerStrings.rights}
          </Typography>
        </div>
      </Container>
    </div>
  );
};

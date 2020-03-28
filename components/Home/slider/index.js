import React from "react";
import { IMAGE_TRANSITION_DURATION } from "../../../utils/constants";

const Image = React.forwardRef(({ image, classes }, ref) => {
  const styles = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${image}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%"
  };

  return (
    <div className={classes.image} style={styles} ref={ref}>
      {""}
    </div>
  );
});

export default ({
  classes,
  translateValue,
  shouldTransition,
  refs,
  backgrounds
}) => (
  <div
    className={classes.slider}
    style={{
      transform: `translateX(${translateValue}px)`,
      transition: `transform ${
        shouldTransition ? IMAGE_TRANSITION_DURATION : 0
      }s ease-out`
    }}
  >
    {backgrounds.map((image, i) => (
      <Image key={i} image={image} classes={classes} ref={refs[i]} />
    ))}
  </div>
);

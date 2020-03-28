import { Transition } from "react-transition-group";
import { TRANSITION_DURATION } from "../../utils/constants";

const baseStyles = {
  transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const stickyStyles = {
  top: 0,
  height: 0,
  zIndex: 99
};

export const buildStyles = (sticky, state) => {
  let styles = { ...baseStyles, ...transitionStyles[state] };

  if (sticky) {
    styles = { ...styles, ...stickyStyles };
  }

  return styles;
};

export default props => {
  return (
    <Transition in={props.in} timeout={TRANSITION_DURATION}>
      {state => (
        <div
          className={props.sticky ? "is-sticky" : ""}
          style={buildStyles(props.sticky, state)}
        >
          {props.children}
        </div>
      )}
    </Transition>
  );
};

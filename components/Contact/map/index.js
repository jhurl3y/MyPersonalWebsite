import { compose, withProps } from "recompose";
import { GoogleMap, withGoogleMap } from "react-google-maps";
import { MAP_ZOOM, MAP_STYLES } from "../../../utils/constants";
import { contactStrings } from "../../../utils/strings";
import Styles from "./styles";

export default ({ children, location }) => {
  const classes = Styles();
  const options = {
    center: {
      lng: location.long,
      lat: location.lat
    },
    zoom: MAP_ZOOM,
    defaultOptions: {
      disableDefaultUI: true,
      disableDoubleClickZoom: true,
      scrollwheel: false,
      styles: MAP_STYLES
    }
  };

  const Map = compose(
    withProps({
      containerElement: <div className={classes.container} />,
      mapElement: <div className={classes.mapEl} />
    }),
    withGoogleMap
  )(() => (
    <GoogleMap
      center={options.center}
      zoom={options.zoom}
      defaultOptions={options.defaultOptions}
    />
  ));

  return (
    <div id={contactStrings.map} className={classes.map}>
      <Map>{children}</Map>
    </div>
  );
};

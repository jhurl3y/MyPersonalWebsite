import { compose, withProps } from "recompose";
import { GoogleMap, withGoogleMap } from "react-google-maps";
import Styles from "./styles";

export default ({
  children,
  location: { lng, lat },
  zoom,
  mapStyles,
  title,
}) => {
  const classes = Styles();
  const options = {
    center: {
      lng,
      lat,
    },
    zoom: zoom,
    defaultOptions: {
      disableDefaultUI: true,
      disableDoubleClickZoom: true,
      scrollwheel: false,
      styles: mapStyles,
    },
  };

  const Map = compose(
    withProps({
      containerElement: <div className={classes.container} />,
      mapElement: <div className={classes.mapEl} />,
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
    <div id={title} className={classes.map}>
      <Map>{children}</Map>
    </div>
  );
};

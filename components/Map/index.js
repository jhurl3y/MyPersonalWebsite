import { compose, withProps } from "recompose";
import { GoogleMap, withGoogleMap, Polyline } from "react-google-maps";
import Styles from "./styles";

export default ({
  location: { lng, lat },
  zoom,
  mapStyles = {},
  title,
  showPolyline = false,
  polylineData = [],
  polylineOptions = {},
  mapClasses,
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
    >
      {showPolyline && (
        <Polyline
          path={polylineData}
          geodesic={true}
          options={polylineOptions}
        />
      )}
    </GoogleMap>
  ));

  return (
    <div id={title} className={mapClasses}>
      <Map />
    </div>
  );
};

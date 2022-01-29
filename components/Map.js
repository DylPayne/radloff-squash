import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useState, useCallback } from "react";
import mapStyle from "./MapStyle";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -33.918861,
  lng: 18.4233,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD1M-b1E-Sva_5BoPlTU_G09APr68YPUQ4",
  });
  const [map, setMap] = useState(null);
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{
        lat: -33.918861,
        lng: 18.4233,
      }}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ styles: mapStyle }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;

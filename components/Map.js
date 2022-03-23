import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState, useCallback, useEffect } from "react";
import mapStyle from "./MapStyle";

const containerStyle = {
  width: "100%",
  height: "100%",
};

// const center = {
//   lat: -34.07874643625518,
//   lng: 18.87361381160325,
// };

const Map = () => {
  const [center, setCenter] = useState({});
  const [zoom, setZoom] = useState(null);
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
      setCenter({
        lat: -34.07874643625518,
        lng: 18.87361381160325,
      });
      setZoom(10);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ styles: mapStyle }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={center} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;

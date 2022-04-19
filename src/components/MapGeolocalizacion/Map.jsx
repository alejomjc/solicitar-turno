import React, { useMemo, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
// import SearchInputDireccion from "./SearchInputDireccion";
import { stylesGoogleMaps } from "../../styles/globalStyles";
const libraries = ["places"];

const MapGeolocalizacion = (props) => {
  const googleMapsApiKey = "AIzaSyB2mQw8lOOLJ77d3HBYzusyPZmzhSYnLAo";
  // const googleMapsApiKey = "AIzaSyB2mQw8lOOLJ77d3HBYzusyPZmzhSYnLAo";
  const { markers, setMarkers } = props;
  const mapRef = React.useRef();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
    libraries: libraries,
  });
  const options = useMemo(
    () => ({
      // mapId: "b181cac70f27f5e6",
      disableDefaultUI: true,
      clickableIcons: false,
      zoomControl: true,
      styles: stylesGoogleMaps,
    }),
    []
  );

  const [selected, setSelected] = React.useState(null);
  const panTo = ({ lat, lng }) => {
    if (mapRef) {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(16);
      setMarkers([...markers, { lat, lng }]);
    }

    // console.log("set marker", { lat, lng });
  };

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onMapClick = (e) => {
    const data = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    console.log(markers);
    setMarkers([...markers, data]);
  };
  const arauca = {
    lat: 7.08617,
    lng: -70.757347,
  };

  if (loadError) return <p>Error al cargar mapa</p>;
  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div>
      {/* <SearchInputDireccion panTo={panTo} /> */}
      <p>Haga clic en el mapa y ajuste su ubicación</p>
      <GoogleMap
        id="map"
        mapContainerStyle={{ width: "100%", height: "500px" }}
        zoom={16}
        center={arauca}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <p>Direccion</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default MapGeolocalizacion;

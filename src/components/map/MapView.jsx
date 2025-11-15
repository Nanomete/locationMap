import React from "react";
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layers from "./Layers";

const MapView = () => {
  const centerSetDefault = [14, 100];
  return (
    <div className="flex-1 bg-green-300">
      <MapContainer
        className="h-full"
        center={centerSetDefault}
        zoom={13}
        // scrollWheelZoom is to disable zooming with mouse wheel
        scrollWheelZoom={true}
      >
        <Layers />
      </MapContainer>
    </div>
  );
};

export default MapView;

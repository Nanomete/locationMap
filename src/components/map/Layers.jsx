import React from "react";
import { LayersControl, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Layers = () => {
  return (
    <LayersControl position="bottomleft">
      {/* basemap 1 */}
      <LayersControl.BaseLayer name="OSM" checked={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>

      {/* basemap 2 */}
      <LayersControl.BaseLayer name="WorldImagery" checked={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
      </LayersControl.BaseLayer>

    {/* LOcation ปักหมุด */}
      <LayersControl.Overlay name="TEST" checked={true}>
        <Marker position={[14.02, 99.978]}></Marker>
      </LayersControl.Overlay>
    </LayersControl>
  );
};

export default Layers;

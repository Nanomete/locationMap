import React from "react";
import { MapContainer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layers from "./Layers";

const ClickToAdd = (props) => {
  const { adding, onPick } = props;
  useMapEvents({
    /**
     * function สำหรับ event click บนแผนที่
     * @param e
     * e คือ api จาก lib react-leaf โดย e เป็น obj
     */
    click(e) {
      if (adding) onPick(e.latlng.lat, e.latlng.lng);
      // // func สำหรับกดคลิกแล้วจะไปตามจุดที่ต้องการ
      // map.flyTo(e.latlng, 18)
    },
  });
  return;
};

const MapView = (props) => {
  const { adding, onPick } = props;
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

        <ClickToAdd adding={adding} onPick={onPick} />
      </MapContainer>
    </div>
  );
};

export default MapView;

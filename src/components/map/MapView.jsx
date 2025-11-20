import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  Tooltip,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layers from "./Layers";
import useDutyStore from "../../store/useDutyStore";

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
  const locations = useDutyStore((s) => s.locations);
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

        {locations.map((item) => {
          return (
            <Marker key={item.id} position={[item.lat, item.lng]}>
              <Popup>
                <div className="text-sm">{item.name}</div>
              </Popup>
              <Tooltip direction="center">
                <div className="text-sm">
                  {item.name}
                  <div className="text-sm text-gray-500">
                    {item.lat}, {item.lng}
                  </div>
                </div>
              </Tooltip>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapView;

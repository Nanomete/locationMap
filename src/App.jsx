import React, { useEffect, useState } from "react";
import PersonalList from "./components/people/PersonalList";
import Header from "./components/layout/Header";
import MapView from "./components/map/MapView";
import LocationList from "./components/locations/LocationList";
// import axios from 'axios'
import useDutyStore from "./store/useDutyStore";
import AddLocationModal from "./components/locations/AddLocationModal";

function App() {
  // js
  // useState
  const [adding, setAdding] = useState(false);
  const [pending, setPending] = useState(null);

  // นำเข้ามาเพื่อโหลดข้อมูลให้ component ลูกแสดงข้อมูลจาก API ได้
  const fetchAll = useDutyStore((state) => {
    return state.fetchAll;
  });
  useEffect(() => {
    // fn body
    fetchAll();
  }, []);

  const onPick = (lat, lng) => {
    setPending({
      lat: lat,
      lng: lng,
    });
  };
  console.log(pending);

  // html
  return (
    <div className="flex h-screen bg-gray-300">
      <PersonalList />
      <div className="flex flex-col flex-1">
        <Header adding={adding} setAdding={setAdding} />

        <div className="flex flex-1 overflow-hidden">
          <MapView adding={adding} onPick={onPick} />
          <LocationList />
        </div>
      </div>

      {pending && (
        <AddLocationModal
          lat={pending.lat}
          lng={pending.lng}
          setAdding={setAdding}
          setPending={setPending}
        />
      )}
    </div>
  );
}

export default App;

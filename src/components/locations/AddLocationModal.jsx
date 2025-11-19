import React, { useState } from "react";
import useDutyStore from "../../store/useDutyStore";

const AddLocationModal = (props) => {
  const { lat, lng, setAdding, setPending } = props;
  // js
  const [name, setName] = useState("");

  const addLocation = useDutyStore((s) => s.addLocation)

  const hldAddLocation = async() => {
    await addLocation(lat, lng, name)
    setAdding(false)
    setPending(null)
  }

  const hdlCancel = () => {
    setAdding(false)
    setPending(null)
  }

  return (
    // top:0 le
    <div
      className="fixed inset-0 bg-black/50 flex 
      items-center justify-center z-[9999]"
    >
      <div
        className="bg-white p-6 rounded-2xl 
      shadow-2xl w-96"
      >
        <h3
          className="text-lg 
        mb-2"
        >
          เพิ่มจุดเข้าเวรใหม่
        </h3>
        <div className="text-gray-700">
          lat: {lat.toFixed(6)}, lng: {lng.toFixed(6)}
        </div>
        <input
          type="text"
          className="w-full border px-4 py-2 border-gray-400
          rounded-md mb-4 focus:outline-none
          focus:ring-blue-300 focus:ring-2"
          placeholder="Input Name"
          autoFocus
          // e รับ event ของ input นี้
          onChange={(e) => setName(e.target.value)}
        />

        <div className="flex gap-4 justify-end items-center">
          <button
            className="bg-amber-400 border border-gray-400 
          rounded-md w-20 h-9 shadow-2xl hover:bg-amber-500
          disabled:cursor-not-allowed"
            onClick={hldAddLocation}
            disabled={!name.trim()}
          >
            Save
          </button>
          <button
            className="bg-white border border-gray-400 
          rounded-md w-20 h-9 shadow-2xl 
          hover:bg-gray-500"
            onClick={hdlCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLocationModal;

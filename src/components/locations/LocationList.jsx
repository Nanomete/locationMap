import { MapPin, Trash2 } from "lucide-react";
import React from "react";
import useDutyStore from "../../store/useDutyStore";

const LocationList = () => {
  // js
  const locations = useDutyStore((state) => {
    return state.locations;
  });
  console.log(locations);

  return (
    <div className="w-80 bg-white border-l shadow-lg border-gray-400">
      {/* Title ของ 'จุดเข้าเวร' */}
      <div className="p-6 border-b border-gray-200 bg-purple-100">
        <div className="flex gap-4 items-center">
          <MapPin className="text-purple-500" />
          <h2 className="text-2xl font-semibold">จุดเข้าเวร</h2>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* Loop */}
        {locations.map((items) => {
          return (
            <div
              className="border-2 border-dashed rounded-md
         border-gray-400 bg-gray-100" key={items.id}
            >
              <div className="flex justify-between p-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">
                    {items.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    ... / {items.maxCapacity}
                  </p>
                </div>

                <button
                  className="text-red-500
             hover:bg-red-100 rounded-md p-2"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocationList;

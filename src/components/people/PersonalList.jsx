import React from "react";
import useDutyStore from "../../store/useDutyStore";
import { Clock, User } from "lucide-react";

const PersonalList = () => {
  // zustand store
  const personnel = useDutyStore((state) => {
    return state.personnel;
  });
  // console.log(personnel);

  const onDragStart = (e, personId) => {
    // console.log(e, personId)
    e.dataTransfer.setData('text/plain', personId)
  }

  return (
    <div className="w-80 bg-white overflow-y-auto">
      {/* text label header of personal list */}
      <div className="p-6 border-b border-gray-400">
        <div className="flex item-canter gap-3 mb-2">
          {/* icon */}
          <User className="text-blue-500" size={28} />
          {/* text */}
          <h2 className="text-2xl font-bold text-gray-800">
            รายชื่อเจ้าหน้าที่
          </h2>
        </div>
        {/* text */}
        <p className="text-sm text-gray-500">ลากไปยังจุด</p>
      </div>

      {/* item list of personnel list 
      card of list*/}
      <div className="p-2 space-y-1">
        {personnel.map((item) => {
          return (
            <div
              key={item.id}
              draggable
              onDragStart={(e)=> onDragStart(e, item.id)}
              className="flex items-center gap-3 p-3 bg-blue-100 border border-blue-300
        rounded-lg cursor-move hover:shadow-md hover:scale-105"
            >
              <div className="text-3xl">{item.avatar}</div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800">{item.name}</div>
                <div className="text-xs text-gray-500">{item.position}</div>
              </div>
              <div className="text-gray-400">
                <Clock />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalList;

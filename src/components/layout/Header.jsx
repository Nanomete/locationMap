import { Plus, X } from "lucide-react";
import React from "react";

const Header = (props) => {
  const { adding, setAdding } = props;
  // console.log(adding);

  return (
    <div className="p-4 bg-gray-100 shadow-md border border-gray-400">
      <div className="flex justify-between">
        <h2
          className="text-2xl 
        font-semibold text-gray-700"
        >
          ระบบจัดการเวรประจำจุด
        </h2>

        <button
          onClick={() => {
            setAdding((prev) => {
              return !prev;
            });
          }}
          className={`flex items-center gap-2 p-2 rounded-md
            ${
              adding
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
        >
          {/* จัดการการแสดงผลของปุ่ม */}
          {adding ? (
            <>
              <X size={30} /> ยกเลิก{" "}
            </>
          ) : (
            <>
              <Plus size={30} /> เพิ่มจุดเข้าเวร{" "}
            </>
          )}
        </button>

      </div>

      {adding && (
        <div
          className="mt-2 text-sm text-amber-600 bg-amber-100 
        p-3 rounded-lg border"
        >
          คลิกบนแผนที่เพิ่มตำแหน่งเข้าเวร
        </div>
      )}
      {/* ข้างหน้าเป็น true จะไปทำข้างหลัง */}

    </div>
  );
};

export default Header;

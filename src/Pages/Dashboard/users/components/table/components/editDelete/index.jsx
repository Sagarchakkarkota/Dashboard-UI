import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

const EditDelete = ({ row, handleDelete, handleEdit }) => {
  const [showItem, setShowItem] = useState(false);
  const [popOverSelectedId, setPopOverSelectedId] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => {
          setShowItem(!showItem);
          setPopOverSelectedId(row.original.id);
        }}
      >
        <HiDotsVertical />
      </button>
      {showItem && row.original.id === popOverSelectedId && (
        <div className=" p-2 bg-primary_color rounded-xl z-10 absolute top-6 right-0 flex justify-center   ">
          <div className="px-2 py-1 ">
            <button
              className="bg-gray-700 text-white popupIcon"
              onClick={() => {
                handleEdit(row.original);
                setShowItem(false);
              }}
            >
              <FaRegEdit />
            </button>
            <p className="textCenter text-white">Edit</p>
          </div>
          <div className="px-2 py-1  ">
            <button
              className="popupIcon bg-red-500 text-white"
              onClick={() => {
                handleDelete(row.original.id);
                setShowItem(false);
              }}
            >
              <AiTwotoneDelete />
            </button>

            <p className="textCenter text-white">Delete</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditDelete;

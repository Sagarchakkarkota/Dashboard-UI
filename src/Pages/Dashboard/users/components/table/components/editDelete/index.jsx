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
        <div className="py-2 bg-gray-400 rounded-xl z-10 absolute top-6 right-0 flex justify-center  ">
          <button
            className="p-2 m-1 bg-gray-700 text-white  rounded-md"
            onClick={() => {
              handleEdit(row.original);
              setShowItem(false);
            }}
          >
            <FaRegEdit />
          </button>
          <button
            className="p-2 m-1 bg-gray-700 text-white  rounded-md"
            onClick={() => {
              handleDelete(row.original.id);
              setShowItem(false);
            }}
          >
            <AiTwotoneDelete />
          </button>
        </div>
      )}
    </div>
  );
};

export default EditDelete;

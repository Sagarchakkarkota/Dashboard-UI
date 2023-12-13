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
        <div className=" py-2 bg-gray-500 rounded-xl z-10 absolute top-6 right-0 flex justify-center  ">
          <div className="p-2 m-1  ">
            <button
              className="w-full p-2 m-1 bg-gray-700 text-white flex justify-center rounded-md"
              onClick={() => {
                handleEdit(row.original);
                setShowItem(false);
              }}
            >
              <FaRegEdit />
            </button>
            <p className="w-full flex justify-center text-white">Edit</p>
          </div>
          <div className="p-2 m-1 ">
            <button
              className="w-full p-2 m-1 bg-red-500 text-white flex justify-center rounded-md"
              onClick={() => {
                handleDelete(row.original.id);
                setShowItem(false);
              }}
            >
              <AiTwotoneDelete />
            </button>

            <p className="w-full flex justify-center text-white">Delete</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditDelete;

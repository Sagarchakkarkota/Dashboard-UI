import React from "react";
import toast from "react-hot-toast";
import { IoCloseOutline } from "react-icons/io5";

const Toast = ({ message }) => {
  return (
    <div className=" flex justify-between">
      <p className="px-2">{message}</p>
      <button onClick={() => toast.dismiss()} className="text-red-500">
        <IoCloseOutline />
      </button>
    </div>
  );
};

export default Toast;

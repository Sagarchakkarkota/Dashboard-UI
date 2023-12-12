import { useState } from "react";
import { dataList } from "../ulitily";

const useGetUsers = () => {
  const [updatedData, setUpdatedData] = useState(dataList);
  const [isOpen, setIsOpen] = useState(false);
  const [editValue, setEditValue] = useState(false);
  const [editmodalShow, setEditmodalShow] = useState(false);
  return {
    isOpen,
    setIsOpen,
    updatedData,
    setUpdatedData,
    editValue,
    setEditValue,
    editmodalShow,
    setEditmodalShow,
  };
};

export default useGetUsers;

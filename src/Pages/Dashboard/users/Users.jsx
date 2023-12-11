import { useState } from "react";
import SideBar from "../../../components/sidebar/SideBar";
import AddModal from "./components/addmodal/Modals/addModal/addModal";
import Table from "./components/table";
import { dataList } from "./ulitily";

const Users = () => {
  const [updatedData, setUpdatedData] = useState(dataList);
  const [isOpen, setIsOpen] = useState(false);
  const [editValue, setEditValue] = useState(false);
  const handleEdit = (value) => {
    console.log(value);
    setIsOpen(true);
    setEditValue(value);
  };
  return (
    <div className="flex lg:h-screen  bg-background_white w-full text-text_gray">
      <div className="flex w-full ">
        <SideBar />
        <div className="w-full">
          <Table updatedData={updatedData} handleEdit={handleEdit} />
          <div>
            <button
              className="cursor-pointer bg-primary_color p-2 rounded-md text-background_white active:bg-[#4b436b]"
              onClick={() => setIsOpen(true)}
            >
              Add Members
            </button>
            {isOpen && (
              <AddModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setUpdatedData={setUpdatedData}
                updatedData={updatedData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;

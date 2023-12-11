import { useState } from "react";
import SideBar from "../../../components/sidebar/SideBar";
import AddModal from "./components/addModal";
import Table from "./components/table";
import { dataList } from "./ulitily";
import EditModal from "./components/editModal/index";
const Users = () => {
  const [updatedData, setUpdatedData] = useState(dataList);
  const [isOpen, setIsOpen] = useState(false);
  const [editValue, setEditValue] = useState(false);
  const [editmodalShow, setEditmodalShow] = useState(false);

  const handleEdit = (value) => {
    setEditValue(value);
    setEditmodalShow(true);
  };

  const handleDelete = (id) => {
    const newData = updatedData.filter((item) => item.id !== id);
    setUpdatedData(newData);
  };
  return (
    <div className="flex lg:h-screen  bg-background_white w-full text-text_gray">
      <div className="flex w-full ">
        <SideBar />
        <div className="w-full">
          <Table
            updatedData={updatedData}
            handleEdit={handleEdit}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleDelete={handleDelete}
          />
          <div>
            {isOpen && !editmodalShow && (
              <AddModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setUpdatedData={setUpdatedData}
                updatedData={updatedData}
              />
            )}

            {editmodalShow && (
              <EditModal
                editmodalShow={editmodalShow}
                setEditmodalShow={setEditmodalShow}
                editValue={editValue}
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

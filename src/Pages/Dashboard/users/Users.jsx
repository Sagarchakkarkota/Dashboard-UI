import SideBar from "../../../components/sidebar/SideBar";
import AddModal from "./components/addModal";
import UserPage from "./components/table";
import EditModal from "./components/editModal/index";
import useGetUsers from "./hooks/useGetUsers";
import toast from "react-hot-toast";
const Users = () => {
  const {
    isOpen,
    setIsOpen,
    updatedData,
    setUpdatedData,
    editValue,
    setEditValue,
    editmodalShow,
    setEditmodalShow,
  } = useGetUsers();

  const handleEdit = (value) => {
    setEditValue(value);
    setEditmodalShow(true);
  };

  const handleDelete = (id) => {
    const newData = updatedData.filter((item) => item.id !== id);
    setUpdatedData(newData);
    toast.success("Deleted User Successfully", {
      duration: 4000,
      position: "bottom-right",
    });
  };
  return (
    <div className="flex lg:h-screen  bg-background_white w-full text-text_gray">
      <div className="flex w-full ">
        <SideBar />
        <div className="w-full">
          <UserPage
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

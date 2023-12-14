import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import UseForm from "../components/userForm";
import { IoCloseOutline } from "react-icons/io5";

export default function AddUserForm({
  isOpen,
  setIsOpen,
  updatedData,
  setUpdatedData,
}) {
  function closeModal() {
    setIsOpen(false);
  }
  const { reset } = useForm();

  const photoUrlConverter = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const photoReader = reader.result;
        resolve(photoReader);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const onSubmit = async (value) => {
    if (value.photo[0]) {
      const photoUrl = await photoUrlConverter(value.photo[0]);
      value = { ...value, photo: photoUrl };
    }
    const ExsistingUsers = updatedData.some((item) => {
      return item.username.toLowerCase() == value.username.toLowerCase();
    });
    if (ExsistingUsers) {
      toast.error("Userame already exists", {
        duration: 4000,
        position: "bottom-right",
      });
    } else {
      setUpdatedData([value, ...updatedData]);
      toast.success(
        <div className=" flex justify-between">
          <p className="px-2">New Member Added Successfully</p>
          <button onClick={() => toast.dismiss()} className="text-red-500">
            <IoCloseOutline />
          </button>
        </div>,
        {
          duration: 8000,
          position: "bottom-left",
        }
      );
      reset();
      closeModal();
    }
  };
  return (
    <>
      <UseForm
        onSubmit={onSubmit}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
      />
    </>
  );
}

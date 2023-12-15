import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import UseForm from "../components/userForm";
import { IoCloseOutline } from "react-icons/io5";
import Toast from "src/UI/toast";

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
      toast.error(<Toast message={"Userame already exists"} />);
    } else {
      setUpdatedData([value, ...updatedData]);
      toast.success(<Toast message={"New Member Added Successfully"} />);
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
